import {
  FormProvider,
  useForm,
  SubmitHandler,
  FieldValues,
} from 'react-hook-form';
import { Button } from '@/components/ui/button';
import MoonLoader from 'react-spinners/MoonLoader';

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TCustomFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: React.ReactNode;
  submitLabel?: string;
  isLoading?: boolean;
  className?: string;
} & TFormConfig;

const CustomForm = ({
  onSubmit,
  children,
  defaultValues,
  submitLabel,
  resolver,
  isLoading,
  className,
}: TCustomFormProps) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig['defaultValues'] = defaultValues;
  }

  if (resolver) {
    formConfig['resolver'] = resolver;
  }

  const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-4'>
        {children}
        <Button type='submit' className={`${className} w-full`}>
          {isLoading ? <MoonLoader loading={isLoading} size={20}/> : submitLabel}
        </Button>
      </form>
    </FormProvider>
  );
};

export default CustomForm;
