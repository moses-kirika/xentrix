"use client";

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
    {
        variants: {
            variant: {
                primary: "bg-[#1F7A5A] text-white hover:bg-[#18664b] shadow-sm",
                secondary: "bg-[#F5F6F7] text-[#111111] hover:bg-slate-200",
                outline: "border border-slate-200 bg-transparent hover:bg-slate-50 text-[#111111]",
                ghost: "bg-transparent hover:bg-slate-100 text-[#111111] hover:text-slate-900",
                gradient: "bg-gradient-to-r from-green-700 to-emerald-600 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 border-none",
            },
            size: {
                default: "h-11 px-[18px] py-[10px]",
                sm: "h-9 px-4 rounded-md text-sm",
                lg: "h-12 px-8 rounded-lg text-lg",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
}

type MotionButtonProps = ButtonProps & HTMLMotionProps<"button">;

const Button = forwardRef<HTMLButtonElement, MotionButtonProps>(
    ({ className, variant, size, isLoading, children, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.98 }}
                className={cn(buttonVariants({ variant, size, className }))}
                disabled={isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };
