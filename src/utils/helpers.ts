import { RateItem, CoinInfo } from '../types'

export const getUsdRate = (symbol: string, rates: RateItem[]): number => {
  const rateObj = rates.find((r) => r.from_currency === symbol && r.to_currency === 'USD')
  if (!rateObj) {
    console.warn(`Missing USD rate for ${symbol}`)
  }
  const rateStr = rateObj?.rates[0]?.rate ?? '0'
  return parseFloat(rateStr)
}

export const getCoinInfo = (symbol: string, coins: CoinInfo[]): CoinInfo | undefined => {
  return coins.find((c) => c.symbol === symbol)
}
