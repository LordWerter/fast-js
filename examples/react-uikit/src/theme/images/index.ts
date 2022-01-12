import imageSlides from "./imageSlides";
import logos from "./logos";

export type TAllImages =
   typeof logos
   & typeof imageSlides;

export const allImages: TAllImages = {
   ...logos,
   ...imageSlides,
};

export const {
   LOGOS__HEADER,
   IMG_SLIDE__1,
   IMG_SLIDE__2,
   IMG_SLIDE__3,
   IMG_SLIDE__4,
   IMG_SLIDE__5,
} = allImages;

export default allImages;