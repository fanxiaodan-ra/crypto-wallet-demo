import type { WalletItem, CoinInfo, RateItem } from '../types'
import { formatMoney } from '../utils/format'
import { getCoinInfo, getUsdRate } from '../utils/helpers'
import { AssetItem } from './AssetItem'

interface Props {
  wallet: WalletItem[]
  rates: RateItem[]
  coins: CoinInfo[]
}

export function WalletOverview({ wallet, rates, coins }: Props) {
  const totalValue = wallet.reduce((sum, item) => {
    const price = getUsdRate(item.currency, rates)
    return sum + item.amount * price
  }, 0)

  return (
    <div className="container">
      <h2>Total Assets</h2>
      <h1>
        <span className="dollar">$</span>
        {formatMoney(totalValue)}
        <span className="usd">USD</span>
      </h1>

      <div className="asset-list">
        {wallet.map((item) => {
          const coin = getCoinInfo(item.currency, coins)
          const price = getUsdRate(item.currency, rates)

          if (!coin || !price) return null // 跳过异常币种
          
          const value = item.amount * price

          return (
            <AssetItem
              key={item.currency}
              coin={coin}
              amount={item.amount}
              value={value}
              symbol={item.currency}
            />
          )
        })}
      </div>
    </div>
  )
}
