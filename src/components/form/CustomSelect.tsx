import { Controller, useFormContext } from 'react-hook-form';
import { FormItem } from '../ui/form';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { TCustomForm } from '@/types';

const CustomSelect = ({ label, name, options, disabled }: TCustomForm) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <Label>{label}</Label>
          <Select
            onValueChange={field.onChange}
            value={field.value}
            disabled={disabled}
          >
            <SelectTrigger>
              <SelectValue placeholder='Select an option'>
                {field.value
                  ? options?.find((opt) => opt.value === field.value)?.label
                  : 'Select an option'}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {error && <small className='text-red-500'>{error.message}</small>}
        </FormItem>
      )}
    />
  );
};

export default CustomSelect;
