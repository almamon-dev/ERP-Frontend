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

  // Main Sub-Tab: 'summary' (KPI & Bonus Summary) vs 'operations' (Operations Project History Table) vs 'campaign'
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

  // Hierarchy Role View Mode: 'myRecord' | 'teamView' | 'managerView'
  const [viewRoleMode, setViewRoleMode] = useState<string>('myRecord');

  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedQuarter, setSelectedQuarter] = useState('Q1 (Jul - Sep)');
  const [selectedEmployeeFilter, setSelectedEmployeeFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  
  // Detailed Record Page View Toggle
  const [selectedRowDetail, setSelectedRowDetail] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState<'kpiLines' | 'penaltyRecord'>('kpiLines');

  // Campaign Sub-Tab: 'products' | 'clients' | 'commissions'
  const [campaignTab, setCampaignTab] = useState<'products' | 'clients' | 'commissions'>('products');

  // MULTI-USER KPI & BONUS LEDGER DATA FOR ALL ROLES WITH ASSIGNED PROJECTS & PROJECT VALUES
  const allEmployeesBonusLedgerData = [
    {
      id: 1,
      employee: 'Al Mamon',
      empId: '15202',
      role: 'Operation Man',
      team: 'Pixel Pioneers',
      assignProject: 'ERP Portal Customization',
      projectValue: '$ 5,500.00',
      salesCount: 7,
      projectManager: 'Sarah Jenkins',
      teamLeader: 'Tanvir Ahmed',
      period: 'Q1 (Jul - Sep) 2026',
      targetPeriod: '$ 3,300',
      totalSales: '$ 1,724',
      unpaid: '$ 2,560',
      elBonus: '৳ 0',
      currentBonus: '৳ 0',
      preCarry: '৳ 883',
      newCarry: '৳ 0',
      totalCarry: '৳ 7,437',
      bonusAmount: '৳ 2,484',
      status: 'Approved',
      statusBadge: 'px-2 py-0.5 text-[10.5px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-300 rounded-full'
    },
    {
      id: 2,
      employee: 'Tanvir Ahmed',
      empId: '14105',
      role: 'Team Leader',
      team: 'Pixel Pioneers',
      assignProject: 'CRM Sync & Pipeline v2',
      projectValue: '$ 8,200.00',
      salesCount: 12,
      projectManager: 'Sarah Jenkins',
      teamLeader: 'Tanvir Ahmed',
      period: 'Q1 (Jul - Sep) 2026',
      targetPeriod: '$ 5,000',
      totalSales: '$ 4,800',
      unpaid: '$ 1,200',
      elBonus: '৳ 4,500',
      currentBonus: '৳ 4,500',
      preCarry: '৳ 1,200',
      newCarry: '৳ 0',
      totalCarry: '৳ 5,700',
      bonusAmount: '৳ 5,700',
      status: 'Confirmed',
      statusBadge: 'px-2 py-0.5 text-[10.5px] font-bold bg-blue-50 text-blue-600 border border-blue-300 rounded-full'
    },
    {
      id: 3,
      employee: 'Sarah Jenkins',
      empId: '12001',
      role: 'Project Manager',
      team: 'Operations Management',
      assignProject: 'Enterprise Multi-Tenant Rollout',
      projectValue: '$ 25,000.00',
      salesCount: 28,
      projectManager: 'Sarah Jenkins',
      teamLeader: 'Self',
      period: 'Q1 (Jul - Sep) 2026',
      targetPeriod: '$ 12,000',
      totalSales: '$ 14,500',
      unpaid: '$ 3,100',
      elBonus: '৳ 12,000',
      currentBonus: '৳ 12,000',
      preCarry: '৳ 3,400',
      newCarry: '৳ 0',
      totalCarry: '৳ 15,400',
      bonusAmount: '৳ 15,400',
      status: 'Approved',
      statusBadge: 'px-2 py-0.5 text-[10.5px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-300 rounded-full'
    },
    {
      id: 4,
      employee: 'Rafiqul Islam',
      empId: '15309',
      role: 'Operation Man',
      team: 'Alpha Operatives',
      assignProject: 'Mobile App API Gateway',
      projectValue: '$ 4,800.00',
      salesCount: 5,
      projectManager: 'Sarah Jenkins',
      teamLeader: 'Monir Hossain',
      period: 'Q1 (Jul - Sep) 2026',
      targetPeriod: '$ 3,300',
      totalSales: '$ 2,900',
      unpaid: '$ 950',
      elBonus: '৳ 1,200',
      currentBonus: '৳ 1,200',
      preCarry: '৳ 450',
      newCarry: '৳ 0',
      totalCarry: '৳ 1,650',
      bonusAmount: '৳ 1,650',
      status: 'In Progress',
      statusBadge: 'px-2 py-0.5 text-[10.5px] font-bold bg-amber-50 text-amber-600 border border-amber-300 rounded-full'
    },
    {
      id: 5,
      employee: 'Mahmud Hassan',
      empId: '15412',
      role: 'Operation Man',
      team: 'Pixel Pioneers',
      assignProject: 'Inventory Warehouse Sync',
      projectValue: '$ 6,000.00',
      salesCount: 9,
      projectManager: 'Sarah Jenkins',
      teamLeader: 'Tanvir Ahmed',
      period: 'Q1 (Jul - Sep) 2026',
      targetPeriod: '$ 3,300',
      totalSales: '$ 3,450',
      unpaid: '$ 600',
      elBonus: '৳ 2,800',
      currentBonus: '৳ 2,800',
      preCarry: '৳ 0',
      newCarry: '৳ 0',
      totalCarry: '৳ 2,800',
      bonusAmount: '৳ 2,800',
      status: 'Paid',
      statusBadge: 'px-2 py-0.5 text-[10.5px] font-bold bg-purple-50 text-purple-600 border border-purple-300 rounded-full'
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

  // Filter ledgers based on Role View mode and search filters
  const displayedLedgerData = allEmployeesBonusLedgerData.filter(row => {
    if (viewRoleMode === 'myRecord' && row.employee !== 'Al Mamon') return false;
    if (viewRoleMode === 'teamView' && row.team !== 'Pixel Pioneers') return false;
    if (selectedEmployeeFilter !== 'All' && row.employee !== selectedEmployeeFilter) return false;
    if (searchQuery && !row.employee.toLowerCase().includes(searchQuery.toLowerCase()) && !row.empId.includes(searchQuery) && !row.assignProject.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const toggleSelectRow = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rId => rId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className="p-4 max-w-[1600px] mx-auto bg-[#f8f9fa] min-h-screen text-slate-800 space-y-4 font-sans antialiased pb-20">
      
      {/* PAGE HEADER TITLE & TOP MAIN TAB NAVIGATION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-1 border-b border-slate-200">
        <div>
          <h1 className="text-[20px] font-bold text-slate-900 tracking-tight">
            KPI & Bonus Dashboard
          </h1>
          <p className="text-[13px] font-medium text-slate-500 mt-0.5">
            Operations projects, order history, team bonuses, carry and penalty records.
          </p>
        </div>

        {/* TOP TAB SWITCHER: SUMMARY LEDGER VS OPERATIONS HISTORY VS CAMPAIGN */}
        <div className="flex items-center gap-1 bg-slate-200/80 p-1 rounded-lg border border-slate-300/70 self-start md:self-auto flex-wrap">
          <button 
            onClick={() => setMainPageTab('summary')}
            className={`px-3 py-1.5 text-[12px] font-extrabold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
              mainPageTab === 'summary'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Award size={14} className={mainPageTab === 'summary' ? 'text-[#008060]' : 'text-slate-400'} />
            <span>KPI & Bonus Summary</span>
          </button>

          <button 
            onClick={() => setMainPageTab('operations')}
            className={`px-3 py-1.5 text-[12px] font-extrabold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
              mainPageTab === 'operations'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ListChecks size={14} className={mainPageTab === 'operations' ? 'text-[#008060]' : 'text-slate-400'} />
            <span>Operations Project History</span>
          </button>

          <button 
            onClick={() => setMainPageTab('campaign')}
            className={`px-3 py-1.5 text-[12px] font-extrabold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
              mainPageTab === 'campaign'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Target size={14} className={mainPageTab === 'campaign' ? 'text-[#008060]' : 'text-slate-400'} />
            <span>Campaign & Commission</span>
          </button>
        </div>
      </div>

      {/* ================= VIEW 1: MAIN KPI & BONUS SUMMARY ================= */}
      {mainPageTab === 'summary' && (
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-4">
          
          {/* HEADER USER BANNER & ROLE HIERARCHY SWITCHER + FILTERS */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            
            {/* Left: Avatar & Role Switcher */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-extrabold flex items-center justify-center text-[12px] shrink-0">
                AM
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h2 className="text-[14px] font-bold text-slate-900 leading-tight">Al Mamon</h2>
                  <span className="bg-emerald-50 text-[#008060] px-2 py-0.2 rounded text-[10.5px] font-bold border border-emerald-200">
                    OPERATION MAN
                  </span>
                </div>
                
                {/* Role View Switcher */}
                <div className="flex items-center gap-1.5 pt-0.5">
                  <span className="text-[11px] font-bold text-slate-500">View Mode:</span>
                  <select 
                    value={viewRoleMode}
                    onChange={(e) => setViewRoleMode(e.target.value)}
                    className="h-6 px-2 bg-slate-100 border border-slate-200 rounded text-[11px] font-extrabold text-slate-800 outline-none cursor-pointer focus:border-[#008060]"
                  >
                    <option value="myRecord">My ESS Record (Al Mamon)</option>
                    <option value="teamView">Team Leader View (Pixel Pioneers Team)</option>
                    <option value="managerView">Operation Manager View (Full Department)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right: Year, Quarter & Employee Filters */}
            <div className="flex flex-wrap items-center gap-3">
              
              {/* Employee Filter (Shown in Team/Manager Mode) */}
              {viewRoleMode !== 'myRecord' && (
                <div className="flex items-center gap-1.5">
                  <span className="text-[12px] font-bold text-slate-600 shrink-0">Employee:</span>
                  <div className="w-36">
                    <Select 
                      value={selectedEmployeeFilter}
                      onChange={(e) => setSelectedEmployeeFilter(e.target.value)}
                      showSearch={false}
                      options={[
                        { id: 'All', name: 'All Employees' },
                        { id: 'Al Mamon', name: 'Al Mamon (Op Man)' },
                        { id: 'Tanvir Ahmed', name: 'Tanvir Ahmed (TL)' },
                        { id: 'Sarah Jenkins', name: 'Sarah Jenkins (PM)' },
                        { id: 'Rafiqul Islam', name: 'Rafiqul Islam (Op Man)' },
                        { id: 'Mahmud Hassan', name: 'Mahmud Hassan (Op Man)' },
                      ]}
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-1.5">
                <span className="text-[12px] font-bold text-slate-600 shrink-0">Year:</span>
                <div className="w-24">
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

              <div className="flex items-center gap-1.5">
                <span className="text-[12px] font-bold text-slate-600 shrink-0">Quarter:</span>
                <div className="w-36 sm:w-40">
                  <Select 
                    value={selectedQuarter}
                    onChange={(e) => setSelectedQuarter(e.target.value)}
                    showSearch={false}
                    options={[
                      { id: 'Q1 (Jul - Sep)', name: 'Q1 (Jul - Sep)' },
                      { id: 'Q2 (Oct - Dec)', name: 'Q2 (Oct - Dec)' },
                      { id: 'Q3 (Jan - Mar)', name: 'Q3 (Jan - Mar)' },
                      { id: 'Q4 (Apr - Jun)', name: 'Q4 (Apr - Jun)' }
                    ]}
                  />
                </div>
              </div>

              <Button 
                className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] font-extrabold h-8 px-3.5 tracking-wide cursor-pointer flex items-center gap-1 shrink-0"
              >
                <RefreshCw size={13} />
                <span>Apply</span>
              </Button>

            </div>

          </div>

          {/* 8 MINIMAL STAT METRIC CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1">
            <div className="bg-white p-3 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between h-[85px]">
              <span className="text-[10.5px] font-bold text-slate-500 tracking-wider">TARGET (PERIOD $)</span>
              <h2 className="text-[19px] font-extrabold text-slate-900 leading-none">
                {viewRoleMode === 'myRecord' ? '$ 3,300' : '$ 27,100'}
              </h2>
            </div>

            <div className="bg-white p-3 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between h-[85px]">
              <span className="text-[10.5px] font-bold text-slate-500 tracking-wider">TOTAL SALES ($)</span>
              <h2 className="text-[19px] font-extrabold text-emerald-700 leading-none">
                {viewRoleMode === 'myRecord' ? '$ 1,724' : '$ 26,874'}
              </h2>
            </div>

            <div className="bg-white p-3 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between h-[85px]">
              <span className="text-[10.5px] font-bold text-slate-500 tracking-wider">UNPAID ($)</span>
              <h2 className="text-[19px] font-extrabold text-rose-600 leading-none">
                {viewRoleMode === 'myRecord' ? '$ 2,560' : '$ 8,310'}
              </h2>
            </div>

            <div className="bg-white p-3 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between h-[85px]">
              <span className="text-[10.5px] font-bold text-slate-500 tracking-wider">EL. BONUS (৳)</span>
              <h2 className="text-[19px] font-extrabold text-slate-900 leading-none">
                {viewRoleMode === 'myRecord' ? '৳ 0' : '৳ 22,500'}
              </h2>
            </div>

            <div className="bg-white p-3 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between h-[85px]">
              <div>
                <span className="text-[10.5px] font-bold text-slate-500 tracking-wider block">CURRENT BONUS (৳)</span>
                <span className="text-[9px] font-semibold text-slate-400">Pre-carry: ৳ 883</span>
              </div>
              <h2 className="text-[19px] font-extrabold text-slate-900 leading-none">
                {viewRoleMode === 'myRecord' ? '৳ 0' : '৳ 22,500'}
              </h2>
            </div>

            <div className="bg-white p-3 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between h-[85px]">
              <span className="text-[10.5px] font-bold text-slate-500 tracking-wider">NEW CARRY (৳)</span>
              <h2 className="text-[19px] font-extrabold text-orange-600 leading-none">৳ 0</h2>
            </div>

            <div className="bg-white p-3 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between h-[85px]">
              <span className="text-[10.5px] font-bold text-slate-500 tracking-wider">TOTAL CARRY (৳)</span>
              <h2 className="text-[19px] font-extrabold text-indigo-700 leading-none">
                {viewRoleMode === 'myRecord' ? '৳ 7,437' : '৳ 32,987'}
              </h2>
            </div>

            <div className="bg-white p-3 rounded-lg border border-slate-200/90 shadow-2xs flex flex-col justify-between h-[85px]">
              <span className="text-[10.5px] font-bold text-slate-500 tracking-wider">BONUS AMOUNT (৳)</span>
              <h2 className="text-[19px] font-extrabold text-[#008060] leading-none">
                {viewRoleMode === 'myRecord' ? '৳ 2,484' : '৳ 28,334'}
              </h2>
            </div>
          </div>

          {/* CONDITIONAL CONTENT: SUMMARY TABLE VS DETAILED RECORD PAGE */}
          {!selectedRowDetail ? (
            /* MAIN MULTI-USER KPI & BONUS SUMMARY TABLE WITH ASSIGNED PROJECTS & VALUES */
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-[14px] font-bold text-slate-900">
                  {viewRoleMode === 'myRecord' ? 'KPI & Bonus Summary Ledger' : viewRoleMode === 'teamView' ? 'Pixel Pioneers Team Bonus Ledger' : 'Department Bonus Approval Ledger'}
                </h3>
                
                {/* Search Bar for Team/Manager View */}
                {viewRoleMode !== 'myRecord' && (
                  <div className="relative w-full sm:w-64">
                    <input 
                      type="text"
                      placeholder="Search employee, ID or project..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full h-7 px-2.5 pr-7 text-[11.5px] border border-slate-200 rounded outline-none focus:border-[#008060] bg-slate-50 focus:bg-white"
                    />
                    <Search size={13} className="absolute right-2 top-1.5 text-slate-400 pointer-events-none" />
                  </div>
                )}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                      <th className="py-2.5 px-3 border-r border-slate-200 text-center w-8">
                        <input 
                          type="checkbox"
                          checked={selectedRows.length === displayedLedgerData.length && displayedLedgerData.length > 0}
                          onChange={() => setSelectedRows(selectedRows.length === displayedLedgerData.length ? [] : displayedLedgerData.map(d => d.id))}
                          className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                        />
                      </th>
                      <th className="py-2.5 px-3 border-r border-slate-200 text-center w-10">SL</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">Employee</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">Role</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">Assign Project</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 text-right whitespace-nowrap">Project Value ($)</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 text-center whitespace-nowrap">Sales Count</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">Team</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">Period</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 text-right">Target ($)</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 text-right">Total Sales ($)</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 text-right">Unpaid ($)</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 text-right">El. Bonus (৳)</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 text-right">Current Bonus (৳)</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 text-right">Pre. Carry (৳)</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 text-right">New Carry (৳)</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 text-right">Total Carry (৳)</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 text-right">Bonus Amount (৳)</th>
                      <th className="py-2.5 px-3 border-r border-slate-200 text-center">Status</th>
                      <th className="py-2.5 px-3 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                    {displayedLedgerData.length > 0 ? (
                      displayedLedgerData.map((row, idx) => (
                        <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2 px-3 border-r border-slate-200 text-center">
                            <input 
                              type="checkbox"
                              checked={selectedRows.includes(row.id)}
                              onChange={() => toggleSelectRow(row.id)}
                              className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                            />
                          </td>
                          <td className="py-2 px-3 border-r border-slate-200 text-center text-slate-500 font-semibold">{idx + 1}</td>
                          <td className="py-2 px-3 border-r border-slate-200 font-bold text-slate-900 whitespace-nowrap">
                            <div>
                              <span>{row.employee}</span>
                              <span className="text-[10px] text-slate-400 font-medium block">ID: {row.empId}</span>
                            </div>
                          </td>
                          <td className="py-2 px-3 border-r border-slate-200 text-slate-700 font-semibold whitespace-nowrap">{row.role}</td>
                          
                          {/* ASSIGN PROJECT COLUMN */}
                          <td className="py-2 px-3 border-r border-slate-200 font-bold text-[#008060] whitespace-nowrap flex items-center gap-1.5 mt-1">
                            <Briefcase size={12} className="text-[#008060] shrink-0" />
                            <span>{row.assignProject}</span>
                          </td>

                          {/* PROJECT VALUE COLUMN */}
                          <td className="py-2 px-3 border-r border-slate-200 text-right font-extrabold text-slate-900 whitespace-nowrap">
                            {row.projectValue}
                          </td>

                          {/* SALES COUNT COLUMN */}
                          <td className="py-2 px-3 border-r border-slate-200 text-center font-extrabold text-indigo-700">
                            {row.salesCount}
                          </td>

                          <td className="py-2 px-3 border-r border-slate-200 text-slate-600 whitespace-nowrap">{row.team}</td>
                          <td className="py-2 px-3 border-r border-slate-200 text-slate-600 whitespace-nowrap">{row.period}</td>
                          <td className="py-2 px-3 border-r border-slate-200 text-right font-bold text-slate-800">{row.targetPeriod}</td>
                          <td className="py-2 px-3 border-r border-slate-200 text-right font-bold text-emerald-700">{row.totalSales}</td>
                          <td className="py-2 px-3 border-r border-slate-200 text-right font-bold text-rose-600">{row.unpaid}</td>
                          <td className="py-2 px-3 border-r border-slate-200 text-right font-bold text-slate-700">{row.elBonus}</td>
                          <td className="py-2 px-3 border-r border-slate-200 text-right font-bold text-slate-700">{row.currentBonus}</td>
                          <td className="py-2 px-3 border-r border-slate-200 text-right font-bold text-purple-700">{row.preCarry}</td>
                          <td className="py-2 px-3 border-r border-slate-200 text-right font-bold text-orange-600">{row.newCarry}</td>
                          <td className="py-2 px-3 border-r border-slate-200 text-right font-extrabold text-indigo-700">{row.totalCarry}</td>
                          <td className="py-2 px-3 border-r border-slate-200 text-right font-extrabold text-[#008060]">{row.bonusAmount}</td>
                          <td className="py-2 px-3 border-r border-slate-200 text-center">
                            <span className={row.statusBadge}>{row.status}</span>
                          </td>
                          <td className="py-2 px-3 text-center">
                            <button 
                              onClick={() => setSelectedRowDetail(row)}
                              className="px-2.5 py-1 bg-[#008060] hover:bg-[#006e52] text-white text-[11.5px] font-extrabold rounded transition-colors cursor-pointer flex items-center gap-1 mx-auto shadow-2xs"
                            >
                              <Eye size={12} />
                              <span>View</span>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={20} className="py-8 text-center text-slate-400 font-medium">
                          No employee ledgers found matching your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* DETAILED RECORD PAGE VIEW */
            <div className="space-y-4 animate-in fade-in duration-150 pt-2">
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
                  <div className="px-2.5 py-0.5 text-slate-500 hover:text-slate-800 transition-colors">
                    <span>Confirmed</span>
                  </div>
                  <ChevronRight size={13} className="text-slate-400 mx-0.5" />
                  <div className="px-2.5 py-0.5 text-slate-500 hover:text-slate-800 transition-colors">
                    <span>Paid</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50/80 p-3 rounded-lg border border-slate-200/80">
                <div className="flex items-center gap-2">
                  <h2 className="text-[20px] font-black text-[#008060] tracking-tight">{selectedRowDetail.employee}</h2>
                  <span className="text-[11.5px] font-bold text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded">{selectedRowDetail.role}</span>
                  <span className="text-[11.5px] font-bold text-[#008060] bg-emerald-100/60 px-2 py-0.5 rounded">Project: {selectedRowDetail.assignProject}</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold">
                  <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded shadow-2xs">
                    <div className="w-4.5 h-4.5 rounded bg-emerald-100 text-[#008060] flex items-center justify-center">
                      <Edit3 size={11} />
                    </div>
                    <span>Operations</span>
                    <span className="text-[#008060] font-black">{selectedRowDetail.salesCount}</span>
                  </div>

                  <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded shadow-2xs">
                    <div className="w-4.5 h-4.5 rounded bg-teal-100 text-teal-700 flex items-center justify-center">
                      <DollarSign size={11} />
                    </div>
                    <span>Carry/ Unpaid Operations</span>
                    <span className="text-teal-700 font-black">4</span>
                  </div>

                  <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded shadow-2xs">
                    <div className="w-4.5 h-4.5 rounded bg-[#008060]/10 text-[#008060] flex items-center justify-center">
                      <RotateCcw size={11} />
                    </div>
                    <span>Carry from Previous Quarter</span>
                    <span className="text-[#008060] font-black">1</span>
                  </div>

                  <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded shadow-2xs">
                    <div className="w-4.5 h-4.5 rounded bg-blue-100 text-blue-700 flex items-center justify-center">
                      <Layers size={11} />
                    </div>
                    <span>Total Operations</span>
                    <span className="text-blue-700 font-black">{selectedRowDetail.salesCount + 1}</span>
                  </div>
                </div>
              </div>

              {/* EMPLOYEE METADATA GRID WITH PROJECT DETAILS */}
              <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h3 className="text-[14px] font-bold text-slate-900">Assigned Project & Performance Breakdown</h3>
                  <button 
                    onClick={() => setActiveTab('penaltyRecord')}
                    className="px-2.5 py-0.5 bg-amber-50 text-amber-700 hover:bg-amber-100 text-[11px] font-bold rounded border border-amber-200 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <ShieldAlert size={12} />
                    <span>Penalty Record</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1.5 text-[12px] font-medium pt-1">
                  <div className="space-y-1.5">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-bold">Role</span>
                      <span className="font-bold text-[#008060]">{selectedRowDetail.role}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-bold">Assigned Project</span>
                      <span className="font-bold text-[#008060]">{selectedRowDetail.assignProject}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-bold">Project Contract Value ($)</span>
                      <span className="font-extrabold text-slate-900">{selectedRowDetail.projectValue}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-bold">Project Manager</span>
                      <span className="font-bold text-slate-800">{selectedRowDetail.projectManager}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-bold">Team Leader</span>
                      <span className="font-bold text-slate-800">{selectedRowDetail.teamLeader}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-bold">Minimum Target</span>
                      <span className="font-extrabold text-slate-900">{selectedRowDetail.targetPeriod}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-bold">Current Total Achieved($)</span>
                      <span className="font-extrabold text-slate-900">{selectedRowDetail.totalSales}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-bold">Current Total Paid($)</span>
                      <span className="font-extrabold text-slate-900">{selectedRowDetail.bonusAmount}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500 font-bold">Current Total Unpaid($)</span>
                      <span className="font-extrabold text-slate-900">{selectedRowDetail.unpaid}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-bold">Period Start</span>
                      <span className="font-bold text-slate-800">Apr 1</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-bold">Period End</span>
                      <span className="font-bold text-slate-800">Jun 30</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-bold">Year</span>
                      <span className="font-bold text-slate-800">2,026</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-bold">Quarter</span>
                      <span className="font-bold text-slate-800">Q4 (Apr - Jun)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-bold">El. Bonus For Current Value(৳)</span>
                      <span className="font-extrabold text-slate-900">{selectedRowDetail.elBonus}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-bold">Current Bonus(৳)</span>
                      <span className="font-extrabold text-slate-900">{selectedRowDetail.currentBonus}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-bold flex items-center gap-1">
                        <span>Pre. Carry Bonus(৳)</span>
                        <HelpCircle size={11} className="text-slate-400" />
                      </span>
                      <span className="font-extrabold text-slate-900">682.93</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-500 font-bold">Remaining Carry (৳)</span>
                      <span className="font-extrabold text-slate-900">{selectedRowDetail.totalCarry}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500 font-bold">Total Carry(৳)</span>
                      <span className="font-extrabold text-slate-900">{selectedRowDetail.totalCarry}</span>
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
                  {activeTab === 'kpiLines' ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[11.5px] border border-slate-200 border-collapse">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                            <th className="py-2.5 px-3 border-r border-slate-200 text-center w-8">
                              <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                            </th>
                            <th className="py-2.5 px-3 border-r border-slate-200 text-center w-10">SL</th>
                            <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">Name</th>
                            <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">Date</th>
                            <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">Company</th>
                            <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">Service Line</th>
                            <th className="py-2.5 px-3 border-r border-slate-200 text-right whitespace-nowrap">Total Amount ($)</th>
                            <th className="py-2.5 px-3 border-r border-slate-200 text-center whitespace-nowrap">Order Status</th>
                            <th className="py-2.5 px-3 border-r border-slate-200 text-right whitespace-nowrap">Sales Bonus (৳)</th>
                            <th className="py-2.5 px-3 border-r border-slate-200 text-center whitespace-nowrap">KPI Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                          {operationsHistoryLines.map((line, idx) => (
                            <tr key={line.sn} className="hover:bg-slate-50/80 transition-colors">
                              <td className="py-2 px-3 border-r border-slate-200 text-center">
                                <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                              </td>
                              <td className="py-2 px-3 border-r border-slate-200 text-center text-slate-500 font-semibold">{idx + 1}</td>
                              <td className="py-2 px-3 border-r border-slate-200 font-bold text-[#008060]">{line.name}</td>
                              <td className="py-2 px-3 border-r border-slate-200 font-bold text-slate-800 whitespace-nowrap">{line.date}</td>
                              <td className="py-2 px-3 border-r border-slate-200 text-slate-800 font-semibold">{line.company}</td>
                              <td className="py-2 px-3 border-r border-slate-200 text-slate-600">{line.serviceLine}</td>
                              <td className="py-2 px-3 border-r border-slate-200 text-right font-extrabold text-slate-900">{line.totalAmount}</td>
                              <td className="py-2 px-3 border-r border-slate-200 text-center">
                                <span className="px-2 py-0.5 text-[10.5px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-300 rounded-full">
                                  {line.orderStatus}
                                </span>
                              </td>
                              <td className="py-2 px-3 border-r border-slate-200 text-right font-bold text-[#008060]">{line.salesBonus}</td>
                              <td className="py-2 px-3 border-r border-slate-200 text-center">
                                <span className={`px-2 py-0.5 text-[10.5px] font-bold rounded-full border ${
                                  line.kpiStatus === 'Approved'
                                    ? 'bg-emerald-50 text-emerald-600 border-emerald-300'
                                    : 'bg-amber-50 text-amber-600 border-amber-300'
                                }`}>
                                  {line.kpiStatus}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                            <th className="py-2.5 px-3 border-r border-slate-200 text-center w-8">
                              <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                            </th>
                            <th className="py-2.5 px-3 border-r border-slate-200 text-center w-10">SL</th>
                            <th className="py-2.5 px-3 border-r border-slate-200 whitespace-nowrap">Date</th>
                            <th className="py-2.5 px-3 border-r border-slate-200">Deduction Reason</th>
                            <th className="py-2.5 px-3 border-r border-slate-200 text-right">Deducted Amount</th>
                            <th className="py-2.5 px-3 text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                          {penaltyRecords.map((p, idx) => (
                            <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                              <td className="py-2 px-3 border-r border-slate-200 text-center">
                                <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                              </td>
                              <td className="py-2 px-3 border-r border-slate-200 text-center text-slate-500 font-semibold">{idx + 1}</td>
                              <td className="py-2 px-3 border-r border-slate-200 font-bold text-slate-800 whitespace-nowrap">{p.date}</td>
                              <td className="py-2 px-3 border-r border-slate-200 font-bold text-slate-900">{p.reason}</td>
                              <td className="py-2 px-3 border-r border-slate-200 text-right font-extrabold text-rose-600">{p.deducted}</td>
                              <td className="py-2 px-3 text-center">
                                <span className="px-2 py-0.5 text-[10.5px] font-bold bg-amber-50 text-amber-600 border border-amber-300 rounded-full">
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
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px] border border-slate-200 border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold whitespace-nowrap">
                  <th className="py-2.5 px-2.5 border-r border-slate-200 text-center w-8">
                    <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                  </th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200">Name</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200">Date</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200">Created on</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200">Assign Employee ID</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200">Assign Employee</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200">Employee ID</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200">Employee Name</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200">Company</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200 text-center">Order Status</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200 text-right">Sales Bonus</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200 text-center">Order Link</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200">Order Number</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200">Customer</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200">Bonus Profile Name</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200">Service Line</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200">Assigned Team</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200 text-right">Total Amount</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200 text-right">Monetary Value</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200 text-center">Payment Date</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200 text-center">Payment Due</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200 text-center">Currency</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200 text-center">Reversion</th>
                  <th className="py-2.5 px-2.5 border-r border-slate-200 text-center">KPI Status</th>
                  <th className="py-2.5 px-2.5 text-right">Bonus Payout</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-medium whitespace-nowrap">
                {operationsHistoryLines.map((row) => (
                  <tr key={row.sn} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2 px-2.5 border-r border-slate-200 text-center">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                    </td>
                    <td className="py-2 px-2.5 border-r border-slate-200 font-bold text-[#008060]">{row.name}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 font-bold text-slate-800">{row.date}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-slate-500 text-[10.5px]">{row.createdOn}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 font-mono text-slate-600">{row.assignEmpId}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 font-bold text-slate-900">{row.assignEmpName}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 font-mono text-slate-600">{row.empId}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 font-bold text-slate-900">{row.empName}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-slate-800 font-semibold">{row.company}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-center">
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-300 rounded-full">
                        {row.orderStatus}
                      </span>
                    </td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-right font-extrabold text-[#008060]">{row.salesBonus}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-center">
                      <a href="#" onClick={(e) => e.preventDefault()} className="text-[#008060] hover:underline flex items-center justify-center gap-1 font-bold">
                        <span>Link</span>
                        <ExternalLink size={10} />
                      </a>
                    </td>
                    <td className="py-2 px-2.5 border-r border-slate-200 font-mono text-slate-700">{row.orderNumber}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 font-bold text-slate-800">{row.customer}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-slate-700">{row.bonusProfileName}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-slate-700 font-semibold">{row.serviceLine}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-slate-600">{row.assignedTeam}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-right font-bold text-slate-900">{row.totalAmount}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-right font-bold text-slate-900">{row.monetaryValue}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-center text-slate-600">{row.paymentDate}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-center text-slate-600">{row.paymentDue}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-center text-slate-600">{row.currency}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-center text-slate-500">{row.reversion}</td>
                    <td className="py-2 px-2.5 border-r border-slate-200 text-center">
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${
                        row.kpiStatus === 'Approved'
                          ? 'bg-emerald-50 text-emerald-600 border-emerald-300'
                          : row.kpiStatus === 'Verified'
                          ? 'bg-blue-50 text-blue-600 border-blue-300'
                          : 'bg-amber-50 text-amber-600 border-amber-300'
                      }`}>
                        {row.kpiStatus}
                      </span>
                    </td>
                    <td className="py-2 px-2.5 text-right font-extrabold text-[#008060]">{row.bonusPayout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )}

      {/* ================= VIEW 3: CAMPAIGN & SALES COMMISSION ================= */}
      {mainPageTab === 'campaign' && (
        <div className="space-y-4 animate-in fade-in duration-150">
          
          {/* 3 TOP CAMPAIGN METRIC CARDS MATCHING REFERENCE SCREENSHOT 100% */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* CARD 1: Total Sales Count */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between h-[105px]">
              <div>
                <span className="text-[12px] font-bold text-slate-600 block">Total Sales Count</span>
                <h2 className="text-[26px] font-black text-slate-900 leading-tight mt-1">28</h2>
              </div>
              <button 
                onClick={() => setCampaignTab('commissions')}
                className="text-[11px] font-bold text-slate-500 hover:text-[#008060] transition-colors cursor-pointer text-left flex items-center gap-1"
              >
                <span>View commission records</span>
              </button>
            </div>

            {/* CARD 2: Total Sales Amount */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between h-[105px]">
              <div>
                <span className="text-[12px] font-bold text-slate-600 block">Total Sales Amount</span>
                <h2 className="text-[26px] font-black text-slate-900 leading-tight mt-1">$ 2,174.00</h2>
              </div>
              <button 
                onClick={() => setCampaignTab('commissions')}
                className="text-[11px] font-bold text-slate-500 hover:text-[#008060] transition-colors cursor-pointer text-left flex items-center gap-1"
              >
                <span>View commission records</span>
              </button>
            </div>

            {/* CARD 3: Commission */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between h-[105px]">
              <div>
                <span className="text-[12px] font-bold text-slate-600 block">Commission</span>
                <h2 className="text-[26px] font-black text-slate-900 leading-tight mt-1">৳ 2,934.00</h2>
              </div>
              <button 
                onClick={() => setCampaignTab('commissions')}
                className="text-[11px] font-bold text-slate-500 hover:text-[#008060] transition-colors cursor-pointer text-left flex items-center gap-1"
              >
                <span>View commission records</span>
              </button>
            </div>

          </div>

          {/* MAIN CAMPAIGN DATA CARD WITH SUB-TABS */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-2xs overflow-hidden">
            
            {/* Sub-Tab Header */}
            <div className="flex items-center gap-2 border-b border-slate-200 px-4 pt-3 bg-slate-50/60">
              <button 
                onClick={() => setCampaignTab('products')}
                className={`px-4 py-2 text-[12.5px] font-extrabold rounded-t-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                  campaignTab === 'products'
                    ? 'bg-white border-t-2 border-[#008060] text-[#008060] shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <ShoppingBag size={14} />
                <span>Top Products</span>
              </button>

              <button 
                onClick={() => setCampaignTab('clients')}
                className={`px-4 py-2 text-[12.5px] font-extrabold rounded-t-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                  campaignTab === 'clients'
                    ? 'bg-white border-t-2 border-[#008060] text-[#008060] shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Users size={14} />
                <span>Top Clients</span>
              </button>

              <button 
                onClick={() => setCampaignTab('commissions')}
                className={`px-4 py-2 text-[12.5px] font-extrabold rounded-t-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                  campaignTab === 'commissions'
                    ? 'bg-white border-t-2 border-[#008060] text-[#008060] shadow-2xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <DollarSign size={14} />
                <span>Commission Records</span>
              </button>
            </div>

            {/* SUB-TAB CONTENT TABLES */}
            <div className="p-4">
              
              {/* 1. TOP PRODUCTS TABLE */}
              {campaignTab === 'products' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[14px] font-bold text-slate-900">Top Sales Products Breakdown</h3>
                    <span className="text-[11px] font-medium text-slate-500">Sorted by sales performance</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                          <th className="py-2.5 px-3 border-r border-slate-200 text-center w-8">
                            <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                          </th>
                          <th className="py-2.5 px-3 border-r border-slate-200 text-center w-10">SL</th>
                          <th className="py-2.5 px-3 border-r border-slate-200">Product Name</th>
                          <th className="py-2.5 px-3 border-r border-slate-200">Category</th>
                          <th className="py-2.5 px-3 border-r border-slate-200 text-center">Sales Count</th>
                          <th className="py-2.5 px-3 border-r border-slate-200 text-right">Total Amount ($)</th>
                          <th className="py-2.5 px-3 text-right">Commission (৳)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                        {topProductsData.map((item, idx) => (
                          <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-2 px-3 border-r border-slate-200 text-center">
                              <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                            </td>
                            <td className="py-2 px-3 border-r border-slate-200 text-center text-slate-500 font-semibold">{idx + 1}</td>
                            <td className="py-2 px-3 border-r border-slate-200 font-bold text-slate-900">{item.name}</td>
                            <td className="py-2 px-3 border-r border-slate-200 text-slate-600">{item.category}</td>
                            <td className="py-2 px-3 border-r border-slate-200 text-center font-extrabold text-[#008060]">{item.salesCount}</td>
                            <td className="py-2 px-3 border-r border-slate-200 text-right font-bold text-slate-800">{item.totalAmount}</td>
                            <td className="py-2 px-3 text-right font-extrabold text-emerald-700">{item.commission}</td>
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
                    <h3 className="text-[14px] font-bold text-slate-900">Top Revenue Clients Breakdown</h3>
                    <span className="text-[11px] font-medium text-slate-500">Sorted by total purchase volume</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                          <th className="py-2.5 px-3 border-r border-slate-200 text-center w-8">
                            <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                          </th>
                          <th className="py-2.5 px-3 border-r border-slate-200 text-center w-10">SL</th>
                          <th className="py-2.5 px-3 border-r border-slate-200">Client Name</th>
                          <th className="py-2.5 px-3 border-r border-slate-200">Company / Organization</th>
                          <th className="py-2.5 px-3 border-r border-slate-200 text-center">Total Orders</th>
                          <th className="py-2.5 px-3 border-r border-slate-200 text-right">Sales Amount ($)</th>
                          <th className="py-2.5 px-3 text-right">Commission (৳)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                        {topClientsData.map((item, idx) => (
                          <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-2 px-3 border-r border-slate-200 text-center">
                              <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                            </td>
                            <td className="py-2 px-3 border-r border-slate-200 text-center text-slate-500 font-semibold">{idx + 1}</td>
                            <td className="py-2 px-3 border-r border-slate-200 font-bold text-slate-900">{item.name}</td>
                            <td className="py-2 px-3 border-r border-slate-200 text-slate-600">{item.company}</td>
                            <td className="py-2 px-3 border-r border-slate-200 text-center font-extrabold text-[#008060]">{item.ordersCount}</td>
                            <td className="py-2 px-3 border-r border-slate-200 text-right font-bold text-slate-800">{item.salesAmount}</td>
                            <td className="py-2 px-3 text-right font-extrabold text-emerald-700">{item.commission}</td>
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
                    <h3 className="text-[14px] font-bold text-slate-900">Commission Ledger Records</h3>
                    <span className="text-[11px] font-medium text-slate-500">Individual earned commission breakdown</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-[12px] border border-slate-200 border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                          <th className="py-2.5 px-3 border-r border-slate-200 text-center w-8">
                            <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                          </th>
                          <th className="py-2.5 px-3 border-r border-slate-200 text-center w-10">SL</th>
                          <th className="py-2.5 px-3 border-r border-slate-200">Date</th>
                          <th className="py-2.5 px-3 border-r border-slate-200">Order ID</th>
                          <th className="py-2.5 px-3 border-r border-slate-200">Client</th>
                          <th className="py-2.5 px-3 border-r border-slate-200">Product</th>
                          <th className="py-2.5 px-3 border-r border-slate-200 text-right">Sale Amount</th>
                          <th className="py-2.5 px-3 border-r border-slate-200 text-center">Rate</th>
                          <th className="py-2.5 px-3 border-r border-slate-200 text-right">Commission</th>
                          <th className="py-2.5 px-3 text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700 font-medium">
                        {commissionRecordsData.map((item, idx) => (
                          <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-2 px-3 border-r border-slate-200 text-center">
                              <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer" />
                            </td>
                            <td className="py-2 px-3 border-r border-slate-200 text-center text-slate-500 font-semibold">{idx + 1}</td>
                            <td className="py-2 px-3 border-r border-slate-200 font-semibold text-slate-700">{item.date}</td>
                            <td className="py-2 px-3 border-r border-slate-200 font-mono text-[11px] text-slate-700">{item.orderId}</td>
                            <td className="py-2 px-3 border-r border-slate-200 font-bold text-slate-900">{item.client}</td>
                            <td className="py-2 px-3 border-r border-slate-200 text-slate-600">{item.product}</td>
                            <td className="py-2 px-3 border-r border-slate-200 text-right font-bold text-slate-800">{item.amount}</td>
                            <td className="py-2 px-3 border-r border-slate-200 text-center text-slate-600">{item.rate}</td>
                            <td className="py-2 px-3 border-r border-slate-200 text-right font-extrabold text-[#008060]">{item.commission}</td>
                            <td className="py-2 px-3 text-center">
                              <span className="px-2 py-0.5 text-[10.5px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-300 rounded-full">
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
