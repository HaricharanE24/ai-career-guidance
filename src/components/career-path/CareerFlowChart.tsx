
import EnhancedCareerFlowChart from './EnhancedCareerFlowChart';

interface CareerFlowChartProps {
  pathType?: string;
}

const CareerFlowChart: React.FC<CareerFlowChartProps> = ({ pathType }) => {
  return (
    <EnhancedCareerFlowChart pathType={pathType} />
  );
};

export default CareerFlowChart;
