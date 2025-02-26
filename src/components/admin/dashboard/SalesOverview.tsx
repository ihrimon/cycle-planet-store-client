import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowUpRight,
  ShoppingBag,
  FileText,
  DollarSign,
  MoreHorizontal,
} from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const stats = [
  {
    title: 'Total Revenue',
    value: '$26,35,262',
    icon: <DollarSign className='text-blue-500' size={24} />,
    trend: '20%',
    trendColor: 'text-blue-400',
  },
  {
    title: 'Total Sales',
    value: '$56,35,262',
    icon: <FileText className='text-blue-500' size={24} />,
    trend: '1.8%',
    trendColor: 'text-blue-400',
  },
  {
    title: 'Total Products',
    value: '$4,262',
    icon: <ShoppingBag className='text-yellow-500' size={24} />,
    trend: '1.8%',
    trendColor: 'text-yellow-400',
  },
  {
    title: 'Total Expenses',
    value: '$35,262',
    icon: <DollarSign className='text-green-500' size={24} />,
    trend: '1.2%',
    trendColor: 'text-green-400',
  },
];

const chartData = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'Income',
      data: [20, 40, 35, 65, 50, 30, 55, 75, 50, 80, 40, 85],
      backgroundColor: '#4F46E5',
    },
    {
      label: 'Expenses',
      data: [80, 60, 75, 30, 85, 45, 60, 35, 50, 60, 55, 90],
      backgroundColor: '#CBD5E1',
    },
  ],
};

export default function SalesOverview() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-4'>
      <Card className='p-4 rounded-xl shadow-lg col-span-1 md:col-span-4'>
        <CardContent>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-semibold'>Sales Over View</h2>
            <MoreHorizontal className='text-gray-400 cursor-pointer' />
          </div>
          <div className='flex items-center space-x-4 text-sm mb-4'>
            <span className='flex items-center text-blue-500 font-semibold'>
              ● $9.65K / Income
            </span>
            <span className='flex items-center text-gray-400'>
              ● $3.75K / Expenses
            </span>
          </div>
          <Bar data={chartData} />
        </CardContent>
      </Card>
    </div>
  );
}
