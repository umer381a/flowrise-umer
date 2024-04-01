import Bounded from "@/app/components/Bounded";
import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";

const components: JSXMapSerializer = {
  heading1: ({children})=>(
    <Heading as="h1" size="xl" className="md:mb-8 mb-4 mt-12 fisrt:mt-o last:mb-0">
      {children}
    </Heading>
    ),
  paragraph : ({children}) => (
    <p className="text-2xl text-center font-normal leading-10 font-body text-slate-600 mb-4 md:mb-8 max-w-md">{children}</p>
  )
}

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
        <div className="grid grid-cols-1 place-items-center text-center">
      <PrismicRichText field={slice.primary.heading}
        components={components}/>
      <PrismicRichText field={slice.primary.body} components={components}/>
      <Button field={slice.primary.button_link} className="mb-8 md:mb-10">
        {slice.primary.button_label}
      </Button>
      <PrismicNextImage field={slice.primary.hero_image} className="drop-shadow-xl max-w-4xl w-full"/>
        </div>
    </Bounded>
  );
};

export default Hero;
