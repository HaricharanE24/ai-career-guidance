
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookCheck } from "lucide-react";

interface Skill {
  name: string;
  description: string;
}

interface SkillResource {
  title: string;
  description: string;
  link: string;
}

interface SkillsTabProps {
  skills: {
    technical: Skill[];
    soft: Skill[];
  };
  skillResources: SkillResource[];
}

const SkillsTab = ({ skills, skillResources }: SkillsTabProps) => {
  // Fix for the issue: Check if skills is undefined and provide default values
  const technicalSkills = skills?.technical || [];
  const softSkills = skills?.soft || [];

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Award className="h-6 w-6 text-brand-blue-500" />
            Required Skills
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Technical Skills</h3>
              <ul className="space-y-3">
                {technicalSkills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="rounded-full bg-brand-blue-100 p-1 mt-0.5">
                      <BookCheck className="h-3 w-3 text-brand-blue-500" />
                    </div>
                    <div>
                      <span className="font-medium">{skill.name}</span>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Soft Skills</h3>
              <ul className="space-y-3">
                {softSkills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="rounded-full bg-brand-blue-100 p-1 mt-0.5">
                      <BookCheck className="h-3 w-3 text-brand-blue-500" />
                    </div>
                    <div>
                      <span className="font-medium">{skill.name}</span>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Skill Development Resources</h2>
          <div className="space-y-4">
            {skillResources && skillResources.map((resource, index) => (
              <div key={index} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                <h3 className="font-medium">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
                <div className="text-brand-blue-500 text-sm font-medium">
                  <a href={resource.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsTab;
