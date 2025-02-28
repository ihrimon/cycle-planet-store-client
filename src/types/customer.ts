export type TGender = 'Male' | 'Female' | 'Other';

type Address = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

type Order = {
  orderId: string;
  date: string;
  items: string[];
  totalAmount: number;
  transactionId: string;
  status: string;
};

export type TCustomer = {
  _id: string;
  fullName: string;
  username: string;
  email: string;
  phone: string;
  profileImage: string;
  bio: string;
  gender: TGender;
  birthDate: string;
  status: string;
  billingAddress: Address;
  shippingAddress: Address;
  paymentMethods: string;
  joinDate: string;
  orderHistory: Order[];
  wishlist: string[];
};
