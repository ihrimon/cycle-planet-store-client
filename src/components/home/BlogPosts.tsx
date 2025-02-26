import Container from '../shared/Container';
import { BlogCard } from './BlogCard';

const blogPosts = [
  {
    date: { day: '20', month: 'SEP' },
    author: 'Admin',
    comments: 2,
    title: 'The quality role of the elementary teacher in education',
    image:
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    date: { day: '20', month: 'SEP' },
    author: 'Admin',
    comments: 2,
    title: 'The quality role of the elementary teacher in education',
    image:
      'https://plus.unsplash.com/premium_photo-1661963485383-223be0058b07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    date: { day: '20', month: 'SEP' },
    author: 'Admin',
    comments: 2,
    title: 'The quality role of the elementary teacher in education',
    image:
      'https://images.unsplash.com/photo-1596738141905-51e94b519d69?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export function BlogPosts() {
  return (
    <Container>
      <section className='w-full bg-background py-24 mx-auto'>
        <div>
          <div className='mb-16 text-center'>
            <span className='mb-4 block text-sm font-medium uppercase tracking-wider text-green-500'>
              DIRECTLY FROM BLOG
            </span>
            <h2 className='text-4xl font-bold tracking-tight sm:text-5xl'>
              Latest News & Blog
            </h2>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
