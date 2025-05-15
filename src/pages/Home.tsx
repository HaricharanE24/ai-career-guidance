import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Search, MessageSquare, GraduationCap, Trophy, BookCheck, Briefcase } from "lucide-react";
import CareerFlowChart from "@/components/career-path/CareerFlowChart";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-brand-blue-50 to-brand-blue-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-blue-700">
                Find Your Perfect Career Path After 10th
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Explore all possible career options after 10th standard. Get personalized recommendations 
                based on your interests and skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild size="lg" className="bg-brand-blue-500 hover:bg-brand-blue-600">
                  <Link to="/assessment">
                    <Search className="mr-2 h-4 w-4" />
                    Find Your Path
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/career-paths">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explore All Paths
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-full max-w-md rounded-2xl overflow-hidden bg-white shadow-xl">
                <div className="aspect-video bg-brand-blue-500 flex items-center justify-center">
                  <GraduationCap className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter text-brand-blue-600">How CareerCompass Works</h2>
            <p className="mt-2 text-muted-foreground">Three simple steps to discover your ideal career path</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-brand-blue-100 flex items-center justify-center text-brand-blue-500 mb-2">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Assess Your Interests</h3>
              <p className="text-muted-foreground">Take our quick assessment to identify your strengths and interests.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-brand-blue-100 flex items-center justify-center text-brand-blue-500 mb-2">
                <BookCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Explore Recommendations</h3>
              <p className="text-muted-foreground">Get personalized career path recommendations based on your profile.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-brand-blue-100 flex items-center justify-center text-brand-blue-500 mb-2">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Plan Your Journey</h3>
              <p className="text-muted-foreground">Get detailed guidance about education, skills, and job opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Paths */}
      <section className="py-12 md:py-16 bg-brand-blue-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter text-brand-blue-600">Popular Career Paths</h2>
            <p className="mt-2 text-muted-foreground">Explore some of the most sought-after career options after 10th</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPaths.map((path, index) => (
              <Link 
                key={index}
                to={path.link}
                className="group bg-white rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <div className="aspect-video bg-brand-blue-100 flex items-center justify-center">
                  <path.icon className="h-12 w-12 text-brand-blue-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-xl group-hover:text-brand-blue-500">{path.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{path.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/career-paths">View All Career Paths</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Chatbot Preview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-brand-blue-600">
                Have Questions? Ask CareerBot
              </h2>
              <p className="text-muted-foreground">
                Our AI-powered career guidance assistant can answer your questions about courses, exams, 
                colleges, and career opportunities. Available 24/7 to help you make informed decisions.
              </p>
              <Button asChild className="mt-2 bg-brand-orange-400 hover:bg-brand-orange-500">
                <Link to="/chatbot">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Chat with CareerBot
                </Link>
              </Button>
            </div>
            <div className="bg-white rounded-xl border p-4 shadow-sm">
              <div className="bg-muted p-4 rounded-lg space-y-4">
                <div className="flex gap-2">
                  <div className="bg-brand-blue-100 rounded-full p-2">
                    <MessageSquare className="h-5 w-5 text-brand-blue-500" />
                  </div>
                  <div className="bg-background rounded-lg p-3 text-sm shadow-sm">
                    What are my options after completing 10th grade?
                  </div>
                </div>
                <div className="flex gap-2 flex-row-reverse">
                  <div className="bg-brand-orange-100 rounded-full p-2">
                    <BookCheck className="h-5 w-5 text-brand-orange-500" />
                  </div>
                  <div className="bg-brand-blue-500 text-white rounded-lg p-3 text-sm shadow-sm">
                    After 10th, you can choose between various streams in higher secondary education (Science, Commerce, Arts), 
                    vocational courses, diploma programs, or polytechnic courses. Your choice should align with your interests and future goals.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CareerFlowChart />
    </div>
  );
};

// Featured career paths data
const featuredPaths = [
  {
    title: "Science Stream",
    description: "Pursue careers in engineering, medicine, research, and technology by taking PCM or PCB after 10th.",
    icon: GraduationCap,
    link: "/career-paths/science"
  },
  {
    title: "Commerce Stream",
    description: "Explore careers in business, finance, accounting, and management through commerce education.",
    icon: Briefcase,
    link: "/career-paths/commerce"
  },
  {
    title: "Arts/Humanities",
    description: "Develop careers in law, design, journalism, teaching, and social sciences through arts stream.",
    icon: BookOpen,
    link: "/career-paths/arts"
  },
  {
    title: "Vocational Training",
    description: "Get hands-on skills in various trades and technical fields through vocational education.",
    icon: Trophy,
    link: "/career-paths/vocational"
  },
  {
    title: "Diploma Programs",
    description: "Fast-track your career with specialized diploma programs in engineering, pharmacy, and more.",
    icon: BookCheck,
    link: "/career-paths/diploma"
  },
  {
    title: "Professional Certifications",
    description: "Build industry-recognized skills with professional certification courses in various domains.",
    icon: Search,
    link: "/career-paths/certifications"
  }
];

export default Home;
