

type CustomInput = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    className? : string;
    label: string;
}

export const InputForm = ({ className, label, ...props }: CustomInput) => {

    const idInput = props.id ? props.id : 'input-' + Math.random().toString(36).substr(2, 9);
    return (
        <div className="font-roboto font-light w-full flex flex-col items-start justify-start gap-2 bg-white/50 pt-2">
            <label htmlFor={idInput}>
                {label}
            </label>
                <input 
                className={`border w-full border-gray-300 p-2 rounded ${className}`} {...props} />
        </div>
    )
}