interface customBadgeProps {
  text: string;
}

const CustomBadge = ({ text }: customBadgeProps) => {
  return (
    <div className='mb-5'>
      <p className='inline border border-primary px-3 py-1 rounded-full hover:bg-primary hover:text-white'>{text}</p>
    </div>
  );
};

export default CustomBadge;
