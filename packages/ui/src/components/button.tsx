import { cn } from "../cn"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn('px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400', className)}
      {...props}
    >
      {children}
    </button>
  )
}