import React from "react";
import SectionContainer from "../components/SectionContainer";
import profileImg from "../assets/profile.jpg";

const AboutMe = () => {
  return (
    <SectionContainer id="about" sectionName={"About Me"}>
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
          <p className="text-wrap text-gray-400 text-sm font-light md:text-base">
            I'm a frontend developer with a background in application support engineering. In my day job at Wipro, I handle production incidents for Texas Instruments — which means I've learned to read systems under pressure, trace failures, and communicate clearly across teams. That operational lens has changed how I write code: I think about what breaks, what's unclear, and what the next person maintaining it will need.
          </p>
          <p className="text-wrap text-gray-400 text-sm font-light md:text-base">
            Alongside that, I design and build interfaces — currently for a legal services client using Next.js and Tailwind CSS. I've always been drawn to the craft of the UI: the kind of work where a well-placed transition or a thoughtful form layout genuinely changes how a user feels about a product. I started as "the UI person" in university group projects, and that instinct has only gotten more deliberate over time.
          </p>
          <p className="text-wrap text-gray-400 text-sm font-light md:text-base">
            I care about building things that hold up — in production, under edge cases, and for the real humans using them. If you're looking for someone who can own a feature end-to-end, think beyond the happy path, and write UI that's as thoughtful as it is functional, let's talk.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutMe;
