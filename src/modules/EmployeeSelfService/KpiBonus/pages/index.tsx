import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Award, RefreshCw, User, Edit3, DollarSign, RotateCcw, Layers,
  HelpCircle, ChevronRight, ArrowLeft, Settings, ShieldAlert, Eye,
  ShoppingBag, Users, Target, CheckCircle2, Search, Filter, ShieldCheck, Briefcase, ExternalLink, ListChecks
} from 'lucide-react';
import Select from '@/components/ui/select';
import Button from '@/components/ui/button';

export default function KpiBonusPage() {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');

  // 3 Essential Employee Tabs: 'summary' (KPI & Bonus Summary) vs 'operations' (Operations Project History) vs 'campaign' (Campaign & Sales Commission)
  const [mainPageTab, setMainPageTab] = useState<'summary' | 'operations' | 'campaign'>(
    tabParam === 'campaign' ? 'campaign' : tabParam === 'operations' ? 'operations' : 'summary'
  );

  // Sync state if URL query param changes
  useEffect(() => {
    if (tabParam === 'campaign') {
      setMainPageTab('campaign');
    } else if (tabParam === 'operations') {
      setMainPageTab('operations');
    } else {
      setMainPageTab('summary');
    }
  }, [tabParam]);

  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedQuarter, setSelectedQuarter] = useState('Q1 (Jul - Sep)');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // Detailed Record Page View Toggle
  const [selectedRowDetail, setSelectedRowDetail] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState<'kpiLines' | 'penaltyRecord'>('kpiLines');

  // Campaign Sub-Tab: 'products' | 'clients' | 'commissions'
  const [campaignTab, setCampaignTab] = useState<'products' | 'clients' | 'commissions'>('products');

  // LOGGED-IN EMPLOYEE (AL MAMON) KPI & BONUS LEDGER DATA FOR ESS
  const allEmployeesBonusLedgerData = [
    {
      id: 1,
      employee: 'Al Mamon',
      empId: '15202',
      role: 'Operation Man',
      team: 'Pixel Pioneers',
      assignProject: 'ERP Portal Customization',
      projectValue: '$ 5,500.00',
      projectManager: 'Sarah Jenkins',
      teamLeader: 'Tanvir Ahmed',
      quarterlyTargets: {
        'Q1 (Jul - Sep)': { target: '$ 3,300', sales: '$ 1,724', unpaid: '$ 2,560', bonus: '৳ 2,484', salesCount: 7, elBonus: '৳ 0', currentBonus: '৳ 0', preCarry: '৳ 883', newCarry: '৳ 0', totalCarry: '৳ 7,437', status: 'Approved' },
        'Q2 (Oct - Dec)': { target: '$ 3,600', sales: '$ 3,100', unpaid: '$ 1,400', bonus: '৳ 3,150', salesCount: 10, elBonus: '৳ 1,000', currentBonus: '৳ 1,000', preCarry: '৳ 500', newCarry: '৳ 0', totalCarry: '৳ 6,200', status: 'Approved' },
        'Q3 (Jan - Mar)': { target: '$ 4,000', sales: '$ 4,100', unpaid: '$ 800', bonus: '৳ 4,200', salesCount: 14, elBonus: '৳ 2,500', currentBonus: '৳ 2,500', preCarry: '৳ 200', newCarry: '৳ 0', totalCarry: '৳ 5,100', status: 'Calculated' },
        'Q4 (Apr - Jun)': { target: '$ 4,200', sales: '$ 4,600', unpaid: '$ 300', bonus: '৳ 4,900', salesCount: 16, elBonus: '৳ 3,200', currentBonus: '৳ 3,200', preCarry: '৳ 0', newCarry: '৳ 0', totalCarry: '৳ 4,500', status: 'In Progress' },
      }
    },
    {
      id: 2,
      employee: 'Al Mamon',
      empId: '15202',
      role: 'Operation Man',
      team: 'Pixel Pioneers',
      assignProject: 'CRM Sync & Pipeline v2',
      projectValue: '$ 8,200.00',
      projectManager: 'Sarah Jenkins',
      teamLeader: 'Tanvir Ahmed',
      quarterlyTargets: {
        'Q1 (Jul - Sep)': { target: '$ 5,000', sales: '$ 4,800', unpaid: '$ 1,200', bonus: '৳ 5,700', salesCount: 12, elBonus: '৳ 4,500', currentBonus: '৳ 4,500', preCarry: '৳ 1,200', newCarry: '৳ 0', totalCarry: '৳ 5,700', status: 'Confirmed' },
        'Q2 (Oct - Dec)': { target: '$ 5,500', sales: '$ 5,800', unpaid: '$ 800', bonus: '৳ 6,200', salesCount: 15, elBonus: '৳ 5,000', currentBonus: '৳ 5,000', preCarry: '৳ 800', newCarry: '৳ 0', totalCarry: '৳ 5,800', status: 'Approved' },
        'Q3 (Jan - Mar)': { target: '$ 6,000', sales: '$ 6,400', unpaid: '$ 500', bonus: '৳ 7,100', salesCount: 18, elBonus: '৳ 6,000', currentBonus: '৳ 6,000', preCarry: '৳ 500', newCarry: '৳ 0', totalCarry: '৳ 6,500', status: 'Calculated' },
        'Q4 (Apr - Jun)': { target: '$ 6,500', sales: '$ 6,200', unpaid: '$ 900', bonus: '৳ 6,800', salesCount: 16, elBonus: '৳ 5,500', currentBonus: '৳ 5,500', preCarry: '৳ 200', newCarry: '৳ 0', totalCarry: '৳ 5,700', status: 'In Progress' },
      }
    },
    {
      id: 3,
      employee: 'Al Mamon',
      empId: '15202',
      role: 'Operation Man',
      team: 'Pixel Pioneers',
      assignProject: 'Enterprise Multi-Tenant Rollout',
      projectValue: '$ 12,500.00',
      projectManager: 'Sarah Jenkins',
      teamLeader: 'Tanvir Ahmed',
      quarterlyTargets: {
        'Q1 (Jul - Sep)': { target: '$ 12,000', sales: '$ 14,500', unpaid: '$ 3,100', bonus: '৳ 15,400', salesCount: 28, elBonus: '৳ 12,000', currentBonus: '৳ 12,000', preCarry: '৳ 3,400', newCarry: '৳ 0', totalCarry: '৳ 15,400', status: 'Approved' },
        'Q2 (Oct - Dec)': { target: '$ 14,000', sales: '$ 16,200', unpaid: '$ 2,500', bonus: '৳ 18,000', salesCount: 32, elBonus: '৳ 14,000', currentBonus: '৳ 14,000', preCarry: '৳ 2,500', newCarry: '৳ 0', totalCarry: '৳ 16,500', status: 'Approved' },
        'Q3 (Jan - Mar)': { target: '$ 15,000', sales: '$ 15,800', unpaid: '$ 1,800', bonus: '৳ 17,200', salesCount: 30, elBonus: '৳ 13,500', currentBonus: '৳ 13,500', preCarry: '৳ 1,800', newCarry: '৳ 0', totalCarry: '৳ 15,300', status: 'Calculated' },
        'Q4 (Apr - Jun)': { target: '$ 16,000', sales: '$ 17,500', unpaid: '$ 1,200', bonus: '৳ 19,100', salesCount: 35, elBonus: '৳ 15,000', currentBonus: '৳ 15,000', preCarry: '৳ 1,200', newCarry: '৳ 0', totalCarry: '৳ 16,200', status: 'In Progress' },
      }
    },
    {
      id: 4,
      employee: 'Al Mamon',
      empId: '15202',
      role: 'Operation Man',
      team: 'Pixel Pioneers',
      assignProject: 'Mobile App API Gateway',
      projectValue: '$ 4,800.00',
      projectManager: 'Sarah Jenkins',
      teamLeader: 'Tanvir Ahmed',
      quarterlyTargets: {
        'Q1 (Jul - Sep)': { target: '$ 3,300', sales: '$ 2,900', unpaid: '$ 950', bonus: '৳ 1,650', salesCount: 5, elBonus: '৳ 1,200', currentBonus: '৳ 1,200', preCarry: '৳ 450', newCarry: '৳ 0', totalCarry: '৳ 1,650', status: 'In Progress' },
        'Q2 (Oct - Dec)': { target: '$ 3,500', sales: '$ 3,400', unpaid: '$ 600', bonus: '৳ 2,100', salesCount: 8, elBonus: '৳ 1,600', currentBonus: '৳ 1,600', preCarry: '৳ 200', newCarry: '৳ 0', totalCarry: '৳ 1,800', status: 'Approved' },
        'Q3 (Jan - Mar)': { target: '$ 3,800', sales: '$ 3,900', unpaid: '$ 400', bonus: '৳ 2,800', salesCount: 11, elBonus: '৳ 2,200', currentBonus: '৳ 2,200', preCarry: '৳ 100', newCarry: '৳ 0', totalCarry: '৳ 2,300', status: 'Calculated' },
        'Q4 (Apr - Jun)': { target: '$ 4,000', sales: '$ 4,100', unpaid: '$ 300', bonus: '৳ 3,200', salesCount: 13, elBonus: '৳ 2,600', currentBonus: '৳ 2,600', preCarry: '৳ 0', newCarry: '৳ 0', totalCarry: '৳ 2,600', status: 'In Progress' },
      }
    },
    {
      id: 5,
      employee: 'Al Mamon',
      empId: '15202',
      role: 'Operation Man',
      team: 'Pixel Pioneers',
      assignProject: 'Inventory Warehouse Sync',
      projectValue: '$ 6,000.00',
      projectManager: 'Sarah Jenkins',
      teamLeader: 'Tanvir Ahmed',
      quarterlyTargets: {
        'Q1 (Jul - Sep)': { target: '$ 3,300', sales: '$ 3,450', unpaid: '$ 600', bonus: '৳ 2,800', salesCount: 9, elBonus: '৳ 2,800', currentBonus: '৳ 2,800', preCarry: '৳ 0', newCarry: '৳ 0', totalCarry: '৳ 2,800', status: 'Paid' },
        'Q2 (Oct - Dec)': { target: '$ 3,600', sales: '$ 3,800', unpaid: '$ 400', bonus: '৳ 3,200', salesCount: 11, elBonus: '৳ 3,000', currentBonus: '৳ 3,000', preCarry: '৳ 0', newCarry: '৳ 0', totalCarry: '৳ 3,000', status: 'Approved' },
        'Q3 (Jan - Mar)': { target: '$ 4,000', sales: '$ 4,200', unpaid: '$ 300', bonus: '৳ 3,900', salesCount: 13, elBonus: '৳ 3,600', currentBonus: '৳ 3,600', preCarry: '৳ 0', newCarry: '৳ 0', totalCarry: '৳ 3,600', status: 'Calculated' },
        'Q4 (Apr - Jun)': { target: '$ 4,200', sales: '$ 4,500', unpaid: '$ 200', bonus: '৳ 4,400', salesCount: 15, elBonus: '৳ 4,100', currentBonus: '৳ 4,100', preCarry: '৳ 0', newCarry: '৳ 0', totalCarry: '৳ 4,100', status: 'In Progress' },
      }
    }
  ];

  // EXACT OPERATIONS ORDER HISTORY & KPI LINES MATCHING USER REFERENCE SCREENSHOT
  const operationsHistoryLines = [
    {
      sn: 1,
      name: 'EO/38109',
      date: '16 Jun, 2026',
      createdOn: '16 Jun 2026 10:30 AM',
      assignEmpId: 'EMP-15202',
      assignEmpName: 'Al Mamon',
      empId: 'EMP-15202',
      empName: 'Al Mamon',
      company: 'Lee Studio Inc.',
      orderStatus: 'Delivered',
      salesBonus: '৳ 300.00',
      orderLink: 'FO322B7783787',
      orderNumber: 'FO322B7783787',
      customer: 'fajerhs',
      bonusProfileName: 'Operations Standard Bonus',
      serviceLine: 'ERP Customization',
      assignedTeam: 'Pixel Pioneers',
      totalAmount: '$ 200.00',
      monetaryValue: '$ 200.00',
      paymentDate: '30 Jun 2026',
      paymentDue: '30 Jun 2026',
      currency: 'USD ($)',
      reversion: 'No',
      kpiStatus: 'Approved',
      bonusPayout: '৳ 300.00'
    },
    {
      sn: 2,
      name: 'EO/33058',
      date: '24 May, 2026',
      createdOn: '24 May 2026 02:15 PM',
      assignEmpId: 'EMP-15202',
      assignEmpName: 'Al Mamon',
      empId: 'EMP-15202',
      empName: 'Al Mamon',
      company: 'Illogre Tech Solutions',
      orderStatus: 'Delivered',
      salesBonus: '৳ 600.00',
      orderLink: 'FO1DDCAB2043',
      orderNumber: 'FO1DDCAB2043',
      customer: 'illogre',
      bonusProfileName: 'Operations Standard Bonus',
      serviceLine: 'CRM Sync Modules',
      assignedTeam: 'Pixel Pioneers',
      totalAmount: '$ 400.00',
      monetaryValue: '$ 400.00',
      paymentDate: '—',
      paymentDue: '15 Jul 2026',
      currency: 'USD ($)',
      reversion: 'No',
      kpiStatus: 'In Progress',
      bonusPayout: '৳ 0.00'
    },
    {
      sn: 3,
      name: 'EO/33018',
      date: '12 May, 2026',
      createdOn: '12 May 2026 11:45 AM',
      assignEmpId: 'EMP-15202',
      assignEmpName: 'Al Mamon',
      empId: 'EMP-15202',
      empName: 'Al Mamon',
      company: 'Lee Studio Inc.',
      orderStatus: 'Delivered',
      salesBonus: '৳ 1,200.00',
      orderLink: 'FO21BBEAD3786',
      orderNumber: 'FO21BBEAD3786',
      customer: 'lee5391',
      bonusProfileName: 'Operations Premium Bonus',
      serviceLine: 'ERP Enterprise License',
      assignedTeam: 'Pixel Pioneers',
      totalAmount: '$ 1,000.00',
      monetaryValue: '$ 1,000.00',
      paymentDate: '—',
      paymentDue: '30 Jul 2026',
      currency: 'USD ($)',
      reversion: 'No',
      kpiStatus: 'Verified',
      bonusPayout: '৳ 1,200.00'
    },
    {
      sn: 4,
      name: 'EO/31044',
      date: '28 Apr, 2026',
      createdOn: '28 Apr 2026 09:10 AM',
      assignEmpId: 'EMP-15202',
      assignEmpName: 'Al Mamon',
      empId: 'EMP-15202',
      empName: 'Al Mamon',
      company: 'Studio Max Global',
      orderStatus: 'Delivered',
      salesBonus: '৳ 184.00',
      orderLink: 'FO992BAA1092',
      orderNumber: 'FO992BAA1092',
      customer: 'studiomax',
      bonusProfileName: 'Operations Standard Bonus',
      serviceLine: 'UI Pack Integration',
      assignedTeam: 'Pixel Pioneers',
      totalAmount: '$ 124.00',
      monetaryValue: '$ 124.00',
      paymentDate: '05 May 2026',
      paymentDue: '05 May 2026',
      currency: 'USD ($)',
      reversion: 'No',
      kpiStatus: 'Approved',
      bonusPayout: '৳ 184.00'
    }
  ];

  // Penalty Records
  const penaltyRecords = [
    { id: 1, date: '15 May, 2026', reason: 'Late Delivery SLA Breach', deducted: '$ 50.00', status: 'Applied' },
  ];

  // Campaign Top Products Data
  const topProductsData = [
    { id: 1, name: 'ERP Software Enterprise License', category: 'Software', salesCount: 14, totalAmount: '$ 1,200.00', commission: '৳ 1,800' },
    { id: 2, name: 'Custom Module Development Pack', category: 'Services', salesCount: 8, totalAmount: '$ 524.00', commission: '৳ 684' },
    { id: 3, name: 'Cloud Backup & Maintenance SLA', category: 'Support', salesCount: 6, totalAmount: '$ 450.00', commission: '৳ 450' },
  ];

  // Campaign Top Clients Data
  const topClientsData = [
    { id: 1, name: 'lee5391', company: 'Lee Studio Inc.', ordersCount: 3, salesAmount: '$ 1,000.00', commission: '৳ 1,200' },
    { id: 2, name: 'illogre', company: 'Illogre Tech Solutions', ordersCount: 2, salesAmount: '$ 400.00', commission: '৳ 600' },
    { id: 3, name: 'fajerhs', company: 'Fajer House Ltd.', ordersCount: 2, salesAmount: '$ 200.00', commission: '৳ 300' },
    { id: 4, name: 'studiomax', company: 'Studio Max Global', ordersCount: 1, salesAmount: '$ 124.00', commission: '৳ 184' },
  ];

  // Commission Records Data
  const commissionRecordsData = [
    { id: 1, date: '30 Jun, 2026', orderId: 'FO322B7783787', client: 'fajerhs', product: 'ERP Software Enterprise License', amount: '$ 200.00', rate: '10%', commission: '৳ 300.00', status: 'Approved' },
    { id: 2, date: '05 May, 2026', orderId: 'FO992BAA1092', client: 'studiomax', product: 'Custom Module Development Pack', amount: '$ 124.00', rate: '10%', commission: '৳ 184.00', status: 'Approved' },
  ];

  // Dynamic Quarter Filter Logic: Map quarter-wise target values for each employee row
  const qCode = selectedQuarter.includes('All') ? 'Q1-Q4' : selectedQuarter.split(' ')[0]; // e.g. 'Q1'

  const availableQuarters = [
    'Q1 (Jul - Sep)',
    'Q2 (Oct - Dec)',
    'Q3 (Jan - Mar)',
    'Q4 (Apr - Jun)'
  ];

  const rawFilteredLedger = allEmployeesBonusLedgerData.filter(row => {
    if (searchQuery && !row.employee.toLowerCase().includes(searchQuery.toLowerCase()) && !row.empId.includes(searchQuery) && !row.assignProject.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const displayedLedgerData = rawFilteredLedger.flatMap(row => {
    if (selectedQuarter === 'All Quarters (Q1 - Q4)') {
      return availableQuarters.map(qKey => {
        const qData = row.quarterlyTargets[qKey as keyof typeof row.quarterlyTargets];
        return {
          ...row,
          id: `${row.id}-${qKey}`,
          qCode: qKey.split(' ')[0],
          period: `${qKey} ${selectedYear}`,
          targetPeriod: qData.target,
          totalSales: qData.sales,
          unpaid: qData.unpaid,
          bonusAmount: qData.bonus,
          salesCount: qData.salesCount,
          elBonus: qData.elBonus,
          currentBonus: qData.currentBonus,
          preCarry: qData.preCarry,
          newCarry: qData.newCarry,
          totalCarry: qData.totalCarry,
          status: qData.status
        };
      });
    } else {
      const qData = row.quarterlyTargets[selectedQuarter as keyof typeof row.quarterlyTargets] || row.quarterlyTargets['Q1 (Jul - Sep)'];
      return [{
        ...row,
        qCode,
        period: `${selectedQuarter} ${selectedYear}`,
        targetPeriod: qData.target,
        totalSales: qData.sales,
        unpaid: qData.unpaid,
        bonusAmount: qData.bonus,
        salesCount: qData.salesCount,
        elBonus: qData.elBonus,
        currentBonus: qData.currentBonus,
        preCarry: qData.preCarry,
        newCarry: qData.newCarry,
        totalCarry: qData.totalCarry,
        status: qData.status
      }];
    }
  });

  // Calculate summary stat cards for Al Mamon (logged in user) or active record
  const currentAlMamonData = selectedQuarter === 'All Quarters (Q1 - Q4)' ? {
    targetPeriod: `$ ${displayedLedgerData.reduce((acc, item) => acc + (parseFloat(item.targetPeriod.replace(/[^0-9.]/g, '')) || 0), 0).toLocaleString()}`,
    totalSales: `$ ${displayedLedgerData.reduce((acc, item) => acc + (parseFloat(item.totalSales.replace(/[^0-9.]/g, '')) || 0), 0).toLocaleString()}`,
    unpaid: `$ ${displayedLedgerData.reduce((acc, item) => acc + (parseFloat(item.unpaid.replace(/[^0-9.]/g, '')) || 0), 0).toLocaleString()}`,
    bonusAmount: `৳ ${displayedLedgerData.reduce((acc, item) => acc + (parseFloat(item.bonusAmount.replace(/[^0-9.]/g, '')) || 0), 0).toLocaleString()}`,
    totalCarry: `৳ ${displayedLedgerData.reduce((acc, item) => acc + (parseFloat(item.totalCarry.replace(/[^0-9.]/g, '')) || 0), 0).toLocaleString()}`,
    elBonus: `৳ ${displayedLedgerData.reduce((acc, item) => acc + (parseFloat(item.elBonus.replace(/[^0-9.]/g, '')) || 0), 0).toLocaleString()}`,
    currentBonus: `৳ ${displayedLedgerData.reduce((acc, item) => acc + (parseFloat(item.currentBonus.replace(/[^0-9.]/g, '')) || 0), 0).toLocaleString()}`,
    newCarry: '৳ 0',
  } : (displayedLedgerData.find(d => d.empId === '15202') || displayedLedgerData[0] || {});

  const filteredOperationsLines = operationsHistoryLines.filter(row => {
    if (searchQuery && !row.empName.toLowerCase().includes(searchQuery.toLowerCase()) && !row.name.toLowerCase().includes(searchQuery.toLowerCase()) && !row.company.toLowerCase().includes(searchQuery.toLowerCase()) && !row.customer.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="p-2.5 w-full max-w-none mx-auto bg-[#f8f9fa] min-h-screen text-slate-800 space-y-2.5 font-sans antialiased pb-12">

      {/* PAGE HEADER TITLE */}
      <div className="pb-1 border-b border-slate-200">
        <h1 className="text-[19px] font-semibold text-slate-800 tracking-tight flex items-center gap-2">
          <Award size={20} className="text-[#008060]" />
          {mainPageTab === 'summary' ? 'KPI & Bonus Summary' : mainPageTab === 'operations' ? 'Operations Project History' : 'Campaign & Sales Commission'}
        </h1>
        <p className="text-[12.5px] text-slate-500 mt-0.5 font-normal">
          {mainPageTab === 'summary' 
            ? 'Track quarter-wise sales targets, unpaid amounts, carry overs, and earned bonus ledgers.'
            : mainPageTab === 'operations'
            ? 'View assigned operational projects, contract values, and order execution history.'
            : 'Monitor product-wise campaigns, top client stats, and sales commissions.'}
        </p>
      </div>

      {/* GLOBAL USER BANNER */}
      <div className="bg-white px-3 py-2 rounded-md border border-slate-200 shadow-2xs flex flex-col lg:flex-row lg:items-center justify-between gap-2">

        {/* Left: Avatar & Employee Info */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-emerald-700 text-white font-extrabold flex items-center justify-center text-[11px] shrink-0 shadow-2xs">
            AM
          </div>
          <div className="space-y-0">
            <div className="flex items-center gap-1.5">
              <h2 className="text-[13px] font-bold text-slate-900 leading-tight">Al Mamon</h2>
              <span className="bg-emerald-50 text-[#008060] px-1.5 py-0.1 rounded text-[10px] font-bold border border-emerald-200">
                OPERATION MAN
              </span>
            </div>
            <p className="text-[10.5px] font-semibold text-slate-500">Employee Self Service Performance Portal</p>
          </div>
        </div>

        {/* Right: Year, Quarter & Apply Button */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-[11.5px] font-bold text-slate-600 shrink-0">Year:</span>
            <div className="w-20">
              <Select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                showSearch={false}
                options={[
                  { id: '2026', name: '2026' },
                  { id: '2025', name: '2025' }
                ]}
              />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-[11.5px] font-bold text-slate-600 shrink-0">Quarter:</span>
            <div className="w-40">
              <Select
                value={selectedQuarter}
                onChange={(e) => setSelectedQuarter(e.target.value)}
                showSearch={false}
                options={[
                  { id: 'All Quarters (Q1 - Q4)', name: 'All Quarters (Q1 - Q4)' },
                  { id: 'Q1 (Jul - Sep)', name: 'Q1 (Jul - Sep)' },
                  { id: 'Q2 (Oct - Dec)', name: 'Q2 (Oct - Dec)' },
                  { id: 'Q3 (Jan - Mar)', name: 'Q3 (Jan - Mar)' },
                  { id: 'Q4 (Apr - Jun)', name: 'Q4 (Apr - Jun)' }
                ]}
              />
            </div>
          </div>

          <Button
            className="bg-[#008060] hover:bg-[#006e52] text-white text-[11px] font-extrabold h-7 px-2.5 tracking-wide cursor-pointer flex items-center gap-1 shrink-0"
          >
            <RefreshCw size={12} />
            <span>Apply</span>
          </Button>

        </div>

      </div>

      {/* ================= VIEW 1: KPI & BONUS SUMMARY ================= */}
      {mainPageTab === 'summary' && (
        <div className="space-y-4">

          {/* 8 COMPACT STAT METRIC CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
            <div className="bg-white p-2 rounded border border-slate-200/90 shadow-2xs flex flex-col justify-between h-[54px]">
              <span className="text-[9.5px] font-bold text-slate-500 tracking-wider flex items-center justify-between">
                <span>TARGET ($)</span>
                <span className="text-[8.5px] bg-[#008060] text-white px-1 py-0 rounded font-black">{qCode}</span>
              </span>
              <h2 className="text-[14px] font-extrabold text-slate-900 leading-none">{currentAlMamonData.targetPeriod || '$ 3,300'}</h2>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200/90 shadow-2xs flex flex-col justify-between h-[54px]">
              <span className="text-[9.5px] font-bold text-slate-500 tracking-wider">SALES ($)</span>
              <h2 className="text-[14px] font-extrabold text-emerald-700 leading-none">{currentAlMamonData.totalSales || '$ 1,724'}</h2>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200/90 shadow-2xs flex flex-col justify-between h-[54px]">
              <span className="text-[9.5px] font-bold text-slate-500 tracking-wider">UNPAID ($)</span>
              <h2 className="text-[14px] font-extrabold text-rose-600 leading-none">{currentAlMamonData.unpaid || '$ 2,560'}</h2>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200/90 shadow-2xs flex flex-col justify-between h-[54px]">
              <span className="text-[9.5px] font-bold text-slate-500 tracking-wider">EL. BONUS</span>
              <h2 className="text-[14px] font-extrabold text-slate-900 leading-none">{currentAlMamonData.elBonus || '৳ 0'}</h2>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200/90 shadow-2xs flex flex-col justify-between h-[54px]">
              <span className="text-[9.5px] font-bold text-slate-500 tracking-wider">CUR. BONUS</span>
              <h2 className="text-[14px] font-extrabold text-slate-900 leading-none">{currentAlMamonData.currentBonus || '৳ 0'}</h2>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200/90 shadow-2xs flex flex-col justify-between h-[54px]">
              <span className="text-[9.5px] font-bold text-slate-500 tracking-wider">NEW CARRY</span>
              <h2 className="text-[14px] font-extrabold text-orange-600 leading-none">{currentAlMamonData.newCarry || '৳ 0'}</h2>
            </div>

            <div className="bg-white p-2 rounded border border-slate-200/90 shadow-2xs flex flex-col justify-between h-[54px]">
              <span className="text-[9.5px] font-bold text-slate-500 tracking-wider">TOT. CARRY</span>
              <h2 className="text-[14px] font-extrabold text-indigo-700 leading-none">{currentAlMamonData.totalCarry || '৳ 7,437'}</h2>
            </div>

            <div className="bg-emerald-50/70 p-2 rounded border border-emerald-200/90 shadow-2xs flex flex-col justify-between h-[54px]">
              <span className="text-[9.5px] font-bold text-[#008060] tracking-wider">BONUS AMT</span>
              <h2 className="text-[14px] font-extrabold text-[#008060] leading-none">{currentAlMamonData.bonusAmount || '৳ 2,484'}</h2>
            </div>
          </div>

          {/* CONDITIONAL CONTENT: SINGLE MAIN CARD MATCHING REFERENCE SCREENSHOT */}
          {!selectedRowDetail ? (
            <div className="bg-white p-4 rounded-md border border-slate-200 shadow-2xs space-y-3">
              
              {/* Card Header & Search */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <h2 className="text-[15px] font-semibold text-slate-800">KPI & Bonus Summary Ledger</h2>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-50 text-[#008060] rounded border border-emerald-200 flex items-center gap-1">
                    <Target size={11} />
                    <span>Quarter Target Ledger</span>
                  </span>
                </div>

                <div className="relative w-full sm:w-64">
                  <input
                    type="text"
                    placeholder="Search ref no, project or ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-8 px-3 pr-8 text-[12px] border border-slate-200 rounded outline-none focus:border-[#008060] bg-slate-50 focus:bg-white"
                  />
                  <Search size={14} className="absolute right-2.5 top-2.5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Data Table Matching Reference Screenshot */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[11.5px] border border-slate-100 border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-bold text-[11px]">
                      <th className="py-1.5 px-2 border-r border-slate-100 text-center w-6">
                        <input
                          type="checkbox"
                          checked={selectedRows.length === displayedLedgerData.length && displayedLedgerData.length > 0}
                          onChange={() => setSelectedRows(selectedRows.length === displayedLedgerData.length ? [] : displayedLedgerData.map(d => d.rawId))}
                          className="rounded border-slate-300 text-[#008060] focus:ring-[#008060] cursor-pointer"
                        />
                      </th>
                      <th className="py-1.5 px-2 border-r border-slate-100 text-center w-8">SL</th>
                      <th className="py-1.5 px-2 border-r border-slate-100">Employee</th>
                      <th className="py-1.5 px-2 border-r border-slate-100">Role</th>
                      <th className="py-1.5 px-2 border-r border-slate-100">Assign Project</th>
                      <th className="py-1.5 px-2 border-r border-slate-100 text-right">Value ($)</th>
                      <th className="py-1.5 px-2 border-r border-slate-100 text-center">Sales</th>
                      <th className="py-1.5 px-2 border-r border-slate-100">Period</th>
                      <th className="py-1.5 px-2 border-r border-slate-100 text-right">Target ($)</th>
                      <th className="py-1.5 px-2 border-r border-slate-100 text-right">Total Sales ($)</th>
                      <th className="py-1.5 px-2 border-r border-slate-100 text-right">Unpaid ($)</th>
                      <th className="py-1.5 px-2 border-r border-slate-100 text-right">Carry (৳)</th>
                      <th className="py-1.5 px-2 border-r border-slate-100 text-right">Bonus (৳)</th>
                      <th className="py-1.5 px-2 border-r border-slate-100 text-center">Status</th>
                      <th className="py-1.5 px-2 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[16px]">
                    {displayedLedgerData.length > 0 ? (
                      displayedLedgerData.map((row, idx) => (
                        <tr key={row.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-1 px-2 border-r border-slate-100 text-center">
                            <input
                              type="checkbox"
                              checked={selectedRows.includes(row.rawId)}
                              onChange={() => toggleSelectRow(row.rawId)}
                              className="rounded border-slate-300 text-[#008060] focus:ring-[#008060] cursor-pointer"
                            />
                          </td>
                          <td className="py-1 px-2 border-r border-slate-100 text-center text-slate-400 font-semibold">{idx + 1}</td>
                          <td className="py-1 px-2 border-r border-slate-100 font-semibold text-slate-800">
                            <div className="leading-tight py-0.5">
                              <span>{row.employee}</span>
                              <span className="text-[9.5px] text-slate-400 font-normal block font-mono">ID: {row.empId}</span>
                            </div>
                          </td>
                          <td className="py-1 px-2 border-r border-slate-100 text-slate-700">{row.role}</td>
                          <td className="py-1 px-2 border-r border-slate-100 font-medium text-[#008060]">
                            <div className="flex items-center gap-1">
                              <Briefcase size={11} className="text-[#008060] shrink-0" />
                              <span>{row.assignProject}</span>
                            </div>
                          </td>
                          <td className="py-1 px-2 border-r border-slate-100 text-right font-semibold text-slate-800">{row.projectValue}</td>
                          <td className="py-1 px-2 border-r border-slate-100 text-center font-semibold text-indigo-700">{row.salesCount}</td>
                          <td className="py-1 px-2 border-r border-slate-100 text-slate-600 whitespace-nowrap">{row.period}</td>
                          <td className="py-1 px-2 border-r border-slate-100 text-right font-semibold">
                            <div className="flex items-center justify-end gap-1">
                              <span>{row.targetPeriod}</span>
                              <span className="text-[8.5px] font-bold text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-200">{row.qCode}</span>
                            </div>
                          </td>
                          <td className="py-1 px-2 border-r border-slate-100 text-right font-semibold text-emerald-700">{row.totalSales}</td>
                          <td className="py-1 px-2 border-r border-slate-100 text-right font-semibold text-rose-600">{row.unpaid}</td>
                          <td className="py-1 px-2 border-r border-slate-100 text-right font-semibold text-indigo-700">{row.totalCarry}</td>
                          <td className="py-1 px-2 border-r border-slate-100 text-right font-bold text-[#008060]">{row.bonusAmount}</td>
                          <td className="py-1 px-2 border-r border-slate-100 text-center">
                            <span className={`inline-block px-1.5 py-0.2 text-[10px] font-semibold rounded border ${
                              row.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                              row.status === 'Calculated' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                              'bg-amber-50 text-amber-700 border-amber-200'
                            }`}>
                              {row.status}
                            </span>
                          </td>
                          <td className="py-1 px-2 text-center">
                            <button
                              onClick={() => setSelectedRowDetail(row)}
                              className="p-0.5 text-slate-500 hover:text-emerald-700 rounded hover:bg-slate-100 cursor-pointer inline-flex items-center justify-center"
                              title="View Details"
                            >
                              <Eye size={14} />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={15} className="py-6 text-center text-slate-400 font-medium">No performance records found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* DETAILED RECORD PAGE VIEW */
            <div className="bg-white rounded-md border border-slate-200 shadow-2xs p-4 space-y-4 animate-in fade-in duration-150">
              
              {/* Detail Header Navigation */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <button
                  onClick={() => setSelectedRowDetail(null)}
                  className="px-3 py-1 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-[12px] font-bold rounded shadow-2xs transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft size={14} className="text-[#008060]" />
                  <span>Back to Summary Table</span>
                </button>

                <div className="flex items-center bg-slate-100 rounded p-0.5 border border-slate-200 text-[11px] font-extrabold">
                  <div className="px-2.5 py-0.5 bg-[#008060] text-white rounded shadow-2xs flex items-center gap-1">
                    <span>In Progress</span>
                  </div>
                  <ChevronRight size={13} className="text-slate-400 mx-0.5" />
                  <div className="px-2.5 py-0.5 text-slate-500">
                    <span>Confirmed</span>
                  </div>
                  <ChevronRight size={13} className="text-slate-400 mx-0.5" />
                  <div className="px-2.5 py-0.5 text-slate-500">
                    <span>Paid</span>
                  </div>
                </div>
              </div>

              {/* Employee & Project Summary Banner */}
              <div className="bg-slate-50/80 p-3 rounded-lg border border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-[20px] font-black text-[#008060] tracking-tight">{selectedRowDetail.employee}</h2>
                    <span className="text-[11.5px] font-bold text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded">{selectedRowDetail.role}</span>
                  </div>
                  <p className="text-[12px] font-semibold text-slate-600 mt-0.5 flex items-center gap-1">
                    <Briefcase size={13} className="text-[#008060]" />
                    <span>Project: {selectedRowDetail.assignProject}</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold">
                  <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded shadow-2xs">
                    <Edit3 size={11} className="text-[#008060]" />
                    <span>Operations:</span>
                    <span className="text-[#008060] font-black">{selectedRowDetail.salesCount}</span>
                  </div>

                  <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded shadow-2xs">
                    <DollarSign size={11} className="text-teal-700" />
                    <span>Unpaid Ops:</span>
                    <span className="text-teal-700 font-black">4</span>
                  </div>

                  <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded shadow-2xs">
                    <RotateCcw size={11} className="text-indigo-600" />
                    <span>Total Carry:</span>
                    <span className="text-indigo-600 font-black">{selectedRowDetail.totalCarry}</span>
                  </div>
                </div>
              </div>

              {/* EMPLOYEE METADATA GRID WITH PROJECT DETAILS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[12px]">
                
                {/* CARD 1: PROJECT & ASSIGNMENT DETAILS */}
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <h3 className="text-[14px] font-bold text-slate-900 flex items-center gap-1.5">
                      <Briefcase size={15} className="text-[#008060]" />
                      <span>Project & Team Information</span>
                    </h3>
                  </div>

                  <div className="space-y-1.5 font-medium">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-semibold">Role</span>
                      <span className="font-bold text-[#008060]">{selectedRowDetail.role}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-semibold">Assigned Project</span>
                      <span className="font-bold text-slate-800">{selectedRowDetail.assignProject}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-semibold">Contract Value ($)</span>
                      <span className="font-bold text-slate-900">{selectedRowDetail.projectValue}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-semibold">Project Manager</span>
                      <span className="font-bold text-slate-800">{selectedRowDetail.projectManager}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500 font-semibold">Team Leader</span>
                      <span className="font-bold text-slate-800">{selectedRowDetail.teamLeader}</span>
                    </div>
                  </div>
                </div>

                {/* CARD 2: FINANCIAL & BONUS BREAKDOWN */}
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <h3 className="text-[14px] font-bold text-slate-900 flex items-center gap-1.5">
                      <Wallet size={15} className="text-[#008060]" />
                      <span>Financial & Bonus Ledger</span>
                    </h3>
                    <button
                      onClick={() => setActiveTab('penaltyRecord')}
                      className="px-2.5 py-0.5 bg-amber-50 text-amber-700 hover:bg-amber-100 text-[11px] font-bold rounded border border-amber-200 transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <ShieldAlert size={12} />
                      <span>Penalties</span>
                    </button>
                  </div>

                  <div className="space-y-1.5 font-medium">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-semibold">Quarter Target ($)</span>
                      <span className="font-bold text-slate-900">{selectedRowDetail.targetPeriod}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-semibold">Total Achieved ($)</span>
                      <span className="font-bold text-emerald-700">{selectedRowDetail.totalSales}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-semibold">Unpaid Settlement ($)</span>
                      <span className="font-bold text-rose-600">{selectedRowDetail.unpaid}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-semibold">Eligible Bonus (৳)</span>
                      <span className="font-bold text-slate-800">{selectedRowDetail.elBonus}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500 font-semibold">Net Bonus Payout (৳)</span>
                      <span className="font-extrabold text-[#008060]">{selectedRowDetail.bonusAmount}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* BOTTOM TABBED SECTION WITH PROJECT DETAILS */}
              <div className="bg-white rounded-lg border border-slate-200 shadow-2xs overflow-hidden">
                <div className="flex items-center gap-2 border-b border-slate-200 px-3 pt-2.5 bg-slate-50/50">
                  <button
                    onClick={() => setActiveTab('kpiLines')}
                    className={`px-3.5 py-1.5 text-[12px] font-extrabold rounded-t transition-colors cursor-pointer ${
                      activeTab === 'kpiLines'
                        ? 'bg-white border-t-2 border-[#008060] text-[#008060] shadow-2xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    KPI Lines
                  </button>

                  <button
                    onClick={() => setActiveTab('penaltyRecord')}
                    className={`px-3.5 py-1.5 text-[12px] font-extrabold rounded-t transition-colors cursor-pointer ${
                      activeTab === 'penaltyRecord'
                        ? 'bg-white border-t-2 border-[#008060] text-[#008060] shadow-2xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Penalty Records
                  </button>
                </div>

                <div className="p-3">
                  {activeTab === 'kpiLines' && (
                    <div className="overflow-x-auto border border-slate-100 border-collapse">
                      <table className="w-full text-left text-[11.5px] border border-slate-100 border-collapse">
                        <thead>
                          <tr className="bg-slate-100 border-b border-slate-200 text-slate-900 font-bold">
                            <th className="py-2 px-2.5 border-r border-slate-100 text-center w-10">SL</th>
                            <th className="py-2 px-2.5 border-r border-slate-100">Order Name</th>
                            <th className="py-2 px-2.5 border-r border-slate-100">Date</th>
                            <th className="py-2 px-2.5 border-r border-slate-100">Company</th>
                            <th className="py-2 px-2.5 border-r border-slate-100">Service Line</th>
                            <th className="py-2 px-2.5 border-r border-slate-100 text-right">Total Amount ($)</th>
                            <th className="py-2 px-2.5 border-r border-slate-100 text-center">Order Status</th>
                            <th className="py-2 px-2.5 border-r border-slate-100 text-right">Sales Bonus (৳)</th>
                            <th className="py-2 px-2.5 text-center">KPI Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                          {operationsHistoryLines.map((line, idx) => (
                            <tr key={line.sn} className="hover:bg-slate-50/80 transition-colors">
                              <td className="py-2 px-2.5 border-r border-slate-100 text-center text-slate-500 font-medium">{idx + 1}</td>
                              <td className="py-2 px-2.5 border-r border-slate-100 font-bold text-[#008060]">{line.name}</td>
                              <td className="py-2 px-2.5 border-r border-slate-100 text-slate-800">{line.date}</td>
                              <td className="py-2 px-2.5 border-r border-slate-100 text-slate-800 font-semibold">{line.company}</td>
                              <td className="py-2 px-2.5 border-r border-slate-100 text-slate-600">{line.serviceLine}</td>
                              <td className="py-2 px-2.5 border-r border-slate-100 text-right font-bold text-slate-900">{line.totalAmount}</td>
                              <td className="py-2 px-2.5 border-r border-slate-100 text-center">
                                <span className="px-2 py-0.5 text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-[3px]">
                                  {line.orderStatus}
                                </span>
                              </td>
                              <td className="py-2 px-2.5 border-r border-slate-100 text-right font-bold text-[#008060]">{line.salesBonus}</td>
                              <td className="py-2 px-2.5 text-center">
                                <span className={`px-2 py-0.5 text-[11px] font-medium rounded-[3px] border ${
                                  line.kpiStatus === 'Approved'
                                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                    : 'bg-amber-50 text-amber-700 border-amber-200'
                                }`}>
                                  {line.kpiStatus}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {activeTab === 'penaltyRecord' && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[12px] border border-slate-100 border-collapse">
                        <thead>
                          <tr className="bg-slate-100 border-b border-slate-200 text-slate-900 font-bold">
                            <th className="py-2 px-2.5 border-r border-slate-100 text-center w-10">SL</th>
                            <th className="py-2 px-2.5 border-r border-slate-100">Date</th>
                            <th className="py-2 px-2.5 border-r border-slate-100">Deduction Reason</th>
                            <th className="py-2 px-2.5 border-r border-slate-100 text-right">Deducted Amount</th>
                            <th className="py-2 px-2.5 text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                          {penaltyRecords.map((p, idx) => (
                            <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                              <td className="py-2 px-2.5 border-r border-slate-100 text-center text-slate-500 font-medium">{idx + 1}</td>
                              <td className="py-2 px-2.5 border-r border-slate-100 text-slate-800">{p.date}</td>
                              <td className="py-2 px-2.5 border-r border-slate-100 font-bold text-slate-900">{p.reason}</td>
                              <td className="py-2 px-2.5 border-r border-slate-100 text-right font-bold text-rose-600">{p.deducted}</td>
                              <td className="py-2 px-2.5 text-center">
                                <span className="px-2 py-0.5 text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200 rounded-[3px]">
                                  {p.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}

        </div>
      )}

      {/* ================= VIEW 2: OPERATIONS PROJECT HISTORY (EXACT SCREENSHOT TABLE) ================= */}
      {mainPageTab === 'operations' && (
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-4 animate-in fade-in duration-150">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-[16px] font-bold text-slate-900">Operations Project & Order History</h2>
              <p className="text-[12px] font-medium text-slate-500">
                Complete log of employee's assigned project orders, customer details, bonus profiles and payment status.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative w-64">
                <input
                  type="text"
                  placeholder="Search order no, customer, company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-8 px-2.5 pr-7 text-[11.5px] border border-slate-200 rounded outline-none focus:border-[#008060] bg-slate-50 focus:bg-white"
                />
                <Search size={13} className="absolute right-2 top-2 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* 21-COLUMN FULL OPERATIONS PROJECT HISTORY TABLE MATCHING USER REFERENCE SCREENSHOT 100% */}
          <div className="overflow-x-auto border border-slate-200/80 rounded-sm">
            <table className="w-full text-left text-[12px] border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold whitespace-nowrap">
                  <th className="py-1.5 px-2.5 border-r border-slate-200 text-center w-8">
                    <input type="checkbox" className="rounded border-slate-300 text-[#008060] focus:ring-[#008060] cursor-pointer" />
                  </th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200">Name</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200">Date</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200">Created on</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200">Assign Employee ID</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200">Assign Employee</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200">Employee ID</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200">Employee Name</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200">Company</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200 text-center">Order Status</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200 text-right">Sales Bonus</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200 text-center">Order Link</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200">Order Number</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200">Customer</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200">Bonus Profile Name</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200">Service Line</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200">Assigned Team</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200 text-right">Total Amount</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200 text-right">Monetary Value</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200 text-center">Payment Date</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200 text-center">Payment Due</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200 text-center">Currency</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200 text-center">Reversion</th>
                  <th className="py-1.5 px-2.5 border-r border-slate-200 text-center">KPI Status</th>
                  <th className="py-1.5 px-2.5 text-right">Bonus Payout</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium whitespace-nowrap leading-[18px]">
                {filteredOperationsLines.length > 0 ? (
                  filteredOperationsLines.map((row) => (
                    <tr key={row.sn} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-1.5 px-2.5 border-r border-slate-200 text-center">
                        <input type="checkbox" className="rounded border-slate-300 text-[#008060] focus:ring-[#008060] cursor-pointer" />
                      </td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 font-medium text-[#008060]">{row.name}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 text-slate-800">{row.date}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 text-slate-500 text-[11px]">{row.createdOn}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 font-mono text-slate-600">{row.assignEmpId}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 font-semibold text-slate-800">{row.assignEmpName}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 font-mono text-slate-600">{row.empId}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 font-semibold text-slate-800">{row.empName}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 text-slate-800">{row.company}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 text-center">
                        <span className="inline-block px-2 py-0.5 text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 rounded">
                          {row.orderStatus}
                        </span>
                      </td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 text-right font-semibold text-[#008060]">{row.salesBonus}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 text-center">
                        <a href="#" onClick={(e) => e.preventDefault()} className="text-[#008060] hover:underline flex items-center justify-center gap-1 font-medium">
                          <span>Link</span>
                          <ExternalLink size={11} />
                        </a>
                      </td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 font-mono text-slate-700">{row.orderNumber}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 font-medium text-slate-800">{row.customer}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 text-slate-700">{row.bonusProfileName}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 text-slate-700">{row.serviceLine}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 text-slate-600">{row.assignedTeam}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 text-right font-semibold text-slate-800">{row.totalAmount}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 text-right font-semibold text-slate-800">{row.monetaryValue}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 text-center text-slate-600">{row.paymentDate}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 text-center text-slate-600">{row.paymentDue}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 text-center text-slate-600">{row.currency}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 text-center text-slate-500">{row.reversion}</td>
                      <td className="py-1.5 px-2.5 border-r border-slate-200 text-center">
                        <span className={`inline-block px-2 py-0.5 text-[11px] font-medium rounded border ${row.kpiStatus === 'Approved'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : row.kpiStatus === 'Verified'
                              ? 'bg-blue-50 text-blue-700 border-blue-200'
                              : 'bg-amber-50 text-amber-700 border-amber-200'
                          }`}>
                          {row.kpiStatus}
                        </span>
                      </td>
                      <td className="py-1.5 px-2.5 text-right font-semibold text-[#008060]">{row.bonusPayout}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={25} className="py-8 text-center text-slate-400 font-medium">
                      No project history records found matching your view mode and filter criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      )}

      {/* ================= VIEW 3: CAMPAIGN & SALES COMMISSION ================= */}
      {mainPageTab === 'campaign' && (
        <div className="space-y-2.5 animate-in fade-in duration-150">

          {/* 3 PREMIUM STAT METRIC CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">

            {/* CARD 1: Total Sales Count */}
            <div className="bg-white p-2.5 rounded-md border border-slate-200/90 shadow-2xs flex items-center justify-between hover:border-emerald-300 transition-all h-[64px]">
              <div className="space-y-0.5">
                <span className="text-[9.5px] font-extrabold text-slate-500 uppercase tracking-wider block">Total Sales Count</span>
                <h2 className="text-[17px] font-black text-slate-900 leading-none">28</h2>
                <button
                  onClick={() => setCampaignTab('commissions')}
                  className="text-[10px] font-bold text-[#008060] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>View commission records →</span>
                </button>
              </div>
              <div className="w-7 h-7 rounded bg-emerald-50 text-[#008060] flex items-center justify-center shrink-0 border border-emerald-200/60 shadow-2xs">
                <ShoppingBag size={14} />
              </div>
            </div>

            {/* CARD 2: Total Sales Amount */}
            <div className="bg-white p-2.5 rounded-md border border-slate-200/90 shadow-2xs flex items-center justify-between hover:border-blue-300 transition-all h-[64px]">
              <div className="space-y-0.5">
                <span className="text-[9.5px] font-extrabold text-slate-500 uppercase tracking-wider block">Total Sales Amount</span>
                <h2 className="text-[17px] font-black text-slate-900 leading-none">$ 2,174.00</h2>
                <button
                  onClick={() => setCampaignTab('commissions')}
                  className="text-[10px] font-bold text-[#008060] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>View commission records →</span>
                </button>
              </div>
              <div className="w-7 h-7 rounded bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200/60 shadow-2xs">
                <DollarSign size={14} />
              </div>
            </div>

            {/* CARD 3: Commission Earned */}
            <div className="bg-white p-2.5 rounded-md border border-slate-200/90 shadow-2xs flex items-center justify-between hover:border-purple-300 transition-all h-[64px]">
              <div className="space-y-0.5">
                <span className="text-[9.5px] font-extrabold text-slate-500 uppercase tracking-wider block">Commission Earned</span>
                <h2 className="text-[17px] font-black text-[#008060] leading-none">৳ 2,934.00</h2>
                <button
                  onClick={() => setCampaignTab('commissions')}
                  className="text-[10px] font-bold text-[#008060] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>View commission records →</span>
                </button>
              </div>
              <div className="w-7 h-7 rounded bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-200/60 shadow-2xs">
                <Award size={14} />
              </div>
            </div>

          </div>

          {/* MAIN CAMPAIGN DATA CARD WITH SUB-TABS */}
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-4">

            {/* Modern Sub-Tab Pill Header */}
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <button
                onClick={() => setCampaignTab('products')}
                className={`px-3.5 py-1.5 text-[12px] font-extrabold rounded-md transition-all cursor-pointer flex items-center gap-2 ${campaignTab === 'products'
                    ? 'bg-[#008060] text-white shadow-2xs'
                    : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 border border-slate-200'
                  }`}
              >
                <ShoppingBag size={14} />
                <span>Top Products</span>
              </button>

              <button
                onClick={() => setCampaignTab('clients')}
                className={`px-3.5 py-1.5 text-[12px] font-extrabold rounded-md transition-all cursor-pointer flex items-center gap-2 ${campaignTab === 'clients'
                    ? 'bg-[#008060] text-white shadow-2xs'
                    : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 border border-slate-200'
                  }`}
              >
                <Users size={14} />
                <span>Top Clients</span>
              </button>

              <button
                onClick={() => setCampaignTab('commissions')}
                className={`px-3.5 py-1.5 text-[12px] font-extrabold rounded-md transition-all cursor-pointer flex items-center gap-2 ${campaignTab === 'commissions'
                    ? 'bg-[#008060] text-white shadow-2xs'
                    : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 border border-slate-200'
                  }`}
              >
                <DollarSign size={14} />
                <span>Commission Records</span>
              </button>
            </div>

            {/* SUB-TAB CONTENT TABLES */}
            <div>

              {/* 1. TOP PRODUCTS TABLE */}
              {campaignTab === 'products' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[14px] font-bold text-slate-900">Top Sales Products Breakdown</h3>
                      <p className="text-[11.5px] font-medium text-slate-500">Products sorted by total units sold and generated sales bonus.</p>
                    </div>
                    <span className="text-[11px] font-bold text-[#008060] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      3 Active Products
                    </span>
                  </div>

                  <div className="overflow-x-auto border border-slate-200/80 rounded-sm">
                    <table className="w-full text-left text-[12px] border-collapse">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                          <th className="py-1.5 px-3 border-r border-slate-200 text-center w-8">
                            <input type="checkbox" className="rounded border-slate-300 text-[#008060] focus:ring-[#008060] cursor-pointer" />
                          </th>
                          <th className="py-1.5 px-3 border-r border-slate-200 text-center w-10">SL</th>
                          <th className="py-1.5 px-3 border-r border-slate-200">Product Name</th>
                          <th className="py-1.5 px-3 border-r border-slate-200">Category</th>
                          <th className="py-1.5 px-3 border-r border-slate-200 text-center">Sales Count</th>
                          <th className="py-1.5 px-3 border-r border-slate-200 text-right">Total Amount ($)</th>
                          <th className="py-1.5 px-3 text-right">Commission (৳)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[18px]">
                        {topProductsData.map((item, idx) => (
                          <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="py-1.5 px-3 border-r border-slate-200 text-center">
                              <input type="checkbox" className="rounded border-slate-300 text-[#008060] focus:ring-[#008060] cursor-pointer" />
                            </td>
                            <td className="py-1.5 px-3 border-r border-slate-200 text-center text-slate-500 font-medium">{idx + 1}</td>
                            <td className="py-1.5 px-3 border-r border-slate-200 font-semibold text-slate-800">{item.name}</td>
                            <td className="py-1.5 px-3 border-r border-slate-200 text-slate-600">{item.category}</td>
                            <td className="py-1.5 px-3 border-r border-slate-200 text-center font-semibold text-[#008060]">{item.salesCount}</td>
                            <td className="py-1.5 px-3 border-r border-slate-200 text-right font-semibold text-slate-800">{item.totalAmount}</td>
                            <td className="py-1.5 px-3 text-right font-semibold text-emerald-700">{item.commission}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* 2. TOP CLIENTS TABLE */}
              {campaignTab === 'clients' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[14px] font-bold text-slate-900">Top Revenue Clients Breakdown</h3>
                      <p className="text-[11.5px] font-medium text-slate-500">Clients sorted by overall order volume and contributed revenue.</p>
                    </div>
                    <span className="text-[11px] font-bold text-[#008060] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      4 Key Clients
                    </span>
                  </div>

                  <div className="overflow-x-auto border border-slate-200/80 rounded-sm">
                    <table className="w-full text-left text-[12px] border-collapse">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                          <th className="py-1.5 px-3 border-r border-slate-200 text-center w-8">
                            <input type="checkbox" className="rounded border-slate-300 text-[#008060] focus:ring-[#008060] cursor-pointer" />
                          </th>
                          <th className="py-1.5 px-3 border-r border-slate-200 text-center w-10">SL</th>
                          <th className="py-1.5 px-3 border-r border-slate-200">Client Name</th>
                          <th className="py-1.5 px-3 border-r border-slate-200">Company / Organization</th>
                          <th className="py-1.5 px-3 border-r border-slate-200 text-center">Total Orders</th>
                          <th className="py-1.5 px-3 border-r border-slate-200 text-right">Sales Amount ($)</th>
                          <th className="py-1.5 px-3 text-right">Commission (৳)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[18px]">
                        {topClientsData.map((item, idx) => (
                          <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="py-1.5 px-3 border-r border-slate-200 text-center">
                              <input type="checkbox" className="rounded border-slate-300 text-[#008060] focus:ring-[#008060] cursor-pointer" />
                            </td>
                            <td className="py-1.5 px-3 border-r border-slate-200 text-center text-slate-500 font-medium">{idx + 1}</td>
                            <td className="py-1.5 px-3 border-r border-slate-200 font-semibold text-slate-800">{item.name}</td>
                            <td className="py-1.5 px-3 border-r border-slate-200 text-slate-600">{item.company}</td>
                            <td className="py-1.5 px-3 border-r border-slate-200 text-center font-semibold text-[#008060]">{item.ordersCount}</td>
                            <td className="py-1.5 px-3 border-r border-slate-200 text-right font-semibold text-slate-800">{item.salesAmount}</td>
                            <td className="py-1.5 px-3 text-right font-semibold text-emerald-700">{item.commission}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* 3. COMMISSION RECORDS TABLE */}
              {campaignTab === 'commissions' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[14px] font-bold text-slate-900">Commission Ledger Records</h3>
                      <p className="text-[11.5px] font-medium text-slate-500">Individual line item sales commission history.</p>
                    </div>
                    <span className="text-[11px] font-bold text-[#008060] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      2 Approved Payouts
                    </span>
                  </div>

                  <div className="overflow-x-auto border border-slate-200/80 rounded-sm">
                    <table className="w-full text-left text-[12px] border-collapse">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-semibold">
                          <th className="py-1.5 px-3 border-r border-slate-200 text-center w-8">
                            <input type="checkbox" className="rounded border-slate-300 text-[#008060] focus:ring-[#008060] cursor-pointer" />
                          </th>
                          <th className="py-1.5 px-3 border-r border-slate-200 text-center w-10">SL</th>
                          <th className="py-1.5 px-3 border-r border-slate-200">Date</th>
                          <th className="py-1.5 px-3 border-r border-slate-200">Order ID</th>
                          <th className="py-1.5 px-3 border-r border-slate-200">Client</th>
                          <th className="py-1.5 px-3 border-r border-slate-200">Product</th>
                          <th className="py-1.5 px-3 border-r border-slate-200 text-right">Sale Amount</th>
                          <th className="py-1.5 px-3 border-r border-slate-200 text-center">Rate</th>
                          <th className="py-1.5 px-3 border-r border-slate-200 text-right">Commission</th>
                          <th className="py-1.5 px-3 text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700 font-medium leading-[18px]">
                        {commissionRecordsData.map((item, idx) => (
                          <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="py-1.5 px-3 border-r border-slate-200 text-center">
                              <input type="checkbox" className="rounded border-slate-300 text-[#008060] focus:ring-[#008060] cursor-pointer" />
                            </td>
                            <td className="py-1.5 px-3 border-r border-slate-200 text-center text-slate-500 font-medium">{idx + 1}</td>
                            <td className="py-1.5 px-3 border-r border-slate-200 font-medium text-slate-700">{item.date}</td>
                            <td className="py-1.5 px-3 border-r border-slate-200 font-mono text-[11px] text-slate-700">{item.orderId}</td>
                            <td className="py-1.5 px-3 border-r border-slate-200 font-semibold text-slate-800">{item.client}</td>
                            <td className="py-1.5 px-3 border-r border-slate-200 text-slate-600">{item.product}</td>
                            <td className="py-1.5 px-3 border-r border-slate-200 text-right font-semibold text-slate-800">{item.amount}</td>
                            <td className="py-1.5 px-3 border-r border-slate-200 text-center font-medium text-slate-600">{item.rate}</td>
                            <td className="py-1.5 px-3 border-r border-slate-200 text-right font-semibold text-[#008060]">{item.commission}</td>
                            <td className="py-1.5 px-3 text-center">
                              <span className="inline-block px-2 py-0.5 text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 rounded">
                                {item.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
