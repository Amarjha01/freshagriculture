
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const defaults = {
  backgroundColor: "#153F2B",
  color: "#FFFFFF",
  hoverBackgroundColor: "#0D2C1D",
  borderColor: "transparent",
};

export default function Button({
  children,
  href,
  backgroundColor = defaults.backgroundColor,
  color = defaults.color,
  hoverBackgroundColor = defaults.hoverBackgroundColor,
  borderColor = defaults.borderColor,
  className = "",
  showArrow = false,
  variant = "solid",
  type = "button",
  onClick,
  disabled = false,
}) {
  const isOutline = variant === "outline";

  const styles = {
    backgroundColor: isOutline ? "transparent" : backgroundColor,
    color,
    border: `1px solid ${borderColor}`,
    "--button-hover-bg": hoverBackgroundColor,
    "--button-hover-color": color,
  };

  const classes = [
    "group inline-flex items-center justify-center gap-2",
    "rounded-full px-6 py-3 text-sm font-medium",
    "transition-colors duration-300",
    "focus-visible:outline-2 focus-visible:outline-offset-4",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "hover:bg-[var(--button-hover-bg)]",
    className,
  ].join(" ");

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <FiArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        style={styles}
        className={classes}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={disabled ? (event) => event.preventDefault() : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      style={styles}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
