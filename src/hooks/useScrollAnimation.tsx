import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2, 
  });

  return { ref, inView };
};
