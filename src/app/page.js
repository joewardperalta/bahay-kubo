// nextjs components
import Image from "next/image";

// custom components
import Title from "@/components/typography/Title";
import Section from "@/components/Section";
import Headline from "@/components/Headline";
import SubHeading from "@/components/typography/SubHeading";
import Wrapper from "@/components/Wrapper";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Heading from "@/components/typography/Heading";
import SectionBody from "@/components/SectionBody";
import Paragraph from "@/components/typography/Paragraph";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import SectionLabel from "@/components/typography/SectionLabel";

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <Section>
        <Wrapper>
          <div className="relative">
            <Headline>
              <Title>Nurturing care for ages 18 months to 5 years</Title>
              <SubHeading>
                Discover a safe, playful, and enriching home daycare. Book a
                tour today and see why parents choose Bahay Kubo Early Learning
                Centre.
              </SubHeading>
            </Headline>

            {/* CTA button for booking */}
            <div>
              <PrimaryButton>Book a tour</PrimaryButton>
            </div>

            {/* Graphic images for design */}
            <div className="absolute w-1/2 h-full right-0 top-0 -z-10">
              <Image
                src="/images/map.png"
                width={200}
                height={200}
                alt="map"
                className="absolute right-[50%]"
              />
              <Image
                src="/images/brain.png"
                width={200}
                height={200}
                alt="map"
                className="absolute right-[0]"
              />
              <Image
                src="/images/books.png"
                width={200}
                height={200}
                alt="map"
                className="absolute right-[30%] bottom-0"
              />
            </div>
          </div>
        </Wrapper>
      </Section>

      {/* About us section */}
      <Section className="bg-tertiary">
        <Wrapper>
          <div className="flex gap-16 items-center">
            <div>
              <Headline>
                <SectionLabel>About us</SectionLabel>
                <Heading>Healthy choices is my top priority</Heading>
              </Headline>

              <SectionBody>
                <Paragraph>
                  Bahay Kubo Early Learning Centre is a warm, home-based daycare
                  in Hamilton, Ontario, welcoming children aged 18 months to 5
                  years. We provide a safe, nurturing environment where kids can
                  play, learn, and thrive through structured routines, engaging
                  activities, and caring guidance.
                </Paragraph>
              </SectionBody>

              {/* CTA that navigates to a detailed about page */}
              <SecondaryButton>Learn more</SecondaryButton>
            </div>

            {/* Image of a daycare */}
            <div>
              <Image
                src="/images/bahay kubo daycare photo 1.png"
                width={656}
                height={732}
                alt="Bahay kubo daycare photo of a child writing on a notebook"
                className="w-full h-full"
              />
            </div>
          </div>
        </Wrapper>
      </Section>
    </main>
  );
}
