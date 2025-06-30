// nextjs components
import Image from "next/image";

// custom components
import Title from "@/components/typography/Title";
import Section from "@/components/Section";
import Headline from "@/components/Headline";
import SubHeading from "@/components/typography/SubHeading";
import Wrapper from "@/components/Wrapper";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
