import React from 'react';
import { User } from 'lucide-react';

const MANAGERS = [
  { id: 1, name: 'Md. Ridoy', role: 'Supervisor', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' },
  { id: 2, name: 'Md. Ridoy', role: 'Dotted Supervisor', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' },
  { id: 3, name: 'Md. Kamruzzaman', role: 'Line Manager', isDefault: true },
];

export const MyManagerCard: React.FC = () => {
  return (
    <div className="bg-white p-3.5 sm:p-4 rounded-[3px] border border-slate-200 shadow-2xs space-y-3.5">
      <h3 className="font-semibold text-[15px] sm:text-[16px] leading-[22px] text-[#3b5998]">My Manager</h3>
      <div className="space-y-3">
        {MANAGERS.map((m) => (
          <div key={m.id} className="flex items-center gap-3">
            {m.avatar ? (
              <img src={m.avatar} alt={m.name} className="w-9 h-9 rounded-full object-cover shrink-0" />
            ) : (
              <div className="w-9 h-9 rounded-full bg-[#eef2f7] text-[#6c7a91] flex items-center justify-center shrink-0">
                <User size={18} />
              </div>
            )}
            <div>
              <h4 className="font-semibold text-[13.5px] sm:text-[14px] leading-[19px] text-[#2d3748] whitespace-nowrap">{m.name}</h4>
              <p className="font-normal text-[12.5px] sm:text-[13px] leading-[18px] text-[#718096] whitespace-nowrap">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
