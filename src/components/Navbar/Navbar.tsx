import { NavItem } from "./NavItem";

export const Navbar = () => {
  return (
    <header
      className="fixed top-0 z-[2] w-full border-b-[1px] border-b-transparent p-2 duration-300"
    >
      <nav className="relative flex w-full items-center justify-end">
        <ul
          className="flex items-center justify-end gap-3 font-bold tracking-widest"
        >
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#contact">Contact</NavItem>
          <NavItem href="#">Download CV</NavItem>
        </ul>
      </nav>
    </header>
  );
};
