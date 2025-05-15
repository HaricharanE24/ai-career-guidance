
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Search, GraduationCap, Briefcase, BookOpen, Trophy, BookCheck, Code, Lightbulb, Globe, Heart, Calculator, Palette, MapPin, Link as LinkIcon, List, Info } from "lucide-react";

const CareerPaths = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter paths based on search query
  const filterPaths = (paths: any[]) => {
    if (!searchQuery) return paths;
    return paths.filter(path => 
      path.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      path.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="container py-8 md:py-12">
      {/* Page Header */}
      <div className="space-y-4 text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-blue-700">
          Career Paths After 10th Grade
        </h1>
        <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
          Explore all possible career options from after 10th grade to getting a job. Find detailed information
          about education requirements, skills needed, and job opportunities.
        </p>
      </div>

      {/* Search */}
      <div className="flex w-full max-w-xl mx-auto mb-10 items-center space-x-2">
        <Input
          type="search"
          placeholder="Search career paths..."
          className="flex-1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type="submit" className="bg-brand-blue-500 hover:bg-brand-blue-600">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Tabs for different categories */}
      <Tabs defaultValue="all" className="w-full mb-8">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full max-w-3xl">
            <TabsTrigger value="all">All Paths</TabsTrigger>
            <TabsTrigger value="after-10th">After 10th</TabsTrigger>
            <TabsTrigger value="after-12th">After 12th</TabsTrigger>
            <TabsTrigger value="higher-education">Higher Education</TabsTrigger>
          </TabsList>
        </div>
        
        {/* All Paths */}
        <TabsContent value="all">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filterPaths([...after10thPaths, ...after12thPaths, ...higherEducationPaths]).map((path, index) => (
              <CareerPathCard key={index} path={path} />
            ))}
          </div>
          {filterPaths([...after10thPaths, ...after12thPaths, ...higherEducationPaths]).length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No career paths found matching your search.</p>
            </div>
          )}
        </TabsContent>
        
        {/* After 10th Paths */}
        <TabsContent value="after-10th">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filterPaths(after10thPaths).map((path, index) => (
              <CareerPathCard key={index} path={path} />
            ))}
          </div>
          {filterPaths(after10thPaths).length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No career paths found matching your search.</p>
            </div>
          )}
        </TabsContent>
        
        {/* After 12th Paths */}
        <TabsContent value="after-12th">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filterPaths(after12thPaths).map((path, index) => (
              <CareerPathCard key={index} path={path} />
            ))}
          </div>
          {filterPaths(after12thPaths).length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No career paths found matching your search.</p>
            </div>
          )}
        </TabsContent>
        
        {/* Higher Education Paths */}
        <TabsContent value="higher-education">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filterPaths(higherEducationPaths).map((path, index) => (
              <CareerPathCard key={index} path={path} />
            ))}
          </div>
          {filterPaths(higherEducationPaths).length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No career paths found matching your search.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
      
      {/* Find Your Path CTA */}
      <div className="bg-brand-blue-50 rounded-lg p-6 md:p-8 mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-3 text-brand-blue-700">Not Sure Which Path Is Right For You?</h2>
        <p className="text-muted-foreground mb-6">
          Take our assessment to get personalized career recommendations based on your interests and aptitude.
        </p>
        <Button asChild size="lg" className="bg-brand-blue-500 hover:bg-brand-blue-600">
          <Link to="/assessment">Find Your Perfect Career Path</Link>
        </Button>
      </div>
    </div>
  );
};

// Career Path Card Component
const CareerPathCard = ({ path }: { path: any }) => {
  return (
    <Link
      to={`/career-paths/${path.id}`}
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
  );
};

// Career paths data
const after10thPaths = [
  {
    id: "science-pcm",
    title: "Science Stream (PCM)",
    description: "Physics, Chemistry, and Mathematics - Ideal for students interested in engineering, technology, research, and innovation. Opens doors to IITs, NITs, and prestigious engineering colleges.",
    icon: Calculator
  },
  {
    id: "science-pcb",
    title: "Science Stream (PCB)",
    description: "Physics, Chemistry, and Biology - Perfect for aspiring doctors, healthcare professionals, and researchers in life sciences. Gateway to MBBS, BDS, pharmacy, and biotechnology.",
    icon: Heart
  },
  {
    id: "commerce",
    title: "Commerce Stream",
    description: "Study accounting, business, economics, and finance. Ideal for future entrepreneurs, accountants, financial analysts, and business leaders. Pathway to CA, CS, MBA, and banking careers.",
    icon: Briefcase
  },
  {
    id: "arts",
    title: "Arts/Humanities",
    description: "Explore literature, history, psychology, sociology, and political science. Great for future lawyers, journalists, civil servants, educators, and social scientists.",
    icon: BookOpen
  },
  {
    id: "diploma-engineering",
    title: "Diploma in Engineering",
    description: "3-year hands-on technical program offering practical skills in various engineering fields. Direct path to industry or lateral entry to B.Tech programs.",
    icon: Code
  },
  {
    id: "iti",
    title: "ITI Courses",
    description: "Industrial Training Institute programs focusing on practical skills in electrical, mechanical, and other trades. Quick entry into skilled workforce with good employment prospects.",
    icon: Trophy
  },
  {
    id: "vocational",
    title: "Vocational Courses",
    description: "Skill-based education in hospitality, healthcare, beauty, retail, and more. Perfect for quick career start with industry-relevant certifications.",
    icon: BookCheck
  },
  {
    id: "polytechnic",
    title: "Polytechnic Diploma",
    description: "Industry-focused technical education with emphasis on practical skills in engineering, technology, and applied sciences. Provides direct job opportunities or pathway to higher education.",
    icon: Code
  },
  {
    id: "open-schooling",
    title: "Open Schooling (NIOS)",
    description: "Flexible education system allowing students to study at their own pace. Ideal for those who want to pursue vocational training alongside academic subjects or cannot attend regular school.",
    icon: BookOpen
  }
];

