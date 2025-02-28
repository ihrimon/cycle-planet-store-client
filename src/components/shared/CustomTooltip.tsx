import React, { useEffect, useState } from 'react';
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
  isVisible: boolean;
  className?: string;
}
import { AnimatePresence, motion } from 'framer-motion';
const TooltipPoint: React.FC<TooltipPointProps> = ({
  x,
  y,
  content,
  className,
  isVisible,
}) => (
  <Tooltip open={isVisible}>
    <TooltipTrigger asChild>
      <button
        className={cn(
          'absolute w-6 h-6 bg-primary rounded-full cursor-pointer transition-all duration-400',
          'hover:bg-lime-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-lime-500',
          'flex items-center justify-center',
          className
        )}
        style={{ left: `${x}%`, top: `${y}%` }}
      >
        <span className='text-white font-bold'>+</span>
      </button>
    </TooltipTrigger>

    <AnimatePresence>
      {isVisible && (
        <TooltipContent sideOffset={5} >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className='text-white px-3 rounded-lg shadow-lg'
          >
            <p className='text-sm font-medium'>{content}</p>
          </motion.div>
        </TooltipContent>
      )}
    </AnimatePresence>
  </Tooltip>
);

const BikeTooltips = () => {
  const [visibleContent, setVisibleContent] = useState(0);

  const tooltipData = [
    { x: 35, y: 220, content: 'Drop bar with brakes & gear' },
    { x: 75, y: 170, content: 'Adjustable aero seat post' },
    { x: 85, y: 815, content: 'Carbon aero wheels' },
    { x: 50, y: 965, content: 'Advanced drivetrain' },
    { x: 10, y: 625, content: 'Hydraulic disc brakes' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleContent((prev) => (prev + 1) % tooltipData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-full max-w-3xl mx-auto aspect-[5/-4] rounded-xl p-4'>
      <TooltipProvider>
        {tooltipData.map((tooltip, index) => (
          <TooltipPoint
            key={index}
            x={tooltip.x}
            y={tooltip.y}
            content={tooltip.content}
            isVisible={index === visibleContent}
          />
        ))}
      </TooltipProvider>
    </div>
  );
};

export default BikeTooltips;
