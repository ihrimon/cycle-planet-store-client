import CustomForm from '@/components/form/CustomForm';
import CustomInput from '@/components/form/CustomInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { addProductSchema } from '@/schemas/addProduct.schema';
import CustomSelect from '@/components/form/CustomSelect';
import {
  brakeTypeOptions,
  brandOptions,
  categoryOptions,
  chainMaterialOptions,
  colorOptions,
  drivetrainOptions,
  frameMaterialdOptions,
  handlebarTypeOptions,
  productDefaultValues,
  seatTypeOptions,
  suspensionOptions,
  tireTypeOptions,
} from '@/constants';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import CustomImageUpload from '@/components/form/CustomImageUpload';
import { useState } from 'react';
import { useAddProductMutation } from '@/redux/features/product/productApi';
import CustomTextarea from '@/components/form/CustomTextarea';
import customToaster from '@/utils/customToaster';
import CustomRadioGroup from '@/components/form/CustomRadioGroup';
import { TError } from '@/types';
import { Plus } from 'lucide-react';

const AddProduct = () => {
  const [images, setImages] = useState<File[]>([]);
  const [addProduct, { isLoading }] = useAddProductMutation();

  // submit product information
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // if product price is less than discount price
    if (data.price < data.discountPrice) {
      customToaster({
        description: 'Discount price cannot be greater than the price',
        actionType: 'warning',
      });
      return;
    }
    // when product image is not provided
    if (!images.length) {
      customToaster({
        description: 'Product Image is required',
        actionType: 'warning',
      });
      return;
    }

    const formattedData = {
      ...data,
      price: Number(data.price),
      discountPrice: Number(data.discountPrice),
      quantity: Number(data.quantity),
      wheelSize: Number(data.wheelSize),
      gearCount: Number(data.gearCount),
      weight: Number(data.weight),
      maxLoadCapacity: Number(data.maxLoadCapacity),
      description: {
        shortDescription: data?.description.shortDescription,
        longDescription: data?.description.longDescription,
        features: data.description.features
          .split('\n')
          .filter((feature: string) => feature.trim() !== ''),
        warrantyInfo: data?.description.warrantyInfo,
      },
      specification: {
        frameMaterial: data?.specification.frameMaterial,
        wheelSize: Number(data?.specification.wheelSize),
        warranty: Number(data?.specification.warranty),
        tireType: data?.specification.tireType,
        suspension: data?.specification.suspension,
        brakeType: data?.specification.brakeType,
        gearCount: Number(data?.specification.gearCount),
        weight: Number(data?.specification.weight),
        colorOptions: data?.specification.color,
        handlebarType: data?.specification.handlebarType,
        seatType: data?.specification.seatType,
        drivetrain: data?.specification.drivetrain,
        chainMaterial: data?.specification.chainMaterial,
        maxLoadCapacity: Number(data?.specification.maxLoadCapacity),
      },
    };
    const formData = new FormData();
    formData.append('data', JSON.stringify(formattedData));

    images.forEach((file) => {
      formData.append('files', file);
    });

    try {
      const result = await addProduct(formData).unwrap();
      console.log(result);
      if (result.success) {
        customToaster({
          description: `✅ ${result.message}`,
          action: 'OK',
          actionType: 'success',
        });
      }
    } catch (err) {
      const errorObj = err as TError;
      const errorMessage = errorObj?.data?.message || 'Something went wrong';

      customToaster({
        description: `${errorMessage}`,
        action: 'Try Again',
        actionType: 'error',
      });
    }
  };

  return (
    <div className='w-full max-w-5xl mx-auto'>
      <div className='flex flex-col space-y-3'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl text-primary font-bold'>Add Product</h1>
          <div className='text-sm text-muted-foreground'>
            Dashboard / Products / Product List
          </div>
        </div>
        <div className='flex items-start gap-2'>
          <Plus className='h-5 w-5 text-primary' />
          <p className='text-sm text-muted-foreground'>
            Add a new product to your cycle planet
          </p>
        </div>
      </div>
      <div>
        <CustomForm
          onSubmit={onSubmit}
          defaultValues={productDefaultValues}
          resolver={zodResolver(addProductSchema)}
          submitLabel='Save Product'
          className='rounded-none'
          isLoading={isLoading}
        >
          <div className='space-y-4'>
            {/* product information */}
            <div className='border-b border-lime-500 pb-10 space-y-4'>
              <h3 className='text-primary mt-6 text-lg'>Product Information</h3>
              <CustomInput
                type='text'
                name='name'
                label='Product Name'
                placeholder='Enter product name'
              />
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <CustomSelect
                  label='Category'
                  name='category'
                  options={categoryOptions}
                />
                <CustomSelect
                  label='Brand'
                  name='brand'
                  options={brandOptions}
                />
                <CustomInput
                  type='number'
                  name='quantity'
                  label='Quantity'
                  placeholder='Enter available stock quantity'
                />
                <CustomInput
                  type='number'
                  name='price'
                  label='Price'
                  placeholder='Enter product price (e.g., $100)'
                />
                <CustomInput
                  type='number'
                  name='discountPrice'
                  label='Discount Price'
                  placeholder='Enter discount price (if any)'
                />
                <CustomInput
                  type='text'
                  name='sku'
                  label='SKU'
                  placeholder='Enter unique product SKU'
                />
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <CustomRadioGroup name='inStock' label='Available in Stock?' />
                <CustomRadioGroup
                  name='isFeatured'
                  label='Feature this Product?'
                />
                <CustomRadioGroup name='isPopular' label='Mark as Popular?' />
              </div>
            </div>
            {/* product description */}
            <div className='border-b border-lime-500 pb-10 space-y-4'>
              <h3 className='text-primary mt-10 text-lg'>Description</h3>
              <CustomInput
                type='text'
                name='description.shortDescription'
                label='Short Description'
                placeholder='Enter a brief product description'
              />
              <CustomTextarea
                name='description.longDescription'
                label='Long Description'
                placeholder='Provide detailed information about the product'
              />
              <CustomTextarea
                name='description.features'
                label='Features'
                placeholder='List product features, one per line'
              />
              <CustomInput
                type='text'
                name='description.warrantyInfo'
                label='Warranty Info'
                placeholder='Enter warranty details (e.g., 1 year)'
              />
            </div>

            {/* product specification */}
            <div className='border-b border-lime-500 pb-10 space-y-4'>
              <h3 className='text-primary mt-10 text-lg'>Specification</h3>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <CustomInput
                  type='number'
                  name='specification.wheelSize'
                  label='Wheel Size'
                  placeholder='Enter wheel size (in inches)'
                />
                <CustomInput
                  type='number'
                  name='specification.gearCount'
                  label='Gear Count'
                  placeholder='Enter number of gears'
                />
                <CustomInput
                  type='number'
                  name='specification.weight'
                  label='Weight'
                  placeholder='Enter product weight (kg)'
                />
                <CustomInput
                  type='number'
                  name='specification.maxLoadCapacity'
                  label='Max Load Capacity'
                  placeholder='Enter maximum weight capacity (kg)'
                />
                <CustomInput
                  type='number'
                  name='specification.warranty'
                  label='Warranty'
                  placeholder='Enter warranty (e.g: 3 years)'
                />
                <CustomSelect
                  label='Frame Material'
                  name='specification.frameMaterial'
                  options={frameMaterialdOptions}
                />
                <CustomSelect
                  label='Tire Type'
                  name='specification.tireType'
                  options={tireTypeOptions}
                />
                <CustomSelect
                  label='Suspension'
                  name='specification.suspension'
                  options={suspensionOptions}
                />
                <CustomSelect
                  label='Brake Type'
                  name='specification.brakeType'
                  options={brakeTypeOptions}
                />
                <CustomSelect
                  label='Color'
                  name='specification.color'
                  options={colorOptions}
                />
                <CustomSelect
                  label='Handlebar Type'
                  name='specification.handlebarType'
                  options={handlebarTypeOptions}
                />
                <CustomSelect
                  label='Seat Type'
                  name='specification.seatType'
                  options={seatTypeOptions}
                />
                <CustomSelect
                  label='Drivetrain'
                  name='specification.drivetrain'
                  options={drivetrainOptions}
                />
                <CustomSelect
                  label='Chain Material'
                  name='specification.chainMaterial'
                  options={chainMaterialOptions}
                />
              </div>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
                <CustomRadioGroup
                  name='lighting'
                  label='Has Built-in Lighting?'
                />
                <CustomRadioGroup name='fenders' label='Includes Fenders?' />
                <CustomRadioGroup name='cargoRack' label='Has Cargo Rack?' />
                <CustomRadioGroup
                  name='bottleHolder'
                  label='Includes Bottle Holder?'
                />
              </div>
            </div>

            {/* upload image to cloudinary */}
            <div className='space-y-4'>
              <h3 className='text-primary mt-10'>Upload Product Images</h3>
              <CustomImageUpload
                name='images'
                images={images}
                setImages={setImages}
              />
            </div>
          </div>
        </CustomForm>
      </div>
    </div>
  );
};

export default AddProduct;
