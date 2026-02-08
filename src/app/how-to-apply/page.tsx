import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/site";
import RefreshmentLandingPage from "@/components/templates/RefreshmentLandingPage";

export async function generateMetadata(): Promise<Metadata> {
    return generatePageMetadata(
        "Learn How To Apply For Section 8 Housing",
        "Learn How To Apply For Section 8 Housing",
        "/how-to-apply"
    );
}

export default function HowToApplyPage() {
    return (
        <RefreshmentLandingPage title="Apply for Section 8 Assistance">
            <p>You can visit a Public Housing Authority (PHA) in your area to learn where to sign up for Section 8 help. If you are wondering “how can I sign up for Section 8?”, keep reading to learn more.</p>
            <p>To apply for Section 8, you can visit a PHA and get an application to fill out. In some states, you can fill out a Section 8 application online. Many people think this is the easiest way to apply for Section 8, because you do not need to leave your house or wait in a line.</p>
            <p>To complete the application, you will have to enter personal information and financial information about everyone in your household. First, you will need to enter your family’s annual income. This includes information about each household member’s salaries, how much money they have and any other sources of income they have. Next, you will need to enter information about the head of the household and every family member. You will need to give their full names, birthdates and Social Security numbers. You may also have to say if anyone in your household is pregnant or disabled.</p>
            <p>You will also have to show some documents. The PHA may contact you for proof of identity (ID card, passport, driver’s license, Social Security card), proof of income (pay stub, benefit award letter, bank statement) or proof of citizenship (birth certificate, Social Security card). The PHA will run a background check on all household members. You will have to sign all the required forms about the program requirements, as well as rights and responsibilities.</p>
            <p>After you submit the application, the PHA will review all the details. If you are approved, you will receive a voucher or get put on a waiting list.</p>
            <p>Sometimes, people have to wait a very long time to get a Section 8 housing voucher. This can sometimes take years. This is because many people apply for Section 8 help, but the PHA does not have enough money to help everyone. If you are placed on the waiting list, you will have to be sure to update anything on the application that changes. For example, you will have to update the application or tell the PHA if your household income changes.</p>
            <p>When the program can give you a housing voucher, they will send you a Request for Tenancy Approval package. Once you receive this, you can start searching for a home.</p>
        </RefreshmentLandingPage>
    );
}