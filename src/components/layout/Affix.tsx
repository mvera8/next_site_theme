import styles from "./Affix.module.scss";
import PrimaryButton from "./PrimaryButton";

export default function Affix({ link, text = 'Want to get some more helpful info & resources?' }: { link: string, text?: string }) {
    return (

        <div className={`${styles.Affix} position-fixed bottom-0 end-0 p-0 p-sm-3`}>
            <div className={`${styles.Affix__content} bg-white py-3 py-md-4 px-4 px-md-5`}>
                <div className="row align-items-center">
                    <div className="col-6 pr-0 pl-0 pl-md-4">
                        <p className="mb-0 fs-5"><b>{text}</b></p>
                    </div>
                    <div className="col-6 pr-0">
                        <PrimaryButton
                            text="Get the Guide"
                            link={link}
                            buttonClass="p-2 px-md-4 py-4 w-100"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}