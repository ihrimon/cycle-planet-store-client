import { Coffee } from 'lucide-react'

interface dashboardHeaderProps  {
    heading: string;
    breadcrumb: string;
    content?: string;
}

const DashboardHeader = ({heading, breadcrumb, content}: dashboardHeaderProps) => {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
        <h1 className='text-3xl text-primary font-bold'>{heading}</h1>
        <p className='text-sm text-muted-foreground'>{breadcrumb}</p>
      </div>

      {content && (
        <div className='flex items-start md:items-center gap-2 flex-col md:flex-row mt-3'>
          <Coffee className='h-5 w-5 text-primary' />
          <p className='text-sm text-muted-foreground'>{content}</p>
        </div>
      )}
    </div>
  );
}

export default DashboardHeader