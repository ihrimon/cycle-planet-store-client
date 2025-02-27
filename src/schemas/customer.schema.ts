// import { Gender } from '@/constants/customer';
import { z } from 'zod';

// const enumToSchema = (enumData: string[]) =>
//   z.enum([...enumData] as [string, ...string[]], {
//     message: 'This field is required *',
//   });

// Address Schema
const addressSchema = z.object({
  street: z.string().min(1, 'Street is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().min(4, 'Zip Code must be at least 4 characters'),
  country: z.string().min(1, 'Country is required'),
});

// Order Schema
// const orderSchema = z.object({
//   orderId: z.string().min(1, 'Order ID is required'),
//   date: z.date(),
//   items: z.array(z.string()).nonempty('Items cannot be empty'),
//   totalAmount: z.number().positive('Total amount must be positive'),
//   transactionId: z.string().optional(),
//   status: z.nativeEnum(TOrderStatus),
// });

// Customer Schema
export const customerSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  profileImage: z.string().url('Invalid image URL').optional(),
  bio: z.string().max(300, 'Bio cannot exceed 300 characters').optional(),
  // gender: enumToSchema(Gender),
  birthDate: z.string().optional(),
  billingAddress: addressSchema,
  shippingAddress: addressSchema.optional(),
});
