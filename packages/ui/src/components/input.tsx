import { cn } from "../cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn('border-b-2 border-black focus:border-blue-500 outline-none',className)}
      {...props}
    />
  )
}