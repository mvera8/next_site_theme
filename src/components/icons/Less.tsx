interface LessProps {
    className?: string;
    size?: number;
    strokeWidth?: number;
}

export function Less({
    className,
    size = 20,
    strokeWidth = 2
}: LessProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <path d="M3 8h10" />
        </svg>
    );
}
