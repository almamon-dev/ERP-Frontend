import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { HRHeader } from './HRHeader';
import { HRSidebar } from './HRSidebar';
import { HRFooter } from './HRFooter';
import { HRBreadcrumb } from './HRBreadcrumb';
import ModuleSelectorModal from '@/components/modals/module-selector-modal';

export const HRLayout: React.FC = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModuleModalOpen, setIsModuleModalOpen] = useState(false);

  const isSelectorPage = location.pathname === '/hr' || location.pathname === '/hr/' || location.pathname === '/hr/dashboard';

  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden font-sans">
      {!isSelectorPage && isSidebarOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      {!isSelectorPage && <HRSidebar isOpen={isSidebarOpen} />}

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <HRHeader
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onOpenModuleModal={() => setIsModuleModalOpen(true)}
          isSelectorPage={isSelectorPage}
        />
        {!isSelectorPage && <HRBreadcrumb />}
        <main className={`flex-1 overflow-y-auto bg-[#f8fafc] p-4 sm:p-6 ${isSelectorPage ? 'pb-20' : ''}`}>
          <Outlet />
        </main>
        {isSelectorPage && <HRFooter />}
      </div>

      <ModuleSelectorModal isOpen={isModuleModalOpen} onClose={() => setIsModuleModalOpen(false)} />
    </div>
  );
};

export default HRLayout;
