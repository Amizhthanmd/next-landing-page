import { AboutPage } from "@/components/about-page";
import ContactPage from "@/components/contact-page";
import HomePage from "@/components/home-page";
import { MainNav } from "@/components/main-nav";
import { ServicesPage } from "@/components/service-page";

export default function Page() {
  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="container px-4 md:px-6 py-6 space-y-16 mx-auto">
        {/* Welcome Section */}
        <section id="home" className="space-y-4 pt-20">
          <HomePage />
        </section>

        {/* About Section */}
        <section id="about" className="space-y-4 pt-20 ">
          <AboutPage />
        </section>

        {/* Services Section */}
        <section id="services" className="space-y-4 pt-20">
          <ServicesPage />
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-4 pt-20">
          <ContactPage />
        </section>
      </main>
    </div>
  );
}
