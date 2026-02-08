import { withBasePath } from "@/lib/paths";
import Image from "next/image";
import Link from "next/link";

export default function CardPost({ title, text, link, image, readMore = false, truncate = true }: { title: string; text: React.ReactNode; link: string; image: string | boolean; readMore?: boolean, truncate?: boolean }) {
    return (
        <div className="card border-0 mb-3 mb-md-0">
            <Link
                className="appendTyParam text-decoration-none text-black d-block w-100 h-100"
                href={link}
            >
                {typeof image === 'string' && (
                    <div className="position-relative w-100 mb-3" style={{ height: '200px' }}>
                        <Image
                            src={withBasePath(`/ty/${image}.webp`)}
                            alt={title}
                            fill
                            className="object-fit-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                )}
                <h3 className="mb-4">{title}</h3>
                <p className={`text-light ${truncate ? 'text-truncate' : ''}`}>{text}</p>
                {readMore && (
                    <div className="d-block pt-2 pb-5">
                        <span className="text-primary fw-bold fs-4">Read More</span>
                    </div>
                )}
            </Link>
        </div>
    );
}