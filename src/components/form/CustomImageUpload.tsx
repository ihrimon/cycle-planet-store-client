import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, X } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import customToaster from '@/utils/customToaster';

interface CustomImageUploadProps {
  name: string;
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
  images: File[];
};

const CustomImageUpload = ({
  name,
  images,
  setImages,
}: CustomImageUploadProps) => {
  const { setValue } = useFormContext();

  const onDrop = (acceptedimages: File[]) => {
    if (images.length + acceptedimages.length > 5) {
      customToaster({
        description: 'You can upload up to 5 images',
        action: 'Try again',
        actionType: 'warning',
      });
      return;
    }
    const newimages = [...images, ...acceptedimages];
    setImages(newimages);
    setValue(name, newimages);
  };

  const removeFile = (index: number) => {
    const newimages = images.filter((_, i) => i !== index);
    setImages(newimages);
    setValue(name, newimages);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.gif'] },
    multiple: true,
  });

  return (
    <Card className='border-2 border-dashed text-center shadow-none py-0'>
      <CardContent>
        <div {...getRootProps()} className='cursor-pointer lg:p-16 p-10'>
          <input {...getInputProps()} />
          <Upload className='inline-block mb-4' />
          <p className='text-gray-500'>
            Drop your images here, or{' '}
            <span className='text-primary'>click to browse</span>
          </p>
          <p className='text-xs text-gray-400'>
            Max 5 images. PNG, JPG, JPEG, GIF allowed.
          </p>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 '>
          {images.map((file, index) => (
            <div
              key={index}
              className='relative border p-4 rounded-lg'
            >
              <img
                src={URL.createObjectURL(file)}
                alt='preview'
                className='w-full h-full object-cover rounded-md'
              />
              <Button
                className='w-6 h-6 absolute top-2 right-2 text-white rounded-full hover:bg-red-500'
                onClick={() => removeFile(index)}
              >
                <X size={8} />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomImageUpload;
