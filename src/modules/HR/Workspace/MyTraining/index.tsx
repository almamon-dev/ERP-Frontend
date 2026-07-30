import React from 'react';

export default function Page() {
  return (
    <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen">
      <div className="mb-5">
        <h1 className="text-[20px] font-bold text-slate-900">My Training & Certifications</h1>
        <p className="text-[13px] font-medium text-[#008060] mt-0.5">Enrolled training programs, skill progress, and earned certificates.</p>
      </div>
      <div className="bg-white p-6 rounded-[3px] border border-slate-200 shadow-2xs">
        <p className="text-slate-600 text-[13px]">My Training & Certifications module loaded successfully.</p>
      </div>
    </div>
  );
}
