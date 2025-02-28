import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

type ScrollAnimatedSectionProps = {
  children: React.ReactNode;
};

const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({
  children,
}) => {
  const { ref, inView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className=''
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimatedSection;
