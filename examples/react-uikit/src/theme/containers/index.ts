/* eslint-disable import/no-anonymous-default-export */
import Section from "./Section";
import Slider from "./Slider";
import Header from "./Header";
import Welcome from "./Welcome";
import App from "./App";
import Contacts from "./Contacts";
import Footer from "./Footer";
import About from "./About";
import FAQ from "./FAQ";
import Gallery from "./Gallery";
import Promo from "./Promo";
import ImageSlider from "./ImageSlider";

export type TAllContainers = {
   App: typeof App;
   Contacts: typeof Contacts;
   Footer: typeof Footer;
   Header: typeof Header;
   Section: typeof Section;
   Slider: typeof Slider;
   Welcome: typeof Welcome;
};

export const allContainers: TAllContainers = {
   About,
   App,
   Contacts,
   FAQ,
   Footer,
   Gallery,
   Header,
   ImageSlider,
   Promo,
   Section,
   Slider,
   Welcome,
};

export default allContainers;
