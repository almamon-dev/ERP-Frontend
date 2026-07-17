import os

SRC_UI = "src/components/ui"
SRC2_UI = "src2/components/ui"

components = {
    "badge/index.tsx": """import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'success' | 'warning' | 'critical' | 'info';
    children: React.ReactNode;
}

export default function Badge({ variant = 'default', className = '', children, ...props }: BadgeProps) {
    const baseClasses = "inline-flex items-center px-2 py-0.5 rounded-[3px] text-[11px] font-bold";
    
    const variants = {
        default: "bg-[#e4e5e7] text-[#202223]",
        success: "bg-[#aee9d1] text-[#008060]",
        warning: "bg-[#ffea8a] text-[#8a6116]",
        critical: "bg-[#fed3d1] text-[#d82c0d]",
        info: "bg-[#b4e1fa] text-[#006fbb]",
    };

    return (
        <span className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
            {children}
        </span>
    );
}
""",
    "avatar/index.tsx": """import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    fallback: string;
    size?: 'sm' | 'md' | 'lg';
}

export default function Avatar({ src, fallback, size = 'md', className = '', ...props }: AvatarProps) {
    const sizeClasses = {
        sm: "w-6 h-6 text-[10px]",
        md: "w-8 h-8 text-[12px]",
        lg: "w-12 h-12 text-[16px]",
    };

    return (
        <div 
            className={`rounded-full bg-[#e4f1ef] text-[#008060] flex items-center justify-center font-bold overflow-hidden ${sizeClasses[size]} ${className}`}
            {...props}
        >
            {src ? (
                <img src={src} alt={fallback} className="w-full h-full object-cover" />
            ) : (
                <span>{fallback.substring(0, 2).toUpperCase()}</span>
            )}
        </div>
    );
}
""",
    "spinner/index.tsx": """import React from 'react';
import { Loader2 } from 'lucide-react';

export interface SpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export default function Spinner({ size = 'md', className = '' }: SpinnerProps) {
    const sizeMap = {
        sm: 14,
        md: 20,
        lg: 28,
    };

    return (
        <Loader2 
            size={sizeMap[size]} 
            className={`animate-spin text-[#008060] ${className}`} 
        />
    );
}
""",
    "checkbox/index.tsx": """import React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export default function Checkbox({ label, className = '', id, ...props }: CheckboxProps) {
    const checkboxId = id || (label ? label.replace(/\s+/g, '-').toLowerCase() : undefined);

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <input
                id={checkboxId}
                type="checkbox"
                className="w-4 h-4 text-[#008060] border-[#d1d1d1] rounded-[2px] focus:ring-[#008060] cursor-pointer"
                {...props}
            />
            {label && (
                <label htmlFor={checkboxId} className="text-[13px] text-[#202223] cursor-pointer select-none">
                    {label}
                </label>
            )}
        </div>
    );
}
""",
    "input/index.tsx": """import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export default function Input({ label, error, className = '', id, ...props }: InputProps) {
    const inputId = id || (label ? label.replace(/\s+/g, '-').toLowerCase() : undefined);

    return (
        <div className="flex flex-col gap-1 w-full">
            {label && (
                <label htmlFor={inputId} className="text-[13px] font-bold text-[#202223]">
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className={`w-full h-[32px] px-3 border rounded-[3px] text-[13px] font-medium transition-colors shadow-none placeholder:text-[#6d7175] focus:outline-none focus:ring-1 ${
                    error 
                        ? 'border-[#d82c0d] focus:border-[#d82c0d] focus:ring-[#d82c0d]' 
                        : 'border-[#d1d1d1] focus:border-[#008060] focus:ring-[#008060]'
                } ${className}`}
                {...props}
            />
            {error && <span className="text-[12px] text-[#d82c0d] mt-0.5">{error}</span>}
        </div>
    );
}
"""
}

for path_suffix, content in components.items():
    for base_dir in [SRC_UI, SRC2_UI]:
        full_path = os.path.join(base_dir, path_suffix)
        os.makedirs(os.path.dirname(full_path), exist_ok=True)
        with open(full_path, "w") as f:
            f.write(content)
        print(f"Updated {full_path}")
