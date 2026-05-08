import React from "react";
import SectionContainer from "../components/SectionContainer";
import profileImg from "../assets/profile.jpg";

const AboutMe = () => {
  return (
    <SectionContainer id="about" sectionName={"_about"}>
      <div
        data-aos="fade-up"
        className="mx-auto flex flex-col gap-4 md:flex-row md:gap-12"
      >
        <div className="md:w-1/2 p-2 flex justify-center">
          <img
            src={profileImg}
            className="rounded-xl w-[480px] shadow-lg"
            alt="profile-img"
          ></img>
        </div>
        <div className="flex flex-col gap-6 md:w-1/2 md:gap-5 md:self-center">
          <h1 className="font-bold text-center tracking-tighter text-sm md:text-lg md:text-left font-mono text-sky-400">
            const myNicknames = ['Jian', 'Jayvee', 'Jebeann'];
          </h1>
          <p className="text-wrap text-sm font-light md:text-base">
            Hi, I’m a front-end developer with a soft spot for good design and
            thoughtful user experiences. Back in uni, I naturally became
            the “UI person” in group projects; the one who sketched the
            screens, built the prototypes, and obsessed over whether a button
            felt right. I didn’t plan it that way, pero doon talaga ako laging
            napupunta, and I loved it. Even now, working full-time as an
            Application Support Engineer, that part of me never went away. I
            still find myself studying interfaces, getting lost in design
            articles, quietly judging government websites, and get overly curious about why some apps feel
            effortless while others… well, make life harder than it needs to be.
          </p>
          <p className="text-wrap text-sm font-light md:text-base">
            At the heart of it, I just want to create things that help people
            even in small, everyday ways. I believe good design isn’t just about
            looking clean or modern; it’s about empathy, clarity, and making
            things feel natural for the person using them.
          </p>
          <p className="text-wrap text-sm font-light md:text-base">
            I’m still early in my journey, but I’m intentional, genuinely
            curious, and always learning. Whether it’s designing a cleaner flow,
            refining tiny UI details, or figuring out why a button gives “wrong
            vibes,” I love making things that help people — one thoughtful
            interface at a time.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutMe;
