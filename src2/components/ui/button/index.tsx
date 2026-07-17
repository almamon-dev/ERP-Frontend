import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    fullWidth?: boolean;
}

export default function Button({ 
    variant = 'secondary', 
    size = 'md', 
    isLoading = false, 
    fullWidth = false, 
    className = '', 
    children, 
    disabled, 
    ...props 
}: ButtonProps) {
    const baseClasses = "inline-flex items-center justify-center rounded-[3px] font-bold transition-all shadow-sm outline-none disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
        primary: "bg-[#008060] text-white hover:bg-[#006e52] border border-transparent shadow-[0_1px_0_rgba(0,0,0,0.05)]",
        secondary: "bg-white text-[#202223] border border-[#d1d1d1] hover:bg-[#f9fafb] shadow-[0_1px_0_rgba(0,0,0,0.05)]",
        danger: "bg-white text-[#d82c0d] border border-[#d1d1d1] hover:bg-[#fff5f5] hover:border-[#d82c0d]",
        ghost: "bg-transparent text-[#6d7175] border-transparent hover:bg-[#f6f6f7] shadow-none",
    };

    const sizes = {
        sm: "h-[28px] px-3 text-[11px]",
        md: "h-[32px] px-4 text-[12px]",
        lg: "h-[44px] px-6 text-[14px]",
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
        <button 
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 animate-spin" size={14} />}
            {children}
        </button>
    );
}
