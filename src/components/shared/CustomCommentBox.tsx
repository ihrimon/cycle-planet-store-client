import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill Snow Theme (Required)
import { Button } from '@/components/ui/button';

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], 
  [{ color: [] }, { background: [] }], 
  [{ list: 'ordered' }, { list: 'bullet' }], 
  [{ indent: '-1' }, { indent: '+1' }],
  ['blockquote', 'code-block'],
  ['link'], 
  ['clean'], 
];

const CustomCommentBox = () => {

   const [comment, setComment] = useState('');

   const handleSubmit = () => {
    //  console.log('Submitted Comment:', comment);
   };
  return (
    // <div className='border border-orange-200/50 rounded-lg p-4 bg-white shadow-sm'>
    //   {/* Toolbar */}
    //   <div className='mb-2'>
    //     <ReactQuill
    //       value=''
    //       readOnly={true}
    //       modules={{
    //         toolbar: [
    // ['bold', 'italic', 'underline'],
    // [{ list: 'ordered' }, { list: 'bullet' }],
    // ['link', 'image'],
    //         ],
    //       }}
    //       className='rounded-lg !border-none !bg-transparent'
    //     />
    //   </div>

    //   {/* Quill Editor & Submit Button in Flex */}
    //   <div className='flex items-center justify-between'>
    //     {/* Quill Editor */}
    //     <div className='flex-1'>
    //       <ReactQuill
    //         value={comment}
    //         onChange={setComment}
    //         placeholder='Add comment...'
    //         className='rounded-lg !border-none'
    //       />
    //     </div>

    //     {/* Submit Button */}
    //     <Button
    //       className='bg-orange-500 text-white px-4 py-2 rounded-md ml-4'
    //       onClick={handleSubmit}
    //     >
    //       Post Comment
    //     </Button>
    //   </div>
    // </div>
    <div className='border border-gray-20/50 rounded-lg p-4 shadow-sm'>
      {/* Quill Editor */}
      <ReactQuill
        value={comment}
        onChange={setComment}
        placeholder='Add comment...'
        // modules={{
        //   toolbar: [
        //     // ['bold', 'italic', 'underline'],
        //     // [{ list: 'ordered' }, { list: 'bullet' }],
        //     // ['link', 'image', 'emoji', 'mention'],
        //     // ['bold', 'italic', 'underline'],
        //     // [{ list: 'ordered' }, { list: 'bullet' }],
        //     // ['link', 'emoji'],

        //   ],
        // }}
        modules={{ toolbar: toolbarOptions }}
        className='!border-none !shadow-none !bg-transparent'
      />

      {/* Toolbar & Submit Button */}
      <div className='text-right mt-2'>
        {/* <div className='flex space-x-3 text-gray-500'>
          <button className='hover:text-black'>B</button>
          <button className='italic hover:text-black'>I</button>
          <button className='underline hover:text-black'>U</button>
          <div className='border-l h-5 mx-2'></div>
          <button className='hover:text-black'>🔗</button>
          <button className='hover:text-black'>🖼️</button>
          <button className='hover:text-black'>😊</button>
          <button className='hover:text-black'>@</button>
        </div> */}

        <Button
          className='bg-orange-500 text-white px-4 py-2 rounded-md'
          onClick={handleSubmit}
        >
          Add Comment
        </Button>
      </div>
    </div>
  );
};

export default CustomCommentBox;
