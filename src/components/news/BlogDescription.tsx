const BlogDescription = () => {
  const visaSteps = [
    'Key Essential Steps to Successfully Navigate and Complete Your Visa Application Process.',
    'Comprehensive Guide to Understanding the Visa Application Process and Achieving Success.',
    'Essential Steps to Achieve a Successful Visa Application Process and Ensure a Smooth Journey.',
    'Step-by-Step Guide to Navigating the Visa Application Process and Securing Your Visa.',
    'Essential Steps to Achieve a Successful Visa Application Process and Ensure a Smooth Journey.',
  ];

  return (
    <div className='max-w-2xl mx-auto py-6'>
      {/* Visa Steps List */}
      <ul className='space-y-2 text-sm'>
        {visaSteps.map((step, index) => (
          <li key={index} className='flex items-center gap-2 text-gray-800'>
            <span className='text-orange-400'>[{index + 1}] </span>{step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDescription;
