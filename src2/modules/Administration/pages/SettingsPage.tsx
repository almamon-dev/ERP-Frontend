import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ArrowLeft, Users, ShieldCheck, Building2, Network, Globe,
  Calculator, Mail, Webhook, Brain, Bell, HardDrive,
  ClipboardList, Lock, RefreshCcw, Settings, CreditCard, Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import UserManagement from '../components/UserManagement';

import { navigationMap } from '@/constants/navigation';

import GenericModule from '../components/GenericModule';

export default function SettingsPage() {
  const location = useLocation();
  // Extract the sub-path, defaulting to 'system'
  const currentPath = location.pathname.split('/settings/')[1] || 'system';

  // Flatten the settings navigation map to get all available paths
  const flattenedMenus = navigationMap['settings'].reduce((acc: any[], item: any) => {
      if (item.group) {
          return [...acc, ...item.items];
      }
      return [...acc, item];
  }, []);

  const activeMenu = flattenedMenus.find((m: any) => m.path === `/settings/${currentPath}`) || flattenedMenus.find((m: any) => m.path === '/settings/system');

  return (
    <div className="p-4 md:p-6 lg:p-8 w-full mx-auto h-full flex flex-col">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col h-full">
        {/* Dynamic Content Area */}
        {currentPath === 'users' ? (
          <UserManagement />
        ) : (
          <GenericModule 
            title={activeMenu?.name || 'Settings Module'} 
            description={`Configure and manage your ${activeMenu?.name?.toLowerCase() || 'module'} settings here.`}
          />
        )}
      </div>
    </div>
  );
}
