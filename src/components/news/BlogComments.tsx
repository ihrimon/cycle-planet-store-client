import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, ThumbsUp, Reply, Edit, Pencil, Trash } from 'lucide-react';
import CustomCommentBox from '../shared/CustomCommentBox';

interface Comment {
  id: number;
  name: string;
  avatar: string;
  content: string;
  time: string;
  likes: number;
  replies?: Comment[];
}

const initialComments: Comment[] = [
  {
    id: 1,
    name: 'Noah Pierre',
    avatar: '../../../public/customer-17.jpg',
    content:
      'I’m a bit unclear about how condensation forms in the water cycle. Can someone break it down?',
    time: '58 minutes ago',
    likes: 25,
    replies: [
      {
        id: 2,
        name: 'Skill Sprout',
        avatar: '../../../public/customer-7.jpg',
        content:
          'Condensation happens when water vapor cools down and changes back into liquid droplets. It’s the step before precipitation. The example with the glass of ice water in the video was a great visual!',
        time: '8 minutes ago',
        likes: 2,
      },
    ],
  },
  {
    id: 3,
    name: 'Mollie Hall',
    avatar: '../../../public/customer-17.jpg',
    content:
      'I really enjoyed today’s lesson on the water cycle! The animations made the processes so much easier to grasp.',
    time: '5 hours ago',
    likes: 10,
  },
];

const BlogComments = () => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = () => {
    if (!newComment.trim()) return;
    setComments([
      ...comments,
      {
        id: comments.length + 1,
        name: 'User Name', // Replace with authenticated user
        avatar: '/avatars/default.jpg',
        content: newComment,
        time: 'Just now',
        likes: 0,
      },
    ]);
    setNewComment('');
  };

  return (
    <div className='max-w-2xl mx-auto mt-6 space-y-10'>
      <div className='mt-4 space-y-5'>
      <h3 className='mt-6 text-lg font-semibold'>
        Comments{' '}
        <span className='text-xs px-3 py-1 w-7 h-7 bg-orange-400 rounded-full text-white'>
          {comments.length}
        </span>
      </h3>
        {comments.map((comment) => (
          <div key={comment.id}>
            <div>
              <div className='flex items-start gap-3'>
                <Avatar className='w-7 h-7'>
                  <AvatarImage src={comment.avatar} alt={comment.name} />
                </Avatar>
                <div>
                  <p className='font-semibold'>{comment.name}</p>
                  <p className='text-xs text-gray-500'>{comment.time}</p>
                  <p className='mt-2'>{comment.content}</p>
                  <div className='flex gap-3 text-sm text-gray-500 mt-2'>
                    <button className='flex items-center gap-1 hover:text-blue-500'>
                      <ThumbsUp size={14} /> {comment.likes}
                    </button>
                    <button className='flex items-center gap-1 hover:text-blue-500'>
                      <Reply size={14} /> Reply
                    </button>
                    <button className='flex items-center gap-1 hover:text-blue-500'>
                      <Pencil size={14} /> Edit
                    </button>
                    <button className='flex items-center gap-1 hover:text-blue-500'>
                      <Trash size={14} /> Delete
                    </button>
                  </div>

                  {/* Replies */}
                  {comment.replies && (
                    <div className='mt-3 space-y-3 border border-gray-100 rounded-md'>
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className='p-4 bg-gray-50/50'>
                          <div>
                            <div className='flex items-start gap-3'>
                              <Avatar>
                                <AvatarImage
                                  src={reply.avatar}
                                  alt={reply.name}
                                />
                              </Avatar>
                              <div>
                                <p className='font-semibold'>{reply.name}</p>
                                <p className='text-xs text-gray-500'>
                                  {reply.time}
                                </p>
                                <p className='mt-2'>{reply.content}</p>
                                <div className='flex gap-3 text-sm text-gray-500 mt-2'>
                                  <button className='flex items-center gap-1 hover:text-blue-500'>
                                    <ThumbsUp size={14} /> {reply.likes}
                                  </button>
                                  <button className='flex items-center gap-1 hover:text-blue-500'>
                                    <Reply size={14} /> Reply
                                  </button>
                                  <button className='flex items-center gap-1 hover:text-blue-500'>
                                    <Pencil size={14} /> Edit
                                  </button>
                                  <button className='flex items-center gap-1 hover:text-blue-500'>
                                    <Trash size={14} /> Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {/* <div >
          <Textarea
            placeholder='Add a comment...'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className='mt-2 flex justify-end'>
            <Button onClick={handleCommentSubmit}>Submit</Button>
          </div>
        </div> */}
        <CustomCommentBox />
      </div>
    </div>
  );
};

export default BlogComments;
