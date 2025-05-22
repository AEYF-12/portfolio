import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Main from "./components/Main";
import Contact from "./Contact/page";
import SkillsSection from "./components/Skill";

export default function Home() {
  return (
    <>
      {/* <div className="absolute inset-0 -z-10 h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>     */}
      <div className="fixed inset-0 -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
   
      <Navbar />
      <Main />
      <About />
      <SkillsSection />
      <Contact />
      <Footer />
    </>
  );
}
