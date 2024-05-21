import React from "react";
import SectionContainer from "../components/SectionContainer";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoBitbucket } from "react-icons/io";
import { Button, Flowbite } from "flowbite-react";
import { bitbucketProfile, facebookProfile, githubLink, linkedInProfile } from "../constants";
import { customButtonTheme } from "../themes/ButtonTheme";

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
                <div className="flex flex-row gap-3 items-center justify-center text-white">
                    <MdEmail className="text-center h-5 w-5 md:h-10 md:w-10" />
                    <a href="mailto:sjayveeann@gmail.com" className="font-bold text-2xl underline decoration-sky-500 md:text-4xl">
                        sjayveeann@gmail.com
                    </a>
                </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-3">
                <h2 className="text-sm text-center md:text-sm">
                    You may also find me on these platforms:
                </h2>
                <div className="flex flex-col justify-center gap-3 md:flex-row">
                    <Flowbite theme={{theme: customButtonTheme}}>
                        <Button pill color="primary" href={linkedInProfile} target="_blank">
                            <AiFillLinkedin className="mr-2 h-5 w-5" />
                            LinkedIn
                        </Button>
                        <Button pill color="primary" href={facebookProfile} target="_blank">
                            <FaFacebookSquare className="mr-2 h-5 w-5" />
                            Facebook
                        </Button>
                        <Button pill color="primary" href={githubLink} target="_blank">
                            <FaSquareGithub className="mr-2 h-5 w-5" />
                            GitHub
                        </Button>
                        <Button pill color="primary" href={bitbucketProfile} target="_blank">
                            <IoLogoBitbucket className="mr-2 h-5 w-5" />
                            Bitbucket
                        </Button>
                    </Flowbite>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Contact;
