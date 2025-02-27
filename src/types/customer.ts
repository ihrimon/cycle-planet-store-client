export interface Customer {
  id: string;
  name: string;
  avatar: string;
  purchases: {
    count: number;
    total: number;
  };
}

export const topCustomers: Customer[] = [
  {
    id: '1',
    name: 'Socrates Itumay',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Socrates',
    purchases: {
      count: 15,
      total: 1835,
    },
  },
  {
    id: '2',
    name: 'Json Taylor',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Json',
    purchases: {
      count: 18,
      total: 2415,
    },
  },
  {
    id: '3',
    name: 'Suzika Stallone',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Suzika',
    purchases: {
      count: 21,
      total: 2341,
    },
  },
  {
    id: '4',
    name: 'Angelina Hose',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Angelina',
    purchases: {
      count: 24,
      total: 2624,
    },
  },
  {
    id: '5',
    name: 'Selena Deoyl',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Selena',
    purchases: {
      count: 12,
      total: 1035,
    },
  },
  {
    id: '6',
    name: 'Charlie Davieson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
    purchases: {
      count: 15,
      total: 1835,
    },
  },
];


export type TGender = 'Male' | 'Female' | 'Other';