
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AssessmentCTA = () => {
  return (
    <div className="bg-gradient-to-br from-brand-blue-50 to-brand-blue-100 rounded-lg p-6 md:p-8 mt-12 text-center shadow-md border border-brand-blue-200">
      <h2 className="text-2xl font-semibold mb-3 text-brand-blue-700">Still Exploring Your Options?</h2>
      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
        Take our assessment to discover more career paths that match your interests and aptitudes.
        Get personalized recommendations based on your strengths and preferences.
      </p>
      <div className="space-x-4">
        <Button 
          asChild 
          size="lg" 
          className="bg-gradient-to-r from-brand-blue-500 to-brand-blue-600 hover:from-brand-blue-600 hover:to-brand-blue-700 shadow-sm"
        >
          <Link to="/assessment">Find Your Perfect Career Path</Link>
        </Button>
        <Button 
          asChild 
          variant="outline" 
          size="lg" 
          className="border-brand-blue-300 text-brand-blue-600 hover:bg-brand-blue-50"
        >
          <Link to="/chatbot">Ask CareerBot</Link>
        </Button>
      </div>
    </div>
  );
};

export default AssessmentCTA;
