import React, { useState } from 'react';
import { 
  User, Mail, Phone, MapPin, Briefcase, 
  FileText, Download, Edit3, Building, 
  CreditCard, GraduationCap, HeartHandshake, CheckCircle2, Copy, X, Plus, Trash2
} from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import FormLabel from '@/components/ui/label';
import Select from '@/components/ui/select';
import Modal from '@/components/modals/modal';

export default function AboutMePage() {
  const [activeTab, setActiveTab] = useState<'personal' | 'employment' | 'emergency' | 'education' | 'documents'>('personal');
  const [isCopied, setIsCopied] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [profileData, setProfileData] = useState({
    // Personal Info
    fullName: 'Al Mamon',
    gender: 'Male',
    dob: '14 Aug, 1996',
    bloodGroup: 'O Positive (O+)',
    nid: '9948-2819-1092',
    maritalStatus: 'Married',
    email: 'mamon.dev@gmail.com',
    phone: '+880 1711-009988',
    presentAddress: 'House 14, Road 5, Block B, Banasree, Rampura, Dhaka',
    permanentAddress: 'Vill: Shanti Pur, Post: Sadar, Dist: Tangail, Bangladesh',
    
    // Employment Info
    empId: 'EMP-2024-089',
    workEmail: 'mamon@bdcalling.com',
    designation: 'Senior Frontend Engineer',
    department: 'Software Engineering',
    joiningDate: '20 Jun, 2024',
    shift: '08:00 AM – 05:00 PM',
    branch: 'Banasree Main Branch',

    // Emergency Contacts
    emergencyContactName: 'Nusrat Jahan',
    emergencyContactRelation: 'Spouse',
    emergencyContactPhone: '+880 1711-009988',
    secondaryContactName: 'Tanvir Ahmed',
    secondaryContactRelation: 'Brother',
    secondaryContactPhone: '+880 1819-223344',

    // Bank & Payroll
    bankName: 'Dutch-Bangla Bank',
    accountNo: '**** **** 9482',
    bankBranch: 'Banasree Branch',
    tinNo: '889-192-3849',
  });

  const [educationList, setEducationList] = useState([
    { id: 1, degree: 'B.Sc. in Computer Science & Engineering', institute: 'Islamic University of Technology (IUT)', passingYear: '2016 – 2020', result: 'CGPA: 3.78' },
    { id: 2, degree: 'Higher Secondary Certificate (HSC)', institute: 'Dhaka City College', passingYear: '2014 – 2016', result: 'GPA: 5.00' },
  ]);

  const handleCopyEmpId = () => {
    navigator.clipboard.writeText('EMP-2024-089');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditModalOpen(false);
  };

  const handleAddEducationItem = () => {
    setEducationList(prev => [
      ...prev,
      { id: Date.now(), degree: '', institute: '', passingYear: '', result: '' }
    ]);
  };

  const handleDeleteEducationItem = (id: number) => {
    if (educationList.length > 1) {
      setEducationList(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleUpdateEducationItem = (id: number, field: string, value: string) => {
    setEducationList(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  return (
    <div className="p-4 max-w-[1500px] mx-auto bg-[#f8f9fa] min-h-screen text-slate-800 space-y-4 pb-16 font-sans antialiased">
      
      {/* MINIMAL PROFILE HEADER CARD */}
      <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
          
          {/* Avatar & User Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3.5 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-emerald-700 text-white font-extrabold text-xl flex items-center justify-center border-2 border-white shadow-xs shrink-0">
              AM
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h1 className="text-[18px] font-bold text-slate-900 leading-snug">{profileData.fullName}</h1>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 font-extrabold text-[11px] rounded border border-emerald-200">
                  Active • Full-Time
                </span>
              </div>
              
              <p className="text-[13px] font-medium text-slate-500 mt-0.5">
                {profileData.designation} <span className="text-slate-300">•</span> {profileData.department}
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-[12px] font-medium text-slate-400 mt-1.5">
                <span className="flex items-center gap-1">
                  <Building size={13} className="text-slate-400" />
                  Bdcalling IT Ltd.
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={13} className="text-slate-400" />
                  Dhaka, BD
                </span>
                <button 
                  onClick={handleCopyEmpId} 
                  className="flex items-center gap-1 text-slate-700 font-bold bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded transition-colors text-[11px]"
                >
                  <span>ID: {profileData.empId}</span>
                  {isCopied ? <CheckCircle2 size={11} className="text-emerald-600" /> : <Copy size={11} className="text-slate-400" />}
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="outline" className="h-8 text-[12px] font-bold gap-1 px-3 border-slate-200 hover:bg-slate-50">
              <Download size={13} />
              <span>Download CV</span>
            </Button>
            <Button 
              onClick={() => setIsEditModalOpen(true)}
              className="h-8 text-[12px] font-bold gap-1 px-3 bg-[#008060] hover:bg-[#006e52] text-white cursor-pointer"
            >
              <Edit3 size={13} />
              <span>Edit Profile</span>
            </Button>
          </div>
        </div>

        {/* COMPACT NAV TABS */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-1 overflow-x-auto custom-scrollbar">
          {[
            { id: 'personal', label: 'Personal Info', icon: User },
            { id: 'employment', label: 'Employment', icon: Briefcase },
            { id: 'emergency', label: 'Emergency Contacts', icon: HeartHandshake },
            { id: 'education', label: 'Education', icon: GraduationCap },
            { id: 'documents', label: 'Documents', icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-1.5 px-3 text-[12px] font-bold rounded-md flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                  isActive 
                    ? 'bg-slate-900 text-white shadow-2xs' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* MAIN TAB CONTENT (8 COLS) */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* TAB 1: PERSONAL INFO */}
          {activeTab === 'personal' && (
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="text-[14px] font-bold text-slate-800 flex items-center gap-1.5">
                  <User size={15} className="text-[#008060]" />
                  Personal Details
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3.5 gap-x-4 text-[12.5px]">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Full Name</span>
                  <p className="font-bold text-slate-900 mt-0.5">{profileData.fullName}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Gender</span>
                  <p className="font-bold text-slate-900 mt-0.5">{profileData.gender}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Date of Birth</span>
                  <p className="font-bold text-slate-900 mt-0.5">{profileData.dob}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Blood Group</span>
                  <p className="font-bold text-rose-700 mt-0.5">{profileData.bloodGroup}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">NID / Passport</span>
                  <p className="font-bold text-slate-900 mt-0.5">{profileData.nid}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Marital Status</span>
                  <p className="font-bold text-slate-900 mt-0.5">{profileData.maritalStatus}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Email</span>
                  <p className="font-bold text-slate-800 mt-0.5 truncate">{profileData.email}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Phone</span>
                  <p className="font-bold text-slate-800 mt-0.5">{profileData.phone}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <h4 className="text-[12.5px] font-bold text-slate-700">Address Info</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12px]">
                  <div className="p-2.5 bg-slate-50 border border-slate-200/70 rounded-md">
                    <span className="text-[10.5px] font-bold text-slate-400 uppercase">Present Address</span>
                    <p className="font-semibold text-slate-800 mt-0.5">{profileData.presentAddress}</p>
                  </div>
                  <div className="p-2.5 bg-slate-50 border border-slate-200/70 rounded-md">
                    <span className="text-[10.5px] font-bold text-slate-400 uppercase">Permanent Address</span>
                    <p className="font-semibold text-slate-800 mt-0.5">{profileData.permanentAddress}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: EMPLOYMENT DETAILS */}
          {activeTab === 'employment' && (
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="text-[14px] font-bold text-slate-800 flex items-center gap-1.5">
                  <Briefcase size={15} className="text-[#008060]" />
                  Employment Information
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3.5 gap-x-4 text-[12.5px]">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Employee ID</span>
                  <p className="font-bold text-slate-900 mt-0.5">{profileData.empId}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Work Email</span>
                  <p className="font-bold text-emerald-700 mt-0.5 truncate">{profileData.workEmail}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Designation</span>
                  <p className="font-bold text-slate-900 mt-0.5">{profileData.designation}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Department</span>
                  <p className="font-bold text-slate-900 mt-0.5">{profileData.department}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Joining Date</span>
                  <p className="font-bold text-slate-900 mt-0.5">{profileData.joiningDate}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Length of Service</span>
                  <p className="font-bold text-slate-900 mt-0.5">2 Yrs 1 Mo</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Shift</span>
                  <p className="font-bold text-slate-900 mt-0.5">{profileData.shift}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase">Branch</span>
                  <p className="font-bold text-slate-900 mt-0.5">{profileData.branch}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: EMERGENCY CONTACTS */}
          {activeTab === 'emergency' && (
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-3">
              <h3 className="text-[14px] font-bold text-slate-800 pb-2 border-b border-slate-100 flex items-center gap-1.5">
                <HeartHandshake size={15} className="text-[#008060]" />
                Emergency Contacts
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px]">
                <div className="p-3 bg-slate-50 border border-slate-200/70 rounded-md space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">Primary</span>
                    <span className="text-[11.5px] text-slate-400 font-medium">{profileData.emergencyContactRelation}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-[13px]">{profileData.emergencyContactName}</h4>
                  <p className="font-medium text-slate-700 flex items-center gap-1">
                    <Phone size={12} className="text-slate-400" /> {profileData.emergencyContactPhone}
                  </p>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200/70 rounded-md space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-bold text-slate-600 bg-slate-200 px-1.5 py-0.2 rounded">Secondary</span>
                    <span className="text-[11.5px] text-slate-400 font-medium">{profileData.secondaryContactRelation}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-[13px]">{profileData.secondaryContactName}</h4>
                  <p className="font-medium text-slate-700 flex items-center gap-1">
                    <Phone size={12} className="text-slate-400" /> {profileData.secondaryContactPhone}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: EDUCATION */}
          {activeTab === 'education' && (
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="text-[14px] font-bold text-slate-800 flex items-center gap-1.5">
                  <GraduationCap size={15} className="text-[#008060]" />
                  Educational Qualifications ({educationList.length})
                </h3>
                <button 
                  onClick={() => setIsEditModalOpen(true)}
                  className="flex items-center gap-1 text-[11.5px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded-md transition-colors"
                >
                  <Plus size={13} className="stroke-[2.5]" />
                  <span>Add / Manage Education</span>
                </button>
              </div>

              <div className="space-y-2 text-[12.5px]">
                {educationList.map((edu) => (
                  <div key={edu.id} className="p-3 bg-slate-50 border border-slate-200/70 rounded-md flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900">{edu.degree || 'Degree / Exam Title'}</h4>
                      <p className="text-[11.5px] text-slate-500 font-medium mt-0.5">
                        {edu.institute || 'Institute / University'} • <strong className="text-emerald-700">{edu.result}</strong>
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11.5px] font-bold text-slate-400">{edu.passingYear}</span>
                      <button 
                        onClick={() => handleDeleteEducationItem(edu.id)} 
                        className="text-slate-400 hover:text-rose-600 transition-colors p-1" 
                        title="Delete"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: DOCUMENTS */}
          {activeTab === 'documents' && (
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-3">
              <h3 className="text-[14px] font-bold text-slate-800 pb-2 border-b border-slate-100 flex items-center gap-1.5">
                <FileText size={15} className="text-[#008060]" />
                Documents
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12.5px]">
                {[
                  { name: 'NID Card Scan', size: '1.4 MB' },
                  { name: 'Appointment Letter', size: '2.8 MB' },
                  { name: 'Educational Certificate', size: '5.2 MB' },
                  { name: 'TIN Certificate', size: '890 KB' },
                ].map((doc, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 border border-slate-200/70 rounded-md flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <FileText size={14} className="text-emerald-600 shrink-0" />
                      <span className="font-bold text-slate-800 truncate text-[12px]">{doc.name}</span>
                    </div>
                    <button className="text-emerald-700 hover:underline text-[11.5px] font-bold shrink-0 ml-2">Download</button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* SIDEBAR PANEL (4 COLS) */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Supervisor Card */}
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-2.5">
            <h3 className="text-[13.5px] font-bold text-slate-800 pb-1.5 border-b border-slate-100">
              Reporting Line
            </h3>
            
            <div className="space-y-2 text-[12.5px]">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-[11.5px] border border-emerald-300 shrink-0">
                  MR
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-[13px]">Md. Ridoy</h4>
                  <p className="text-[11px] text-slate-400 font-medium">Direct Supervisor</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-slate-100">
                <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center text-[11.5px] border border-indigo-300 shrink-0">
                  MK
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-[13px]">Md. Kamruzzaman</h4>
                  <p className="text-[11px] text-slate-400 font-medium">Head of Dept / Line Manager</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bank & Payroll Info */}
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs space-y-2.5">
            <h3 className="text-[13.5px] font-bold text-slate-800 pb-1.5 border-b border-slate-100 flex items-center justify-between">
              <span>Payroll Info</span>
              <CreditCard size={14} className="text-slate-400" />
            </h3>

            <div className="space-y-2 text-[12px]">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium">Bank</span>
                <span className="font-bold text-slate-800">{profileData.bankName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium">Account</span>
                <span className="font-bold text-slate-800">{profileData.accountNo}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium">Branch</span>
                <span className="font-bold text-slate-800">{profileData.bankBranch}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-medium">TIN</span>
                <span className="font-bold text-slate-800">{profileData.tinNo}</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* COMPLETE EDIT PROFILE MODAL */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Full Profile Information"
        description="Update your personal, employment, emergency contact, education, and payroll details"
        size="xl"
        footer={
          <>
            <Button 
              variant="outline" 
              onClick={() => setIsEditModalOpen(false)} 
              className="h-8.5 text-[12.5px] font-bold"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSaveProfile} 
              className="bg-[#008060] hover:bg-[#006e52] text-white text-[12.5px] h-8.5 px-4 font-bold gap-1.5 flex items-center"
            >
              <CheckCircle2 size={14} />
              <span>Save All Changes</span>
            </Button>
          </>
        }
      >
        <form onSubmit={handleSaveProfile} className="space-y-5 text-left max-h-[70vh] overflow-y-auto pr-1 custom-scrollbar">
          
          {/* SECTION 1: PERSONAL DETAILS */}
          <div className="space-y-3">
            <h4 className="text-[13px] font-bold text-[#008060] pb-1 border-b border-slate-100 flex items-center gap-1.5">
              <User size={15} />
              Personal Details
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input 
                label="Full Name"
                value={profileData.fullName}
                onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                className="h-9 text-[13px]"
              />
              <Input 
                label="Personal Phone"
                value={profileData.phone}
                onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                className="h-9 text-[13px]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Input 
                label="Personal Email"
                type="email"
                value={profileData.email}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                className="h-9 text-[13px]"
              />
              
              <div className="flex flex-col gap-1 w-full">
                <FormLabel className="text-[14px] font-bold text-[#202223] !mb-0">
                  Gender
                </FormLabel>
                <Select 
                  value={profileData.gender}
                  onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })}
                  options={[
                    { id: 'Male', name: 'Male' },
                    { id: 'Female', name: 'Female' },
                    { id: 'Other', name: 'Other' },
                  ]}
                />
              </div>

              <div className="flex flex-col gap-1 w-full">
                <FormLabel className="text-[14px] font-bold text-[#202223] !mb-0">
                  Blood Group
                </FormLabel>
                <Select 
                  value={profileData.bloodGroup}
                  onChange={(e) => setProfileData({ ...profileData, bloodGroup: e.target.value })}
                  options={[
                    { id: 'O Positive (O+)', name: 'O Positive (O+)' },
                    { id: 'A Positive (A+)', name: 'A Positive (A+)' },
                    { id: 'B Positive (B+)', name: 'B Positive (B+)' },
                    { id: 'AB Positive (AB+)', name: 'AB Positive (AB+)' },
                    { id: 'O Negative (O-)', name: 'O Negative (O-)' },
                  ]}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input 
                label="National ID (NID) / Passport"
                value={profileData.nid}
                onChange={(e) => setProfileData({ ...profileData, nid: e.target.value })}
                className="h-9 text-[13px]"
              />
              <Input 
                label="Date of Birth"
                value={profileData.dob}
                onChange={(e) => setProfileData({ ...profileData, dob: e.target.value })}
                className="h-9 text-[13px]"
              />
            </div>

            <Input 
              label="Present Address"
              value={profileData.presentAddress}
              onChange={(e) => setProfileData({ ...profileData, presentAddress: e.target.value })}
              className="h-9 text-[13px]"
            />

            <Input 
              label="Permanent Address"
              value={profileData.permanentAddress}
              onChange={(e) => setProfileData({ ...profileData, permanentAddress: e.target.value })}
              className="h-9 text-[13px]"
            />
          </div>

          {/* SECTION 2: EMPLOYMENT INFORMATION */}
          <div className="space-y-3 pt-2">
            <h4 className="text-[13px] font-bold text-[#008060] pb-1 border-b border-slate-100 flex items-center gap-1.5">
              <Briefcase size={15} />
              Employment Details
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input 
                label="Designation"
                value={profileData.designation}
                onChange={(e) => setProfileData({ ...profileData, designation: e.target.value })}
                className="h-9 text-[13px]"
              />
              <Input 
                label="Department"
                value={profileData.department}
                onChange={(e) => setProfileData({ ...profileData, department: e.target.value })}
                className="h-9 text-[13px]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input 
                label="Work Email"
                type="email"
                value={profileData.workEmail}
                onChange={(e) => setProfileData({ ...profileData, workEmail: e.target.value })}
                className="h-9 text-[13px]"
              />
              <Input 
                label="Office Location / Branch"
                value={profileData.branch}
                onChange={(e) => setProfileData({ ...profileData, branch: e.target.value })}
                className="h-9 text-[13px]"
              />
            </div>
          </div>

          {/* SECTION 3: EMERGENCY CONTACTS */}
          <div className="space-y-3 pt-2">
            <h4 className="text-[13px] font-bold text-[#008060] pb-1 border-b border-slate-100 flex items-center gap-1.5">
              <HeartHandshake size={15} />
              Emergency Contacts
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Input 
                label="Primary Contact Name"
                value={profileData.emergencyContactName}
                onChange={(e) => setProfileData({ ...profileData, emergencyContactName: e.target.value })}
                className="h-9 text-[13px]"
              />
              <Input 
                label="Relationship"
                value={profileData.emergencyContactRelation}
                onChange={(e) => setProfileData({ ...profileData, emergencyContactRelation: e.target.value })}
                className="h-9 text-[13px]"
              />
              <Input 
                label="Contact Phone"
                value={profileData.emergencyContactPhone}
                onChange={(e) => setProfileData({ ...profileData, emergencyContactPhone: e.target.value })}
                className="h-9 text-[13px]"
              />
            </div>
          </div>

          {/* SECTION 4: EDUCATIONAL QUALIFICATIONS */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between pb-1 border-b border-slate-100">
              <h4 className="text-[13px] font-bold text-[#008060] flex items-center gap-1.5">
                <GraduationCap size={15} />
                Educational Qualifications
              </h4>
              <button 
                type="button"
                onClick={handleAddEducationItem}
                className="text-[11.5px] font-bold text-emerald-700 hover:underline flex items-center gap-1"
              >
                <Plus size={13} />
                <span>Add Another Qualification</span>
              </button>
            </div>

            {educationList.map((edu, idx) => (
              <div key={edu.id} className="p-3 bg-slate-50 border border-slate-200/80 rounded-md space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Education #{idx + 1}</span>
                  {educationList.length > 1 && (
                    <button 
                      type="button" 
                      onClick={() => handleDeleteEducationItem(edu.id)}
                      className="text-slate-400 hover:text-rose-600 transition-colors"
                      title="Remove Education"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Input 
                    label="Degree / Exam Title"
                    value={edu.degree}
                    onChange={(e) => handleUpdateEducationItem(edu.id, 'degree', e.target.value)}
                    className="h-9 text-[13px]"
                  />
                  <Input 
                    label="Institute / University"
                    value={edu.institute}
                    onChange={(e) => handleUpdateEducationItem(edu.id, 'institute', e.target.value)}
                    className="h-9 text-[13px]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Input 
                    label="Passing Year / Period"
                    value={edu.passingYear}
                    onChange={(e) => handleUpdateEducationItem(edu.id, 'passingYear', e.target.value)}
                    className="h-9 text-[13px]"
                  />
                  <Input 
                    label="Result / CGPA"
                    value={edu.result}
                    onChange={(e) => handleUpdateEducationItem(edu.id, 'result', e.target.value)}
                    className="h-9 text-[13px]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* SECTION 5: PAYROLL & BANK DETAILS */}
          <div className="space-y-3 pt-2">
            <h4 className="text-[13px] font-bold text-[#008060] pb-1 border-b border-slate-100 flex items-center gap-1.5">
              <CreditCard size={15} />
              Bank & Payroll Information
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input 
                label="Bank Name"
                value={profileData.bankName}
                onChange={(e) => setProfileData({ ...profileData, bankName: e.target.value })}
                className="h-9 text-[13px]"
              />
              <Input 
                label="Account Number"
                value={profileData.accountNo}
                onChange={(e) => setProfileData({ ...profileData, accountNo: e.target.value })}
                className="h-9 text-[13px]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input 
                label="Bank Branch"
                value={profileData.bankBranch}
                onChange={(e) => setProfileData({ ...profileData, bankBranch: e.target.value })}
                className="h-9 text-[13px]"
              />
              <Input 
                label="TIN Number"
                value={profileData.tinNo}
                onChange={(e) => setProfileData({ ...profileData, tinNo: e.target.value })}
                className="h-9 text-[13px]"
              />
            </div>
          </div>

        </form>
      </Modal>

    </div>
  );
}
