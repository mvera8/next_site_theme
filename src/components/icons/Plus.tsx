interface PlusProps {
    className?: string;
    size?: number;
    strokeWidth?: number;
}

export function Plus({
    className,
    size = 20,
    strokeWidth = 2
}: PlusProps) {
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
            <path d="M8 4v8M4 8h8" />
        </svg>
    );
}
