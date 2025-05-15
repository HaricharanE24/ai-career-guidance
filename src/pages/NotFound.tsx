import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BookCheck } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-blue-50">
      <div className="text-center max-w-md p-6">
        <div className="w-20 h-20 bg-brand-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <BookCheck className="h-10 w-10 text-brand-blue-500" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-brand-blue-700">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! We couldn't find the career path you're looking for.
        </p>
        <Button asChild size="lg" className="bg-brand-blue-500 hover:bg-brand-blue-600">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
