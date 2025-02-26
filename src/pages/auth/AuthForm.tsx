import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AuthFormProps {
  type: 'login' | 'signup';
}

export const AuthForm = ({ type }: AuthFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add authentication logic here
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4 animate-in fade-in-50'>

      {type === 'signup' && (
        <div className='space-y-2'>
          <Label htmlFor='username'>Username</Label>
          <Input
            id='username'
            type='text'
            placeholder='Enter your username'
            required
          />
        </div>
      )}

      <div className='space-y-2'>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          type='email'
          placeholder='Enter your email'
          required
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='password'>Password</Label>
        <Input
          id='password'
          type='password'
          placeholder='Enter your password'
          required
        />
      </div>

      <Button className='w-full' type='submit'>
        {isLoading ? (
          <div className='flex items-center gap-2'>
            <div className='h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent' />
            <span>Processing...</span>
          </div>
        ) : (
          `Sign ${type === 'login' ? 'in' : 'up'}`
        )}
      </Button>
    </form>
  );
};
