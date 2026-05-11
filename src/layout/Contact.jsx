import React from "react";
import SectionContainer from "../components/SectionContainer";
import { MdEmail } from "react-icons/md";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoBitbucket } from "react-icons/io";
import { bitbucketProfile, facebookProfile, githubLink, linkedInProfile } from "../constants";

const SocialLink = ({ href, icon: Icon, label, description }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 px-5 py-4 rounded-xl border border-gray-800 bg-gray-900/40 hover:border-sky-500/50 hover:bg-gray-900/70 transition-all duration-200"
    >
        <div className="shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gray-800 group-hover:bg-sky-500/10 group-hover:text-sky-400 text-gray-400 transition-all duration-200">
            <Icon className="h-5 w-5" />
        </div>
        <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-200 group-hover:text-sky-400 transition-colors duration-200">{label}</span>
            <span className="text-xs text-gray-500">{description}</span>
        </div>
        <span className="ml-auto text-gray-600 group-hover:text-sky-400 transition-colors duration-200 text-lg">↗</span>
    </a>
);

const SOCIALS = [
    { href: linkedInProfile, icon: BiLogoLinkedin, label: "LinkedIn", description: "linkedin.com/in/jayvee-ann-soriano" },
    { href: githubLink, icon: BiLogoGithub, label: "GitHub", description: "github.com/jayveeannsoriano" },
    { href: facebookProfile, icon: FaFacebookF, label: "Facebook", description: "facebook.com/jvannsoriano" },
    { href: bitbucketProfile, icon: IoLogoBitbucket, label: "Bitbucket", description: "bitbucket.org/jayveesoriano" },
];

const Contact = () => {
    return (
        <SectionContainer sectionName={"Contact"} id={'contact'}>
            <div data-aos="fade-up" className="flex flex-col items-center gap-3 text-center">
                <p className="text-sm text-gray-400 w-full max-w-2xl">
                    Have a project in mind, a role to fill, or just want to connect? I'd love to hear from you.
                </p>
                <a
                    href="mailto:sjayveeann@gmail.com"
                    className="inline-flex items-center gap-2 mt-1 font-semibold text-2xl md:text-3xl text-white underline decoration-sky-500 underline-offset-4 hover:text-sky-400 transition-colors duration-200"
                >
                    <MdEmail className="h-7 w-7 shrink-0 text-sky-500" />
                    sjayveeann@gmail.com
                </a>
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-3">
                <p className="text-xs text-gray-500 font-mono uppercase tracking-widest text-center">{'// find me elsewhere'}</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {SOCIALS.map((s) => (
                        <SocialLink key={s.label} {...s} />
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default Contact;
