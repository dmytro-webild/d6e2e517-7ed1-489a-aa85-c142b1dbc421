"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Features",          id: "features"},
        {
          name: "Status",          id: "status"},
      ]}
      brandName="taxable.tax"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Taxable.tax"
      description="Tax like a spreadsheet. File like a pro. The only UK tax app that feels like Excel—with HMRC rules built in, live tax savings, and one-click SA103 filing."
      buttons={[
        {
          text: "Notify me →",          href: "#"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVXDCCDOawS5wc0YHuVbRdxVcF/a-high-fidelity-minimalist-dark-mode-spr-1774575762388-e6633380.png"
    />
  </div>

  <div id="status" data-section="status">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "q1",          value: "Fulfilled",          title: "Q1",          description: "Apr–Jul",          icon: CheckCircle,
        },
        {
          id: "q2",          value: "Submitted",          title: "Q2",          description: "Jul–Oct",          icon: CheckCircle,
        },
        {
          id: "q3",          value: "Open",          title: "Q3",          description: "Oct–Jan",          icon: AlertTriangle,
        },
        {
          id: "q4",          value: "Pending",          title: "Q4",          description: "Jan–Apr",          icon: Clock,
        },
      ]}
      title="Quarterly Status"
      description="Keep track of your obligations in real-time."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="blur-reveal"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "Spreadsheet UI",          description: "Familiar rows and columns. No onboarding required.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVXDCCDOawS5wc0YHuVbRdxVcF/a-clean-modern-warning-symbol-for-tax-co-1774575762093-f6cd6ff4.png?_wi=1"},
        {
          id: 2,
          title: "Live Tax Impact",          description: "See savings as you type. HMRC rules built in.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVXDCCDOawS5wc0YHuVbRdxVcF/a-clean-modern-warning-symbol-for-tax-co-1774575762093-f6cd6ff4.png?_wi=2"},
        {
          id: 3,
          title: "One-click HMRC Filing",          description: "SA103 direct to HMRC via MTD API.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVXDCCDOawS5wc0YHuVbRdxVcF/a-clean-modern-warning-symbol-for-tax-co-1774575762093-f6cd6ff4.png?_wi=3"},
        {
          id: 4,
          title: "MTD Ready",          description: "Mandatory from April 2026 for high earners.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVXDCCDOawS5wc0YHuVbRdxVcF/a-clean-modern-warning-symbol-for-tax-co-1774575762093-f6cd6ff4.png?_wi=4"},
        {
          id: 5,
          title: "Year-round Estimates",          description: "Tax bill updates live, no January shock.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVXDCCDOawS5wc0YHuVbRdxVcF/a-clean-modern-warning-symbol-for-tax-co-1774575762093-f6cd6ff4.png?_wi=5"},
        {
          id: 6,
          title: "Freelancer Focused",          description: "Not accounting software. Tax software.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVXDCCDOawS5wc0YHuVbRdxVcF/a-clean-modern-warning-symbol-for-tax-co-1774575762093-f6cd6ff4.png?_wi=6"},
      ]}
      title="Key Capabilities"
      description="Designed for sole traders who value efficiency and transparency."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Product",          items: [
            {
              label: "Features",              href: "#"},
            {
              label: "MTD Compliance",              href: "#"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About",              href: "#"},
            {
              label: "Contact",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy",              href: "#"},
            {
              label: "Terms",              href: "#"},
          ],
        },
      ]}
      logoText="taxable.tax"
      copyrightText="© 2025 taxable.tax · UK self-assessment"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
