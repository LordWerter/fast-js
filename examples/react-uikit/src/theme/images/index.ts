import logos from "./logos";

export type TAllImages = typeof logos;

export const allImages:TAllImages = {
   ...logos,
};

export const {
   LOGOS__HEADER,
} = allImages;

export default allImages;