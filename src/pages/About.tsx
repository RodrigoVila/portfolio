import { SectionTitle, SectionWrapper } from "@components/Section";

export const About = () => {
  return (
    <SectionWrapper id="about" className="bg-blue-300">
      <SectionTitle>About Me</SectionTitle>
      <p className="mt-8 max-w-6xl px-4 text-center text-lg leading-7 tracking-wide text-white md:px-8 md:text-3xl md:leading-[3rem]">
        With four years as a frontend React developer, I’ve spent the last
        couple of years diving deep into blockchain technology. I’ve built a
        solid foundation in dApp development with Solidity and tools like
        Hardhat, Ganache, and Web3.js, which integrate with my love for creating
        intuitive user interfaces. I’m genuinely excited about stepping into
        this industry, connecting with like-minded people, and building
        solutions together that will change how we interact with the world.
      </p>
    </SectionWrapper>
  );
};
