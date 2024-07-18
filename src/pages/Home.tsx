import { AnimatedButton, Button, GradientButton } from "@components/Button";
import { SectionWrapper } from "@components/Section";

export const Home = () => {
  return (
    <SectionWrapper
      id="home"
      className="bg-[url(/bg.webp)]"
      innerClassName="gap-8"
    >
      <div className="flex max-w-4xl flex-col items-start justify-center gap-3 rounded-xl border-4 border-black bg-black2 bg-opacity-70 p-12">
        <h1 className="text-6xl font-bold tracking-[0.5rem]">Rodrigo Vila</h1>
        <h2 className="text-4xl font-semibold">
          Fullstack Blockchain Developer
        </h2>
        <p className="text-xl">
          With four years as a frontend React developer, I’ve spent the last
          couple of years diving deep into blockchain technology. I’ve built a
          solid foundation in dApp development...
        </p>
      </div>
      <GradientButton className="w-max rounded-none font-bold">
        <a href="#projects">See Projects</a>
      </GradientButton>
    </SectionWrapper>
  );
};
