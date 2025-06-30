// nextjs components
import Image from "next/image";
import Link from "next/link";

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
import ProgramCard from "@/components/ProgramCard";
import MiniFeatureCard from "@/components/MiniFeatureCard";

const programList = [
  {
    image: {
      src: "/images/free active play.png",
      alt: "free active play daycare",
    },
    title: "Free active play",
    description:
      "Children enjoy open-ended playtime that builds confidence, coordination, and motor skills through movement and discovery.",
  },
  {
    image: {
      src: "/images/indoor activities.png",
      alt: "Indoor activities daycare",
    },
    title: "Indoor activities",
    description:
      "Engaging indoor play like reading, puzzles, and building blocks encourages creativity, focus, and imaginative thinking in a calm, cozy environment.",
  },
  {
    image: {
      src: "/images/outdoor activities.png",
      alt: "Outdoor activities daycare",
    },
    title: "Outdoor activities",
    description:
      "Outdoor adventures like running, climbing, and sandbox play help children stay active, explore nature, and develop physical strength.",
  },
];

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
              <Link href="/booking" className="inline-block">
                <PrimaryButton>Book a tour</PrimaryButton>
              </Link>
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
                <Heading>A home where little learners grow</Heading>
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
              <Link href="/about" className="inline-block">
                <SecondaryButton>Learn more</SecondaryButton>
              </Link>
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

      {/* Program & daily schedule section */}
      <Section>
        <Wrapper>
          <div className="space-y-16">
            <div className="flex justify-between">
              <Headline>
                <Heading>Our program & daily schedule</Heading>
              </Headline>

              <div>
                <SubHeading>
                  We&apos;re open Monday to Friday from 8:00 AM to 5:00 PM.
                  Offering full-day learning, play, and discovery in a warm home
                  environment.
                </SubHeading>

                {/* CTA that navigates to a detailed program page */}
                <Link href="/program" className="inline-block">
                  <SecondaryButton>Learn more</SecondaryButton>
                </Link>
              </div>
            </div>

            {/* Image of a daycare */}
            <div className="flex gap-6">
              {programList.map(({ image, title, description }) => {
                return (
                  <ProgramCard
                    key={title}
                    image={image}
                    title={title}
                    description={description}
                  />
                );
              })}
            </div>
          </div>
        </Wrapper>
      </Section>

      {/* About us section */}
      <Section className="bg-tertiary">
        <Wrapper>
          <div className="flex gap-16 items-center">
            <div className="w-full">
              <Headline>
                <SectionLabel>Health and nutrition</SectionLabel>
                <Heading>Healthy choices is my top priority</Heading>
              </Headline>

              <SectionBody>
                <Paragraph>
                  I believe healthy eating is essential to every child&apos;s
                  growth and learning. That&apos;s why I prepare and serve
                  nutritious meals and snacks onsite—with a focus on variety,
                  balance, and quality.
                </Paragraph>

                {/* Feature list */}
                <div className="space-y-4">
                  <MiniFeatureCard
                    image={{
                      src: "/images/apple.png",
                      alt: "Milk",
                    }}
                    description="Healthy breakfast, lunch, and afternoon snack."
                  />
                  <MiniFeatureCard
                    image={{
                      src: "/images/milk.png",
                      alt: "Milk",
                    }}
                    description="Organic milk with breakfast and snack, and water during lunch."
                  />
                  <MiniFeatureCard
                    image={{
                      src: "/images/hotfood.png",
                      alt: "Hot food",
                    }}
                    description="A two-week rotating menu with occasional new recipes for variety."
                  />
                </div>
              </SectionBody>

              {/* CTA that navigates to a detailed about page */}
              <Link href="/about" className="inline-block">
                <SecondaryButton>Learn more</SecondaryButton>
              </Link>
            </div>

            {/* Image of a daycare */}
            <div className="w-full space-y-4">
              <div>
                <Image
                  src="/images/food 3.png"
                  width={656}
                  height={304}
                  alt="bahay kubo daycare food 3"
                  className="w-full"
                />
              </div>

              <div className="flex gap-4">
                <div>
                  <Image
                    src="/images/food 1.png"
                    width={656}
                    height={304}
                    alt="bahay kubo daycare food 3"
                  />
                </div>
                <div>
                  <Image
                    src="/images/food 2.png"
                    width={656}
                    height={304}
                    alt="bahay kubo daycare food 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </Section>
    </main>
  );
}
