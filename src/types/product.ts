export type TCategory =
  | 'Mountain'
  | 'Road'
  | 'Hybrid'
  | 'Bmx'
  | 'Electric'
  | 'Gravel'
  | 'Touring'
  | 'Cyclocross'
  | 'Track'
  | 'Kids';
export type TBrand =
  | 'Trek'
  | 'Specialized'
  | 'Giant'
  | 'Cannondale'
  | 'Scott'
  | 'Bianchi'
  | 'Cervelo'
  | 'Santa Cruz'
  | 'Orbea'
  | 'Merida';

// product enum specification
export type TFrameMaterial = 'Aluminum' | 'Steel' | 'Carbon Fiber' | 'Titanium';
export type TTireType = 'Tubeless' | 'Tube' | 'Clincher';
export type TSuspension =
  | 'Rigid'
  | 'Front Suspension'
  | 'Full Suspension'
  | 'none';
export type TBrakeType =
  | 'Disc Brake'
  | 'V-Brake'
  | 'Coaster Brake'
  | 'Hydraulic Brake';
export type TColorOptions = 'Red' | 'Blue' | 'Black' | 'Green';
export type THandlebarType = 'Flat' | 'Drop' | 'Bullhorn' | 'Aero';
export type TSeatType = 'Standard' | 'Gel Cushion' | 'Racing' | 'Comfort';
export type TDrivetrain =
  | 'Single Speed'
  | 'Derailleur'
  | 'Internal Hub'
  | 'Shimano Di2';
export type TChainMaterial = 'Steel' | 'Nickel-Plated';


// product specification
export type TSpecification = {
  weight: number;
  maxLoadCapacity: number;
  warranty: number;
  wheelSize: number;
  gearCount: number;
  frameMaterial: string;
  tireType: string;
  suspension: string;
  brakeType: string;
  colorOptions: string;
  handlebarType: string;
  seatType: string;
  drivetrain: string;
  chainMaterial: string;
  lighting: boolean;
  fenders: boolean;
  cargoRack: boolean;
  bottleHolder: boolean;
};

// product description
export type TDescription = {
  shortDescription: string;
  longDescription: string;
  features: string[];
  warrantyInfo: string;
};

// product type
export type TProduct = {
  _id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  discountPrice: number;
  quantity: number;
  productImg: string[];
  sku: string;
  description: TDescription;
  specification: TSpecification;
  tags: string[];
  averageRating: number;
  reviewCount: number;
  inStock: boolean;
  isFeatured: boolean;
  isPopular: boolean;
  addDate: string;
};