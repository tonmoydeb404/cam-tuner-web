import {
  FaBolt,
  FaCrop,
  FaImage,
  FaSearchPlus,
  FaSyncAlt,
  FaVideo,
} from "react-icons/fa";

export const websiteDetails = {
  title: "CamTuner",
  description: "Customize Your Webcam",
  github: "https://github.com/tonmoydeb404/cam-tuner",
};

export type WebsiteLink = {
  title: string;
  href: string;
  target?: "_blank";
};
export const websiteLinks: WebsiteLink[] = [
  { title: "Features", href: "/#features" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Developer", href: "https://tonmoydeb.com", target: "_blank" },
];

export const websiteFeatures = [
  {
    title: "Zoom Control",
    description:
      "Smoothly zoom your webcam feed in or out for the perfect framing.",
    icon: FaSearchPlus,
  },
  {
    title: "Mirror Mode",
    description:
      "Flip your webcam horizontally with one click for a natural mirror effect.",
    icon: FaSyncAlt,
  },
  {
    title: "Aspect Ratio Adjustment",
    description:
      "Change the aspect ratio to best fit your needs — 16:9, 4:3, or custom.",
    icon: FaCrop,
  },
  {
    title: "Camera Selection",
    description:
      "Easily switch between multiple connected webcams from your browser.",
    icon: FaVideo,
  },
  {
    title: "Overlay Support",
    description:
      "Add custom overlays like graphics, logos, or effects on top of your video feed.",
    icon: FaImage,
  },
  {
    title: "Real-Time Preview",
    description:
      "See changes instantly as you adjust settings with a live preview window.",
    icon: FaBolt,
  },
];
