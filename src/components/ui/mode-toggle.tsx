import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './theme-provider';

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant='outline'
      size='icon'
      className='fixed rounded-l-full right-0 bottom-[500px] px-5 hover:px-8 hover:transition-all hover:bg-gray-800 hover:text-white  bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white dark:border-gray-100/20 transition-colors duration-300  dark:hover:bg-gray-700 z-50'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <Sun className='h-[1.2rem] w-[1.2rem] transition-all' />
      ) : (
        <Moon className='h-[1.2rem] w-[1.2rem] transition-all' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};

export default ModeToggle;
