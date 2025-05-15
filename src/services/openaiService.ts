
// Service to handle OpenAI API calls
import { toast } from "sonner";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const API_URL = "https://api.openai.com/v1/chat/completions";

export const fetchGptResponse = async (messages: any[]): Promise<string> => {
  if (!API_KEY) {
    toast.error("OpenAI API key is missing. Please set the VITE_OPENAI_API_KEY environment variable.");
    return "I'm sorry, I can't process your request right now due to a configuration issue. Please try again later.";
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenAI API Error:", errorData);
      throw new Error(errorData.error?.message || "Failed to get response from OpenAI");
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching response from OpenAI:", error);
    toast.error("Failed to get a response. Please try again.");
    return "I'm sorry, I encountered an error while processing your request. Please try again later.";
  }
};

// Generate career-specific system prompt
export const generateSystemPrompt = () => {
  return {
    role: "system",
    content: `You are CareerBot, an expert AI assistant specializing in career guidance for students after 10th grade in India.
    
    Your knowledge includes:
    - All educational streams (Science, Commerce, Arts/Humanities)  
    - Entrance exams and their preparation strategies
    - College/university options and admission processes
    - Career paths and job opportunities
    - Specialized courses, certifications, and skill requirements
    - Salary ranges and growth prospects in various fields
    
    When responding to students:
    1. Provide comprehensive, accurate information
    2. Format your responses with clear headings, bullet points, and sections
    3. Include relevant details like timelines, fees, and qualification requirements
    4. Be supportive, encouraging, and practical in your advice
    5. If you don't know something specific, acknowledge it and provide general guidance
    
    Your primary goal is to help students make informed decisions about their educational and career pathways.`
  };
};
