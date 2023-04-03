import Customers from "@/components/customers-section";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import OurProducts from "@/components/products";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Excel LED Kenya</title>
        <meta
          name='description'
          content='We handle sales, assembly, and installation of LED screens and superiror sound systems in kenya'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <HeroSection />
        <OurProducts />
        <Customers />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
}
