import { Contact, Footer, Header, Hero, Research, Work } from "./_components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Research />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
