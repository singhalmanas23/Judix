import Content from "@/components/Content";
import Final from "@/components/Final";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Content2 from "@/components/HeroA";
import Content3 from "@/components/HeroB";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <Content />
        <Content2 />
        <Content3 />
        <Final/>
        <Footer/>
      </div>
    </>
  );
}
