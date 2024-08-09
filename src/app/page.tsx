import Content from "@/sections/Content";
import Final from "@/sections/Final";
// import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Content2 from "@/sections/HeroA";
import Content3 from "@/sections/HeroB";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <Content />
        <Content2 />
        <Content3 />
        <Final />
        {/* <Footer /> */}
      </div>
    </>
  );
}
