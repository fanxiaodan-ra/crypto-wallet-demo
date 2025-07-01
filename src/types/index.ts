export interface WalletItem {
  currency: string
  amount: number
}

export interface RateItem {
  from_currency: string
  to_currency: string
  rates: { amount: string; rate: string }[]
}

export interface CoinInfo {
  symbol: string
  name: string
  colorful_image_url: string
}
