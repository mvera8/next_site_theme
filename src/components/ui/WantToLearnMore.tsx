import Link from "next/link";
import Button from "./Button";
import PrimaryButton from "../layout/PrimaryButton";

export default function WantToLearnMore() {
    return (
        <div className="container container-sm text-center py-4 py-md-5">
            <div className="py-3 py-md-5 px-2 px-md-0">
                <div className="mb-4 text-uppercase text-secondary display-4">
                    Want to learn More?
                </div>
                <h4 className="text-white display-2 mb-5">
                    Our <span className="text-secondary">FREE guide</span> provides helpful information about how to apply for benefits
                </h4>

                <PrimaryButton
                    text="Get the Guide"
                    link="#vector-refreshment"
                />
            </div>
        </div>
    );
}