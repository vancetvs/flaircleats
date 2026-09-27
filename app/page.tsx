import { HeroNew } from '@/components/hero-new';
import { PriceInfoNew } from '@/components/price-info-new';
import { FeaturedBoots } from '@/components/featured-boots';
import { SocialProofNew } from '@/components/social-proof-new';
import { FinalCTANew } from '@/components/final-cta-new';
import { FooterNew } from '@/components/footer-new';
import { StickyInstagramButtonNew } from '@/components/sticky-instagram-button-new';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <HeroNew />
      <PriceInfoNew />
      <FeaturedBoots />
      <SocialProofNew />
      <FinalCTANew />
      <FooterNew />
      <StickyInstagramButtonNew />
    </div>
  );
}
