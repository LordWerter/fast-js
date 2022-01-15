import Section from "./Section";
import Slider from "./Slider";
import Header from "./Header";
import Welcome from "./Welcome";
import App from "./App";
import Contacts from "./Contacts";
import Footer from "./Footer";

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
   App,
   Contacts,
   Footer,
   Header,
   Section,
   Slider,
   Welcome,
};

export default allContainers;
