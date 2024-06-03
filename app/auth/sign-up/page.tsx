import { AuthWrapper } from "@/app/components/auth/auth-wrapper";
import { SignUpForm } from "@/app/components/auth/sign-up-form";
import Link from "next/link";

const SignUp = () => {
    return (
        <main className="min-h-screen py-5 lg:py-8">
            <AuthWrapper>
                <SignUpForm />
                <p className="text-xs sm:text-sm tracking-[-2%] text-[#2a3547]">
                    Already account to MyPay?&nbsp;
                    <Link
                        href="/auth/sign-in"
                        className="font-semibold tracking-[-1%] text-[#5d87ff] font-sans"
                    >
                        Sign in
                    </Link>
                </p>
            </AuthWrapper>
        </main>
    );
};

export default SignUp;