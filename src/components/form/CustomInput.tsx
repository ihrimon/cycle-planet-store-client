import { Controller } from 'react-hook-form';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { FormItem } from '../ui/form';
import { TCustomForm } from '@/types';

const CustomInput = ({
  name,
  label,
  type,
  placeholder,
  disabled,
}: TCustomForm) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <Label>{label}</Label>
          <Input
            {...field}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            className='py-5 shadow-none border border-gray-100/10'
          />
          {error && <small className='text-red-500'>{error.message}</small>}
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
