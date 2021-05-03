import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://cfutureswap.io',
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
    href: 'https://cfutureswap.io/#/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://cfutureswap.io/#/pools',
  },
  {
    label: 'Bush',
    icon: 'BushIcon',
    href: 'https://cfutureswap.io/#/bush',
  },
  // {
  //   label: 'Certik Audit (In-Progress)',
  //   icon: 'ShieldIcon', // ShieldIcon
  //   href: 'https://twitter.com/CFuture/status/1367218225310818308',
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
        href: 'https://doc.cfutureswap.io/tokennomics/cfuture-token',
        target: '_blank',
      },
      {
        label: 'Contracts',
        href: 'https://doc.cfutureswap.io/security/contracts',
        target: '_blank',
      },
      {
        label: 'Transparency',
        href: 'https://doc.cfutureswap.io/transparency/transparency',
        target: '_blank',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/cfuturetoken',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/cfuturetoken/',
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
        href: 'https://github.com/cfuture-binance',
        target: '_blank',
      },
      {
        label: 'Docs',
        href: 'https://doc.cfutureswap.io/',
        target: '_blank',
      },
      {
        label: 'Blog',
        href: 'https://cfuture.medium.com/',
        target: '_blank',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/cfuture',
        target: '_blank',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/cfuturefinancechat',
        target: '_blank',
      },
    ],
  },
]

export default config
