import { cn } from "@/lib/utils";
import React from "react";

type ContainerSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "none";
type PaddingSize = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type MarginSize = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "auto";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;

  // Size variants
  size?: ContainerSize;

  // Padding options
  padding?: PaddingSize;
  paddingX?: PaddingSize;
  paddingY?: PaddingSize;

  // Margin options
  margin?: MarginSize;
  marginX?: MarginSize;
  marginY?: MarginSize;

  // Centering options
  center?: boolean;
  centerX?: boolean;
  centerY?: boolean;

  // Additional styling
  className?: string;

  // HTML attributes
  id?: string;

  // Semantic HTML
  as?: React.ElementType;
}

const Container = React.forwardRef<HTMLElement, ContainerProps>(
  (
    {
      children,
      size = "xl",
      padding = "md",
      paddingX,
      paddingY,
      margin = "auto",
      marginX,
      marginY,
      center = false,
      centerX = false,
      centerY = false,
      className,
      id,
      as: Component = "section",
      ...props
    },
    ref,
  ) => {
    // Container size classes
    const sizeClasses = {
      xs: "max-w-xs", // 320px
      sm: "max-w-sm", // 384px
      md: "max-w-md", // 448px
      lg: "max-w-lg", // 512px
      xl: "max-w-xl", // 576px
      "2xl": "max-w-2xl", // 672px
      full: "max-w-full", // 100%
      none: "", // No max-width
    };

    // Padding classes
    const paddingClasses = {
      none: "",
      xs: "p-2", // 8px
      sm: "p-3", // 12px
      md: "p-4", // 16px
      lg: "p-6", // 24px
      xl: "p-8", // 32px
      "2xl": "p-12", // 48px
    };

    const paddingXClasses = {
      none: "",
      xs: "px-2",
      sm: "px-3",
      md: "px-4",
      lg: "px-6",
      xl: "px-8",
      "2xl": "px-12",
    };

    const paddingYClasses = {
      none: "",
      xs: "py-2",
      sm: "py-3",
      md: "py-4",
      lg: "py-6",
      xl: "py-8",
      "2xl": "py-12",
    };

    // Margin classes
    const marginClasses = {
      none: "",
      xs: "m-2",
      sm: "m-3",
      md: "m-4",
      lg: "m-6",
      xl: "m-8",
      "2xl": "m-12",
      auto: "mx-auto",
    };

    const marginXClasses = {
      none: "",
      xs: "mx-2",
      sm: "mx-3",
      md: "mx-4",
      lg: "mx-6",
      xl: "mx-8",
      "2xl": "mx-12",
      auto: "mx-auto",
    };

    const marginYClasses = {
      none: "",
      xs: "my-2",
      sm: "my-3",
      md: "my-4",
      lg: "my-6",
      xl: "my-8",
      "2xl": "my-12",
      auto: "my-auto",
    };

    // Build the className string
    const containerClasses = cn(
      // Base container styles
      "w-full",

      // Size
      sizeClasses[size],

      // Padding (paddingX and paddingY override general padding)
      paddingX || paddingY ? "" : paddingClasses[padding],
      paddingX ? paddingXClasses[paddingX] : "",
      paddingY ? paddingYClasses[paddingY] : "",

      // Margin (marginX and marginY override general margin)
      marginX || marginY ? "" : marginClasses[margin],
      marginX ? marginXClasses[marginX] : "",
      marginY ? marginYClasses[marginY] : "",

      // Centering
      center && "flex items-center justify-center",
      centerX && !center && "flex justify-center",
      centerY && !center && "flex items-center",

      // Custom className
      className,
    );

    return (
      <Component ref={ref} id={id} className={containerClasses} {...props}>
        {children}
      </Component>
    );
  },
);

Container.displayName = "Container";

export default Container;
