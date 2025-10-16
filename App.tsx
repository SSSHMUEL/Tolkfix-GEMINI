
import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';

// =================================================================================
// ICONS
// =================================================================================

const HomeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
);
const BookOpenIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
);
const BeakerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-.547-1.806zM15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);
const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);
const ChatBubbleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
);
const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
);
const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>
);
const DeviceMobileIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
);
const DesktopComputerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 12l-2.293-2.293a1 1 0 010-1.414L10 6m5 16l2.293-2.293a1 1 0 000-1.414L10 12l-2.293 2.293a1 1 0 000 1.414L10 18" /></svg>
);
const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);
const WifiIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 9.393a15 15 0 0121.213 0" /></svg>
);
const LightningBoltIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const CogIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const SpeakerphoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.433 9.168-6" /></svg>
);
const TrashIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
);
const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);
const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
);
const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
);
const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
);


// =================================================================================
// UI COMPONENTS
// =================================================================================

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}
const Card: React.FC<CardProps> = ({ children, className = '', padding = 'p-6' }) => (
  <div className={`bg-slate-800 border border-slate-700 rounded-xl shadow-lg ${padding} ${className}`}>
    {children}
  </div>
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-2.5 rounded-lg font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 flex items-center justify-center gap-2';
  const variantClasses = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500',
    secondary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    ghost: 'bg-slate-700 text-slate-200 hover:bg-slate-600 focus:ring-slate-500'
  };
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

