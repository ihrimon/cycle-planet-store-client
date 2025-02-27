import { z } from 'zod';
import {
  BrakeType,
  BrandType,
  CategoryType,
  ChainMaterial,
  ColorOptions,
  Drivetrain,
  FrameMaterial,
  HandlebarType,
  SeatType,
  Suspension,
  TireType,
} from '@/constants';

const enumToSchema = (enumData: string[]) =>
  z.enum([...enumData] as [string, ...string[]], {
    message: 'This field is required *',
  });

// Product Description Schema
export const productDescriptionSchema = z.object({
  shortDescription: z
    .string()
    .min(5, 'Short description must be at least 5 characters'),
  longDescription: z
    .string()
    .min(15, 'Long description must be at least 15 characters'),
  features: z.string().min(2).min(2, 'At least two feature is required.'),
  warrantyInfo: z.string().optional(),
});

// Product Specification Schema
export const productSpecificationSchema = z.object({
  frameMaterial: enumToSchema(FrameMaterial),
  wheelSize: z.coerce.number().positive('Wheel size must be a positive value'),
  tireType: enumToSchema(TireType),
  suspension: enumToSchema(Suspension),
  brakeType: enumToSchema(BrakeType),
  gearCount: z.coerce.number().positive('Gear count must be a positive value'),
  weight: z.coerce.number().positive('Weight must be a positive value'),
  color: enumToSchema(ColorOptions),
  handlebarType: enumToSchema(HandlebarType),
  seatType: enumToSchema(SeatType),
  drivetrain: enumToSchema(Drivetrain),
  chainMaterial: enumToSchema(ChainMaterial),
  maxLoadCapacity: z.coerce
    .number()
    .positive('Max load capacity must be a positive value'),
  warranty: z.coerce.number().positive('Warranty must be a positive value'),
});

// 🔹 Add Product Validation Schema
export const addProductSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  category: enumToSchema(CategoryType),
  brand: enumToSchema(BrandType),
  price: z.coerce.number().positive('Price must be a positive value'),
  discountPrice: z.coerce
    .number()
    .positive('Discount price must be a positive value'),
  quantity: z.coerce
    .number()
    .int()
    .positive('Quantity must be a positive value'),
  productImg: z
    .array(z.string().url('Each product image must be a valid URL'))
    .optional(),
  description: productDescriptionSchema,
  specification: productSpecificationSchema,
  sku: z.string().optional(),
  tags: z.string().optional(),
});
