import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

type LinkVariant = "footer" | "default";

interface StyledLinkProps {
  children: React.ReactNode;
  href: string;
  isInverseUnderlineStyling?: boolean;
  isExternalLink?: boolean;
  className?: string;
  variant?: LinkVariant;
}

const linkVariants: Record<LinkVariant, string> = {
  footer: "text-yellow-400 decoration-yellow-400",
  default: "text-inherit decoration-current",
};

export const StyledLink = ({
  children,
  href,
  variant = "default",
  isInverseUnderlineStyling,
  isExternalLink,
  className = "",
}: StyledLinkProps) => {
  const variantStyles = linkVariants[variant];

  const underlineClass = isInverseUnderlineStyling
    ? "underline hover:no-underline"
    : "no-underline hover:underline";

  const baseStyles = `transition-opacity duration-300 hover:opacity-80`;

  const content = (
    // Apply variant styles here so they wrap the children and icon
    <span
      className={`inline-flex items-center ${underlineClass} ${variantStyles} ${className}`}
    >
      {children}
      {isExternalLink && (
        <LuExternalLink className="ml-1 shrink-0" aria-hidden="true" />
      )}
    </span>
  );

  if (isExternalLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} legacyBehavior>
      <a className={baseStyles}>{content}</a>
    </Link>
  );
};
