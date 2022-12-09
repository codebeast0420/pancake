import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, LinkedinIcon, DiscordIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://www.facebook.com/profile.php?id=100087559189541",
      },
      {
        label: "Community",
        href: "https://www.instagram.com/bharatswap.finance/",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://twitter.com/bharat_swap",
      },
      {
        label: "Guides",
        href: "https://twitter.com/bharat_swap",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "White Paper",
        href: "#",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/bharat_swap",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/",
      },
    ],

  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "#/",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/bharatswap.finance/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "#",
  },
  {
    label: "Linkedin",
    icon: LinkedinIcon,
    href: "#",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
