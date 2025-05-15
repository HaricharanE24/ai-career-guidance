
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { 
  ChevronDown, 
  ChevronRight, 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  FileText, 
  School,
  Book // Added for more specific education nodes
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Define the types for our flow chart data
interface FlowNode {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children?: FlowNode[];
  type?: 'education' | 'exam' | 'job' | 'path' | 'course'; // Added 'course' type
  items?: string[]; // Represents specific courses, roles, or specializations
}

// Expanded flow chart data based on the provided image and common career progressions
const after10thData: FlowNode[] = [
  {
    id: "intermediate",
    title: "Intermediate (10+2)",
    type: "path",
    icon: <School className="h-5 w-5 text-purple-600" />,
    children: [
      {
        id: "mpc",
        title: "MPC Stream",
        description: "Mathematics, Physics, Chemistry",
        type: "education",
        icon: <Book className="h-5 w-5 text-blue-500" />,
        children: [
          {
            id: "be-btech-mpc",
            title: "B.E./B.Tech",
            type: "course",
            icon: <GraduationCap className="h-5 w-5 text-blue-600" />,
            items: ["CSE", "IT", "ECE", "EEE", "Mechanical", "Civil", "Chemical", "Aerospace"],
            children: [
              { id: "engineering-jobs-mpc", title: "Job Opportunities", type: "job", icon: <Briefcase className="h-5 w-5 text-green-500" />, items: ["Software Engineer", "Hardware Engineer", "Data Scientist", "PSUs", "Defense", "Civil Services", "IES", "Project Manager"] },
              { id: "engineering-higher-ed-mpc", title: "Higher Education", type: "education", icon: <GraduationCap className="h-5 w-5 text-blue-600" />, items: ["M.Tech/M.E.", "M.S. (Abroad)", "MBA", "Ph.D", "Research Fellowships"] }
            ]
          },
          {
            id: "b-arch-mpc",
            title: "B.Arch (Architecture)",
            type: "course",
            icon: <GraduationCap className="h-5 w-5 text-blue-600" />,
            children: [
              { id: "m-arch-mpc", title: "M.Arch", type: "education", icon: <GraduationCap className="h-5 w-5 text-blue-600" /> },
              { id: "arch-jobs-mpc", title: "Job Opportunities", type: "job", icon: <Briefcase className="h-5 w-5 text-green-500" />, items: ["Architect", "Urban Planner", "Interior Designer"] }
            ]
          },
          {
            id: "bsc-mpc",
            title: "B.Sc. (Science)",
            type: "course",
            icon: <GraduationCap className="h-5 w-5 text-blue-600" />,
            items: ["Mathematics", "Physics", "Chemistry", "Computer Science", "Statistics"],
            children: [
              { id: "msc-mpc", title: "M.Sc.", type: "education", icon: <GraduationCap className="h-5 w-5 text-blue-600" />, items: ["Respective B.Sc. fields", "Data Science", "Actuarial Science"] },
              { id: "mca-mpc", title: "MCA (Master of Computer Applications)", type: "education", icon: <GraduationCap className="h-5 w-5 text-blue-600" /> },
              { id: "bsc-jobs-mpc", title: "Job Opportunities", type: "job", icon: <Briefcase className="h-5 w-5 text-green-500" />, items: ["Researcher", "Analyst", "Teacher", "IT Sector (after B.Sc. CS)"] }
            ]
          },
          { id: "nda-mpc", title: "NDA (National Defence Academy)", type: "exam", icon: <FileText className="h-5 w-5 text-red-500" /> },
          { id: "integrated-msc-mpc", title: "Integrated M.Sc. Programs", type: "course", icon: <GraduationCap className="h-5 w-5 text-blue-600" />, items: ["Various IITs, NITs, IISERs"] },
        ]
      },
      {
        id: "bipc",
        title: "BiPC Stream",
        description: "Biology, Physics, Chemistry",
        type: "education",
        icon: <Book className="h-5 w-5 text-green-500" />,
        children: [
          {
            id: "medical-bipc",
            title: "Medical Degrees",
            type: "course",
            icon: <GraduationCap className="h-5 w-5 text-green-600" />,
            items: ["MBBS", "BDS (Dental)", "BAMS (Ayurveda)", "BHMS (Homeopathy)", "BUMS (Unani)"],
            children: [
              { id: "medical-higher-ed-bipc", title: "Higher Education/Specialization", type: "education", icon: <GraduationCap className="h-5 w-5 text-green-600" />, items: ["MD/MS", "MDS", "Specialized PG Diplomas"] },
              { id: "medical-jobs-bipc", title: "Job Opportunities", type: "job", icon: <Briefcase className="h-5 w-5 text-teal-500" />, items: ["Doctor", "Dentist", "Specialist Practitioner", "Researcher", "Medical Professor"] }
            ]
          },
          {
            id: "bsc-bipc",
            title: "B.Sc. (Life Sciences & Allied)",
            type: "course",
            icon: <GraduationCap className="h-5 w-5 text-green-600" />,
            items: ["Botany", "Zoology", "Microbiology", "Biotechnology", "Biochemistry", "Genetics", "Nursing", "Agriculture", "Forensic Science", "Fisheries Science"],
            children: [
              { id: "msc-bipc", title: "M.Sc.", type: "education", icon: <GraduationCap className="h-5 w-5 text-green-600" />, items: ["Respective B.Sc. fields", "Specialized Life Science fields"] },
              { id: "bsc-life-sci-jobs-bipc", title: "Job Opportunities", type: "job", icon: <Briefcase className="h-5 w-5 text-teal-500" />, items: ["Researcher", "Lab Technician", "Pharmacist (after B.Pharm)", "Nurse", "Agricultural Scientist"] }
            ]
          },
          {
            id: "paramedical-degree-bipc",
            title: "Paramedical Degrees",
            type: "course",
            icon: <GraduationCap className="h-5 w-5 text-green-600" />,
            items: ["BPT (Physiotherapy)", "B.Pharm", "B.Sc. Medical Lab Technology (MLT)", "B.Sc. Radiology", "B.Sc. Optometry", "BOT (Occupational Therapy)"],
            children: [
              { id: "paramed-higher-ed-bipc", title: "Higher Education", type: "education", icon: <GraduationCap className="h-5 w-5 text-green-600" />, items: ["MPT", "M.Pharm", "M.Sc. in respective fields"] },
              { id: "paramed-jobs-bipc", title: "Job Opportunities", type: "job", icon: <Briefcase className="h-5 w-5 text-teal-500" />, items: ["Physiotherapist", "Pharmacist", "Lab Technologist", "Radiographer", "Optometrist"] }
            ]
          },
          { id: "bvsc-bipc", title: "B.V.Sc & AH (Veterinary Science)", type: "course", icon: <GraduationCap className="h-5 w-5 text-green-600" /> },
        ]
      },
      {
        id: "commerce-stream",
        title: "Commerce Stream (CEC/MEC)",
        description: "Commerce, Economics, Civics / Maths, Economics, Commerce",
        type: "education",
        icon: <BookOpen className="h-5 w-5 text-orange-500" />,
        children: [
          {
            id: "bcom",
            title: "B.Com (Bachelor of Commerce)",
            type: "course",
            icon: <GraduationCap className="h-5 w-5 text-orange-600" />,
            items: ["General", "Honours", "Computers", "Taxation", "Finance"],
            children: [
              { id: "bcom-higher-ed", title: "Higher Education", type: "education", icon: <GraduationCap className="h-5 w-5 text-orange-600" />, items: ["M.Com", "MBA", "CA", "CS", "CMA", "CFA"] },
              { id: "bcom-jobs", title: "Job Opportunities", type: "job", icon: <Briefcase className="h-5 w-5 text-yellow-500" />, items: ["Accountant", "Auditor", "Banker", "Financial Analyst", "Tax Consultant"] }
            ]
          },
          {
            id: "bba-commerce",
            title: "BBA (Bachelor of Business Administration)",
            type: "course",
            icon: <GraduationCap className="h-5 w-5 text-orange-600" />,
            children: [
              { id: "bba-higher-ed", title: "Higher Education", type: "education", icon: <GraduationCap className="h-5 w-5 text-orange-600" />, items: ["MBA"] },
              { id: "bba-jobs", title: "Job Opportunities", type: "job", icon: <Briefcase className="h-5 w-5 text-yellow-500" />, items: ["Management Trainee", "HR Executive", "Marketing Executive", "Business Development"] }
            ]
          },
          {
            id: "ba-econ-commerce",
            title: "B.A. Economics",
            type: "course",
            icon: <GraduationCap className="h-5 w-5 text-orange-600" />,
            children: [
              { id: "ba-econ-higher-ed", title: "Higher Education", type: "education", icon: <GraduationCap className="h-5 w-5 text-orange-600" />, items: ["M.A. Economics", "MBA", "Indian Economic Service (IES)"] },
              { id: "ba-econ-jobs", title: "Job Opportunities", type: "job", icon: <Briefcase className="h-5 w-5 text-yellow-500" />, items: ["Economist", "Data Analyst", "Policy Researcher", "Consultant"] }
            ]
          },
          { id: "law-integrated-commerce", title: "Integrated Law (B.Com LLB, BBA LLB)", type: "course", icon: <GraduationCap className="h-5 w-5 text-orange-600" /> }
        ]
      },
      {
        id: "arts-humanities-stream",
        title: "Arts/Humanities Stream (HEC, etc.)",
        description: "History, Economics, Civics / Political Science, Sociology, Psychology, etc.",
        type: "education",
        icon: <BookOpen className="h-5 w-5 text-pink-500" />,
        children: [
          {
            id: "ba-arts",
            title: "B.A. (Bachelor of Arts)",
            type: "course",
            icon: <GraduationCap className="h-5 w-5 text-pink-600" />,
            items: ["History", "Political Science", "Sociology", "Psychology", "English Literature", "Geography", "Philosophy"],
            children: [
              { id: "ba-higher-ed", title: "Higher Education", type: "education", icon: <GraduationCap className="h-5 w-5 text-pink-600" />, items: ["M.A. (respective subject)", "MSW", "B.Ed", "M.Ed", "Journalism & Mass Comm.", "LLB", "MBA", "Civil Services Prep."] },
              { id: "ba-jobs", title: "Job Opportunities", type: "job", icon: <Briefcase className="h-5 w-5 text-purple-500" />, items: ["Teacher", "Journalist", "Editor", "Social Worker", "Counselor", "HR", "Civil Services", "Archaeologist", "Curator"] }
            ]
          },
          { id: "bfa-arts", title: "BFA (Bachelor of Fine Arts)", type: "course", icon: <GraduationCap className="h-5 w-5 text-pink-600" />, items: ["Painting", "Sculpture", "Applied Arts"] },
          { id: "bjmc-arts", title: "BJMC (Bachelor of Journalism & Mass Communication)", type: "course", icon: <GraduationCap className="h-5 w-5 text-pink-600" /> },
          { id: "bhm-arts", title: "BHM (Bachelor of Hotel Management)", type: "course", icon: <GraduationCap className="h-5 w-5 text-pink-600" /> },
          { id: "law-integrated-arts", title: "Integrated Law (B.A. LLB)", type: "course", icon: <GraduationCap className="h-5 w-5 text-pink-600" /> }
        ]
      }
    ]
  },
  {
    id: "polytechnic",
    title: "Polytechnic Diploma",
    type: "path",
    icon: <GraduationCap className="h-5 w-5 text-green-600" />,
    items: [
      "Civil Engg.", "Mechanical Engg.", "Electrical Engg.", "Electronics & Comm. Engg.", 
      "Computer Engg.", "Automobile Engg.", "Chemical Engg.", "Architecture Asst."
    ],
    children: [
      { id: "poly-jobs", title: "Job Opportunities", type: "job", icon: <Briefcase className="h-5 w-5 text-green-700" />, items: ["Junior Engineer", "Technician", "Supervisor", "Govt. Jobs (Railways, PSUs)"] },
      { id: "poly-higher-ed", title: "Higher Education", type: "education", icon: <GraduationCap className="h-5 w-5 text-green-600" />, items: ["Lateral Entry to B.E./B.Tech (2nd Year)", "AMIE"] }
    ]
  },
  {
    id: "iti",
    title: "ITI (Industrial Training Institute)",
    type: "path",
    icon: <FileText className="h-5 w-5 text-blue-600" />,
    items: [
      "Electrician", "Fitter", "Welder", "Mechanic (Diesel, Motor Vehicle)", 
      "Draughtsman (Civil/Mechanical)", "Computer Operator & Programming Assistant (COPA)"
    ],
    children: [
      { id: "iti-jobs", title: "Job Opportunities", type: "job", icon: <Briefcase className="h-5 w-5 text-blue-700" />, items: ["Technician in various industries", "Self-employment", "Govt. Workshops"] },
      { id: "iti-higher-ed", title: "Further Training/Education", type: "education", icon: <GraduationCap className="h-5 w-5 text-blue-600" />, items: ["Apprenticeship", "Advanced Vocational Training Scheme (AVTS)", "Diploma (Lateral Entry in some states)"] }
    ]
  },
  {
    id: "paramedical-diploma",
    title: "Paramedical Diploma Courses",
    type: "path",
    icon: <Briefcase className="h-5 w-5 text-red-600" />,
    items: [
      "DMLT (Diploma in Medical Lab Technology)", "DMRT (Diploma in Medical Radiography Technology)", 
      "Diploma in Operation Theatre Technology", "Diploma in Dialysis Technology", "Diploma in Optometry"
    ],
    children: [
      { id: "paramed-diploma-jobs", title: "Job Opportunities", type: "job", icon: <Briefcase className="h-5 w-5 text-red-700" />, items: ["Lab Technician", "Radiographer", "OT Technician", "Dialysis Technician", "Optometry Assistant"] },
      { id: "paramed-diploma-higher-ed", title: "Higher Education", type: "education", icon: <GraduationCap className="h-5 w-5 text-red-600" />, items: ["Bachelor's Degree in respective field (Lateral Entry if available)", "Advanced Diplomas"] }
    ]
  },
  {
    id: "vocational-short-term",
    title: "Short-term Vocational Courses",
    type: "path",
    icon: <BookOpen className="h-5 w-5 text-yellow-600" />,
    items: [
      "Fashion Designing", "Interior Designing", "Web Designing", "Animation", 
      "Beauty & Wellness", "Tourism & Hospitality", "Event Management"
    ],
    children: [
      { id: "voc-short-jobs", title: "Job Opportunities/Self-Employment", type: "job", icon: <Briefcase className="h-5 w-5 text-yellow-700" />, items: ["Specific roles in chosen field", "Freelancing", "Entrepreneurship"] },
      { id: "voc-short-further-ed", title: "Further Studies", type: "education", icon: <GraduationCap className="h-5 w-5 text-yellow-600" />, items: ["Advanced Certifications", "Diplomas or Degrees in related fields"] }
    ]
  }
];

// Full data object containing all our flow charts
const flowChartData = {
  "after-10th": {
    title: "Career Pathways After 10th Class",
    rootNodes: after10thData
  },
  "after-12th": { // This can be populated later if needed
    title: "Career Pathways After 12th Class",
    rootNodes: [
       // Example structure, can be built out like after10thData
      {
        id: "science-12th",
        title: "Science Stream (After 12th)",
        type: "path",
        icon: <Book className="h-5 w-5 text-blue-500" />,
        children: [ /* ...detailed nodes for post-12th science... */ ]
      },
      {
        id: "commerce-12th",
        title: "Commerce Stream (After 12th)",
        type: "path",
        icon: <BookOpen className="h-5 w-5 text-orange-500" />,
        children: [ /* ...detailed nodes for post-12th commerce... */ ]
      },
      {
        id: "arts-12th",
        title: "Arts/Humanities Stream (After 12th)",
        type: "path",
        icon: <BookOpen className="h-5 w-5 text-pink-500" />,
        children: [ /* ...detailed nodes for post-12th arts... */ ]
      }
    ]
  },
  "default": {
    title: "Career Progression Path (Starting from 10th)",
    rootNodes: after10thData
  }
};

// FlowNodeComponent to render a single node in the flow chart
const FlowNodeComponent = ({ node, level = 0 }: { node: FlowNode; level?: number }) => {
  const [expanded, setExpanded] = useState(level < 1); // Auto-expand first level
  
  // Background color based on node type
  const getBgColor = () => {
    switch (node.type) {
      case 'education': return 'bg-blue-50 border-blue-200';
      case 'exam': return 'bg-purple-50 border-purple-200';
      case 'job': return 'bg-green-50 border-green-200';
      case 'path': return 'bg-orange-50 border-orange-200';
      case 'course': return 'bg-indigo-50 border-indigo-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };
  
  // Text color based on node type
  const getTextColor = () => {
    switch (node.type) {
      case 'education': return 'text-blue-700';
      case 'exam': return 'text-purple-700';
      case 'job': return 'text-green-700';
      case 'path': return 'text-orange-700';
      case 'course': return 'text-indigo-700';
      default: return 'text-gray-700';
    }
  };
  
  // Decides whether to show expand/collapse controls
  const hasChildren = node.children && node.children.length > 0;
  const hasItems = node.items && node.items.length > 0;
  const isClickable = hasChildren || (hasItems && !expanded); // Clickable if has children OR has items and is not expanded
  
  const toggleExpand = () => {
    if (hasChildren || hasItems) { // Only toggle if there's something to show/hide
        setExpanded(!expanded);
    }
  }

  return (
    <div className="mb-3">
      <div 
        className={cn(
          "border rounded-lg p-3 transition-all", 
          getBgColor(),
          (isClickable) && "cursor-pointer hover:shadow-sm"
        )}
        onClick={toggleExpand}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {node.icon && <div className="flex-shrink-0">{node.icon}</div>}
            <div>
              <h4 className={cn("font-medium", getTextColor())}>{node.title}</h4>
              {node.description && (
                <p className="text-xs text-muted-foreground">{node.description}</p>
              )}
            </div>
          </div>
          {(hasChildren || (hasItems && !expanded && node.children === undefined)) && ( // Show chevron if has children or items (and no children to avoid double chevrons if items are shown directly)
            <div className="flex-shrink-0">
              {expanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </div>
          )}
        </div>
        
        {hasItems && expanded && (
          <div className="mt-3 flex flex-wrap gap-1">
            {node.items.map((item, index) => (
              <Badge key={index} variant="outline" className="bg-white text-xs">
                {item}
              </Badge>
            ))}
          </div>
        )}
      </div>
      
      {hasChildren && expanded && (
        <div className={cn(
            "pl-4 mt-2 border-l-2", 
            `border-${getTextColor().split('-')[1]}-300` // Assumes color format like 'text-blue-700'
          )}
        >
          {node.children.map((child) => (
            <FlowNodeComponent key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

interface EnhancedCareerFlowChartProps {
  pathType?: string;
}

const EnhancedCareerFlowChart: React.FC<EnhancedCareerFlowChartProps> = ({ pathType = "default" }) => {
  // Get the appropriate data for the specified path type
  const data = flowChartData[pathType as keyof typeof flowChartData] || flowChartData.default;
  
  return (
    <section className="py-8 md:py-12 bg-slate-50">
      <div className="container px-4 md:px-6">
        <Card className="p-4 sm:p-6 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-brand-blue-700 text-center">{data.title}</h3>
          <div className="space-y-3">
            {data.rootNodes.map((node) => (
              <FlowNodeComponent key={node.id} node={node} />
            ))}
          </div>
          <div className="text-xs text-center mt-6 text-muted-foreground">
            <p>This career flow chart shows possible education paths and career opportunities after 10th standard.</p>
            <p>Click on a box to expand or collapse more details.</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EnhancedCareerFlowChart;

