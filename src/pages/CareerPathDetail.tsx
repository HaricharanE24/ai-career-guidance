
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPathData } from "@/utils/careerPathData";
import { toast } from "sonner";
import { useEffect } from "react";
// import CareerFlowChart from "@/components/career-path/CareerFlowChart"; // Removed this import

// Import all components
import PathHeader from "@/components/career-path/PathHeader";
import OverviewCards from "@/components/career-path/OverviewCards";
import EducationTab from "@/components/career-path/EducationTab";
import SkillsTab from "@/components/career-path/SkillsTab";
import CareersTab from "@/components/career-path/CareersTab";
import ResourcesTab from "@/components/career-path/ResourcesTab";
import RelatedPaths from "@/components/career-path/RelatedPaths";
import AssessmentCTA from "@/components/career-path/AssessmentCTA";

const CareerPathDetail = () => {
  const { pathId } = useParams();
  const pathData = getPathData(pathId);
  
  useEffect(() => {
    if (!pathData) {
      toast.error("Career path not found", {
        description: "The requested career path information could not be found"
      });
    }
  }, [pathData]);

  useEffect(() => {
    // Scroll to top when path changes
    window.scrollTo(0, 0);
  }, [pathId]);

  if (!pathData) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Career Path Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find information about this career path.</p>
        <Button asChild>
          <Link to="/career-paths">View All Career Paths</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-12">
      {/* Page Header */}
      <PathHeader 
        icon={pathData.icon} 
        title={pathData.title} 
        description={pathData.description} 
      />
      
      {/* Overview Cards */}
      <OverviewCards 
        timeline={pathData.timeline}
        jobProspects={pathData.jobProspects}
        entryRequirements={pathData.entryRequirements}
      />
      
      {/* Career Flow Chart for this specific path - REMOVED
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Career Progression Roadmap</h2>
        <div className="border rounded-lg p-4 bg-white">
          <CareerFlowChart pathType={pathData.pathType} />
        </div>
      </div>
      */}
      
      {/* Detailed Content */}
      <Tabs defaultValue="education" className="mt-8">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-8 bg-muted/70 border border-border/50 p-1 rounded-lg">
          <TabsTrigger value="education" className="rounded data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Education</TabsTrigger>
          <TabsTrigger value="skills" className="rounded data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Skills</TabsTrigger>
          <TabsTrigger value="careers" className="rounded data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Careers</TabsTrigger>
          <TabsTrigger value="resources" className="rounded data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="education">
          <EducationTab 
            courseStructure={pathData.courseStructure}
            feeStructure={pathData.feeStructure}
            entranceExams={pathData.entranceExams}
            scholarships={pathData.scholarships}
            topColleges={pathData.topColleges}
          />
        </TabsContent>
        
        <TabsContent value="skills">
          <SkillsTab 
            skills={pathData.skills || {}}
            skillResources={pathData.skillResources || []}
          />
        </TabsContent>
        
        <TabsContent value="careers">
          <CareersTab 
            careerOptions={pathData.careerOptions || []}
            jobProfiles={pathData.jobProfiles || []}
          />
        </TabsContent>
        
        <TabsContent value="resources">
          <ResourcesTab resources={pathData.resources || {}} />
        </TabsContent>
      </Tabs>
      
      {/* Success Stories */}
      {pathData.successStories && pathData.successStories.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pathData.successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg border border-border/50 p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-brand-blue-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-brand-blue-500">{story.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">{story.position}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">"{story.quote}"</p>
                <div className="text-sm">
                  <p><span className="font-medium">Education:</span> {story.education}</p>
                  <p><span className="font-medium">Career Path:</span> {story.careerPath}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Related Paths */}
      <RelatedPaths relatedPaths={pathData.relatedPaths || []} />
      
      {/* Assessment CTA */}
      <AssessmentCTA />
    </div>
  );
};

export default CareerPathDetail;
