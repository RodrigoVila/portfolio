import { About } from "@pages/About";
import { Contact } from "@pages/Contact";
import { Home } from "@pages/Home";
import { Projects } from "@pages/Projects";

import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";



const App = () => {
  return (
        <main className="h-full min-h-screen w-full">
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>
  );
};

export default App;
