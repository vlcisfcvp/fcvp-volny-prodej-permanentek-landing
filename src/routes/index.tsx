import { createFileRoute } from "@tanstack/react-router";
import { FilmGrain } from "@/components/layout/FilmGrain";
import { HeroS01 } from "@/components/sections/HeroS01";
import { IntroS02 } from "@/components/sections/IntroS02";
import { BenefitsS03 } from "@/components/sections/BenefitsS03";
import { PartnersS04 } from "@/components/sections/PartnersS04";

import { VideoS06 } from "@/components/sections/VideoS06";

import { CardFlipS08 } from "@/components/sections/CardFlipS08";
import { PricingS09 } from "@/components/sections/PricingS09";
import { HowToBuyS10 } from "@/components/sections/HowToBuyS10";
import { PriceTableS11 } from "@/components/sections/PriceTableS11";
import { FaqS12 } from "@/components/sections/FaqS12";
import { FinalCtaS13 } from "@/components/sections/FinalCtaS13";
import { FooterS14 } from "@/components/sections/FooterS14";
import { StickyCtaBar } from "@/components/ui/StickyCtaBar";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  return (
    <main className="bg-bg-base text-text-primary">
      <FilmGrain />
      <HeroS01 />
      <IntroS02 />
      <BenefitsS03 />
      <VideoS06 />
      <HowToBuyS10 />
      
      <CardFlipS08 />
      <PricingS09 />
      <PriceTableS11 />
      <PartnersS04 />
      <FaqS12 />

      <FinalCtaS13 />
      <FooterS14 />
      <StickyCtaBar />
    </main>
  );
}
