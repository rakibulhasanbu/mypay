
import { AuthWrapper } from "@/app/components/auth/auth-wrapper";
import { LoginForm } from "@/app/components/auth/login-form";
import Link from "next/link";

const SignIn = () => {
    return (
        <main className="min-h-screen py-5 lg:py-10">
            <AuthWrapper>
                <LoginForm />
                <p className="text-xs sm:text-sm tracking-[-2%] text-[#2a3547]">
                    Nouveau sur MyPay?&nbsp;
                    <Link
                        href="/auth/sign-up"
                        className="font-semibold tracking-[-1%] text-[#5d87ff] font-sans"
                    >
                        Créer un compte
                    </Link>
                </p>
            </AuthWrapper>
        </main>
    );
};

export default SignIn;
