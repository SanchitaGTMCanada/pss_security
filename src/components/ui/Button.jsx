import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}) {
  const variants = {
    primary:
      "bg-[var(--secondary)] text-white hover:bg-[#b58e1f]",
    secondary:
      "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]",
    outline:
      "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",
  };

  const styles = `
    inline-flex
    items-center
    justify-center
    rounded-lg
    px-6
    py-3
    text-sm
    font-semibold
    transition-all
    duration-300
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={styles}>
      {children}
    </button>
  );
}