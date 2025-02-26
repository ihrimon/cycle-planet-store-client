import { Controller } from 'react-hook-form';
import { Label } from '../ui/label';
import { FormItem } from '../ui/form';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { TCustomForm } from '@/types';

const CustomRadioGroup = ({ name, label }: TCustomForm) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <Label>{label}</Label>
          <RadioGroup
            onValueChange={(value) => field.onChange(value === 'true')}
            value={field.value ? 'true' : 'false'}
            className='flex space-x-5'
          >
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='true' id={`${name}-yes`} />
              <Label htmlFor={`${name}-yes`}>Yes</Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem value='false' id={`${name}-no`} />
              <Label htmlFor={`${name}-no`}>No</Label>
            </div>
          </RadioGroup>
          {error && <small className='text-red-500'>{error.message}</small>}
        </FormItem>
      )}
    />
  );
};

export default CustomRadioGroup;
