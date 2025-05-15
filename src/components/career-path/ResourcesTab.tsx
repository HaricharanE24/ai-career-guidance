
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, BookOpen, BookCheck, GraduationCap } from "lucide-react";

interface Book {
  title: string;
  author: string;
}

interface Course {
  title: string;
  platform: string;
}

interface Website {
  name: string;
  description: string;
}

interface ResourcesTabProps {
  resources: {
    books: Book[];
    courses: Course[];
    websites: Website[];
  };
}

const ResourcesTab = ({ resources }: ResourcesTabProps) => {
  // Check if resources exists and provide default empty arrays
  const books = resources?.books || [];
  const courses = resources?.courses || [];
  const websites = resources?.websites || [];

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-brand-blue-500" />
            Learning Resources
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Books & Study Material</h3>
              <ul className="space-y-3">
                {books.map((book, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="rounded-full bg-brand-blue-100 p-1 mt-0.5">
                      <BookOpen className="h-3 w-3 text-brand-blue-500" />
                    </div>
                    <div>
                      <span className="font-medium">{book.title}</span>
                      <p className="text-sm text-muted-foreground">{book.author}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Online Courses</h3>
              <ul className="space-y-3">
                {courses.map((course, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="rounded-full bg-brand-blue-100 p-1 mt-0.5">
                      <BookCheck className="h-3 w-3 text-brand-blue-500" />
                    </div>
                    <div>
                      <span className="font-medium">{course.title}</span>
                      <p className="text-sm text-muted-foreground">{course.platform}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Websites & Communities</h3>
              <ul className="space-y-3">
                {websites.map((website, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="rounded-full bg-brand-blue-100 p-1 mt-0.5">
                      <GraduationCap className="h-3 w-3 text-brand-blue-500" />
                    </div>
                    <div>
                      <span className="font-medium">{website.name}</span>
                      <p className="text-sm text-muted-foreground">{website.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourcesTab;
