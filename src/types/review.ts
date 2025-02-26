export interface Review {
  id: string;
  productName: string;
  productImage: string;
  reviewedBy: string;
  rating: number;
}

export const recentReviews: Review[] = [
  {
    id: '1',
    productName: 'Wiper Blades Brandix WL2',
    productImage: '/lovable-uploads/56004b25-5ce7-4c19-9fbe-0c9cca9e4192.png',
    reviewedBy: 'Ryan Ford',
    rating: 3,
  },
  {
    id: '2',
    productName: 'Electric Planer Brandix KL370090G 300 Watts',
    productImage: '/lovable-uploads/56004b25-5ce7-4c19-9fbe-0c9cca9e4192.png',
    reviewedBy: 'Adam Taylor',
    rating: 4,
  },
  {
    id: '3',
    productName: 'Water Tap',
    productImage: '/lovable-uploads/56004b25-5ce7-4c19-9fbe-0c9cca9e4192.png',
    reviewedBy: 'Jessica Moore',
    rating: 2,
  },
  {
    id: '4',
    productName: 'Brandix Router Power Tool 2017ERXPK',
    productImage: '/lovable-uploads/56004b25-5ce7-4c19-9fbe-0c9cca9e4192.png',
    reviewedBy: 'Helena Garcia',
    rating: 3,
  },
  {
    id: '5',
    productName: 'Undefined Tool iRadix DPS3000SY 2700 Watts',
    productImage: '/lovable-uploads/56004b25-5ce7-4c19-9fbe-0c9cca9e4192.png',
    reviewedBy: 'Ryan Ford',
    rating: 5,
  },
  {
    id: '6',
    productName: 'Brandix Screwdriver SCREW150',
    productImage: '/lovable-uploads/56004b25-5ce7-4c19-9fbe-0c9cca9e4192.png',
    reviewedBy: 'Charlotte Jones',
    rating: 4,
  },
];