const after12thPaths = [
  {
    id: "engineering",
    title: "Engineering",
    description: "4-year B.Tech/BE programs in computer science, mechanical, electrical, and more. High-demand career with excellent pay and global opportunities. Preparation for JEE and other entrance exams required.",
    icon: Code
  },
  {
    id: "medical",
    title: "Medical & Healthcare",
    description: "MBBS, BDS, BAMS, nursing programs for healthcare careers. Long-term commitment with rewarding patient care opportunities. NEET qualification required for medical programs.",
    icon: Heart
  },
  {
    id: "business",
    title: "Business & Management",
    description: "BBA, B.Com, BMS programs for business careers. Learn management, finance, marketing, and entrepreneurship. Gateway to MBA and professional certifications like CA/CS.",
    icon: Briefcase
  },
  {
    id: "arts-design",
    title: "Arts & Design",
    description: "Creative programs in fine arts, graphic design, animation, fashion, and architecture. Blend creativity with technology for modern design careers. Portfolio development important.",
    icon: Palette
  },
  {
    id: "law",
    title: "Law",
    description: "5-year integrated or 3-year LLB programs. Career in corporate law, litigation, or judiciary. CLAT or other law entrance exams required. Strong analytical and communication skills needed.",
    icon: BookOpen
  },
  {
    id: "hotel-management",
    title: "Hotel Management",
    description: "3-4 year programs in hospitality management. Career in hotels, restaurants, cruise ships, and tourism. Combines business skills with hospitality expertise. Good communication skills essential.",
    icon: Globe
  },
  {
    id: "government-exams",
    title: "Government Exams",
    description: "Preparation for UPSC, SSC, Banking, and other public sector opportunities. Secure government jobs with good benefits and stability. Requires dedicated preparation and current affairs knowledge.",
    icon: BookCheck
  },
  {
    id: "journalism",
    title: "Journalism & Mass Communication",
    description: "Study media, communication, reporting, and digital content creation. Career in news reporting, content writing, social media management, and public relations. Strong communication skills required.",
    icon: BookOpen
  },
  {
    id: "agriculture",
    title: "Agricultural Sciences",
    description: "Programs in agricultural science, horticulture, forestry, and food technology. Career opportunities in farming, research, extension services, and agribusiness. Growing sector with innovative technologies.",
    icon: MapPin
  },
  {
    id: "aviation",
    title: "Aviation",
    description: "Training programs for pilots, cabin crew, ground staff, and aviation management. Exciting career with travel opportunities and good compensation. High standards of physical and mental fitness required.",
    icon: LinkIcon
  }
];

const higherEducationPaths = [
  {
    id: "masters",
    title: "Master's Degrees",
    description: "2-3 year advanced programs like M.Tech, MSc, MA, MCom. Specialized knowledge and research opportunities. Better positions and higher pay scale. Entrance exams like GATE, NET required.",
    icon: GraduationCap
  },
  {
    id: "phd",
    title: "Doctoral Programs",
    description: "3-5 year PhD programs for research expertise. Career in academia, R&D, or specialized industry roles. Publication opportunities and research funding available. NET/JRF qualification beneficial.",
    icon: Lightbulb
  },
  {
    id: "mba",
    title: "MBA & Business",
    description: "2-year management programs post-graduation. Career growth in corporate leadership roles. CAT, XAT, or GMAT preparation required. Strong work experience valuable.",
    icon: Briefcase
  },
  {
    id: "certifications",
    title: "Professional Certifications",
    description: "Short-term industry certifications in IT, finance, marketing. Quick skill upgrades for career advancement. Flexible learning options and industry recognition. Regular updates needed to stay current.",
    icon: BookCheck
  },
  {
    id: "study-abroad",
    title: "Foreign Education",
    description: "Study abroad for undergraduate or postgraduate programs. Global exposure and international career opportunities. GRE, GMAT, IELTS/TOEFL required. Significant financial planning needed.",
    icon: Globe
  },
  {
    id: "fellowship",
    title: "Fellowships & Research",
    description: "Competitive programs offering research experience with stipend. Work alongside experts to solve real-world problems. Develop specialized knowledge and high-level skills. Excellent pathway to academia.",
    icon: Lightbulb
  },
  {
    id: "executive-education",
    title: "Executive Education",
    description: "Short-term specialized programs for working professionals. Focus on leadership, management, and emerging industry trends. Flexible schedule designed for career advancement while working.",
    icon: List
  },
  {
    id: "online-education",
    title: "Online Learning",
    description: "Flexible remote education options through MOOCs, online degrees, and microcredentials. Learn at your own pace while balancing other commitments. Growing recognition from employers worldwide.",
    icon: BookOpen
  }
];

export default CareerPaths;
