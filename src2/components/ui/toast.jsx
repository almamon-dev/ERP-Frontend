import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva } from "class-variance-authority";
import { X, Check, AlertCircle, Info } from "lucide-react"
import { useToast } from "@/Hooks/use-toast"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed bottom-8 left-1/2 -translate-x-1/2 z-[1000] flex max-h-screen w-full flex-col-reverse gap-2 p-4 md:max-w-[420px]",
      className
    )}
    {...props} />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-fit min-w-[300px] max-w-[95vw] md:max-w-[500px] items-center justify-between space-x-4 overflow-hidden rounded-full bg-[#1a1c1d] border border-white/5 py-3 px-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-bottom-full data-[state=open]:slide-in-from-bottom-full duration-300",
  {
    variants: {
      variant: {
        default: "text-white",
        success: "text-white",
        destructive: "text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props} />
  );
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props} />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/20 opacity-0 transition-all hover:text-white hover:bg-white/10 group-hover:opacity-100",
      className
    )}
    toast-close=""
    {...props}>
    <X className="h-3.5 w-3.5" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cn("text-[13px] font-bold leading-none tracking-tight", className)} {...props} />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={cn("text-[12px] opacity-60 leading-none", className)} {...props} />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider swipeDirection="down">
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        return (
          <Toast key={id} variant={variant} {...props}>
            <div className="flex items-center gap-4 py-0.5">
              <div className="shrink-0">
                {variant === "destructive" ? (
                  <AlertCircle size={16} className="text-[#ff4d4d]" />
                ) : variant === "success" ? (
                  <Check size={16} className="text-[#00e676]" />
                ) : (
                  <Info size={16} className="text-[#2196f3]" />
                )}
              </div>
              <div className="flex items-center gap-3 pr-6 overflow-hidden">
                {title && <ToastTitle className="text-white whitespace-nowrap">{title}</ToastTitle>}
                {description && (
                  <ToastDescription className="text-white/70 font-medium truncate">
                    {description}
                  </ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}

export { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction };
