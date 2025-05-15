
import { Card, CardContent } from "@/components/ui/card";
import { Clock, CircleDollarSign, BookCheck } from "lucide-react";

interface OverviewCardsProps {
  timeline: string;
  jobProspects: string;
  entryRequirements: string;
}

const OverviewCards = ({ timeline, jobProspects, entryRequirements }: OverviewCardsProps) => {
  const displayValue = (value: string, defaultValue: string = "Information not available") => {
    return value && value.toLowerCase() !== "not specified" ? value : defaultValue;
  };

  return (
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      <Card className="shadow-sm border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow transition-all duration-300">
        <CardContent className="p-4 flex items-start gap-4">
          <div className="rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-3 flex-shrink-0 border border-border/30">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground/90">Timeline</h3>
            <p className="text-sm text-muted-foreground">{displayValue(timeline)}</p>
          </div>
        </CardContent>
      </Card>
      <Card className="shadow-sm border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow transition-all duration-300">
        <CardContent className="p-4 flex items-start gap-4">
          <div className="rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-3 flex-shrink-0 border border-border/30">
            <CircleDollarSign className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground/90">Job Prospects</h3>
            <p className="text-sm text-muted-foreground">{displayValue(jobProspects)}</p>
          </div>
        </CardContent>
      </Card>
      <Card className="shadow-sm border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow transition-all duration-300">
        <CardContent className="p-4 flex items-start gap-4">
          <div className="rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-3 flex-shrink-0 border border-border/30">
            <BookCheck className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-foreground/90">Entry Requirements</h3>
            <p className="text-sm text-muted-foreground">{displayValue(entryRequirements)}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverviewCards;
