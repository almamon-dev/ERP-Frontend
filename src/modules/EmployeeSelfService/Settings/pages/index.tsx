import React, { useState } from 'react';
import { 
  User, Shield, Bell, Monitor, Lock, Smartphone, Globe, Eye, EyeOff, Save, KeyRound, 
  CheckCircle, AlertCircle, Laptop, ShieldCheck, Download, Trash2, Moon, Sun, DollarSign,
  Mail, MessageSquare, Briefcase, Calendar, FileText, Check, HelpCircle
} from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import FormLabel from '@/components/ui/label';
import Select from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';

// SLEEK REUSABLE TOGGLE SWITCH COMPONENT
const ToggleSwitch = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    onClick={onChange}
    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
      checked ? 'bg-[#008060]' : 'bg-slate-300'
    }`}
  >
    <span
      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
        checked ? 'translate-x-5' : 'translate-x-0'
      }`}
    />
  </button>
);

export default function EssSettingsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'notifications' | 'preferences' | 'privacy'>('profile');

  // Success Feedback Toast State
  const [showSavedToast, setShowSavedToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('Settings saved successfully!');

  const triggerSaveToast = (msg: string) => {
    setToastMessage(msg);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 3000);
  };

  // 1. PROFILE & ACCOUNT FORM STATE
  const [fullName, setFullName] = useState(user?.name || 'Al Mamon');
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
      triggerSaveToast('Profile picture updated successfully!');
    }
  };

  const handleRemoveAvatar = () => {
    setAvatarUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    triggerSaveToast('Profile picture removed.');
  };
  const [preferredName, setPreferredName] = useState('Mamon');
  const [workEmail, setWorkEmail] = useState(user?.email || 'mamon@company.com');
  const [personalEmail, setPersonalEmail] = useState('mamon.personal@gmail.com');
  const [phone, setPhone] = useState('+880 1712-345678');
  const [emergencyContactName, setEmergencyContactName] = useState('Md. Rafiqul Islam');
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('+880 1819-987654');
  const [emergencyRelation, setEmergencyRelation] = useState('Brother');
  const [language, setLanguage] = useState('en');
  const [timezone, setTimezone] = useState('Asia/Dhaka');

  // 2. SECURITY FORM STATE
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const [activeSessions, setActiveSessions] = useState([
    { id: 1, device: 'Windows 11 PC - Chrome', ip: '103.145.74.12', location: 'Dhaka, Bangladesh', current: true, time: 'Active now' },
    { id: 2, device: 'iPhone 15 Pro - Safari', ip: '103.145.74.45', location: 'Dhaka, Bangladesh', current: false, time: '2 hours ago' },
    { id: 3, device: 'MacBook Air - Firefox', ip: '182.160.118.5', location: 'Chittagong, Bangladesh', current: false, time: '3 days ago' },
  ]);

  const handleRevokeSession = (id: number) => {
    setActiveSessions(prev => prev.filter(s => s.id !== id));
    triggerSaveToast('Session revoked successfully.');
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert('Please fill in all password fields.');
      return;
    }
    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match!');
      return;
    }
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    triggerSaveToast('Your password has been updated successfully!');
  };

  // 3. NOTIFICATION PREFERENCES STATE
  const [notifications, setNotifications] = useState({
    emailChannel: true,
    smsChannel: true,
    pushChannel: true,
    inAppChannel: true,

    attendanceAlerts: true,
    leaveApprovalAlerts: true,
    payslipAlerts: true,
    expenseAlerts: true,
    kpiBonusAlerts: true,
    meetingReminders: true,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // 4. DISPLAY & PREFERENCES STATE
  const [themeMode, setThemeMode] = useState<'light' | 'dark' | 'system'>('light');
  const [defaultLandingPage, setDefaultLandingPage] = useState('/employee-portal/dashboard');
  const [dateFormat, setDateFormat] = useState('DD/MM/YYYY');
  const [currencyFormat, setCurrencyFormat] = useState('BDT');

  // 5. PRIVACY STATE
  const [showInDirectory, setShowInDirectory] = useState(true);
  const [showBirthdayAlerts, setShowBirthdayAlerts] = useState(true);
  const [allowPeerFeedback, setAllowPeerFeedback] = useState(true);

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto bg-[#f8f9fa] min-h-screen text-slate-800 space-y-5 font-sans antialiased pb-24">
      
      {/* SUCCESS TOAST NOTIFICATION */}
      {showSavedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#008060] text-white px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 text-[12.5px] font-bold animate-in slide-in-from-bottom-5">
          <CheckCircle size={16} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* PAGE HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div>
          <h1 className="text-[20px] font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Shield size={22} className="text-[#008060]" />
            <span>Employee Portal Settings</span>
          </h1>
          <p className="text-[12.5px] text-slate-500 mt-0.5 font-normal">
            Manage your personal profile, security options, notification channels, theme, and privacy preferences.
          </p>
        </div>

        <Button
          onClick={() => triggerSaveToast('All changes saved successfully!')}
          className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] font-bold h-8 px-3.5 tracking-wide cursor-pointer flex items-center gap-1.5 shrink-0 shadow-2xs"
        >
          <Save size={14} />
          <span>Save Changes</span>
        </Button>
      </div>

      {/* MAIN SETTINGS CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        {/* LEFT NAVIGATION TABS SIDEBAR */}
        <div className="lg:col-span-3 bg-white p-2 rounded-lg border border-slate-200 shadow-2xs space-y-1">
          <button
            onClick={() => setActiveTab('profile')}
            className={`w-full px-3 py-2.5 text-[12.5px] font-bold rounded-md transition-colors cursor-pointer flex items-center gap-2.5 text-left ${
              activeTab === 'profile'
                ? 'bg-emerald-50 text-[#008060] border border-emerald-200'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <User size={16} className={activeTab === 'profile' ? 'text-[#008060]' : 'text-slate-400'} />
            <span>Personal & Account</span>
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`w-full px-3 py-2.5 text-[12.5px] font-bold rounded-md transition-colors cursor-pointer flex items-center gap-2.5 text-left ${
              activeTab === 'security'
                ? 'bg-emerald-50 text-[#008060] border border-emerald-200'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Lock size={16} className={activeTab === 'security' ? 'text-[#008060]' : 'text-slate-400'} />
            <span>Security & Login</span>
          </button>

          <button
            onClick={() => setActiveTab('notifications')}
            className={`w-full px-3 py-2.5 text-[12.5px] font-bold rounded-md transition-colors cursor-pointer flex items-center gap-2.5 text-left ${
              activeTab === 'notifications'
                ? 'bg-emerald-50 text-[#008060] border border-emerald-200'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Bell size={16} className={activeTab === 'notifications' ? 'text-[#008060]' : 'text-slate-400'} />
            <span>Notification Alerts</span>
          </button>

          <button
            onClick={() => setActiveTab('preferences')}
            className={`w-full px-3 py-2.5 text-[12.5px] font-bold rounded-md transition-colors cursor-pointer flex items-center gap-2.5 text-left ${
              activeTab === 'preferences'
                ? 'bg-emerald-50 text-[#008060] border border-emerald-200'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Monitor size={16} className={activeTab === 'preferences' ? 'text-[#008060]' : 'text-slate-400'} />
            <span>Display & Theme</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`w-full px-3 py-2.5 text-[12.5px] font-bold rounded-md transition-colors cursor-pointer flex items-center gap-2.5 text-left ${
              activeTab === 'privacy'
                ? 'bg-emerald-50 text-[#008060] border border-emerald-200'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <ShieldCheck size={16} className={activeTab === 'privacy' ? 'text-[#008060]' : 'text-slate-400'} />
            <span>Privacy & Data</span>
          </button>
        </div>

        {/* RIGHT CONTENT PANEL */}
        <div className="lg:col-span-9 space-y-5">
          
          {/* TAB 1: PERSONAL & ACCOUNT SETTINGS */}
          {activeTab === 'profile' && (
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-5">
              <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h2 className="text-[15px] font-bold text-slate-900">Personal & Account Details</h2>
                  <p className="text-[12px] text-slate-500 font-normal">Update your contact details, emergency contacts, and language settings.</p>
                </div>
              </div>

              {/* AVATAR UPLOAD BAR */}
              <div className="bg-slate-50 p-4 rounded-md border border-slate-200/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#008060] text-white font-extrabold text-[16px] flex items-center justify-center shadow-2xs border-2 border-white overflow-hidden shrink-0">
                    {avatarUrl ? (
                      <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      'AM'
                    )}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-slate-900">{fullName}</h3>
                    <p className="text-[11.5px] text-slate-500 font-mono">Employee ID: EMP-15208</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleAvatarChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <Button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-white hover:bg-slate-100 text-slate-700 text-[11.5px] font-bold h-7 px-3 border border-slate-200 rounded cursor-pointer"
                  >
                    Change Picture
                  </Button>
                  {avatarUrl && (
                    <Button
                      type="button"
                      onClick={handleRemoveAvatar}
                      className="bg-rose-50 hover:bg-rose-100 text-rose-600 text-[11.5px] font-bold h-7 px-2.5 border border-rose-200 rounded cursor-pointer"
                    >
                      Remove
                    </Button>
                  )}
                </div>
              </div>

              {/* FORM FIELDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <FormLabel className="text-[12px] font-bold text-slate-700">Full Name</FormLabel>
                  <Input 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="h-8.5 text-[12px]"
                  />
                </div>

                <div>
                  <FormLabel className="text-[12px] font-bold text-slate-700">Preferred Nickname</FormLabel>
                  <Input 
                    value={preferredName}
                    onChange={(e) => setPreferredName(e.target.value)}
                    className="h-8.5 text-[12px]"
                  />
                </div>

                <div>
                  <FormLabel className="text-[12px] font-bold text-slate-700">Official Work Email</FormLabel>
                  <Input 
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    className="h-8.5 text-[12px]"
                  />
                </div>

                <div>
                  <FormLabel className="text-[12px] font-bold text-slate-700">Personal Email</FormLabel>
                  <Input 
                    value={personalEmail}
                    onChange={(e) => setPersonalEmail(e.target.value)}
                    className="h-8.5 text-[12px]"
                  />
                </div>

                <div>
                  <FormLabel className="text-[12px] font-bold text-slate-700">Mobile Phone Number</FormLabel>
                  <Input 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-8.5 text-[12px]"
                  />
                </div>

                <div>
                  <FormLabel className="text-[12px] font-bold text-slate-700">Preferred Portal Language</FormLabel>
                  <Select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    options={[
                      { id: 'en', name: 'English (US)' },
                      { id: 'bn', name: 'Bengali (বাংলা)' },
                    ]}
                  />
                </div>
              </div>

              {/* EMERGENCY CONTACT SECTION */}
              <div className="pt-3 border-t border-slate-100 space-y-3">
                <h3 className="text-[13.5px] font-bold text-slate-900 flex items-center gap-1.5">
                  <AlertCircle size={15} className="text-amber-600" />
                  <span>Emergency Contact Information</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <FormLabel className="text-[11.5px] font-semibold text-slate-600">Contact Person Name</FormLabel>
                    <Input 
                      value={emergencyContactName}
                      onChange={(e) => setEmergencyContactName(e.target.value)}
                      className="h-8 text-[12px]"
                    />
                  </div>

                  <div>
                    <FormLabel className="text-[11.5px] font-semibold text-slate-600">Relationship</FormLabel>
                    <Input 
                      value={emergencyRelation}
                      onChange={(e) => setEmergencyRelation(e.target.value)}
                      className="h-8 text-[12px]"
                    />
                  </div>

                  <div>
                    <FormLabel className="text-[11.5px] font-semibold text-slate-600">Emergency Phone</FormLabel>
                    <Input 
                      value={emergencyContactPhone}
                      onChange={(e) => setEmergencyContactPhone(e.target.value)}
                      className="h-8 text-[12px]"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <Button 
                  onClick={() => triggerSaveToast('Profile details updated successfully!')}
                  className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] font-bold h-8 px-4"
                >
                  Save Profile Settings
                </Button>
              </div>
            </div>
          )}

          {/* TAB 2: SECURITY & LOGIN SETTINGS */}
          {activeTab === 'security' && (
            <div className="space-y-4">
              
              {/* PASSWORD CHANGE CARD */}
              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-4">
                <div className="pb-2 border-b border-slate-100">
                  <h2 className="text-[15px] font-bold text-slate-900 flex items-center gap-2">
                    <KeyRound size={18} className="text-[#008060]" />
                    <span>Change Account Password</span>
                  </h2>
                  <p className="text-[12px] text-slate-500 font-normal">Ensure your ESS portal password uses at least 8 characters with numbers and symbols.</p>
                </div>

                <form onSubmit={handlePasswordChange} className="space-y-4 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <FormLabel className="text-[12px] font-bold text-slate-700">Current Password</FormLabel>
                      <div className="relative">
                        <Input
                          type={showCurrentPass ? 'text' : 'password'}
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          placeholder="Enter current password"
                          className="h-8.5 text-[12px] pr-9"
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPass(!showCurrentPass)}
                          className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                        >
                          {showCurrentPass ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <FormLabel className="text-[12px] font-bold text-slate-700">New Password</FormLabel>
                      <div className="relative">
                        <Input
                          type={showNewPass ? 'text' : 'password'}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Enter new strong password"
                          className="h-8.5 text-[12px] pr-9"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPass(!showNewPass)}
                          className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                        >
                          {showNewPass ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <FormLabel className="text-[12px] font-bold text-slate-700">Confirm New Password</FormLabel>
                      <Input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm new password"
                        className="h-8.5 text-[12px]"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <Button type="submit" className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] font-bold h-8 px-4 cursor-pointer">
                      Update Password
                    </Button>
                  </div>
                </form>
              </div>

              {/* TWO FACTOR AUTHENTICATION (2FA) CARD */}
              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-[14px] font-bold text-slate-900 flex items-center gap-2">
                    <Smartphone size={16} className="text-[#008060]" />
                    <span>Two-Factor Authentication (2FA)</span>
                  </h3>
                  <p className="text-[12px] text-slate-500 mt-0.5">
                    Add an extra layer of security requiring an SMS OTP or Authenticator app code upon sign in.
                  </p>
                </div>

                <ToggleSwitch
                  checked={twoFactorEnabled}
                  onChange={() => {
                    setTwoFactorEnabled(!twoFactorEnabled);
                    triggerSaveToast(!twoFactorEnabled ? 'Two-Factor Authentication Enabled!' : '2FA Disabled.');
                  }}
                />
              </div>

              {/* ACTIVE LOGIN SESSIONS */}
              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-3">
                <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-[14px] font-bold text-slate-900 flex items-center gap-2">
                      <Laptop size={16} className="text-[#008060]" />
                      <span>Active Login Sessions</span>
                    </h3>
                    <p className="text-[12px] text-slate-500 font-normal">Devices currently logged into your Employee Self Service account.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {activeSessions.map((session) => (
                    <div key={session.id} className="p-3 bg-slate-50 rounded border border-slate-200/80 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Laptop size={18} className="text-slate-500 shrink-0" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[12.5px] font-bold text-slate-800">{session.device}</span>
                            {session.current && (
                              <span className="bg-emerald-100 text-emerald-800 text-[9.5px] font-extrabold px-1.5 py-0.2 rounded border border-emerald-300">
                                THIS DEVICE
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 font-mono">
                            {session.ip} • {session.location} • <span className="text-slate-400">{session.time}</span>
                          </p>
                        </div>
                      </div>

                      {!session.current && (
                        <button
                          onClick={() => handleRevokeSession(session.id)}
                          className="px-2.5 py-1 text-[11px] font-bold text-rose-600 hover:bg-rose-50 border border-rose-200 rounded transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <Trash2 size={12} />
                          <span>Revoke</span>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: NOTIFICATION ALERTS SETTINGS */}
          {activeTab === 'notifications' && (
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-5">
              <div className="pb-2 border-b border-slate-100">
                <h2 className="text-[15px] font-bold text-slate-900 flex items-center gap-2">
                  <Bell size={18} className="text-[#008060]" />
                  <span>Notification & Alert Channels</span>
                </h2>
                <p className="text-[12px] text-slate-500 font-normal">Choose how and when you receive automated workplace alerts and approvals.</p>
              </div>

              {/* CHANNELS ROW */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 bg-slate-50/80 rounded-lg border border-slate-200 text-center space-y-2.5 flex flex-col items-center justify-between">
                  <div className="space-y-1">
                    <Mail size={22} className="mx-auto text-blue-600" />
                    <span className="text-[12.5px] font-bold block text-slate-800">Email Alerts</span>
                  </div>
                  <ToggleSwitch
                    checked={notifications.emailChannel}
                    onChange={() => toggleNotification('emailChannel')}
                  />
                </div>

                <div className="p-3.5 bg-slate-50/80 rounded-lg border border-slate-200 text-center space-y-2.5 flex flex-col items-center justify-between">
                  <div className="space-y-1">
                    <Smartphone size={22} className="mx-auto text-emerald-600" />
                    <span className="text-[12.5px] font-bold block text-slate-800">SMS Alerts</span>
                  </div>
                  <ToggleSwitch
                    checked={notifications.smsChannel}
                    onChange={() => toggleNotification('smsChannel')}
                  />
                </div>

                <div className="p-3.5 bg-slate-50/80 rounded-lg border border-slate-200 text-center space-y-2.5 flex flex-col items-center justify-between">
                  <div className="space-y-1">
                    <Bell size={22} className="mx-auto text-amber-600" />
                    <span className="text-[12.5px] font-bold block text-slate-800">In-App Bell</span>
                  </div>
                  <ToggleSwitch
                    checked={notifications.inAppChannel}
                    onChange={() => toggleNotification('inAppChannel')}
                  />
                </div>

                <div className="p-3.5 bg-slate-50/80 rounded-lg border border-slate-200 text-center space-y-2.5 flex flex-col items-center justify-between">
                  <div className="space-y-1">
                    <Monitor size={22} className="mx-auto text-purple-600" />
                    <span className="text-[12.5px] font-bold block text-slate-800">Desktop Push</span>
                  </div>
                  <ToggleSwitch
                    checked={notifications.pushChannel}
                    onChange={() => toggleNotification('pushChannel')}
                  />
                </div>
              </div>

              {/* EVENT TOGGLES WITH SLEEK SWITCHES */}
              <div className="space-y-3 pt-2">
                <h3 className="text-[13.5px] font-bold text-slate-900">Module & Event Notification Preferences</h3>

                <div className="divide-y divide-slate-100 border border-slate-200 rounded-lg bg-white overflow-hidden shadow-2xs">
                  <div className="p-3.5 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors">
                    <div>
                      <span className="text-[13px] font-bold text-slate-800 block">Attendance & Shift Swaps</span>
                      <span className="text-[11.5px] text-slate-500">Alerts when shift swaps, comp off, or overtime requests are processed.</span>
                    </div>
                    <ToggleSwitch
                      checked={notifications.attendanceAlerts}
                      onChange={() => toggleNotification('attendanceAlerts')}
                    />
                  </div>

                  <div className="p-3.5 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors">
                    <div>
                      <span className="text-[13px] font-bold text-slate-800 block">Leave & Movement Applications</span>
                      <span className="text-[11.5px] text-slate-500">Instant updates when supervisor approves or rejects your leave.</span>
                    </div>
                    <ToggleSwitch
                      checked={notifications.leaveApprovalAlerts}
                      onChange={() => toggleNotification('leaveApprovalAlerts')}
                    />
                  </div>

                  <div className="p-3.5 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors">
                    <div>
                      <span className="text-[13px] font-bold text-slate-800 block">Payroll & Monthly Payslip Release</span>
                      <span className="text-[11.5px] text-slate-500">Notifications when monthly salary advice & payslips are published.</span>
                    </div>
                    <ToggleSwitch
                      checked={notifications.payslipAlerts}
                      onChange={() => toggleNotification('payslipAlerts')}
                    />
                  </div>

                  <div className="p-3.5 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors">
                    <div>
                      <span className="text-[13px] font-bold text-slate-800 block">Expenses & IOU Requisitions</span>
                      <span className="text-[11.5px] text-slate-500">Status alerts on cash advance settlements and expense claim reimbursements.</span>
                    </div>
                    <ToggleSwitch
                      checked={notifications.expenseAlerts}
                      onChange={() => toggleNotification('expenseAlerts')}
                    />
                  </div>

                  <div className="p-3.5 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors">
                    <div>
                      <span className="text-[13px] font-bold text-slate-800 block">KPI & Bonus Calculations</span>
                      <span className="text-[11.5px] text-slate-500">Quarterly KPI achievement, target carry overs, and earned bonus alerts.</span>
                    </div>
                    <ToggleSwitch
                      checked={notifications.kpiBonusAlerts}
                      onChange={() => toggleNotification('kpiBonusAlerts')}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <Button 
                  onClick={() => triggerSaveToast('Notification preferences updated!')}
                  className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] font-bold h-8 px-4"
                >
                  Save Alert Preferences
                </Button>
              </div>
            </div>
          )}

          {/* TAB 4: DISPLAY & THEME PREFERENCES */}
          {activeTab === 'preferences' && (
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-5">
              <div className="pb-2 border-b border-slate-100">
                <h2 className="text-[15px] font-bold text-slate-900 flex items-center gap-2">
                  <Monitor size={18} className="text-[#008060]" />
                  <span>Display & Theme Preferences</span>
                </h2>
                <p className="text-[12px] text-slate-500 font-normal">Customize your portal layout, default starting view, and currency formats.</p>
              </div>

              {/* THEME MODE SELECTOR */}
              <div className="space-y-2">
                <FormLabel className="text-[12.5px] font-bold text-slate-800">Interface Theme</FormLabel>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setThemeMode('light')}
                    className={`p-3 rounded-md border text-center cursor-pointer transition-all ${
                      themeMode === 'light'
                        ? 'border-[#008060] bg-emerald-50/50 text-[#008060] ring-1 ring-[#008060]'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Sun size={20} className="mx-auto mb-1 text-amber-500" />
                    <span className="text-[12px] font-bold block">Light Theme</span>
                  </button>

                  <button
                    onClick={() => setThemeMode('dark')}
                    className={`p-3 rounded-md border text-center cursor-pointer transition-all ${
                      themeMode === 'dark'
                        ? 'border-[#008060] bg-emerald-50/50 text-[#008060] ring-1 ring-[#008060]'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Moon size={20} className="mx-auto mb-1 text-indigo-600" />
                    <span className="text-[12px] font-bold block">Dark Theme</span>
                  </button>

                  <button
                    onClick={() => setThemeMode('system')}
                    className={`p-3 rounded-md border text-center cursor-pointer transition-all ${
                      themeMode === 'system'
                        ? 'border-[#008060] bg-emerald-50/50 text-[#008060] ring-1 ring-[#008060]'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Monitor size={20} className="mx-auto mb-1 text-slate-500" />
                    <span className="text-[12px] font-bold block">System Auto</span>
                  </button>
                </div>
              </div>

              {/* FORMAT OPTIONS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div>
                  <FormLabel className="text-[12px] font-bold text-slate-700">Default Landing View</FormLabel>
                  <Select
                    value={defaultLandingPage}
                    onChange={(e) => setDefaultLandingPage(e.target.value)}
                    options={[
                      { id: '/employee-portal/dashboard', name: 'Dashboard Overview' },
                      { id: '/employee-portal/kpi-bonus', name: 'KPI & Bonus Summary' },
                      { id: '/employee-portal/time-management', name: 'My Attendance' },
                      { id: '/employee-portal/leave-movement', name: 'Leave & Movement' },
                    ]}
                  />
                </div>

                <div>
                  <FormLabel className="text-[12px] font-bold text-slate-700">Date Display Format</FormLabel>
                  <Select
                    value={dateFormat}
                    onChange={(e) => setDateFormat(e.target.value)}
                    options={[
                      { id: 'DD/MM/YYYY', name: 'DD/MM/YYYY (e.g. 30/07/2026)' },
                      { id: 'YYYY-MM-DD', name: 'YYYY-MM-DD (e.g. 2026-07-30)' },
                      { id: 'MM/DD/YYYY', name: 'MM/DD/YYYY (e.g. 07/30/2026)' },
                    ]}
                  />
                </div>

                <div>
                  <FormLabel className="text-[12px] font-bold text-slate-700">Default Currency</FormLabel>
                  <Select
                    value={currencyFormat}
                    onChange={(e) => setCurrencyFormat(e.target.value)}
                    options={[
                      { id: 'BDT', name: 'BDT (৳ Taka)' },
                      { id: 'USD', name: 'USD ($ US Dollar)' },
                    ]}
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <Button 
                  onClick={() => triggerSaveToast('Display preferences saved!')}
                  className="bg-[#008060] hover:bg-[#006e52] text-white text-[12px] font-bold h-8 px-4"
                >
                  Save Display Settings
                </Button>
              </div>
            </div>
          )}

          {/* TAB 5: PRIVACY & DATA SECURITY */}
          {activeTab === 'privacy' && (
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs space-y-5">
              <div className="pb-2 border-b border-slate-100">
                <h2 className="text-[15px] font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#008060]" />
                  <span>Privacy & Data Management</span>
                </h2>
                <p className="text-[12px] text-slate-500 font-normal">Control your visibility in the company directory and export personal ESS data.</p>
              </div>

              {/* PRIVACY TOGGLES */}
              <div className="space-y-3">
                <div className="p-3.5 bg-slate-50/80 rounded-lg border border-slate-200 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[13px] font-bold text-slate-800 block">Show Profile in Company Directory</span>
                    <span className="text-[11.5px] text-slate-500">Allow colleagues to see your designation, phone extension, and email in Contact Book.</span>
                  </div>
                  <ToggleSwitch
                    checked={showInDirectory}
                    onChange={() => setShowInDirectory(!showInDirectory)}
                  />
                </div>

                <div className="p-3.5 bg-slate-50/80 rounded-lg border border-slate-200 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[13px] font-bold text-slate-800 block">Birthday & Work Anniversary Notifications</span>
                    <span className="text-[11.5px] text-slate-500">Display your work anniversary celebrations to team members on the Dashboard.</span>
                  </div>
                  <ToggleSwitch
                    checked={showBirthdayAlerts}
                    onChange={() => setShowBirthdayAlerts(!showBirthdayAlerts)}
                  />
                </div>
              </div>

              {/* EXPORT DATA SECTION */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <h3 className="text-[13.5px] font-bold text-slate-900">Export ESS Personal Data Archive</h3>
                <p className="text-[12px] text-slate-500">
                  Download a copy of your attendance records, leaves, payslips history, and KPI ledger files in JSON format.
                </p>

                <Button 
                  onClick={() => triggerSaveToast('Data archive download initiated!')}
                  className="bg-white hover:bg-slate-100 text-slate-700 text-[11.5px] font-bold h-8 px-3.5 border border-slate-200 rounded cursor-pointer flex items-center gap-1.5"
                >
                  <Download size={14} className="text-[#008060]" />
                  <span>Download ESS Data Archive (JSON)</span>
                </Button>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
