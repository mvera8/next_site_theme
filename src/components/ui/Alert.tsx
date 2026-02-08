import { Check } from "../icons/Check";
import styles from "./Alert.module.scss";

export default function Alert({ title, text, type, icon }: { title: string; text: React.ReactNode; type: string, icon?: boolean }) {
    return (
        <div className={`alert alert-${type} ${styles[`alert-${type}`]}`} role="alert">
            <h3 className="h3 mb-4 alert__icon">
                {icon &&
                    <span className="me-3 border border-2 border-success rounded-circle pb-1 px-2">
                        <Check size={24} strokeWidth={1.5} />
                    </span>
                }
                {title}
            </h3>
            <p className="mb-0">{text}</p>
        </div>
    );
}