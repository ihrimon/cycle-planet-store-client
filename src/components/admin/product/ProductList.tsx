import { useState } from 'react';
import { Eye, Pencil, Trash2, Plus, Coffee } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
  useDeleteProductMutation,
  useFetchAllProductsQuery,
} from '@/redux/features/product/productApi';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import customToaster from '@/utils/customToaster';
import { TProduct } from '@/types';
import { Skeleton } from '@/components/ui/skeleton';

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [entriesCount, setEntriesCount] = useState(10);
  const { data: productData, isLoading } = useFetchAllProductsQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation();

  const handleAction = async (
    type: 'view' | 'edit' | 'delete',
    productId: string
  ) => {
    if (type === 'delete') {
      await deleteProduct(productId).unwrap();

      customToaster({
        description: '✅ Product has been removed successfully.',
        action: 'OK',
        actionType: 'success',
      });
    }
  };

  const products = productData?.data?.result || ([] as TProduct[]);

  // Filtering products based on search query
  const filteredProducts = products.filter((product: TProduct) => {
    const query = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.sku.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query)
    );
  });

  const paginatedProducts = filteredProducts.slice(0, entriesCount);

  if (isLoading) {
    return (
      <div className='flex flex-col space-y-5 justify-center items-center'>
        <Skeleton className='h-[125px] max-w-5xl rounded-xl' />
        <div className='space-y-2'>
          <Skeleton className='h-4 max-w-5xl' />
          <Skeleton className='h-4 max-w-5xl' />
        </div>
      </div>
    );
  }

  return (
    <div className='mx-auto p-4 md:p-6 space-y-4 md:space-y-6'>
      {/* Header Section */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
        <h1 className='text-3xl text-primary font-bold'>
          Product List
        </h1>
        <p className='text-sm text-muted-foreground'>
          Dashboard / Products / Product List
        </p>
      </div>

      <div className='flex items-start md:items-center gap-2 flex-col md:flex-row'>
        <Coffee className='h-5 w-5 text-primary' />
        <p className='text-sm text-muted-foreground'>
          Tip search by SKU Id: Each product is provided with a unique ID, which
          you can rely on to find the exact product you need.
        </p>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
        <div className='flex items-center gap-2'>
          <span className='text-sm'>Showing</span>
          <Select
            value={String(entriesCount)}
            onValueChange={(value) => setEntriesCount(Number(value))}
          >
            <SelectTrigger className='w-20 py-3'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='10'>10</SelectItem>
              <SelectItem value='20'>20</SelectItem>
              <SelectItem value='50'>50</SelectItem>
            </SelectContent>
          </Select>
          <span className='text-sm'>entries</span>
        </div>

        {/* Search & Add Button */}
        <div className='flex flex-col md:flex-row gap-4 w-full md:w-auto'>
          <Input
            type='search'
            placeholder='Search here... eg: name, SKU, category'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full md:w-[300px]'
          />
          <Link to={'/dashboard/admin/products/add-product'}>
            <Button className='gap-2'>
              <Plus className='h-4 w-4' />
              Add new
            </Button>
          </Link>
        </div>
      </div>

      {/* Table Container with Responsive Scroll */}
      {paginatedProducts.length > 0 ? (
        <div className='overflow-x-auto'>
          <Table className='w-full min-w-[800px]'>
            <TableHeader>
              <TableRow className='bg-gray-100'>
                <TableHead>S.I</TableHead>
                <TableHead className='text-start'>
                  Product Name & Image
                </TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Add Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedProducts?.map((product: TProduct, index: number) => (
                <TableRow
                  key={product._id}
                  className={index % 2 === 0 ? 'table-row-bg' : ''}
                >
                  <TableCell className='text-center'>{index + 1}</TableCell>
                  <TableCell>
                    <div className='flex items-center gap-3'>
                      <Dialog>
                        <DialogTrigger asChild>
                          <img
                            src={product.productImg[0]}
                            alt={product.name}
                            className='h-10 w-10 rounded-lg border object-cover cursor-pointer hover:scale-110 transition-transform'
                          />
                        </DialogTrigger>
                        <DialogContent className='max-w-lg'>
                          <img
                            src={product.productImg[0]}
                            alt={product.name}
                            className='w-full h-auto rounded-lg'
                          />
                        </DialogContent>
                      </Dialog>
                      <span className='font-medium'>{product.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className='text-center'>{product.sku}</TableCell>
                  <TableCell className='text-center'>
                    {product.category}
                  </TableCell>
                  <TableCell className='text-center'>{product.brand}</TableCell>
                  <TableCell className='text-end'>
                    ${product.price.toFixed(2)}
                  </TableCell>
                  <TableCell className='text-center'>
                    {product.quantity}
                  </TableCell>
                  <TableCell
                    className={
                      product.inStock
                        ? 'text-green-500 font-medium'
                        : 'text-red-600'
                    }
                  >
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </TableCell>
                  <TableCell className='text-center'>
                    {product.addDate}
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center justify-center gap-2'>
                      <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => handleAction('view', product._id)}
                      >
                        <Eye className='h-4 w-4 text-blue-500' />
                      </Button>
                      <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => handleAction('edit', product._id)}
                      >
                        <Pencil className='h-4 w-4 text-green-500' />
                      </Button>
                      <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => handleAction('delete', product._id)}
                      >
                        <Trash2 className='h-4 w-4 text-red-500' />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <>
          <h1 className='text-2xl text-center text-red-500/50 font-medium pt-36'>
            Your searching product is not available
          </h1>
        </>
      )}
    </div>
  );
};

export default ProductList;
