import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
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
   };
  return (
    <div className='border border-gray-20/50 rounded-lg p-4 shadow-sm'>
      {/* Quill Editor */}
      <ReactQuill
        value={comment}
        onChange={setComment}
        placeholder='Add comment...'
        modules={{ toolbar: toolbarOptions }}
        className='!border-none !shadow-none !bg-transparent'
      />

      {/* Toolbar & Submit Button */}
      <div className='text-right mt-2'>
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
