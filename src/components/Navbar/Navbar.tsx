import { AnimatedNeonLink } from "@components/AnimatedNeonLink";

export const Navbar = () => {
  return (
    <header className="fixed top-0 z-[2] w-full border-b-[1px] border-b-transparent p-2 duration-300">
      <nav className="relative flex w-full items-center justify-end">
        <ul className="flex items-center justify-end gap-3 font-bold tracking-widest text-white">
          <AnimatedNeonLink href="#home">Home</AnimatedNeonLink>
          <AnimatedNeonLink href="#projects">Projects</AnimatedNeonLink>
          <AnimatedNeonLink href="#about">About</AnimatedNeonLink>
          <AnimatedNeonLink href="#contact">Contact</AnimatedNeonLink>
          <AnimatedNeonLink>CV</AnimatedNeonLink>
        </ul>
      </nav>
    </header>
  );
};
