import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Eye, Pencil, Trash } from 'lucide-react';

interface Category {
  name: string;
  price: string;
  creator: string;
  id: string;
  stock: number;
  image: string;
}

const categories: Category[] = [
  {
    name: "Fashion Men, Women & Kid's",
    price: '$80 to $400',
    creator: 'Seller',
    id: 'FS16276',
    stock: 46233,
    image: '/fashion.png',
  },
  {
    name: 'Women Hand Bag',
    price: '$120 to $500',
    creator: 'Admin',
    id: 'HB73029',
    stock: 2739,
    image: '/bag.png',
  },
  {
    name: 'Cap and Hat',
    price: '$50 to $200',
    creator: 'Admin',
    id: 'CH492-9',
    stock: 1829,
    image: '/cap.png',
  },
  {
    name: 'Electronics Headphone',
    price: '$100 to $700',
    creator: 'Seller',
    id: 'EC23818',
    stock: 1902,
    image: '/headphone.png',
  },
];

const CategoryCard: React.FC<{
  image: string;
  title: string;
  bgColor: string;
}> = ({ image, title, bgColor }) => (
  <Card className={`p-4 flex flex-col items-center ${bgColor}`}>
    <img src={image} alt={title} width={50} height={50} />
    <p className='mt-2 font-semibold'>{title}</p>
  </Card>
);

const CategoriesList: React.FC = () => {
  return (
    <div className='p-6 space-y-6 w-full'>
      <div className='grid grid-cols-4 gap-4'>
        <CategoryCard
          image='/fashion.png'
          title='Fashion Categories'
          bgColor='bg-gray-100'
        />
        <CategoryCard
          image='/headphone.png'
          title='Electronics Headphone'
          bgColor='bg-red-100'
        />
        <CategoryCard
          image='/footwear.png'
          title='Foot Wares'
          bgColor='bg-yellow-100'
        />
        <CategoryCard
          image='/sunglass.png'
          title='Eye Ware & Sunglass'
          bgColor='bg-blue-100'
        />
      </div>

      <div className='flex justify-between items-center'>
        <h2 className='text-lg font-semibold'>All Categories List</h2>
        <div className='flex gap-2'>
          <Button variant='outline'>This Month</Button>
          <Button className='bg-orange-500 text-white'>Add Product</Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Categories</TableHead>
            <TableHead>Starting Price</TableHead>
            <TableHead>Create by</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Product Stock</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category, index) => (
            <TableRow key={index}>
              <TableCell className='flex items-center gap-2'>
                <img
                  src={category.image}
                  alt={category.name}
                  width={30}
                  height={30}
                />
                {category.name}
              </TableCell>
              <TableCell>{category.price}</TableCell>
              <TableCell>{category.creator}</TableCell>
              <TableCell>{category.id}</TableCell>
              <TableCell>{category.stock}</TableCell>
              <TableCell className='flex gap-2'>
                <Button variant='outline' size='icon'>
                  <Eye size={16} />
                </Button>
                <Button variant='outline' size='icon'>
                  <Pencil size={16} />
                </Button>
                <Button variant='destructive' size='icon'>
                  <Trash size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoriesList;
