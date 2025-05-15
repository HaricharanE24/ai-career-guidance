
import { Link } from "react-router-dom";

interface RelatedPath {
  title: string;
  description: string;
  icon: any;
  link: string;
}

interface RelatedPathsProps {
  relatedPaths: RelatedPath[];
}

const RelatedPaths = ({ relatedPaths = [] }: RelatedPathsProps) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Related Career Paths</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPaths.map((path, index) => (
          <Link
            key={index}
            to={path.link}
            className="group bg-white rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-all overflow-hidden"
          >
            <div className="aspect-video bg-brand-blue-100 flex items-center justify-center">
              <path.icon className="h-12 w-12 text-brand-blue-500" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-xl group-hover:text-brand-blue-500">{path.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{path.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPaths;
