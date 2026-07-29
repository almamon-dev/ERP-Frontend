import React from 'react';

interface ExpenseCategoriesProps {
  categories?: any[];
}

export default function ExpenseCategories({ categories }: ExpenseCategoriesProps) {
  const defaultCategories = [
    { name: 'Conveyance & Travel', limit: '৳ 10,000 / mo', icon: '🚕', desc: 'Uber, Rickshaw, Intercity Train & Bus' },
    { name: 'Food & Client Entertainment', limit: '৳ 15,000 / mo', icon: '🍽️', desc: 'Team Lunches, Client Meetings, Refreshments' },
    { name: 'Office Supplies & Stationery', limit: '৳ 5,000 / mo', icon: '📦', desc: 'Printing, Papers, Pens, Cartridges' },
    { name: 'Utilities & Internet', limit: '৳ 4,000 / mo', icon: '🌐', desc: 'Official Broadband & Mobile Allowance' },
  ];

  const list = categories || defaultCategories;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-200 font-sans">
      {list.map((cat, idx) => (
        <div key={idx} className="bg-white p-4 rounded-md border border-slate-200/80 shadow-2xs flex items-start gap-3">
          <div className="text-2xl p-2 bg-slate-50 rounded-md border border-slate-100">{cat.icon}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-[13.5px] font-semibold text-slate-800">{cat.name}</h3>
              <span className="text-[11px] font-medium text-[#008060] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                {cat.limit}
              </span>
            </div>
            <p className="text-[12px] text-slate-500 mt-1">{cat.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
