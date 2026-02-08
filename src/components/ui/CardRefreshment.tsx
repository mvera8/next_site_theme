import RefreshmentIcons from "../icons/RefreshmentIcons";

export default function CardRefreshment({ icon, title, description }: { icon: string, title: string, description: string }) {
    return (
        <div className="card border-0 shadow rounded-3 mb-4 mb-lg-0 w-100">
            <div className="card-body px-4 py-5">
                <RefreshmentIcons icon={icon} />
                <h3 className="card-title my-4">
                    {title}
                </h3>
                <p className="card-text mb-0 text-light">{description}</p>
            </div>
        </div>
    );
}