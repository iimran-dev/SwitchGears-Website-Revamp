import { Hero } from "@/components/site/hero";
import { TrustWall } from "@/components/site/trust-wall";
import { BrandStory } from "@/components/site/brand-story";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { ProductsExperience } from "@/components/site/products-experience";
import { Industries } from "@/components/site/industries";
import { PanelConfigurator } from "@/components/site/panel-configurator";
import { FeaturedProjects } from "@/components/site/featured-projects";
import { ManufacturingExcellence } from "@/components/site/manufacturing-excellence";
import { Certifications } from "@/components/site/certifications";
import { KnowledgeCentre } from "@/components/site/knowledge-centre";
import { Testimonials } from "@/components/site/testimonials";
import { ProjectCTA } from "@/components/site/project-cta";
import { ContactExperience } from "@/components/site/contact-experience";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* 01 */}
      <Hero />
      {/* 02 */}
      <TrustWall />
      {/* 03 */}
      <BrandStory />
      {/* 04 */}
      <WhyChooseUs />
      {/* 05 */}
      <ProductsExperience />
      {/* 06 */}
      <Industries />
      {/* 07 */}
      <PanelConfigurator />
      {/* 08 */}
      <FeaturedProjects />
      {/* 09 */}
      <ManufacturingExcellence />
      {/* 10 */}
      <Certifications />
      {/* 11 */}
      <KnowledgeCentre />
      {/* 12 */}
      <Testimonials />
      {/* 13 */}
      <ProjectCTA />
      {/* 14 */}
      <ContactExperience />
      {/* 15 */}
      <Footer />
    </main>
  );
}
