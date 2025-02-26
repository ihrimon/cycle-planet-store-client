import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ImagePlus, Loader2 } from 'lucide-react';

interface ProductFormProps {
  onSubmit: (data: ProductFormData) => void;
  isLoading?: boolean;
}

export interface ProductFormData {
  title: string;
  createdBy: string;
  stock: number;
  tagId: string;
  description: string;
  image?: File;
}

function ProductForm({ onSubmit, isLoading = false }: ProductFormProps) {
  const [formData, setFormData] = useState<ProductFormData>({
    title: '',
    createdBy: '',
    stock: 0,
    tagId: '',
    description: '',
  });
  const [imagePreview, setImagePreview] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-2xl mx-auto p-4'>
      <Card>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center'>
            Create New Product
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-6'>
          {/* Image Upload */}
          <div className='space-y-2'>
            <Label htmlFor='thumbnail'>Product Image</Label>
            <div className='flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 bg-muted/50'>
              {imagePreview ? (
                <div className='relative w-full aspect-[4/3] rounded-lg overflow-hidden'>
                  <img
                    src={imagePreview}
                    alt='Preview'
                    className='object-cover w-full h-full'
                  />
                  <Button
                    type='button'
                    variant='secondary'
                    size='sm'
                    className='absolute bottom-2 right-2'
                    onClick={() => {
                      setImagePreview('');
                      setFormData((prev) => ({ ...prev, image: undefined }));
                    }}
                  >
                    Change Image
                  </Button>
                </div>
              ) : (
                <label
                  htmlFor='image-upload'
                  className='flex flex-col items-center justify-center cursor-pointer'
                >
                  <ImagePlus className='h-12 w-12 text-muted-foreground mb-2' />
                  <span className='text-sm text-muted-foreground'>
                    Drop your image here, or click to browse
                  </span>
                  <span className='text-xs text-muted-foreground mt-1'>
                    1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are
                    allowed
                  </span>
                  <input
                    id='image-upload'
                    type='file'
                    className='hidden'
                    accept='image/*'
                    onChange={handleImageChange}
                  />
                </label>
              )}
            </div>
          </div>

          {/* General Information */}
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='space-y-2'>
              <Label htmlFor='title'>Category Title</Label>
              <Input
                id='title'
                placeholder='Enter Title'
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                required
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='creator'>Created By</Label>
              <Select
                value={formData.createdBy}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, createdBy: value }))
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder='Select Creator' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='creator1'>Creator One</SelectItem>
                  <SelectItem value='creator2'>Creator Two</SelectItem>
                  <SelectItem value='creator3'>Creator Three</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='stock'>Stock</Label>
              <Input
                id='stock'
                type='number'
                min='0'
                placeholder='Quantity'
                value={formData.stock}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    stock: parseInt(e.target.value) || 0,
                  }))
                }
                required
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='tagId'>Tag ID</Label>
              <Input
                id='tagId'
                placeholder='#******'
                value={formData.tagId}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, tagId: e.target.value }))
                }
                required
              />
            </div>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='description'>Description</Label>
            <Textarea
              id='description'
              placeholder='Type description'
              className='min-h-[100px]'
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              required
            />
          </div>

          <Button type='submit' className='w-full' disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Creating Product...
              </>
            ) : (
              'Create Product'
            )}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
export default ProductForm;
