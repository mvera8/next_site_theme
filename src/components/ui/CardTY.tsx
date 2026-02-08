import { withBasePath } from "@/lib/paths";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "@/components/icons/ChevronRight";
import styles from './CardTY.module.scss';

export default function CardTY({ title, text, link, image }: { title: string; text: React.ReactNode; link: string; image: string }) {
    return (
        <div className="col-12 col-lg pb-4 mb-3 mb-md-5">
            <div className="d-flex align-items-end flex-column shadow rounded-3 overflow-hidden h-100 w-100">
                <Link
                    className="appendTyParam text-decoration-none text-black d-block w-100 h-100"
                    href={link}
                    target="_blank"
                >
                    <div className="h-100 d-flex flex-column">
                        <div className="position-relative w-100" style={{ height: '170px' }}>
                            <Image
                                src={withBasePath(`/ty/${image}.webp`)}
                                alt={title}
                                fill
                                className="object-fit-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        <div className="px-4 py-5 flex-grow-1">
                            <h3 className="mt-0">{title}</h3>
                            <div className="d-flex align-items-center">
                                <span className={`${styles.itemText} flex-grow-1 pe-4 text-muted`}>
                                    {text}
                                </span>
                                <span className={`${styles.itemLink} flex-grow-1`}>
                                    <ChevronRight size={30} strokeWidth={1} className="text-white" />
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}