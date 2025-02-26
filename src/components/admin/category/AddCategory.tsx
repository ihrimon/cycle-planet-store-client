import ProductForm, { ProductFormData } from './ProductForm';

function AddCategory() {
  const handleSubmit = (data: ProductFormData) => {
    console.log('Form submitted:', data);
    // Handle form submission here
  };

  return (
    <div className='min-h-screen bg-background'>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddCategory;
