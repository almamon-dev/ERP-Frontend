import React, { useTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import dashboardImg from '@/assets/images/hr-icons/dashboard.png';
import employeeMgmtImg from '@/assets/images/hr-icons/employee-management.png';
import approvalImg from '@/assets/images/hr-icons/approval.png';
import selfServiceImg from '@/assets/images/hr-icons/self-service.png';

export const HRModuleSelectorPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [, startTransition] = useTransition();

  const handleNavigate = (path: string) => {
    startTransition(() => {
      navigate(path);
    });
  };

  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'GOOD MORNING';
    if (hour < 18) return 'GOOD AFTERNOON';
    return 'GOOD NIGHT';
  };

  const hrCards = [
    {
      title: 'Dashboard',
      path: '/hr/management/dashboard',
      image: dashboardImg,
    },
    {
      title: 'Employee Management',
      path: '/hr/management/employees',
      image: employeeMgmtImg,
    },
    {
      title: 'Approval',
      path: '/hr/management/leave/requests',
      image: approvalImg,
    },
    {
      title: 'Employee Self Service',
      path: '/hr/workspace/dashboard',
      image: selfServiceImg,
    },
  ];

  return (
    <div className="p-6 lg:px-12 lg:py-8 max-w-[1440px] mx-auto flex-1 w-full flex flex-col justify-center items-center min-h-[70vh] pb-32 font-sans">
      {/* Header Greeting */}
      <div className="text-center space-y-1.5 mb-12">
        <span className="text-[12px] font-extrabold tracking-widest text-[#2563EB] uppercase">
          {getTimeGreeting()}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A8A] flex items-center justify-center gap-2 tracking-tight">
          {user?.name || 'Al Mamon'} <span className="animate-bounce">👋</span>
        </h1>
        <p className="text-[14px] font-medium text-slate-400">
          Welcome back to PeopleDesk
        </p>
      </div>

      {/* Grid of Square Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-4xl w-full justify-items-center">
        {hrCards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleNavigate(card.path)}
            className="flex flex-col items-center cursor-pointer group w-44 sm:w-48"
          >
            {/* White Rounded Square Box (Contains ONLY the Image Graphic) */}
            <div className="w-44 h-44 sm:w-48 sm:h-48 bg-white rounded-2xl border border-slate-200/90 shadow-2xs group-hover:shadow-md group-hover:border-blue-400 group-hover:-translate-y-1 transition-all flex items-center justify-center p-2 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-contain scale-115 group-hover:scale-125 transition-transform duration-300"
              />
            </div>

            {/* Title Label OUTSIDE / BELOW the Card Box */}
            <span className="mt-3.5 text-[15px] font-bold text-[#0B1E43] text-center max-w-[150px] leading-snug group-hover:text-blue-600 transition-colors">
              {card.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
