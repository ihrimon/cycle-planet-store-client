// import { Plus } from 'lucide-react';
// import { Button } from '../ui/button';
// import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

// interface CustomTooltipProps {
//   description: string;
// }

// const CustomTooltip: React.FC<CustomTooltipProps> = ({ description }) => {
//   return (
//     <div className='relattive'>
//       <Tooltip>
//         <div className='absolute'>
//           <TooltipTrigger asChild>
//             <Button className='bg-[#a9bb07] w-9 h-9 rounded-full font-black'>
//               <Plus size={20} />
//             </Button>
//           </TooltipTrigger>
//           <TooltipContent>
//             <p>{description}</p>
//           </TooltipContent>
//         </div>
//       </Tooltip>
//     </div>
//   );
// };

// export default CustomTooltip;


import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface TooltipPointProps {
  x: number;
  y: number;
  content: string;
  className?: string;
}

const TooltipPoint: React.FC<TooltipPointProps> = ({
  x,
  y,
  content,
  className,
}) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        className={cn(
          'absolute w-6 h-6 bg-lime-500 rounded-full cursor-pointer transition-all duration-300',
          'hover:bg-lime-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-lime-500',
          'flex items-center justify-center',
          className
        )}
        style={{ left: `${x}%`, top: `${y}%` }}
      >
        <span className='text-white font-bold'>+</span>
      </button>
    </TooltipTrigger>
    <TooltipContent
      className='bg-white/90 backdrop-blur-sm border border-gray-200 p-3 rounded-lg shadow-lg'
      sideOffset={5}
    >
      <p className='text-sm font-medium text-gray-800'>{content}</p>
    </TooltipContent>
  </Tooltip>
);

const BikeTooltips = () => {
  return (
    <div className='relative w-full max-w-3xl mx-auto aspect-[5/-4] rounded-xl p-4'>
      {/* <img
        src='/lovable-uploads/fd4a0222-61c7-4003-b356-07d38e6618de.png'
        alt='Racing Bike'
        className='w-full h-full object-contain'
      /> */}
      <TooltipProvider>
        <TooltipPoint
          x={35}
          y={220}
          content='Ergonomic handlebar design with integrated brake controls'
        />
        <TooltipPoint
          x={75}
          y={170}
          content='Adjustable seat post for optimal riding position'
        />
        <TooltipPoint
          x={50}
          y={965}
          content='Advanced drivetrain system with electronic shifting'
        />
        <TooltipPoint
          x={10}
          y={625}
          content='High-performance disc brake system'
        />
        <TooltipPoint
          x={85}
          y={815}
          content='High-performance disc brake system'
        />
      </TooltipProvider>
    </div>
  );
};

export default BikeTooltips;
