import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://maticswap.io',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://maticswap.io/#/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://maticswap.io/#/pools',
  },
  {
    label: 'Bush',
    icon: 'BushIcon',
    href: 'https://maticswap.io/#/bush',
  },
  // {
  //   label: 'Certik Audit (In-Progress)',
  //   icon: 'ShieldIcon', // ShieldIcon
  //   href: 'https://twitter.com/maticswap/status/1367218225310818308',
  //   target: '_blank',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x476f2a6abCCdaD8D292A181C578b16E29bC1F7A8',
        target: '_blank',
      },
      {
        label: 'Token',
        href: 'https://doc.maticswap.io/tokennomics/maticswap-token',
        target: '_blank',
      },
      {
        label: 'Contracts',
        href: 'https://doc.maticswap.io/security/contracts',
        target: '_blank',
      },
      {
        label: 'Transparency',
        href: 'https://doc.maticswap.io/transparency/transparency',
        target: '_blank',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/maticswaptoken',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/maticswaptoken/',
      // },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/maticswap-binance',
        target: '_blank',
      },
      {
        label: 'Docs',
        href: 'https://doc.maticswap.io/',
        target: '_blank',
      },
      {
        label: 'Blog',
        href: 'https://maticswap.medium.com/',
        target: '_blank',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/maticswap',
        target: '_blank',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/maticswapfinancechat',
        target: '_blank',
      },
    ],
  },
]

export default config
