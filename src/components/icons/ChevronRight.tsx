interface ChevronRightProps {
    className?: string;
    size?: number;
    strokeWidth?: number;
}

export function ChevronRight({
    className,
    size = 20,
    strokeWidth = 2
}: ChevronRightProps) {
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
            <path d="M6 12l4-4-4-4" />
        </svg>
    );
}
