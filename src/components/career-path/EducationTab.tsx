
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookCheck, BookOpen, Award, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface EducationTabProps {
  courseStructure?: {
    duration?: string;
    semesters?: string;
    mainSubjects?: string[];
  };
  feeStructure?: {
    undergraduate?: {
      government?: {
        range?: string;
        notes?: string;
      };
      private?: {
        range?: string;
        notes?: string;
      };
    };
  };
  entranceExams?: Array<{
    name: string;
    description: string;
    level: string;
    timing: string;
    eligibility: string;
    feeShips?: string;
    syllabus?: string[];
    pattern?: string;
    preparationTips?: string[] | string;
    importantDates?: string;
    applicationFee?: string;
  }>;
  scholarships?: Array<{
    name: string;
    amount: string;
    eligibility: string;
    link: string;
    deadline?: string;
    documents?: string[];
  }>;
  topColleges?: Array<{
    name: string;
    location: string;
    ranking?: string;
    fees?: string;
    admission?: string;
    website?: string;
  }>;
}

const EducationTab = ({ 
  courseStructure = {}, 
  feeStructure = {}, 
  entranceExams = [], 
  scholarships = [],
  topColleges = []
}: EducationTabProps) => {
  const { duration = 'Not specified', semesters = 'Not specified', mainSubjects = [] } = courseStructure || {};
  const government = feeStructure?.undergraduate?.government || { range: 'Not specified', notes: 'Information not available' };
  const private_fees = feeStructure?.undergraduate?.private || { range: 'Not specified', notes: 'Information not available' };

  // Helper function to safely handle array or string preparationTips
  const renderPreparationTips = (tips?: string[] | string) => {
    if (!tips) return null;
    
    if (typeof tips === 'string') {
      return (
        <ul className="list-disc pl-5 text-sm text-muted-foreground">
          <li>{tips}</li>
        </ul>
      );
    }
    
    if (Array.isArray(tips) && tips.length > 0) {
      return (
        <ul className="list-disc pl-5 text-sm text-muted-foreground">
          {tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      );
    }
    
    return null;
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-brand-blue-500" />
            Course Structure & Fee Details
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-3">Duration & Structure</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="font-medium mb-2">Duration: {duration}</p>
                  <p className="text-sm text-muted-foreground">
                    {semesters} with practical training and projects
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="font-medium mb-2">Core Subjects</p>
                  <ul className="text-sm text-muted-foreground list-disc pl-4">
                    {mainSubjects && mainSubjects.length > 0 ? (
                      mainSubjects.map((subject, index) => (
                        <li key={index}>{subject}</li>
                      ))
                    ) : (
                      <li>Information not available</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3">Fee Structure</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Government Institutions</h4>
                  <p className="text-2xl font-semibold text-brand-blue-600 mb-2">
                    {government.range}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {government.notes}
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Private Institutions</h4>
                  <p className="text-2xl font-semibold text-brand-blue-600 mb-2">
                    {private_fees.range}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {private_fees.notes}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Colleges Section */}
      {topColleges && topColleges.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-brand-blue-500" />
              Top Colleges & Universities
            </h2>
            
            <div className="space-y-4">
              {topColleges.map((college, index) => (
                <div key={index} className="border rounded-lg p-4 hover:border-brand-blue-300 transition-colors">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h3 className="font-medium text-lg">{college.name}</h3>
                      <p className="text-sm text-muted-foreground">{college.location}</p>
                    </div>
                    {college.ranking && (
                      <Badge variant="outline" className="bg-brand-blue-50">
                        Ranking: {college.ranking}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-sm font-medium">Fees Structure</p>
                      <p className="text-sm text-muted-foreground">{college.fees || "Contact college for details"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Admission Process</p>
                      <p className="text-sm text-muted-foreground">{college.admission || "Based on entrance exam or merit"}</p>
                    </div>
                  </div>
                  
                  {college.website && (
                    <div className="mt-3">
                      <a href={college.website} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-blue-500 hover:underline">
                        Visit Website →
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Entrance Exams Details Section */}
      {entranceExams.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-brand-blue-500" />
              Entrance Exams Details
            </h2>
            
            <div className="space-y-6">
              {entranceExams.map((exam, index) => (
                <div key={index} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                  <h3 className="font-medium text-lg mb-2 text-brand-blue-700">{exam.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{exam.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Exam Details</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Level:</span>
                          <span>{exam.level}</span>
                        </li>
                        <li className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Timing:</span>
                          <span>{exam.timing}</span>
                        </li>
                        {exam.pattern && (
                          <li className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Pattern:</span>
                            <span>{exam.pattern}</span>
                          </li>
                        )}
                        {exam.applicationFee && (
                          <li className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Application Fee:</span>
                            <span>{exam.applicationFee}</span>
                          </li>
                        )}
                        {exam.importantDates && (
                          <li className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Important Dates:</span>
                            <span>{exam.importantDates}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Eligibility & Benefits</h4>
                      <p className="text-sm mb-2"><span className="font-medium">Eligibility:</span> {exam.eligibility}</p>
                      <p className="text-sm"><span className="font-medium">Fee Waivers:</span> {exam.feeShips || "Information not available"}</p>
                    </div>
                  </div>
                  
                  {exam.syllabus && exam.syllabus.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Syllabus Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {exam.syllabus.map((topic, i) => (
                          <Badge key={i} variant="outline" className="bg-muted/50">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {exam.preparationTips && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Preparation Tips</h4>
                      {renderPreparationTips(exam.preparationTips)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Scholarships Section */}
      {scholarships.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Award className="h-6 w-6 text-brand-blue-500" />
              Available Scholarships
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {scholarships.map((scholarship, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <h3 className="font-medium text-base mb-1">{scholarship.name}</h3>
                  <p className="text-brand-blue-600 font-semibold mb-2">{scholarship.amount}</p>
                  
                  <Separator className="my-3" />
                  
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-medium">Eligibility:</span> {scholarship.eligibility}</p>
                    
                    {scholarship.deadline && (
                      <p className="text-sm"><span className="font-medium">Deadline:</span> {scholarship.deadline}</p>
                    )}
                    
                    {scholarship.documents && scholarship.documents.length > 0 && (
                      <div>
                        <p className="text-sm font-medium">Required Documents:</p>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          {scholarship.documents.map((doc, i) => (
                            <li key={i}>{doc}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-3">
                    <a href={scholarship.link} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-blue-500 hover:underline">
                      Apply Now →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default EducationTab;

