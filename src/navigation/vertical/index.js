import store from '@/store'
// import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  // if (blockchains.length > 1) {
  //   chainMenus.push({ header: 'ecosystem' })
  //   chainMenus.push({
  //     title: 'blockchains',
  //     children: blockchains,
  //     tag: `${blockchains.length}`,
  //     icon: 'https://ping.pub/logo.svg',
  //   })
  // }
  chainMenus.push({ header: 'LINKS' })
  // if (isTestnet()) {
  //   chainMenus.push({
  //     title: 'Mainnet Explorer',
  //     href: 'https://ping.pub',
  //     icon: 'ChromeIcon',
  //   })
  // } else {
  //   chainMenus.push({
  //     title: 'Testnet Explorer',
  //     href: 'http://testnet.ping.pub',
  //     icon: 'LifeBuoyIcon',
  //   })
  // }
  chainMenus.push({
    title: 'Wallet',
    href: 'https://wallet.mun.money',
    icon: 'DollarSignIcon',
  })
  chainMenus.push({
    title: 'Faucet',
    href: 'https://faucet.mun.money',
    icon: 'DropletIcon',
  })
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/mun',
    icon: 'TwitterIcon',
  })
  // chainMenus.push({
  //   title: 'FAQ',
  //   href: 'https://github.com/ping-pub/explorer/discussions',
  //   icon: 'MessageSquareIcon',
  // })
  // chainMenus.push({
  //   title: 'Github',
  //   href: 'https://github.com/ping-pub/explorer',
  //   icon: 'GithubIcon',
  // })

  return chainMenus
}

export default processMenu()
