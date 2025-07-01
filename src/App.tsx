import './App.css'
import walletData from './data/wallet-balance.json'
import ratesData from './data/live-rates.json'
import currenciesData from './data/currencies.json'
import { WalletOverview } from './components/WalletOverview'

function App() {
  return (
    <WalletOverview
      wallet={walletData.wallet}
      rates={ratesData.tiers}
      coins={currenciesData.currencies}
    />
  )
}

export default App
