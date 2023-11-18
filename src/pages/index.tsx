import Customers from "@/components/customers-section";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import OurProducts from "@/components/products";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kenya LED Screen Company</title>
        <meta
          name='description'
          content='We handle sales, assembly, and installation of LED screens and superiror sound systems in kenya'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        {/* Google Analytics */}
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-9S1NYYTW2F'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9S1NYYTW2F');
          `,
          }}
        />
        {/* End Google Analytics */}
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
