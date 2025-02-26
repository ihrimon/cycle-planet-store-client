export type OrderStatus =
  | 'Success'
  | 'Shipping'
  | 'Out For Delivery'
  | 'Cancelled'
  | 'Ordered'
  | 'Packed';
export interface OrderItem {
  id: string;
  image: string;
  name: string;
  productId: string;
}
export interface Customer {
  id: string;
  name: string;
  email: string;
  avatar: string;
}
export interface Order {
  serialNo: number;
  item: OrderItem;
  customerId: string;
  customer: Customer;
  orderedDate: string;
  status: OrderStatus;
  price: number;
}

export const recentOrders: Order[] = [
  {
    serialNo: 1,
    item: {
      id: '2343',
      name: 'Black Heals For Women',
      productId: '#2343',
      image: '/lovable-uploads/769fca63-3601-4172-9b0e-da965cd38fb4.png',
    },
    customerId: '#user1',
    customer: {
      id: '1',
      name: 'Socrates Itumay',
      email: 'socratesitumay@gmail.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Socrates',
    },
    orderedDate: '10-12-2022',
    status: 'Success',
    price: 999,
  },
  {
    serialNo: 2,
    item: {
      id: '5655',
      name: 'White Tshirt',
      productId: '#5655',
      image: '/lovable-uploads/769fca63-3601-4172-9b0e-da965cd38fb4.png',
    },
    customerId: '#user2',
    customer: {
      id: '2',
      name: 'Json Taylor',
      email: 'jsontaylor2416@gmail.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Json',
    },
    orderedDate: '11-12-2022',
    status: 'Shipping',
    price: 699,
  },
  {
    serialNo: 3,
    item: {
      id: '6245',
      name: 'Jacket For Men',
      productId: '#6245',
      image: '/lovable-uploads/769fca63-3601-4172-9b0e-da965cd38fb4.png',
    },
    customerId: '#user3',
    customer: {
      id: '3',
      name: 'Suzika Stallone',
      email: 'suzikastallone3214@gmail.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Suzika',
    },
    orderedDate: '12-12-2022',
    status: 'Out For Delivery',
    price: 599,
  },
  {
    serialNo: 4,
    item: {
      id: '45415',
      name: 'Airpods',
      productId: '#45415',
      image: '/lovable-uploads/769fca63-3601-4172-9b0e-da965cd38fb4.png',
    },
    customerId: '#user4',
    customer: {
      id: '4',
      name: 'Selena Deoyl',
      email: 'selenadeoyl114@gmail.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Selena',
    },
    orderedDate: '12-12-2022',
    status: 'Cancelled',
    price: 299,
  },
  {
    serialNo: 5,
    item: {
      id: '35656',
      name: 'Jasmine Fragrance',
      productId: '#35656',
      image: '/lovable-uploads/769fca63-3601-4172-9b0e-da965cd38fb4.png',
    },
    customerId: '#user5',
    customer: {
      id: '5',
      name: 'Roman Killon',
      email: 'romankillon143@gmail.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Roman',
    },
    orderedDate: '13-12-2022',
    status: 'Ordered',
    price: 299,
  },
  {
    serialNo: 6,
    item: {
      id: '622545',
      name: 'Smart Watch',
      productId: '#622545',
      image: '/lovable-uploads/769fca63-3601-4172-9b0e-da965cd38fb4.png',
    },
    customerId: '#user6',
    customer: {
      id: '6',
      name: 'Charlie Davieson',
      email: 'charliedavieson@gmail.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
    },
    orderedDate: '13-12-2022',
    status: 'Packed',
    price: 299,
  },
];
