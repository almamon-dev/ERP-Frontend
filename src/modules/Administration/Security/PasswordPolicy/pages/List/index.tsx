import React from 'react';
import { Save, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Switch from '@/components/ui/switch';
import FormLabel from '@/components/ui/label';

export default function PasswordPolicyList() {
    return (
        <div className="p-6 md:p-8 mx-auto bg-[#f8f9fa] min-h-screen pb-24">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-[22px] font-bold text-slate-900">Password Policy</h1>
                    <p className="text-[14px] font-medium text-[#008060] mt-1">Configure global password security requirements.</p>
                </div>
                <Button className="flex items-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white">
                    <Save size={16} />
                    Save Policies
                </Button>
            </div>  

            <div className="bg-white border border-slate-200 rounded-md shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                    <ShieldCheck size={24} className="text-[#008060]" />
                    <h2 className="text-[18px] font-bold text-slate-800">Complexity Requirements</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
    <FormLabel className="!mb-0 mt-2">Minimum Password Length</FormLabel>
    <p className="text-[14px] text-slate-400 mt-2">:</p>
    <div>
        <Input type="number" defaultValue={8} min={6} max={32} />
                        <p className="text-[12px] text-slate-500 mt-1">Recommended: 8 or more characters.</p>
    </div>
</div>
                    <div className="grid grid-cols-[160px_10px_1fr] items-start gap-3">
    <FormLabel className="!mb-0 mt-2">Maximum Password Age (Days)</FormLabel>
    <p className="text-[14px] text-slate-400 mt-2">:</p>
    <div>
        <Input type="number" defaultValue={90} min={0} />
                        <p className="text-[12px] text-slate-500 mt-1">Set to 0 to disable password expiration.</p>
    </div>
</div>

                    <div className="col-span-1 md:col-span-2 space-y-4 mt-2">
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-md border border-slate-100">
                            <div>
                                <h4 className="text-[14px] font-bold text-slate-800">Require Uppercase Letters</h4>
                                <p className="text-[12px] text-slate-500 mt-0.5">Password must contain at least one uppercase letter (A-Z).</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-md border border-slate-100">
                            <div>
                                <h4 className="text-[14px] font-bold text-slate-800">Require Numbers</h4>
                                <p className="text-[12px] text-slate-500 mt-0.5">Password must contain at least one number (0-9).</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-md border border-slate-100">
                            <div>
                                <h4 className="text-[14px] font-bold text-slate-800">Require Special Characters</h4>
                                <p className="text-[12px] text-slate-500 mt-0.5">Password must contain at least one symbol (e.g. !@#$%).</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-md border border-slate-100">
                            <div>
                                <h4 className="text-[14px] font-bold text-slate-800">Prevent Password Reuse</h4>
                                <p className="text-[12px] text-slate-500 mt-0.5">Users cannot reuse their last 5 passwords.</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
