import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

interface Specification {
  label: string;
  value: string | number;
}

const Specification = () => {
  const specifications: Specification[] = [
    { label: 'Bike Type', value: 'Kids Bike' },
    { label: 'Age Range (Description)', value: 'Little Kids 3-5 Years' },
    { label: 'Brand', value: 'JOYSTAR' },
    { label: 'Number of Speeds', value: 1 },
    { label: 'Color', value: 'LittleDaisy-Blue' },
    { label: 'Wheel Size', value: '14 Inches' },
    { label: 'Frame Material', value: 'Carbon Steel' },
    { label: 'Suspension Type', value: 'Rigid' },
    { label: 'Special Feature', value: 'Come with Doll Bike Seat' },
    {
      label: 'Included Components',
      value: 'bell basket doll bike seat training wheels streamers',
    },
    { label: 'Size', value: '14 Inch with Training Wheels' },
    { label: 'Brake Style', value: 'Coaster+Caliper Brake' },
    { label: 'Specific Uses For Product', value: 'Road' },
    { label: 'Item Weight', value: '19.2 Pounds' },
    { label: 'Theme', value: 'Princess' },
    { label: 'Style', value: '14 Inch With Training Wheels' },
  ];

  return (
    <div className='w-full'>
      <Table>
        <TableBody>
          {specifications.map((spec, index) => (
            <TableRow
              key={index}
              className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900/70' : ''}
            >
              <TableCell className='font-medium w-1/3'>{spec.label}</TableCell>
              <TableCell className='text-gray-600'>{spec.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Specification;
