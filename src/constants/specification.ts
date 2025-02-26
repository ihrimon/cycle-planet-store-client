import { TBrakeType, TChainMaterial, TColorOptions, TDrivetrain, TFrameMaterial, THandlebarType, TSeatType, TSuspension, TTireType } from '@/types';

export const frameMaterialdOptions = [
  { value: 'Aluminum', label: 'Aluminum' },
  { value: 'Steel', label: 'Steel' },
  { value: 'Carbon Fiber', label: 'Carbon Fiber' },
  { value: 'Titanium', label: 'Titanium' },
];

export const tireTypeOptions = [
  { value: 'Tubeless', label: 'Tubeless' },
  { value: 'Tube', label: 'Tube' },
  { value: 'Clincher', label: 'Clincher' },
];

export const suspensionOptions = [
  { value: 'Rigid', label: 'Rigid' },
  { value: 'Front Suspension', label: 'Front Suspension' },
  { value: 'Full Suspension', label: 'Full Suspension' },
  { value: 'None', label: 'None' },
];

export const brakeTypeOptions = [
  { value: 'Disc Brake', label: 'Disc Brake' },
  { value: 'V-Brake', label: 'V-Brakee' },
  { value: 'Coaster Brake', label: 'Coaster Brake' },
  { value: 'Hydraulic Brake', label: 'Hydraulic Brake' },
];

export const colorOptions = [
  { value: 'Red', label: 'Red' },
  { value: 'Blue', label: 'Blue' },
  { value: 'Black', label: 'Black' },
  { value: 'Green', label: 'Green' },
];

export const handlebarTypeOptions = [
  { value: 'Flat', label: 'Flat' },
  { value: 'Drop', label: 'Drop' },
  { value: 'Bullhorn', label: 'Bullhorn' },
  { value: 'Aero', label: 'Aero' },
];

export const seatTypeOptions = [
  { value: 'Standard', label: 'Standard' },
  { value: 'Gel Cushion', label: 'Gel Cushion' },
  { value: 'Racing', label: 'Racing' },
  { value: 'Comfort', label: 'Comfort' },
];

export const drivetrainOptions = [
  { value: 'Single Speed', label: 'Single Speed' },
  { value: 'Derailleur', label: 'Derailleur' },
  { value: 'Internal Hub', label: 'Internal Hub' },
  { value: 'Shimano Di2', label: 'Shimano Di2' },
];

export const chainMaterialOptions = [
  { value: 'Steel', label: 'Steel' },
  { value: 'Nickel-Plated', label: 'Nickel-Plated' },
  { value: 'Titanium', label: 'Titanium' },
];

// product specification
export const FrameMaterial: TFrameMaterial[] = [
  'Aluminum',
  'Steel',
  'Carbon Fiber',
  'Titanium',
];
export const TireType: TTireType[] = ['Tubeless', 'Tube', 'Clincher'];
export const Suspension: TSuspension[] = [
  'Rigid',
  'Front Suspension',
  'Full Suspension',
  'none'
];
export const BrakeType: TBrakeType[] = [
  'Disc Brake',
  'V-Brake',
  'Coaster Brake',
  'Hydraulic Brake',
];
export const ColorOptions: TColorOptions[] = ['Red', 'Blue', 'Black', 'Green'];
export const HandlebarType: THandlebarType[] = [
  'Flat',
  'Drop',
  'Bullhorn',
  'Aero',
];
export const SeatType: TSeatType[] = [
  'Standard',
  'Gel Cushion',
  'Racing',
  'Comfort',
];
export const Drivetrain: TDrivetrain[] = [
  'Single Speed',
  'Derailleur',
  'Internal Hub',
  'Shimano Di2',
];
export const ChainMaterial: TChainMaterial[] = ['Steel', 'Nickel-Plated'];