import { useState } from 'react';
import { RoleCard } from './RoleCard';
import {
  Monitor,
  Calculator,
  Bug,
  PenTool,
  BarChart2,
  Code,
  Users,
  UserCog,
} from 'lucide-react';

interface Role {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const roles: Role[] = [
  {
    id: 'project-manager',
    title: 'Project Manager',
    icon: <Monitor className='w-8 h-8' />,
  },
  {
    id: 'account-manager',
    title: 'Account Manager',
    icon: <Calculator className='w-8 h-8' />,
  },
  {
    id: 'qa-engineer',
    title: 'QA Engineer',
    icon: <Bug className='w-8 h-8' />,
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    icon: <PenTool className='w-8 h-8' />,
  },
  {
    id: 'business-analyst',
    title: 'Business Analyst',
    icon: <BarChart2 className='w-8 h-8' />,
  },
  { id: 'developer', title: 'Developer', icon: <Code className='w-8 h-8' /> },
  { id: 'recruiter', title: 'Recruiter', icon: <Users className='w-8 h-8' /> },
  { id: 'hr', title: 'HR', icon: <UserCog className='w-8 h-8' /> },
];

export const UserTypeSelection = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='max-w-4xl w-full mx-auto flex flex-col items-center animate-fade-in'>
        <div className='text-center mb-12'>
          <h1 className='text-3xl font-semibold text-gray-900 mb-4'>
            CPLANET Core Values
          </h1>
          <p className='text-gray-600 max-w-lg'>
            To continue, select your role in this project, please.
            <br />
            If you don't know your role clarify it with your Project Manager.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full'>
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              title={role.title}
              icon={role.icon}
              isSelected={selectedRole === role.id}
              onClick={() => setSelectedRole(role.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
