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
          'absolute w-6 h-6 bg-primary rounded-full cursor-pointer transition-all duration-300',
          'hover:bg-lime-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-lime-500',
          'flex items-center justify-center',
          className
        )}
        style={{ left: `${x}%`, top: `${y}%` }}
      >
        <span className='text-white font-bold'>+</span>
      </button>
    </TooltipTrigger>
    <TooltipContent
      className='bg-gray-600/50 backdrop-blur-sm text-white px-3 rounded-lg shadow-lg'
      sideOffset={5}
    >
      <p className='text-sm font-medium'>{content}</p>
    </TooltipContent>
  </Tooltip>
);

const BikeTooltips = () => {
  return (
    <div className='relative w-full max-w-3xl mx-auto aspect-[5/-4] rounded-xl p-4'>
      <TooltipProvider>
        <TooltipPoint x={35} y={220} content='Drop bar with brakes ‍& gear' />
        <TooltipPoint x={75} y={170} content='Adjustable aero seat post' />
        <TooltipPoint x={50} y={965} content='Advanced drivetrain' />
        <TooltipPoint x={10} y={625} content='Hydraulic disc brakes' />
        <TooltipPoint x={85} y={815} content='Carbon aero wheels' />
      </TooltipProvider>
    </div>
  );
};

export default BikeTooltips;
