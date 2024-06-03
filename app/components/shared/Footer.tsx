import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const footerLinks = [
        {
            title: "lines",
            links: [
                {
                    label: "Statut",
                    path: "/"
                },
                {
                    label: "API",
                    path: "/"
                },
                {
                    label: "Support",
                    path: "/"
                },
                {
                    label: "CGV",
                    path: "/"
                },
                {
                    label: "Mentions légales",
                    path: "/"
                },
            ]
        },
        {
            title: "Communauté",
            links: [
                {
                    label: "Centre d’aide",
                    path: "/"
                },
                {
                    label: "Partenaire",
                    path: "/"
                },
                {
                    label: "Suggestions",
                    path: "/"
                },
                {
                    label: "Blog",
                    path: "/"
                },
                {
                    label: "Newsletters",
                    path: "/"
                },
            ]
        },
        {
            title: "Partenaire",
            links: [
                {
                    label: "Nos partenaire",
                    path: "/"
                },
                {
                    label: "Devenir partenaire",
                    path: "/"
                },
            ]
        },
    ];

    return (
        <div className="px-4 container lg:px-0">
            <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                <div className="md:max-w-md lg:col-span-2">
                    <Link
                        href="/"
                        aria-label="Go home"
                        title="Company"
                        className="inline-flex gap-7 items-center"
                    >
                        <img src="/Logo.png" alt="" />
                        <span className="ml-2 text-4xl text-gradient font-bold">
                            Mypay
                        </span>
                    </Link>
                    <div className="mt-4 lg:max-w-sm">
                        <p className="text-lg text-white/70 ">
                            Une nouvelle façon de rendre les paiements faciles, fiables et sécurisés.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
                    {footerLinks?.map((footer, index) => (
                        <div key={index}>
                            <p className="font-semibold tracking-wide text-lg text-white">
                                {footer?.title}
                            </p>
                            <ul className="mt-2 space-y-2">
                                {
                                    footer?.links.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link?.path}
                                                className="text-white/70 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                            >
                                                {link?.label}
                                            </Link>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
                <p className="text-sm text-white/60">
                    © Copyright 2023 Mypay. Tous les droits sont réservés
                </p>
                <div className="flex items-center mt-4 space-x-4 sm:mt-0 text-white text-xl">
                    <FaInstagram className="cursor-pointer" />
                    <FaFacebook className="cursor-pointer" />
                    <FaTwitter className="cursor-pointer" />
                    <FaLinkedin className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Footer;