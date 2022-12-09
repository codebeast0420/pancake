import {
  MenuItemsType,
  SwapIcon,
  SwapFillIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t'], languageCode?: string) => ConfigMenuItemsType[] = (t, languageCode) => [
  {
    label: t('Swap'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    showItemsOnMobile: false,
    items: [
    ],
  },
  {
    label: t('Limit'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/limit-orders',
    showItemsOnMobile: false,
    items: [
    ],
  },
  {
    label: t('Liquidity'),
    icon: SwapIcon,
    fillIcon: SwapFillIcon,
    href: '/liquidity',
    showItemsOnMobile: false,
    items: [
    ],
  },
]

export default config