interface ProgressBarProps {
  value: number;
  className?: string;
}
const ProgressBar: React.FC<ProgressBarProps> = ({ value, className = '' }) => (
  <div className={`w-full bg-slate-700 rounded-full h-2.5 ${className}`}>
    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${value}%` }}></div>
  </div>
);

// =================================================================================
// LAYOUT COMPONENTS
// =================================================================================

const navLinks = [
  { path: '/', label: 'בית', icon: HomeIcon },
  { path: '/professional', label: 'מסלול לימוד', icon: BookOpenIcon },
  { path: '/practice', label: 'תרגול', icon: BeakerIcon },
  { path: '/words', label: 'מילים נלמדות', icon: SparklesIcon },
  { path: '/profile', label: 'פרופיל', icon: UserIcon },
  { path: '/method', label: 'אודות', icon: ChatBubbleIcon },
  { path: '/#downloads', label: 'הורדות', icon: DownloadIcon },
];

const NavItem: React.FC<{path: string; label: string; icon: React.ElementType}> = ({ path, label, icon: Icon }) => {
    const location = useLocation();
    const isActive = location.pathname === path;

    return (
        <NavLink 
            to={path} 
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
        >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
        </NavLink>
    );
};

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-orange-500 to-orange-400 text-white font-bold text-xl w-8 h-8 flex items-center justify-center rounded-lg">
              T
            </div>
            <span className="text-white font-bold text-xl">TALK FIX</span>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map(link => (
              <NavItem key={link.path} {...link} />
            ))}
          </nav>

          <div className="flex items-center gap-4 text-sm">
            <div className="text-slate-300">
              שלום, שמואל
            </div>
            <a href="#logout" className="text-slate-400 hover:text-white transition-colors">יציאה</a>
          </div>
        </div>
      </div>
    </header>
  );
};


// =================================================================================
// PAGE COMPONENTS
// =================================================================================

const HomePage: React.FC = () => {
    const InfoCard: React.FC<{icon: React.ReactNode, title: string, children: React.ReactNode}> = ({ icon, title, children }) => (
        <Card className="flex-1 min-w-[300px]">
            <div className="flex flex-col items-center text-center">
                <div className="text-blue-400 mb-4">{icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <div className="text-slate-400 text-sm">{children}</div>
            </div>
        </Card>
    );

    return (
        <div className="space-y-20 text-center">
            <section id="downloads">
                <h2 className="text-3xl font-extrabold text-white mb-6">הורדות</h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-10">בחר את הפלטפורמה המועדפת עליך והתחל ללמוד היום</p>
                <div className="flex justify-center">
                    <Card className="max-w-sm text-right" padding="p-8">
                        <div className="flex justify-center mb-4">
                            <GlobeIcon className="w-16 h-16 text-orange-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white text-center mb-6">הרחבת כרום</h3>
                        <p className="text-slate-400 mb-6 text-center">למד תוך כדי גלישה באינטרנט</p>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500"></span>תרגום מיידי</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500"></span>למידה בזמן גלישה</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500"></span>ממשק זמין</li>
                        </ul>
                        <Button className="w-full mt-8">
                            <DownloadIcon className="w-5 h-5" />
                            <span>הורדה עכשיו</span>
                        </Button>
                    </Card>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-extrabold text-white mb-10">איך התוסף עובד?</h2>
                <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                    <InfoCard icon={<GlobeIcon className="w-12 h-12"/>} title="באתרי אינטרנט">
                        התוסף מזהה אוטומטית את המילים שחסרות באוצר המילים שלך, כך שאתה מתרגל את המילים החדשות בהקשרים אקטיביים ומגוונים.
                    </InfoCard>
                    <InfoCard icon={<BookOpenIcon className="w-12 h-12"/>} title="בכתוביות וידאו">
                        גם בצפייה בסרטונים וסרטים, התוסף יחליף את המילים שלמדת בכתובויות, מה שיהפוך כל צפייה להזדמנות תרגול נוספת.
                    </InfoCard>
                </div>
            </section>
            
            <section>
                <h2 className="text-3xl font-extrabold text-white mb-10">...בקרוב</h2>
                <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                    <InfoCard icon={<DesktopComputerIcon className="w-12 h-12"/>} title="תוכנת ווינדוס">
                        <ul className="space-y-2 text-left rtl:text-right">
                           <li>• ממשק מתקדם</li>
                           <li>• עבודה מהירה</li>
                           <li>• תכונות מועדפות</li>
                        </ul>
                    </InfoCard>
                     <InfoCard icon={<DeviceMobileIcon className="w-12 h-12"/>} title="אפליקציית אנדרואיד">
                        <ul className="space-y-2 text-left rtl:text-right">
                           <li>• למידה אונליין</li>
                           <li>• הגדרות ותכונות</li>
                           <li>• סנכרון עם הדפדפן</li>
                        </ul>
                    </InfoCard>
                </div>
            </section>

             <section className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <LightningBoltIcon className="w-10 h-10 text-blue-400 mb-3" />
                        <h4 className="font-bold text-white">למידה מהירה</h4>
                        <p className="text-slate-400 text-sm">תוצאות מהירות תוך זמן קצר</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <ShieldCheckIcon className="w-10 h-10 text-blue-400 mb-3" />
                        <h4 className="font-bold text-white">בטוח</h4>
                        <p className="text-slate-400 text-sm">הגנה מלאה על פרטיות המידע שלך</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <WifiIcon className="w-10 h-10 text-blue-400 mb-3" />
                        <h4 className="font-bold text-white">נגיש בכל מקום</h4>
                        <p className="text-slate-400 text-sm">תרגל מכל מחשב, טאבלט וסמארטפון</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

const MethodPage: React.FC = () => {
    const StepCard: React.FC<{step: number, title: string, description: string, icon: React.ReactNode}> = ({step, title, description, icon}) => (
        <Card className="flex-1 min-w-[280px]">
            <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                    <div className="text-orange-400">{icon}</div>
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">{step}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400">{description}</p>
            </div>
        </Card>
    );

    return (
        <div className="space-y-20 text-center">
            <section>
                <h1 className="text-4xl font-extrabold text-white mb-4">השיטה שלנו</h1>
                <p className="text-slate-400 max-w-3xl mx-auto">
                    ולמה היא TALK FIX משנה את הדרך בה אתה לומד אנגלית - מלמידה פסיבית לתרגול ברשת
                </p>
            </section>
            
            <section>
                <h2 className="text-3xl font-extrabold text-white mb-10">איך זה עובד?</h2>
                <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                    <StepCard step={1} title="שלב 1: למד באתר" icon={<BookOpenIcon className="w-16 h-16"/>} description="תרגל גלריית מילים של כמה שתרצה. בחר מילה, למד את הפירוש שלה, דוגמאות למשפטים, טכנולוגיה, חיי יום-יום ועוד."/>
                    <StepCard step={2} title="שלב 2: תרגל ברשת" icon={<GlobeIcon className="w-16 h-16"/>} description="התוסף שלנו מחליף את המילים שבהן אתה שולט במילים החדשות שלמדת. כך תוכל לתרגל אותן בכל אתר, יוטיוב, פייסבוק, וכו'. תרגול טבעי וקבוע."/>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-extrabold text-white mb-10">מה עושה את השיטה כל כך יעילה?</h2>
                <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                    <Card className="flex-1"><h3 className="font-bold text-lg text-white">תרגול בהקשר אמיתי</h3><p className="text-slate-400 mt-2">תרגול באתרים שאתה אוהב, עם מילים שמעניינות אותך. למד מילים חדשות בהקשרים, גלישה ושיחות ועוד.</p></Card>
                    <Card className="flex-1"><h3 className="font-bold text-lg text-white">למידה פסיבית</h3><p className="text-slate-400 mt-2">אתה לא צריך להקדיש זמן מיוחד ללימוד. כל גלישה ברשת הופכת להזדמנות לתרגל את האנגלית שלך, כמעט ללא מאמץ נוסף.</p></Card>
                    <Card className="flex-1"><h3 className="font-bold text-lg text-white">תוצאות מהירות</h3><p className="text-slate-400 mt-2">השיטה שלנו מבטיחה למידה מהירה וזכירה טובה יותר של המילים החדשות. תרגול חוזר בהקשרים מגוונים מבטיח שהמילים יישארו איתך לאורך זמן.</p></Card>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-extrabold text-white mb-10">איפה זה עובד?</h2>
                <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                    <Card className="flex-1 text-right">
                        <h3 className="font-bold text-lg text-white mb-4">בכל אתרי האינטרנט</h3>
                        <ul className="space-y-2">
                           <li className="flex items-center gap-2"><span className="text-orange-500">•</span>אתרי חדשות ואקטואליה</li>
                           <li className="flex items-center gap-2"><span className="text-orange-500">•</span>רשתות חברתיות</li>
                           <li className="flex items-center gap-2"><span className="text-orange-500">•</span>בלוגים ומאמרים</li>
                           <li className="flex items-center gap-2"><span className="text-orange-500">•</span>אתרי קניות ופורומים</li>
                        </ul>
                    </Card>
                    <Card className="flex-1 text-right">
                        <h3 className="font-bold text-lg text-white mb-4">בכתוביות וידאו</h3>
                        <ul className="space-y-2">
                           <li className="flex items-center gap-2"><span className="text-orange-500">•</span>יוטיוב ופלטפורמות וידאו</li>
                           <li className="flex items-center gap-2"><span className="text-orange-500">•</span>נטפליקס וספוטיפיי</li>
                           <li className="flex items-center gap-2"><span className="text-orange-500">•</span>סרטים וסדרות</li>
                           <li className="flex items-center gap-2"><span className="text-orange-500">•</span>תוכניות טלוויזיה</li>
                        </ul>
                    </Card>
                </div>
            </section>
        </div>
    );
};

const ProfilePage: React.FC = () => {
    const topics = [
        { title: 'עסקים', description: 'מילים מעולם העסקים והיזמות העסקית' },
        { title: 'טיולים', description: 'מילים מעולם התיירות ונסיעות בחו"ל' },
        { title: 'טכנולוגיה', description: 'מילים מעולם הטכנולוגיה והמחשבים' },
        { title: 'בריאות', description: 'מילים מעולם הבריאות ורפואה' },
        { title: 'אוכל', description: 'מילים הקשורות למזון ובישול' },
        { title: 'בידור', description: 'מילים מעולם הבידור וצפייה מהנה' },
        { title: 'חינוך', description: 'מילים הקשורות לחינוך ולמידה' },
    ];
    return (
        <div className="space-y-12 max-w-4xl mx-auto">
            <h1 className="text-3xl font-extrabold text-white text-center">פרופיל משתמש</h1>
            
            <Card>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center">
                                <UserIcon className="w-8 h-8 text-slate-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white">שמואל, שמואל</h2>
                                <p className="text-slate-400 text-sm">אחוז השלמה</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex items-center gap-4">
                        <span className="text-slate-400 font-mono text-sm">57 / 85</span>
                        <ProgressBar value={(57/85)*100} />
                    </div>
                    <div className="flex gap-2">
                        <Button variant="secondary">המשך למידה</Button>
                        <Button variant="ghost">תרגול</Button>
                    </div>
                </div>
                <hr className="border-slate-700 my-6" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div><span className="text-2xl font-bold text-white">67%</span><p className="text-slate-400 text-sm">מילים נלמדו</p></div>
                    <div><span className="text-2xl font-bold text-white">0</span><p className="text-slate-400 text-sm">נושאים נבחרו</p></div>
                    <div><span className="text-2xl font-bold text-white">85</span><p className="text-slate-400 text-sm">מילים זמינות</p></div>
                </div>
            </Card>

            <Card>
                <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><SparklesIcon className="w-6 h-6 text-blue-400"/> בחר נושאי לימוד</h2>
                <p className="text-slate-400 mb-6">בחר את הקטגוריות שמעניינות אותך כדי להתמקד בלמידת מילים רלוונטיות</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {topics.map(topic => (
                        <label key={topic.title} className="flex items-start gap-3 p-4 bg-slate-700/50 rounded-lg cursor-pointer hover:bg-slate-700">
                            <input type="radio" name="topic" className="mt-1 form-radio bg-slate-800 border-slate-600 text-blue-500 focus:ring-blue-500"/>
                            <div>
                                <h3 className="font-semibold text-white">{topic.title}</h3>
                                <p className="text-slate-400 text-sm">{topic.description}</p>
                            </div>
                        </label>
                    ))}
                </div>
                <div className="mt-6 flex justify-between items-center">
                    <p className="text-slate-400 text-sm">נבחרו 0 מתוך 8 נושאים</p>
                    <Button variant="secondary">שמור העדפות</Button>
                </div>
            </Card>

            <Card className="border-t-4 border-red-500">
                 <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><CogIcon className="w-6 h-6 text-red-400"/> אזור מסוכן</h2>
                 <p className="text-slate-400 mb-6">פעולות אלו הן בלתי הפיכות. נא לנהוג בזהירות.</p>
                 <div className="bg-slate-900/50 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center">
                     <div>
                         <h3 className="font-semibold text-white">מחיקת החשבון</h3>
                         <p className="text-slate-400 text-sm">מחיקת החשבון תמחק את כל הנתונים שלך, כולל ההתקדמות ומילים שלמדת.</p>
                     </div>
                     <Button variant="danger" className="mt-4 md:mt-0">מחק חשבון</Button>
                 </div>
            </Card>
        </div>
    );
};

const WordsPage: React.FC = () => {
    const wordGroups = [
        {
            title: "פעלים",
            count: 8,
            words: [
                { en: "to write", he: "לכתוב", sentence_en: "I write in Hebrew", sentence_he: "אני כותב בעברית", date: "22.8.2025" },
                { en: "to speak", he: "לדבר", sentence_en: "I speak English", sentence_he: "אני מדבר אנגלית", date: "22.8.2025" },
                { en: "to learn", he: "ללמוד", sentence_en: "I learn Hebrew", sentence_he: "אני לומד עברית", date: "22.8.2025" },
                { en: "to drink", he: "לשתות", sentence_en: "I need to drink water", sentence_he: "אני צריך לשתות", date: "22.8.2025" },
                { en: "to sleep", he: "לישון", sentence_en: "I go to sleep early", sentence_he: "אני הולך לישון", date: "22.8.2025" },
                { en: "to read", he: "לקרוא", sentence_en: "I like to read books", sentence_he: "אני אוהב לקרוא", date: "22.8.2025" },
                { en: "to eat", he: "לאכול", sentence_en: "I want to eat", sentence_he: "אני רוצה לאכול", date: "21.8.2025" },
                { en: "to go", he: "ללכת", sentence_en: "I want to go home", sentence_he: "אני רוצה ללכת", date: "21.8.2025" },
            ]
        },
        {
            title: "שמות עצם",
            count: 2,
            words: [
                { en: "child", he: "ילד", sentence_en: "The child is playing", sentence_he: "הילד משחק", date: "22.8.2025" },
                { en: "city", he: "עיר", sentence_en: "Tel Aviv is a big city", sentence_he: "תל אביב היא עיר גדולה", date: "22.8.2025" },
            ]
        },
        { title: "מקצועות", count: 1, words: [] }
    ];

    const WordCard: React.FC<typeof wordGroups[0]['words'][0]> = ({ en, he, sentence_en, sentence_he, date }) => (
        <Card className="flex flex-col justify-between">
            <div>
                <div className="text-center mb-4">
                    <p className="text-slate-400 text-sm">{en}</p>
                    <h3 className="text-2xl font-bold text-white">{he}</h3>
                </div>
                <div className="bg-slate-700/50 p-3 rounded-md text-sm text-center">
                    <p className="text-slate-300">"{sentence_en}"</p>
                    <p className="text-slate-400">"{sentence_he}"</p>
                </div>
            </div>
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-700">
                <span className="text-xs text-slate-500">נלמד ב: {date}</span>
                <button className="text-red-400 hover:text-red-500 text-sm flex items-center gap-1">
                    <TrashIcon className="w-4 h-4" />
                    הסר
                </button>
            </div>
        </Card>
    );

    return (
        <div className="space-y-12 max-w-6xl mx-auto">
            <div className="text-center">
                <h1 className="text-3xl font-extrabold text-white">מילים נלמדות</h1>
                <p className="bg-slate-800 text-blue-400 rounded-full py-1 px-3 inline-block mt-2 text-sm font-semibold">57 מילים נלמדו</p>
            </div>
            
            <div className="max-w-md mx-auto relative">
                <input 
                    type="text" 
                    placeholder="חפש מילים..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pr-10 pl-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <SearchIcon className="w-5 h-5 text-slate-500 absolute top-1/2 right-3 -translate-y-1/2" />
            </div>

            {wordGroups.map(group => (
                <section key={group.title}>
                    <h2 className="text-xl font-bold text-white mb-6 text-center">{group.title} ({group.count})</h2>
                    {group.words.length > 0 ? (
                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {group.words.map(word => <WordCard key={word.en} {...word} />)}
                        </div>
                    ) : (
                        <p className="text-slate-500 text-center">אין מילים בקטגוריה זו.</p>
                    )}
                </section>
            ))}
        </div>
    );
};

const PracticePage: React.FC = () => (
    <div className="space-y-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-white text-center">מרכז התרגול</h1>
        <div className="flex flex-col md:flex-row justify-center gap-8">
            <Card className="flex-1 text-center">
                <h2 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                    <BookOpenIcon className="w-6 h-6 text-orange-400" />
                    שאלון רב-ברירה
                </h2>
                <p className="text-slate-400 mb-6">בדקו את עצמכם עם שאלות רב-ברירה.</p>
                <Button variant="ghost">לשאלון</Button>
            </Card>
            <Card className="flex-1 text-center">
                <h2 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                    <SparklesIcon className="w-6 h-6 text-blue-400" />
                    כרטיסיות אוצר מילים
                </h2>
                <p className="text-slate-400 mb-6">תרגלו זיכרון מהיר באנגלית-עברית.</p>
                <Button variant="secondary">לכרטיסיות</Button>
            </Card>
        </div>
    </div>
);

const LessonPage: React.FC = () => {
    const lessonWords = [
        { en: "ticket", he: "כרטיס", sentence_en: "I lost my ticket", sentence_he: "איבדתי את הכרטיס" },
        { en: "travel", he: "לטייל", sentence_en: "I love to travel", sentence_he: "אני אוהב לטייל" },
        { en: "hotel", he: "מלון", sentence_en: "The hotel is beautiful", sentence_he: "המלון יפה" },
        { en: "airport", he: "שדה תעופה", sentence_en: "We are at the airport", sentence_he: "אנחנו בשדה התעופה" },
        { en: "map", he: "מפה", sentence_en: "I need a map", sentence_he: "אני צריך מפה" },
        { en: "suitcase", he: "מזוודה", sentence_en: "My suitcase is heavy", sentence_he: "המזוודה שלי כבדה" },
        { en: "vacation", he: "חופשה", sentence_en: "We are on vacation", sentence_he: "אנחנו בחופשה" },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentWord = lessonWords[currentIndex];

    const handleNext = () => setCurrentIndex(prev => Math.min(prev + 1, lessonWords.length - 1));
    const handlePrev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
    
    const progress = ((currentIndex + 1) / lessonWords.length) * 100;

    return (
        <div className="max-w-2xl mx-auto text-center">
            <div className="flex flex-col items-center mb-8">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-2">
                     <div className="bg-gradient-to-br from-orange-500 to-orange-400 text-white font-bold text-xl w-8 h-8 flex items-center justify-center rounded-lg">T</div>
                </div>
                <h1 className="text-2xl font-bold text-white">שיעור: טיולים</h1>
                <span className="bg-slate-800 text-blue-400 rounded-full py-1 px-3 text-xs font-semibold mt-1">טיולים</span>
            </div>

            <Card className="w-full">
                <div className="flex justify-between items-center mb-4 text-sm text-slate-400">
                    <span>מקום לסרטון או קובץ שמע</span>
                    <span>{currentIndex + 1} מתוך {lessonWords.length} מילים</span>
                </div>
                <ProgressBar value={progress} />

                <div className="my-12 space-y-6">
                    <div>
                        <p className="text-3xl font-bold text-white tracking-wider">{currentWord.en}</p>
                        <button className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 mx-auto mt-2">
                           <SpeakerphoneIcon className="w-4 h-4"/> הקראה
                        </button>
                    </div>
                     <div>
                        <p className="text-slate-400">תרגום לעברית</p>
                        <p className="text-3xl font-bold text-white">{currentWord.he}</p>
                    </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 space-y-2">
                     <p className="text-orange-400 text-sm">דוגמה במשפט עם תרגום</p>
                     <p className="text-xl text-white">"{currentWord.sentence_en}"</p>
                     <p className="text-lg text-slate-400">"{currentWord.sentence_he}"</p>
                </div>

                <div className="flex justify-center items-center gap-4 mt-8">
                    <Button variant="ghost" onClick={handlePrev} disabled={currentIndex === 0}>
                        <ArrowRightIcon className="w-5 h-5" />
                        <span>קודם</span>
                    </Button>
                    <Button variant="secondary" className="px-8 bg-green-600 hover:bg-green-700 focus:ring-green-500">
                        <CheckCircleIcon className="w-5 h-5"/>
                        <span>למדתי!</span>
                    </Button>
                    <Button variant="ghost" onClick={handleNext} disabled={currentIndex === lessonWords.length - 1}>
                        <span>הבא</span>
                        <ArrowLeftIcon className="w-5 h-5" />
                    </Button>
                </div>
            </Card>
            <p className="text-slate-500 text-sm mt-4">התקדמות בקטגוריה: {currentIndex + 1} / {lessonWords.length} מילים</p>
        </div>
    );
};

const ProfessionalPage: React.FC = () => (
    <div className="space-y-20 text-center">
        <section>
            <p className="text-blue-400 font-semibold mb-2">פלטפורמת הלימוד המתקדמת בישראל</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">למד אנגלית<br/>ברמה <span className="text-orange-400">מקצועית</span></h1>
            <p className="text-slate-400 max-w-2xl mx-auto">
                הצטרפו לאלפי משתמשים שכבר שיפרו את אוצר המילים שלהם עם השיטה שלנו. למדו מילים באנגלית מתוך מאמרים, כתבות ופוסטים באנגלית בכל אתר אינטרנט, והתחילו לדבר אנגלית מהר יותר.
            </p>
        </section>

        <section>
            <h2 className="text-3xl font-extrabold text-white mb-10">איך זה עובד?</h2>
             <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                <Card className="flex-1 min-w-[280px] text-center"><StarIcon className="w-8 h-8 text-blue-400 mx-auto mb-2"/><h3 className="font-bold text-lg text-white">3. תרגול מהיר</h3><p className="text-slate-400 mt-2">תרגול המילים החדשות במגוון דרכים</p></Card>
                <Card className="flex-1 min-w-[280px] text-center"><DesktopComputerIcon className="w-8 h-8 text-blue-400 mx-auto mb-2"/><h3 className="font-bold text-lg text-white">2. תוסף חכם</h3><p className="text-slate-400 mt-2">התוסף שלנו מחליף מילים בכל אתר</p></Card>
                <Card className="flex-1 min-w-[280px] text-center"><BookOpenIcon className="w-8 h-8 text-blue-400 mx-auto mb-2"/><h3 className="font-bold text-lg text-white">1. למד באתר</h3><p className="text-slate-400 mt-2">בחר מילים חדשות ממאגר המילים שלנו</p></Card>
            </div>
        </section>

        <section className="max-w-3xl mx-auto">
            <Card className="text-right">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-xs text-orange-400 font-semibold">Level up</p>
                        <h3 className="text-lg font-bold text-white">שיעור רחב</h3>
                        <p className="text-slate-400">Advanced Business English</p>
                    </div>
                    <div className="text-left">
                        <p className="text-xs text-slate-400">התקדמות כללית</p>
                        <p className="font-bold text-white">0%</p>
                    </div>
                </div>
                <ProgressBar value={10} />
                <div className="flex justify-between items-center text-center mt-6">
                    <div>
                        <p className="text-2xl font-bold text-white">24</p>
                        <p className="text-sm text-slate-400">שיעורים</p>
                    </div>
                     <div>
                        <p className="text-2xl font-bold text-white">57</p>
                        <p className="text-sm text-slate-400">מילים נלמדו</p>
                    </div>
                     <div>
                        <p className="text-2xl font-bold text-white">Points 15</p>
                        <p className="text-sm text-slate-400">מתוך 15</p>
                    </div>
                </div>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card className="text-right"><h4 className="font-bold text-white mb-1">תרגילים יומיים</h4><p className="text-slate-400 text-sm">תרגולים וחידונים יומיים לשיפור</p></Card>
                <Card className="text-right"><h4 className="font-bold text-white mb-1">השיעור הבא המומלץ</h4><p className="text-slate-400 text-sm">השיעור הבא המומלץ עבורך</p><Button variant="secondary" className="w-full mt-3 text-sm py-2">התחל שיעור</Button></Card>
            </div>
        </section>

        <section className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center"><p className="text-4xl font-extrabold text-blue-400">15K+</p><p className="text-slate-400 mt-1">משתמשים מרוצים</p></div>
                <div className="text-center"><p className="text-4xl font-extrabold text-orange-400 flex items-center justify-center gap-1">4.9 <StarIcon className="w-8 h-8 fill-current text-orange-400"/></p><p className="text-slate-400 mt-1">דירוג ממוצע</p></div>
                <div className="text-center"><p className="text-4xl font-extrabold text-blue-400">95%</p><p className="text-slate-400 mt-1">שיפור באוצר המילים</p></div>
            </div>
             <div className="flex justify-center gap-4 mt-12">
                <Button variant="secondary" className="px-8 py-3">התחל את המסלול</Button>
                <Button variant="ghost" className="px-8 py-3">הורד את התוסף</Button>
            </div>
        </section>

    </div>
);


// =================================================================================
// MAIN APP & ROUTING
// =================================================================================

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-slate-900 text-slate-300 min-h-screen font-sans">
        <Header />
        <main className="container mx-auto px-4 py-12 md:py-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/method" element={<MethodPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/words" element={<WordsPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/lesson" element={<LessonPage />} />
            <Route path="/professional" element={<ProfessionalPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
