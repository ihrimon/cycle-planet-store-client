import { Controller } from 'react-hook-form';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { TCustomForm } from '@/types';
import { FormItem } from '../ui/form';

const CustomTextarea = ({ name, label, placeholder }: TCustomForm) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <Label> {label}</Label>
          <Textarea
            {...field}
            placeholder={placeholder}
            className='min-h-32 shadow-none'
          />
          {error && <small className='text-red-500'>{error.message}</small>}
        </FormItem>
      )}
    />
  );
};

export default CustomTextarea;
