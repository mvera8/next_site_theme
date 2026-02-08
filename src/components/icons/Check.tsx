// src/components/icons/Check.tsx

interface CheckProps {
    className?: string;
    size?: number;
    strokeWidth?: number;
}

export function Check({
    className,
    size = 20,
    strokeWidth = 2
}: CheckProps) {
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
            <path d="M13.5 3.5L6 11l-3.5-3.5" />
        </svg>
    );
}