import { IconType } from "react-icons/lib"

interface ButtonProps{
  label : string,
  disabled?: boolean,
  outline?: boolean,
  small?: boolean,
  custom?: string
  icon?: IconType,
  onClick: (e: React.MouseEvent<HTMLButtonElement>)
  => void
}

const Button = ({label,disabled,outline,small,custom, icon: Icon, onClick}: ButtonProps
) => {
  return <button
  disabled={disabled}
  className={`
  disabled:opacity-50
  disabled:cursor-not-allowed
  hover:opacity-80
  transition
  w-full
  border-white
  flex
  items-center
  justify-center
  gap-2
  ${outline? 'bg-white': 'bg-blue-900'}
  ${outline? 'text-slate-700': 'text-white'}
  ${small? 'py-1 px-2 border-[1px]': 'py-3 px-4 border-2'}
  ${small? 'text-sm font-light': 'text-md font-semibold'}
  ${custom? custom: ''}`}>
    {Icon && <Icon size={24}/>}
    {label}
  </button>
}

export default Button


// import Image from "next/image";

// type ButtonProps = {
//   type: 'button' | 'submit';
//   title: 'string';
//   icon?: string;
//   variant: 'btn_dark_green';
// }

// const Button = ({type,title,icon, variant}: ButtonProps) => {
//   return (
//     <button
//     type={type}>
//       <label className="bold-16 whitespace-nowrap">{title}</label>
//       {icon && <Image src={icon} alt={title} width={24} height={24} />}
//     </button>
//   )
// }

// export default Button
