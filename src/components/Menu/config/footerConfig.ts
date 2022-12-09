import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://www.facebook.com/profile.php?id=100087559189541',
        isHighlighted: true,
      },
      {
        label: t('Community'),
        href: 'https://www.instagram.com/bharatswap.finance/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://twitter.com/bharat_swap',
      },
      {
        label: t('Guides'),
        href: 'https://twitter.com/bharat_swap',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: "White Paper",
        href: "#",
      },
    ],
  },
]
