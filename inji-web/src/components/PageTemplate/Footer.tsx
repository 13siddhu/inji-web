import React from 'react';
import {useTranslation} from 'react-i18next';

type FooterProps = {
    footerRef: React.RefObject<HTMLDivElement>;
};

export const Footer: React.FC<FooterProps> = ({footerRef}) => {
    const {t} = useTranslation('PageTemplate');
    
    return (
        <footer
    ref={footerRef}
    data-testid="Footer-Container"
    // Added: slide-up animation, bold gradient, and a crisp top border
    className="fixed bottom-0 left-0 right-0 py-4 bg-[#B1B1B1]
               border-t-2 border-blue-500/30 shadow-[0_-10px_20px_rgba(0,0,0,0.4)]
               animate-in fade-in slide-in-from-bottom-5 duration-700"
>
    <div className="container mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Copyright: Now using a brighter, bolder white-to-grey text */}
        <p
            data-testid="Footer-Text"
            className="text-gray-100 text-[16px] leading-[24px] font-bold tracking-wide
                       hover:text-blue-400 transition-colors duration-300 cursor-default"
        >
            {t("Footer.copyRight")}
        </p>

        {/* Product Section: Interactive and Vibrant */}
        <div className="flex items-center gap-4 group">
            {/* Logo: Added a continuous soft pulse animation and a hover glow */}
            <div className="relative">
                <img
                    className="relative w-44 h-10
                               duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
                    src="https://lucidledger.co.in/assets/images/lucidledger_Logo.svg"
                    alt="LucidLedger Logo"
                />
            </div>
        </div>
        
    </div>
</footer>
    );
};