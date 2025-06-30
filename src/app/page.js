// nextjs components
import Image from "next/image";

// custom components
import Title from "@/components/typography/Title";
import Section from "@/components/Section";
import Headline from "@/components/Headline";
import SubHeading from "@/components/typography/SubHeading";

export default function Home() {
  return (
    <main>
      <Section>
        <Headline>
          <Title>Nurturing care for ages 18 months to 5 years</Title>
          <SubHeading>
            Discover a safe, playful, and enriching home daycare. Book a tour
            today and see why parents choose Bahay Kubo Early Learning Centre.
          </SubHeading>
        </Headline>
      </Section>
    </main>
  );
}
