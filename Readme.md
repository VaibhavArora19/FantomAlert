<h1 align="center">Fantom Alert 🔔</h1>

Fantom Alert brings push notification to Fantom blockchain which was not possible before. Developers can integrate Fantom Alert smart contract directly into their smart contract and start sending notification with the help of Fantom Alert.

<br/>

### Smart Contract

Fantom Alert smart contract is deployed on Fantom Testnet as of now. You can check out the smart contract 
<a href="https://testnet.ftmscan.com/address/0xddDe75Cd5cBe775A82Ca76D2080a24082Ce6927f">here</a>

<br />

### Subgraph

Fantom Alert heavily depends on the subgraph it uses under the hood. The graph helps Fantom Alert carrying out the functionality it is providing. You can checkout the subgraph that Fantom Alert uses <a href="https://thegraph.com/hosted-service/subgraph/vaibhavarora19/getter/edit">here</a> and you can query the subgraph using the URI given below

```
https://api.thegraph.com/subgraphs/name/vaibhavarora19/getter
```
<br />

### Integrate in your smart contract

Start integrating Fantom Alert in your smart contract using our Fantom Alert Contract interface. Remember while using Fantom Alert via smart contract the owner will be the smart contract and not your EOA(Externally Owned Account). You can make EOA as the owner using the Fantom Alert website that directly interacts with the smart contract. To visit the website click <a href="https://fantom-alert.vercel.app/">here</a>

<br />

- Import the Fantom Alert interface

```bash
import {IChannels} from "https://github.com/VaibhavArora19/FantomAlert/blob/main/hardhat/contracts/IChannels.sol";
```

- Initialize the contract

```bash
IChannels public channel = IChannels(0xddDe75Cd5cBe775A82Ca76D2080a24082Ce6927f);
```

- Now you can call the contract function and start sending notifications to your subscribers😉

```bash
    channel.createChannel(string calldata name, string calldata description)
```