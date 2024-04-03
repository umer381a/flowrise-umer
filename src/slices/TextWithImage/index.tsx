import Bounded from "@/app/components/Bounded";
import Heading from "@/app/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

const components: JSXMapSerializer = {
  heading2: ({children})=>(
    <Heading as="h2" size="lg" className="">
      {children}
    </Heading>
    ),
  paragraph : ({children}) => (
    <p className="max-w-md text-lg font-body text-slate-600">{children}</p>
  )
}

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-8 md:grid-cols-2 place-items-center">
        <PrismicNextImage className={clsx("rounded-lg",
        slice.variation === "imageRight" && "md:order-2")}
        field={slice.primary.image} />

        <div className="grid gap-4">
          <PrismicRichText components={components} field={slice.primary.heading} />
          <PrismicRichText components={components} field={slice.primary.body} />
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
