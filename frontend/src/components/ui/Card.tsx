"use client";

import { HTMLAttributes, forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

// Combine standard HTML div props with Framer Motion props
type CardProps = HTMLAttributes<HTMLDivElement> & HTMLMotionProps<"div"> & {
    hoverEffect?: boolean;
};

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                initial={hoverEffect ? { opacity: 0, y: 20 } : undefined}
                whileInView={hoverEffect ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={hoverEffect ? { y: -2, transition: { duration: 0.2 } } : undefined}
                className={cn(
                    "rounded-xl bg-white border border-slate-100 shadow-sm transition-all duration-300",
                    hoverEffect && "hover:shadow-md hover:border-green-100",
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = "Card";

export { Card };
