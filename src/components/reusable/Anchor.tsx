
type CustomAnchor = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    className?: string; 
    label: string
}

export const CustomAnchor = ({className, label, ...props} : CustomAnchor) => {
  return (
    <a 
    {...props}
    className={`relative group  ${className}
    `}>
        {label}
        <div className="absolute custom-line w-0 bg-black h-[0.5px] rounded-2xl bottom-[-2px] inset-x-0 group-hover:w-full transition-all"/>
    </a>
  )
}
