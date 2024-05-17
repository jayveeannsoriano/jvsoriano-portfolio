import React from "react";
import SectionContainer from "../components/SectionContainer";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoBitbucket } from "react-icons/io";
import { LinkPill } from "../components/LinkPill";
import { bitbukcetProfile, facebookProfile, githubLink, linkedInProfile } from "../constants";

const Contact = () => {
    return (
        <SectionContainer sectionName={"_contact"} id={'contact'}>
            <div data-aos="fade-up">
                <h2 className="text-sm text-center md:text-base">
                    What's that? You want to see more? (✿◠‿◠) Then let's talk for a
                    project! I'm looking forward to offer you my services. Please don't
                    hesitate to get in touch.
                </h2>
                <br />
                <div className="flex flex-row gap-3 items-center justify-center">
                    <MdEmail className="text-white text-center h-5 w-5 md:h-10 md:w-10" />
                    <p className="font-bold text-xl underline decoration-sky-500 md:text-4xl">sjayveeann@gmail.com</p>
                </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-3">
                <h2 className="text-sm text-center md:text-sm">
                    You may also find me on these platforms:
                </h2>
                <div className="flex flex-col justify-center gap-3 md:flex-row">
                    <LinkPill logo={AiFillLinkedin} link={linkedInProfile} label={"LinkedIn"} />
                    <LinkPill logo={FaFacebookSquare} link={facebookProfile} label={"Facebook"} />
                    <LinkPill logo={FaSquareGithub} link={githubLink} label={"GitHub"} />
                    <LinkPill logo={IoLogoBitbucket} link={bitbukcetProfile} label={"Bitbucket"} />
                </div>
            </div>
        </SectionContainer>
    );
};

export default Contact;
