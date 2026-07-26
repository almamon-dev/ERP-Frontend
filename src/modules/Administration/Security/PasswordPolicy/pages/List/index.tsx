import React from 'react';
import { Save, ShieldCheck, KeyRound, Clock, Lock, Hash, Type, History } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';

export default function PasswordPolicyList() {
    return (
        <div className="p-4 md:p-6 max-w-full mx-auto bg-[#f8f9fa] min-h-screen pb-20">
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-[20px] font-bold text-slate-900">Password Policy</h1>
                    <p className="text-[13px] font-medium text-[#008060] mt-0.5">Configure global password security requirements.</p>
                </div>
                <Button className="flex items-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white text-[13px] h-9 px-4">
                    <Save size={15} />
                    Save Policies
                </Button>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-md shadow-xs p-4 md:p-6">
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100">
                    <ShieldCheck size={20} className="text-[#008060]" />
                    <h2 className="text-[16px] font-bold text-slate-800">Complexity Requirements</h2>
                </div>

                {/* NUMERIC CONTROL CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 bg-slate-50/70 border border-slate-200/80 rounded-md flex items-center justify-between gap-4 hover:border-slate-300 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                                <KeyRound size={17} className="text-[#008060]" />
                            </div>
                            <div>
                                <h3 className="text-[13.5px] font-bold text-slate-800">Minimum Password Length</h3>
                                <p className="text-[12px] text-slate-500 mt-0.5">Recommended: 8+ characters</p>
                            </div>
                        </div>
                        <div className="shrink-0">
                            <Input type="number" defaultValue={8} min={6} max={32} className="w-20 h-8.5 text-[13px] text-center font-semibold bg-white border-slate-300 shadow-2xs" />
                        </div>
                    </div>

                    <div className="p-4 bg-slate-50/70 border border-slate-200/80 rounded-md flex items-center justify-between gap-4 hover:border-slate-300 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                                <Clock size={17} className="text-[#008060]" />
                            </div>
                            <div>
                                <h3 className="text-[13.5px] font-bold text-slate-800">Maximum Password Age</h3>
                                <p className="text-[12px] text-slate-500 mt-0.5">Set to 0 to disable expiration</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                            <Input type="number" defaultValue={90} min={0} className="w-20 h-8.5 text-[13px] text-center font-semibold bg-white border-slate-300 shadow-2xs" />
                            <span className="text-[12px] font-semibold text-slate-500">Days</span>
                        </div>
                    </div>
                </div>

                {/* TOGGLE OPTIONS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    <div className="p-3.5 px-4 bg-slate-50/70 rounded-md border border-slate-200/70 flex items-center justify-between hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                                <Type size={16} className="text-slate-600" />
                            </div>
                            <div>
                                <h4 className="text-[13px] font-bold text-slate-800">Require Uppercase Letters</h4>
                                <p className="text-[11.5px] text-slate-500 mt-0.5">At least one uppercase (A-Z)</p>
                            </div>
                        </div>
                        <Switch defaultChecked />
                    </div>

                    <div className="p-3.5 px-4 bg-slate-50/70 rounded-md border border-slate-200/70 flex items-center justify-between hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                                <Hash size={16} className="text-slate-600" />
                            </div>
                            <div>
                                <h4 className="text-[13px] font-bold text-slate-800">Require Numbers</h4>
                                <p className="text-[11.5px] text-slate-500 mt-0.5">At least one numeric digit (0-9)</p>
                            </div>
                        </div>
                        <Switch defaultChecked />
                    </div>

                    <div className="p-3.5 px-4 bg-slate-50/70 rounded-md border border-slate-200/70 flex items-center justify-between hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                                <Lock size={16} className="text-slate-600" />
                            </div>
                            <div>
                                <h4 className="text-[13px] font-bold text-slate-800">Require Special Characters</h4>
                                <p className="text-[11.5px] text-slate-500 mt-0.5">At least one symbol (!@#$%)</p>
                            </div>
                        </div>
                        <Switch defaultChecked />
                    </div>

                    <div className="p-3.5 px-4 bg-slate-50/70 rounded-md border border-slate-200/70 flex items-center justify-between hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                                <History size={16} className="text-slate-600" />
                            </div>
                            <div>
                                <h4 className="text-[13px] font-bold text-slate-800">Prevent Password Reuse</h4>
                                <p className="text-[11.5px] text-slate-500 mt-0.5">Cannot reuse last 5 passwords</p>
                            </div>
                        </div>
                        <Switch defaultChecked />
                    </div>
                </div>
            </div>
        </div>
    );
}


