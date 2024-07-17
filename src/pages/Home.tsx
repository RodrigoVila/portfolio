import { SectionWrapper } from "@components/Section";

export const Home = () => {
  return (
    <SectionWrapper id="home" className="bg-[url(/bg.webp)]">
      <div className="absolute inset-0 z-[1] flex items-center justify-center bg-black bg-opacity-30">
        Home
      </div>
    </SectionWrapper>
  );
};
