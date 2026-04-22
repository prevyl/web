import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  SectionDivider,
} from "./_components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
