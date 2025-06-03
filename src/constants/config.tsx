// import { usePathname } from 'next/navigation';
// import { BiHomeAlt } from "react-icons/bi";
// import { TbWorld } from "react-icons/tb";
// import { PiBankLight } from "react-icons/pi";
// import { BsListTask } from "react-icons/bs";
// import { MdOutlineWorkOutline } from "react-icons/md";
// import { IoGiftSharp } from "react-icons/io5";

// import { Menu, Bell, Briefcase, Home, Settings, User } from 'lucide-react';

// export const NavItems = () => {
//   const pathname = usePathname();

//   function isNavItemActive(pathname: string, nav: string) {
//     return pathname.includes(nav);
//   }

//   return [
//     {
//       name: (
//         <img
//           src="/svg/marketplace_logo_black.svg"
//           height={60}
//           width={80}
//           alt="Marketplace Logo"
//           className="w-24 h-auto md:w-28"
//         />
//       ),
//       href: '/',
//       icon: <Menu size={30} />,
//       position: 'top',
//     },
//     {
//       name: 'Home',
//       href: '/',
//       icon: <BiHomeAlt size={20} />,
//       active: pathname === '/',
//       position: 'middle',
//     },
//     {
//       name: 'Resources',
//       href: '/landing-page/resources',
//       icon: <PiBankLight size={20} />,
//       active: isNavItemActive(pathname, '/profile'),
//       position: 'middle',
//     },
//     {
//       name: 'My Network',
//       href: '/landing-page/programs',
//       icon: <TbWorld size={20} />,
//       active: isNavItemActive(pathname, '/notifications'),
//       position: 'middle',
//     },
//     {
//       name: 'Programs',
//       href: '/landing-page/programs',
//       icon: <MdOutlineWorkOutline size={20} />,
//       active: isNavItemActive(pathname, '/notifications'),
//       position: 'middle',
//     },
//     {
//       name: 'Jobs',
//       href: '/landing-page/special_Initiatives',
//       icon: <BsListTask size={20} />,
//       active: isNavItemActive(pathname, '/projects'),
//       position: 'middle',
//     },
    
//     {
//       name: 'Special Initiatives',
//       href: '/landing-page/special_Initiatives',
//       icon: <IoGiftSharp size={20} />,
//       active: isNavItemActive(pathname, '/projects'),
//       position: 'middle',
//     },
  
//     // {
//     //   name: 'Settings',
//     //   href: '/settings',
//     //   icon: <Settings size={20} />,
//     //   active: isNavItemActive(pathname, '/settings'),
//     //   position: 'bottom',
//     // },
//   ];
// };

import { usePathname } from 'next/navigation';
import { BiHomeAlt } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { PiBankLight } from "react-icons/pi";
import { BsListTask } from "react-icons/bs";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoGiftSharp } from "react-icons/io5";
import { Menu } from 'lucide-react';

export interface NavItemType {
  name: string | JSX.Element;
  href: string;
  icon: JSX.Element;
  active?: boolean;
  position: 'top' | 'middle' | 'bottom';
}

export const NavItems = (): NavItemType[] => {
  const pathname = usePathname();

  const isNavItemActive = (pathname: string, nav: string) => {
    return pathname.includes(nav);
  };

  return [
    {
      name: (
        <img
          src="/svg/marketplace_logo_black.svg"
          height={60}
          width={80}
          alt="Marketplace Logo"
          className="w-24 h-auto md:w-28"
        />
      ),
      href: '#',
      icon: <Menu size={30} />,
      position: 'top',
    },
    {
      name: 'Home',
      href: '/',
      icon: <BiHomeAlt size={20} />,
      active: pathname === '/',
      position: 'middle',
    },
    {
      name: 'Resources',
      href: '/landing-page/resources',
      icon: <PiBankLight size={20} />,
      active: isNavItemActive(pathname, '/profile'),
      position: 'middle',
    },
    {
      name: 'My Network',
      href: '/landing-page/programs',
      icon: <TbWorld size={20} />,
      active: isNavItemActive(pathname, '/notifications'),
      position: 'middle',
    },
    {
      name: 'Programs',
      href: '/landing-page/programs',
      icon: <MdOutlineWorkOutline size={20} />,
      active: isNavItemActive(pathname, '/notifications'),
      position: 'middle',
    },
    {
      name: 'Jobs',
      href: '/landing-page/special_Initiatives',
      icon: <BsListTask size={20} />,
      active: isNavItemActive(pathname, '/projects'),
      position: 'middle',
    },
    {
      name: 'Special Initiatives',
      href: '/landing-page/special_Initiatives',
      icon: <IoGiftSharp size={20} />,
      active: isNavItemActive(pathname, '/projects'),
      position: 'middle',
    },
    // Uncomment if needed
    // {
    //   label: 'Settings',
    //   href: '/settings',
    //   icon: <Settings size={20} />,
    //   active: isNavItemActive(pathname, '/settings'),
    //   position: 'bottom',
    // },
  ];
};

