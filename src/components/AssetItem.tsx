import { CoinInfo } from '../types'
import { formatMoney } from '../utils/format'

interface Props {
  coin?: CoinInfo
  amount: number
  value: number
  symbol: string
}

export function AssetItem({ coin, amount, value, symbol }: Props) {
  return (
    <div className="asset-item">
      <div className="left">
        {coin?.colorful_image_url && (
          <img
            src={coin?.colorful_image_url}
            alt={symbol}
            width="32"
            height="32"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/fallback-icon.png'
            }}
          />
        )}
        <div className="name">{coin?.name ?? symbol}</div>
      </div>
      <div className="right">
        <div className="amount">{amount} {symbol}</div>
        <div className="value">${formatMoney(value)}</div>
      </div>
    </div>
  )
}
