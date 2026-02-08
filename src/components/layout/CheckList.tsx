import { Check } from "../icons/Check";
import { ChevronRight } from "../icons/ChevronRight";

export default function CheckList({ data, icon = 'check' }: { data: string[], icon?: 'check' | 'chevron-right' }) {
    return (
        <ul className="list-unstyled mb-5">
            {data.map((app, index) => (
                <li key={index} className="position-relative mb-4 d-flex gap-3 align-items-start">
                    {icon === 'chevron-right' && <ChevronRight size={20} strokeWidth={2} className="text-secondary" />}
                    {icon === 'check' && <Check size={30} strokeWidth={2} className="text-primary" />}
                    <span className="text-muted" dangerouslySetInnerHTML={{ __html: app }} />
                </li>
            ))}
        </ul>
    );
}