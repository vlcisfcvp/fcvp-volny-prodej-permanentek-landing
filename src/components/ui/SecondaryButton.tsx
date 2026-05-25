import React from "react";
export function SecondaryButton(props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { className?: string }) {
  const { className = "", children, ...rest } = props;
  return <a className={`cta-secondary ${className}`} {...rest}>{children}</a>;
}
