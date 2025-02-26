import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}
const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className='p-6 transition-all duration-300 hover:shadow-lg border-none'>
      <div className='flex flex-col space-y-4'>
        <div className='p-2'>
          <Icon className='w-8 h-8 text-primary' />
        </div>
        <h3 className='text-xl font-bold'>{title}</h3>
        <p className='text-muted-foreground leading-relaxed'>{description}</p>
      </div>
    </Card>
  );
};
export default FeatureCard;
