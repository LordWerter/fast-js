import imageSlides from "./imageSlides";
import logos from "./logos";
import arrows from './arrows';

export type TAllImages =
   typeof logos
   & typeof imageSlides 
   & typeof arrows;

export const allImages: TAllImages = {
   ...logos,
   ...imageSlides,
   ...arrows,
};

export const {
   LOGOS__HEADER,
   SLIDE_1,
   SLIDE_2,
   SLIDE_3,
   SLIDE_4,
   SLIDE_5,
   LEFT_ARROW,
   RIGHT_ARROW,
} = allImages;

export default allImages;