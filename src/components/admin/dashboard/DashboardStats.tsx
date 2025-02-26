import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight, ShoppingBag, FileText, DollarSign } from 'lucide-react';

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

export default function DashboardStats() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-4'>
      {stats.map((stat, index) => (
        <Card key={index} className='p-4 rounded-xl shadow-lg'>
          <CardContent className='flex flex-col space-y-2'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                {stat.icon}
                <span className='text-lg font-semibold'>{stat.title}</span>
              </div>
              <span className={`text-sm ${stat.trendColor} flex items-center`}>
                <ArrowUpRight size={14} /> {stat.trend}
              </span>
            </div>
            <h3 className='text-2xl font-bold'>{stat.value}</h3>
            <p className='text-sm text-gray-400'>in last week</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
