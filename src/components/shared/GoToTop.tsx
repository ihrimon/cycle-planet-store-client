import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-lime-600 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
      aria-label='Go to Top'
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default GoToTop;
