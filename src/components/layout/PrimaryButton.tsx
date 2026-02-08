import Link from "next/link";
import Button from "../ui/Button";

export default function PrimaryButton({ text, link, linkClass = "", buttonClass = "" }: { text: string, link: string, linkClass?: string, buttonClass?: string }) {
    return (
        <Link
            className={`text-decoration-none ${linkClass}`}
            href={link}
        >
            <Button
                variant="gradient"
                size="lg"
                className={`text-dark ${buttonClass}`}
            >
                {text}
            </Button>
        </Link>
    );
}