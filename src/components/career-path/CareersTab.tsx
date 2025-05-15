
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, MapPin, Link, List } from "lucide-react";

interface CareerOption {
  title: string;
  description: string;
  salary: string;
  growth: string;
  environment: string;
}

interface JobProfile {
  title: string;
  description: string;
  skills: string[];
}

interface CareersTabProps {
  careerOptions: CareerOption[];
  jobProfiles: JobProfile[];
}

const CareersTab = ({ careerOptions = [], jobProfiles = [] }: CareersTabProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-brand-blue-500" />
            Career Opportunities
          </h2>
          
          <div className="space-y-6">
            {careerOptions.map((career, index) => (
              <div key={index} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                <h3 className="font-semibold text-lg mb-2">{career.title}</h3>
                <p className="text-muted-foreground mb-3">{career.description}</p>
                
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium mb-1">Average Salary</h4>
                    <p>{career.salary}</p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium mb-1">Job Growth</h4>
                    <p>{career.growth}</p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium mb-1">Work Environment</h4>
                    <p>{career.environment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Job Profiles</h2>
          <div className="space-y-4">
            {jobProfiles.map((profile, index) => (
              <div key={index} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                <h3 className="font-medium">{profile.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{profile.description}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {profile.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-brand-blue-100 text-brand-blue-700 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Industry Insights Card - New Section */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <List className="h-5 w-5 text-brand-blue-500" />
            Industry Insights
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Top Employers</h3>
                <p className="text-sm text-muted-foreground">
                  Information about leading employers in this field and what they look for in candidates.
                </p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Industry Trends</h3>
                <p className="text-sm text-muted-foreground">
                  Latest developments, technological advancements, and changing demands in the industry.
                </p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Geographic Hotspots</h3>
                <p className="text-sm text-muted-foreground">
                  Regions and cities with the highest concentration of job opportunities in this field.
                </p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Future Outlook</h3>
                <p className="text-sm text-muted-foreground">
                  Projected growth, emerging roles, and how industry experts see this field evolving.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CareersTab;
