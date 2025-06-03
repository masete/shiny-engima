'use client';

import { useEffect, useState, Fragment } from 'react';
import Link from 'next/link';
import { NavItems } from '@/constants/config';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type SideNavItemProps = {
  label: string | JSX.Element;
  icon: ReactNode;
  path: string;
  active: boolean;
  isSidebarExpanded: boolean;
};

export default function SideNav() {
  const navItems = NavItems();

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('sidebarExpanded');
      return saved === null ? true : JSON.parse(saved);
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('sidebarExpanded', JSON.stringify(isSidebarExpanded));
    }
  }, [isSidebarExpanded]);

  const toggleSidebar = () => setIsSidebarExpanded(!isSidebarExpanded);

  return (
    <>
      {isSidebarExpanded && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xm z-10"
          onClick={toggleSidebar}
        />
      )}

      <div className="pr-2 bg-white/100 sticky pt-0 z-20">
        <div
          className={cn(
            isSidebarExpanded ? 'w-[250px] text-black/90 bg-black' : 'w-[60px]',
            'border-r transition-all duration-300 ease-in-out transform hidden sm:flex h-full bg-white text-black relative z-20',
          )}
        >
          <aside className="flex flex-col justify-between h-full w-full px-2 text-black overflow-x-hidden">
            {/* Top Section */}
            <div className="mt-3 pb-4">
              <div className="flex flex-col space-y-4">
                <div onClick={toggleSidebar}>
                  {navItems
                    .filter((item) => item.position === 'top')
                    .map((item, idx) => (
                      <SideNavItem
                        key={idx}
                        label={item.name}
                        icon={item.icon}
                        // path={item.href}
                        path={item.href ?? '#'}
                        active={item.active ?? false}
                        isSidebarExpanded={isSidebarExpanded}
                      />
                    ))}
                </div>
              </div>
            </div>

            {/* Middle Section */}
            <div className="mt-10 pb-4">
              <div className="flex flex-col space-y-3.5">
                {navItems
                  .filter((item) => item.position === 'middle')
                  .map((item, idx) => (
                    <SideNavItem
                      key={idx}
                      label={item.name}
                      icon={item.icon}
                      path={item.href}
                      active={item.active ?? false}
                      isSidebarExpanded={isSidebarExpanded}
                    />
                  ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="sticky bottom-1 mt-24 mb-1">
              <div className="bg-gray-100 p-2 rounded-full border-2">
                <img
                  src="/user.svg"
                  alt="User icon"
                  width={30}
                  height={30}
                  className="border-2 border-white rounded-full bg-blue-900"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

const SideNavItem: React.FC<SideNavItemProps> = ({
  label,
  icon,
  path,
  active,
  isSidebarExpanded,
}) => {
  const commonClasses = cn(
    'h-full relative flex items-center whitespace-nowrap rounded-md text-black transition duration-100',
    active
      ? 'font-base text-sm bg-neutral-200 shadow-sm text-neutral-700 dark:bg-neutral-800 dark:text-white'
      : 'hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
  );

  const iconOnlyClasses = cn(
    'font-base text-sm text-black p-2 flex flex-row items-center space-x-2 rounded-md duration-100'
  );

  const expandedClasses = cn(
    'font-base text-sm text-black/100 py-1.5 px-2 flex flex-row items-center space-x-2 rounded-md duration-100'
  );

  return isSidebarExpanded ? (
    <Link href={path} className={commonClasses}>
      <div className={expandedClasses}>
        {icon}
        <span>{label}</span>
      </div>
    </Link>
  ) : (
    <TooltipProvider delayDuration={70}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={path} className={commonClasses}>
            <div className={iconOnlyClasses}>{icon}</div>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left" className="px-3 py-1.5 text-xs" sideOffset={10}>
          <span>{typeof label === 'string' ? label : 'View'}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
