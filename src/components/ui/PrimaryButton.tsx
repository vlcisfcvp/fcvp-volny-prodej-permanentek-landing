import React from "react";

export function PrimaryButton(
  props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { className?: string }
) {
  const { className = "", children, ...rest } = props;
  return (
    <a className={`cta-primary ${className}`} {...rest}>
      <span className="relative z-[1]">{children}</span>
    </a>
  );
}
