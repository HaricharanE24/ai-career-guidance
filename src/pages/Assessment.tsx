import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Search, ArrowRight, ArrowLeft, BookOpen, BookCheck, GraduationCap, Code, Briefcase, Heart, Palette, Calculator, Trophy, Lightbulb } from "lucide-react";

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [results, setResults] = useState<any[]>([]);
  const [hasCompleted, setHasCompleted] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentStep]: answer }));
  };

  const goToNextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    const scores: Record<string, number> = {
      science: 0,
      engineering: 0,
      medical: 0,
      commerce: 0,
      arts: 0,
      design: 0,
      technical: 0,
      vocational: 0,
    };

    Object.entries(answers).forEach(([questionIdx, answer]) => {
      const question = questions[parseInt(questionIdx)];
      const categories = question.categoryMapping[answer];
      
      if (categories) {
        categories.forEach((category: string) => {
          scores[category] = (scores[category] || 0) + 1;
        });
      }
    });

    const sortedResults = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .filter(([_, score]) => score > 0)
      .slice(0, 3)
      .map(([category, _]) => careerRecommendations[category]);

    setResults(sortedResults);
    setHasCompleted(true);
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults([]);
    setHasCompleted(false);
  };

  if (currentStep === 0 && !answers[0]) {
    return (
      <div className="container max-w-4xl py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-blue-700">
            Find Your Ideal Career Path
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Answer a few questions about your interests and preferences to discover career paths that might suit you.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center justify-center mb-6">
              <Search className="h-12 w-12 text-brand-blue-500" />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4">Career Path Assessment</h2>
            <p className="text-center text-muted-foreground mb-6">
              This assessment contains {questions.length - 1} questions about your interests, preferences, and aptitudes. 
              Your answers will help us recommend suitable career paths for you to explore.
            </p>
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-brand-blue-500 hover:bg-brand-blue-600"
                onClick={() => handleAnswer('started')}
              >
                Start Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="bg-muted/40 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">How It Works</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-brand-blue-100 text-brand-blue-500 p-1 mt-0.5">
                <ArrowRight className="h-4 w-4" />
              </div>
              <span>Answer questions about your interests and preferences</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-brand-blue-100 text-brand-blue-500 p-1 mt-0.5">
                <ArrowRight className="h-4 w-4" />
              </div>
              <span>Our system analyzes your responses to identify potential career matches</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-brand-blue-100 text-brand-blue-500 p-1 mt-0.5">
                <ArrowRight className="h-4 w-4" />
              </div>
              <span>Receive personalized career path recommendations with detailed information</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  if (hasCompleted) {
    return (
      <div className="container max-w-4xl py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-brand-blue-700">
            Your Career Path Recommendations
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Based on your responses, here are some career paths that might be a good fit for you.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {results.map((result, index) => (
            <Link key={index} to={result.learnMoreLink} className="block hover:no-underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg group">
              <Card className="overflow-hidden transition-all duration-200 group-hover:shadow-lg group-hover:border-primary">
                <div className="md:flex">
                  <div className="md:w-1/4 bg-brand-blue-100 flex items-center justify-center p-6 transition-colors duration-200 group-hover:bg-brand-blue-200">
                    <result.icon className="h-16 w-16 text-brand-blue-500 transition-transform duration-200 group-hover:scale-110" />
                  </div>
                  <CardContent className="p-6 md:w-3/4">
                    <h2 className="text-2xl font-semibold text-brand-blue-600 mb-2 group-hover:text-brand-blue-700">{result.title}</h2>
                    <p className="text-muted-foreground mb-4">{result.description}</p>
                    <div>
                      <h3 className="font-medium mb-2">Recommended Paths:</h3>
                      <ul className="space-y-1 text-sm">
                        {result.pathOptions.map((option: string, i: number) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="rounded-full bg-brand-blue-100 text-brand-blue-500 p-1">
                              <ArrowRight className="h-3 w-3" />
                            </div>
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* The "Learn More" button is removed as the whole card is a link */}
                    <div className="mt-6">
                        <span className="text-sm font-medium text-brand-blue-500 group-hover:text-brand-blue-600 group-hover:underline">
                          View Details <ArrowRight className="inline-block h-4 w-4 ml-1" />
                        </span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            onClick={resetAssessment}
          >
            Retake Assessment
          </Button>
          <Button
            className="bg-brand-blue-500 hover:bg-brand-blue-600"
            asChild
          >
            <Link to="/career-paths">Explore All Career Paths</Link>
          </Button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep) / (questions.length - 1)) * 100;

  return (
    <div className="container max-w-3xl py-12">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2 text-sm text-muted-foreground">
          <span>Question {currentStep} of {questions.length - 1}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="mb-8">
        <CardContent className="p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-6">{currentQuestion.question}</h2>
          <RadioGroup value={answers[currentStep]} onValueChange={handleAnswer}>
            <div className="space-y-4">
              {currentQuestion.options.map((option, idx) => (
                <div key={idx} className="flex items-start space-x-2 border rounded-md p-4 hover:bg-muted/50">
                  <RadioGroupItem value={option} id={`option-${idx}`} className="mt-1" />
                  <Label htmlFor={`option-${idx}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={goToPreviousStep}
          disabled={currentStep <= 1}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button
          className="bg-brand-blue-500 hover:bg-brand-blue-600"
          onClick={goToNextStep}
          disabled={!answers[currentStep]}
        >
          {currentStep < questions.length - 1 ? 'Next' : 'See Results'}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const questions = [
  {
    question: "Introduction",
    options: ["started"],
    categoryMapping: { started: [] }
  },
  {
    question: "Which subjects do you enjoy the most in school?",
    options: [
      "Mathematics and Physics",
      "Biology and Chemistry",
      "Business Studies and Economics",
      "Languages and Literature",
      "Art and Design"
    ],
    categoryMapping: {
      "Mathematics and Physics": ["science", "engineering", "technical"],
      "Biology and Chemistry": ["science", "medical"],
      "Business Studies and Economics": ["commerce"],
      "Languages and Literature": ["arts"],
      "Art and Design": ["arts", "design"]
    }
  },
  {
    question: "How do you prefer to learn new things?",
    options: [
      "Through practical activities and hands-on experience",
      "Through reading and research",
      "Through solving problems and puzzles",
      "Through creative expression",
      "Through discussions and group work"
    ],
    categoryMapping: {
      "Through practical activities and hands-on experience": ["vocational", "engineering", "medical"],
      "Through reading and research": ["arts", "medical", "science"],
      "Through solving problems and puzzles": ["engineering", "technical", "science"],
      "Through creative expression": ["arts", "design"],
      "Through discussions and group work": ["commerce", "arts"]
    }
  },
  {
    question: "What kind of career impact interests you the most?",
    options: [
      "Creating innovative solutions and technologies",
      "Helping people with their health and wellbeing",
      "Building successful businesses",
      "Contributing to art and culture",
      "Teaching and sharing knowledge"
    ],
    categoryMapping: {
      "Creating innovative solutions and technologies": ["engineering", "technical", "science"],
      "Helping people with their health and wellbeing": ["medical", "science"],
      "Building successful businesses": ["commerce"],
      "Contributing to art and culture": ["arts", "design"],
      "Teaching and sharing knowledge": ["arts", "science"]
    }
  },
  {
    question: "How much time are you willing to invest in education after 10th?",
    options: [
      "1-2 years (Vocational/Certificate courses)",
      "3-4 years (Bachelor's degree)",
      "5-6 years (Bachelor's + Master's)",
      "7+ years (Medical/Research)",
    ],
    categoryMapping: {
      "1-2 years (Vocational/Certificate courses)": ["vocational", "technical"],
      "3-4 years (Bachelor's degree)": ["arts", "commerce", "engineering"],
      "5-6 years (Bachelor's + Master's)": ["engineering", "science"],
      "7+ years (Medical/Research)": ["medical", "science"]
    }
  }
];

const careerRecommendations = {
  science: {
    title: "Science & Research",
    description: "You have an analytical mind with a strong aptitude for understanding scientific concepts and solving complex problems. Science and research fields would be well-suited for your interests.",
    icon: Lightbulb,
    pathOptions: [
      "Science stream (PCM/PCB) in 11th-12th",
      "BSc in Physics, Chemistry, or Mathematics",
      "Bachelor's in Scientific Research",
      "Career in Research & Development",
      "Data Science & Analytics"
    ],
    learnMoreLink: "/career-paths/science"
  },
  engineering: {
    title: "Engineering & Technology",
    description: "You show strong problem-solving skills and interest in how things work. Engineering fields would leverage your technical aptitude and creative problem-solving abilities.",
    icon: Code,
    pathOptions: [
      "Science stream (PCM) in 11th-12th",
      "Diploma in Engineering after 10th",
      "B.Tech or BE in various engineering disciplines",
      "Software Development & Programming",
      "Product Design & Development"
    ],
    learnMoreLink: "/career-paths/engineering"
  },
  medical: {
    title: "Medical & Healthcare",
    description: "You demonstrate interest in helping others and understanding biological systems. Medical and healthcare fields would be a good match for your compassionate nature and scientific interest.",
    icon: Heart,
    pathOptions: [
      "Science stream (PCB) in 11th-12th",
      "MBBS, BDS, BAMS, or other medical degrees",
      "B.Pharm or D.Pharm in Pharmacy",
      "BSc in Nursing or Allied Health Sciences",
      "Medical Research & Biotechnology"
    ],
    learnMoreLink: "/career-paths/medical"
  },
  commerce: {
    title: "Business & Commerce",
    description: "You show aptitude for understanding financial and business concepts. A career in business, finance, or commerce would suit your analytical and practical mindset.",
    icon: Briefcase,
    pathOptions: [
      "Commerce stream in 11th-12th",
      "BCom, BBA, or related business degrees",
      "Chartered Accountancy, Cost Accounting",
      "MBA or other management programs",
      "Banking, Finance, and Investment"
    ],
    learnMoreLink: "/career-paths/commerce"
  },
  arts: {
    title: "Arts & Humanities",
    description: "You display strong communication skills and interest in human behavior and society. Arts and humanities fields would suit your expressive and analytical abilities.",
    icon: BookOpen,
    pathOptions: [
      "Arts/Humanities stream in 11th-12th",
      "BA in various subjects like Literature, History, Psychology",
      "Law (BA LLB or LLB after graduation)",
      "Mass Communication & Journalism",
      "Education, Social Work, and Public Service"
    ],
    learnMoreLink: "/career-paths/arts"
  },
  design: {
    title: "Creative Arts & Design",
    description: "You have a natural creative flair and visual thinking abilities. A career in design or creative fields would allow you to express your artistic talents.",
    icon: Palette,
    pathOptions: [
      "Arts stream in 11th-12th",
      "Bachelor's in Design (Fashion, Graphic, Interior)",
      "Architecture (after PCM in 12th)",
      "Animation & Multimedia",
      "User Interface & User Experience Design"
    ],
    learnMoreLink: "/career-paths/arts-design"
  },
  technical: {
    title: "Technical & IT Fields",
    description: "You show strong logical thinking and interest in technology. A career in IT, computer science, or other technical fields would suit your analytical abilities.",
    icon: Calculator,
    pathOptions: [
      "Science stream (PCM) or Computer Science in 11th-12th",
      "BCA, BSc IT, or B.Tech in Computer Science",
      "Diploma in Computer Applications",
      "Web Development & Software Engineering",
      "Artificial Intelligence & Machine Learning"
    ],
    learnMoreLink: "/career-paths/technical"
  },
  vocational: {
    title: "Vocational & Skill-Based Careers",
    description: "You have a practical approach and prefer hands-on learning. Vocational and skill-based careers would allow you to use your practical abilities.",
    icon: Trophy,
    pathOptions: [
      "ITI courses after 10th in various trades",
      "Diploma programs in specialized fields",
      "Vocational training in hospitality, beauty, etc.",
      "Entrepreneurship and small business",
      "Sports coaching and physical education"
    ],
    learnMoreLink: "/career-paths/vocational"
  }
};

export default Assessment;
