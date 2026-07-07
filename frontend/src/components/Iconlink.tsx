import { Link } from "react-router-dom";
import { ReactNode } from "react";

// this ts file controls the icons on the homepage
export interface IconLinkProps {
  label: string;
  to: string;
  icon?: ReactNode;
}

export function IconLink({ label, to, icon }: IconLinkProps) {
  return (
    <Link to={to} className="icon-link">
      <>
        <div className="icon-link-icon">
          {icon ?? <div className="icon-link-placeholder" />}
        </div>
        <span className="icon-link-label">{label}</span>
      </>
    </Link>
  );
}