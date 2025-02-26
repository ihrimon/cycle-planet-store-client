import NewsHome from '@/components/news/NewsSidebar';
import Banner from '@/components/shared/Banner';

const News = () => {
  return (
    <div>
      <Banner
        title='News'
        breadcrumbs={[{ label: 'News & Blog', href: '/news' }]}
      />
      <NewsHome />
    </div>
  );
};

export default News;
