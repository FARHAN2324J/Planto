import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

interface ScrollOptions {
  duration?: number;
  ease?: string;
  offset?: number;
}

export const scrollToSection = (
  sectionId: string,
  options: ScrollOptions = {}
): void => {
  const { duration = 0.5, ease = "ease", offset = 0 } = options;
  const section = document.getElementById(sectionId);

  if (section) {
    gsap.to(window, {
      duration,
      scrollTo: {
        y: section,
        offsetY: offset,
      },
      ease,
    });
  }
};