import React from 'react';
import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ links, className }) {
    if (!links || links.length <= 3) return null;

    return (
        <div className={cn("flex flex-wrap items-center justify-center gap-1", className)}>
            {links.map((link, index) => {
                const isPrevious = link.label.includes('Previous');
                const isNext = link.label.includes('Next');

                return (
                    <React.Fragment key={index}>
                        {link.url === null ? (
                            <div
                                className={cn(
                                    "px-3 py-2 text-sm font-medium rounded-md text-slate-400 cursor-not-allowed bg-slate-50 border border-slate-100 select-none",
                                    (isPrevious || isNext) && "flex items-center gap-1"
                                )}
                            >
                                {isPrevious && <ChevronLeft size={16} />}
                                {!isPrevious && !isNext && <span dangerouslySetInnerHTML={{ __html: link.label }} />}
                                {isNext && <ChevronRight size={16} />}
                            </div>
                        ) : (
                            <Link
                                href={link.url}
                                className={cn(
                                    "px-3 py-2 text-sm font-medium rounded-md transition-colors select-none",
                                    link.active
                                        ? "bg-[#008060] text-white border border-[#008060] shadow-sm hover:bg-[#006e52]"
                                        : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900",
                                    (isPrevious || isNext) && "flex items-center gap-1"
                                )}
                            >
                                {isPrevious && <ChevronLeft size={16} />}
                                {!isPrevious && !isNext && <span dangerouslySetInnerHTML={{ __html: link.label }} />}
                                {isNext && <ChevronRight size={16} />}
                            </Link>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
}
