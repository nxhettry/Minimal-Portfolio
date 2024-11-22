import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React from "react";

interface SocialLinkType {
    href: string;
    icon: JSX.Element;
}

export const SocialLinks: SocialLinkType[] = [
  {
    href: "https://www.facebook.com/nxhettry/",
    icon: React.createElement(FaFacebook),
  },
  {
    href: "https://www.instagram.com/nis_san_ey/",
    icon: React.createElement(FaInstagram),
  },
  {
    href: "https://x.com/nishan_gtsn",
    icon: React.createElement(FaTwitter),
  },
  {
    href: "https://www.linkedin.com/in/nishan-gtsn-085442291/",
    icon: React.createElement(FaLinkedin),
  },
  {
    href: "https://github.com/nxhettry",
    icon: React.createElement(FaGithub),
  },
  {
    href: "mailto:nishan.gtsn@gmail.com",
    icon: React.createElement(MdEmail),
  },
];
