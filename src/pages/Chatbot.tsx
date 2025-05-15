
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { BookCheck, SendHorizonal, User, AlertCircle, Sparkles, School, BookOpen, GraduationCap, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { fetchGptResponse, generateSystemPrompt } from "@/services/openaiService";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Hello! I'm CareerBot, your AI career guidance assistant. I can help answer your questions about career paths after 10th grade, education options, entrance exams, and job opportunities. What would you like to know?",
    sender: "bot",
    timestamp: new Date()
  }
];

const sampleQuestions = [
  "What are the different streams available after 10th?",
  "Tell me about engineering career paths and entrance exams",
  "What are the career options in medical field?",
  "Explain commerce stream career opportunities and scope",
  "What are the best courses in arts/humanities stream?",
  "Tell me about vocational courses after 10th"
];

// CareerBot component
const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to handle sending messages
  const handleSendMessage = async () => {
    if (!newMessage.trim() || isLoading) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");
    setIsLoading(true);
    
    try {
      // Prepare conversation history for OpenAI
      const systemPrompt = generateSystemPrompt();
      
      const conversationHistory = [
        systemPrompt,
        ...messages
          .slice(-6) // Include only last 6 messages for context
          .map(msg => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.content
          })),
        { role: "user", content: userMessage.content }
      ];
      
      // Get response from OpenAI
      const botResponseText = await fetchGptResponse(conversationHistory);
      
      // Add bot response to chat
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponseText,
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      toast.success("New response from CareerBot!");
    } catch (error) {
      console.error("Error in chat:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSampleQuestion = (question: string) => {
    setNewMessage(question);
    // Focus the input field
    const textareaElement = document.getElementById('chat-input') as HTMLTextAreaElement;
    if (textareaElement) {
      textareaElement.focus();
    }
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="container mx-auto py-6 max-w-5xl">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-brand-blue-600 to-brand-blue-400 bg-clip-text text-transparent">
        Ask CareerBot - Expert Career Guidance
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main chat section */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col shadow-md border-brand-blue-100">
            {/* Message display area */}
            <CardContent className="flex-grow overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id}
                    className={cn(
                      "flex gap-3 p-4 rounded-lg shadow-sm",
                      message.sender === "user" 
                        ? "bg-gradient-to-r from-brand-blue-50 to-brand-blue-100 ml-auto max-w-[80%] border-l-4 border-brand-blue-300" 
                        : "bg-white border border-brand-blue-100 mr-auto max-w-[80%]"
                    )}
                  >
                    <div className={cn(
                      "h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0",
                      message.sender === "user" 
                        ? "bg-brand-blue-100 text-brand-blue-600" 
                        : "bg-brand-orange-100 text-brand-orange-500"
                    )}>
                      {message.sender === "user" ? <User size={16} /> : <Sparkles size={16} />}
                    </div>
                    <div>
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 p-4 rounded-lg bg-white border border-brand-blue-100 mr-auto max-w-[80%] shadow-sm">
                    <div className="h-8 w-8 rounded-full bg-brand-orange-100 text-brand-orange-500 flex items-center justify-center flex-shrink-0">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <div className="flex space-x-2 items-center">
                        <div className="h-2 w-2 bg-brand-blue-400 rounded-full animate-pulse"></div>
                        <div className="h-2 w-2 bg-brand-blue-400 rounded-full animate-pulse delay-150"></div>
                        <div className="h-2 w-2 bg-brand-blue-400 rounded-full animate-pulse delay-300"></div>
                        <span className="text-sm text-muted-foreground ml-1">Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>
            
            {/* Input area */}
            <div className="p-4 border-t border-brand-blue-100 bg-gradient-to-r from-brand-blue-50/50 to-transparent">
              <div className="flex gap-2">
                <Textarea 
                  id="chat-input"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your career question here..."
                  className="flex-grow min-h-[60px] resize-none border-brand-blue-200 focus:border-brand-blue-400 shadow-sm"
                  disabled={isLoading}
                />
                <Button 
                  onClick={handleSendMessage} 
                  className="self-end bg-brand-blue-500 hover:bg-brand-blue-600 text-white"
                  disabled={isLoading || !newMessage.trim()}
                >
                  <SendHorizonal className="h-4 w-4 mr-1" /> Send
                </Button>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Sidebar with sample questions and tips */}
        <div>
          <Card className="border-brand-blue-100 shadow-md">
            <CardContent className="p-4">
              <div className="mb-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3 text-brand-blue-700">
                  <BookCheck className="h-5 w-5 text-brand-blue-500" /> Popular Questions
                </h3>
                <div className="space-y-2">
                  {sampleQuestions.map((question, index) => (
                    <Button 
                      key={index} 
                      variant="outline" 
                      className="w-full justify-start text-left h-auto py-2 border-brand-blue-200 hover:bg-brand-blue-50 hover:border-brand-blue-300"
                      onClick={() => handleSampleQuestion(question)}
                      disabled={isLoading}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-blue-50 to-brand-blue-100 p-4 rounded-lg border border-brand-blue-200">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3 text-brand-blue-700">
                  <AlertCircle className="h-5 w-5 text-brand-blue-500" /> Pro Tips
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2 items-start">
                    <School className="h-4 w-4 mt-0.5 text-brand-blue-500 flex-shrink-0" /> 
                    <span>Ask about specific streams like Engineering, Medical, Commerce, or Arts after 10th</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <BookOpen className="h-4 w-4 mt-0.5 text-brand-blue-500 flex-shrink-0" /> 
                    <span>Get information on entrance exams, eligibility, and preparation strategies</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <GraduationCap className="h-4 w-4 mt-0.5 text-brand-blue-500 flex-shrink-0" /> 
                    <span>Learn about top colleges, course fees, and admission processes</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <Briefcase className="h-4 w-4 mt-0.5 text-brand-blue-500 flex-shrink-0" /> 
                    <span>Explore career options, salary expectations, and growth paths</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p className="mb-2">Note: You'll need to add your OpenAI API key as an environment variable: <code>VITE_OPENAI_API_KEY</code></p>
        <p>CareerBot provides guidance based on general information. Always verify important decisions with certified counselors.</p>
      </div>
    </div>
  );
};

export default Chatbot;
