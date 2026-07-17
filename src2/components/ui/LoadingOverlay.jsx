import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';

/**
 * LoadingOverlay Component
 * Features a darker, premium blue circular pulse loader centered on the main layout.
 */
const LoadingOverlay = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const startHandler = (event) => {
            if (event.detail.visit.prefetch || (event.detail.visit.only && event.detail.visit.only.length > 0)) {
                return;
            }
            
            // Avoid global fullscreen overlay on internal page updates (filtering/pagination)
            const currentPath = window.location.pathname;
            try {
                const targetUrl = new URL(event.detail.visit.url, window.location.origin);
                if (targetUrl.pathname === currentPath) {
                    return; // Let ProductGrid's inline loader handle it
                }
            } catch (e) {
                // Fallback
            }

            setLoading(true);
        };

        const finishHandler = () => setLoading(false);

        const removeStartListener = router.on('start', startHandler);
        const removeFinishListener = router.on('finish', finishHandler);

        return () => {
            removeStartListener();
            removeFinishListener();
        };
    }, []);

    // Prevent body scroll and "double" right side issues during loading
    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '0px';
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
    }, [loading]);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/20 backdrop-blur-[3px] transition-all duration-300">
            <div className="relative flex items-center justify-center">
                {/* Deep Blue Pulsing Ring */}
                <div className="absolute w-16 h-16 bg-blue-600/20 rounded-full animate-ping"></div>

                {/* Main Circular Loader */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                    {/* Darker Blue Rotating Ring */}
                    <div className="absolute inset-0 rounded-full border-[3px] border-slate-200 border-t-[#3749bb] animate-spin"></div>

                    {/* Deep Dark Core with stronger glow */}
                    <div className="w-6 h-6 bg-[#040a12] rounded-full border-2 border-[#3749bb] shadow-[0_0_15px_rgba(55,73,187,0.5)]"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingOverlay;
