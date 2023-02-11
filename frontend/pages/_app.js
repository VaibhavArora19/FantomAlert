import '@/styles/globals.css'
import AppWrapper from '@/context/DataContext'
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { fantomTestnet } from "wagmi/chains";

const chains = [fantomTestnet];

const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "d97759a0137c337623598367f8cc3a21" }),
]);

const wagmiClient = createClient({
  autoConnect: true,
    connectors:modalConnectors({
      projectId: "d97759a0137c337623598367f8cc3a21",
      version:"2",
      appName: "Fantom Alert",
      chains
    }),
    provider
});

const ethereumClient = new EthereumClient(wagmiClient, chains)

export default function App({ Component, pageProps }) {
  return (
      <>
        <WagmiConfig client={wagmiClient}>
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </WagmiConfig>
        <Web3Modal
        projectId="d97759a0137c337623598367f8cc3a21"
        ethereumClient={ethereumClient}
        />
      </>
    )
}
