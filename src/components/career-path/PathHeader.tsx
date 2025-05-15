
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PathHeaderProps {
  icon: any;
  title: string;
  description: string;
}

const PathHeader = ({ icon: Icon, title, description }: PathHeaderProps) => {
  return (
    <>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <Button asChild variant="outline" size="sm" className="shadow-sm hover:bg-accent">
          <Link to="/career-paths" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Paths
          </Link>
        </Button>
      </div>
      
      <div className="mb-8 md:flex items-start gap-6">
        <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mb-4 md:mb-0 shadow-sm border border-border/50">
          <Icon className="h-10 w-10 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">{title}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
      </div>
    </>
  );
};

export default PathHeader;
