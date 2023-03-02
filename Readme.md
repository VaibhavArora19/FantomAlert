<h1 align="center">Fantom Alert 🔔</h1>

Fantom Alert brings push notification to Fantom blockchain which was not possible before. Developers can integrate Fantom Alert smart contract directly into their smart contract and start sending notification with the help of Fantom Alert.

<br/>

### Smart Contract

Fantom Alert smart contract is deployed on Fantom Testnet as of now. You can check out the smart contract 
<a href="https://testnet.ftmscan.com/address/0xddDe75Cd5cBe775A82Ca76D2080a24082Ce6927f">here</a>

<br />

### Subgraph

Fantom Alert heavily depends on the subgraph it uses under the hood. The graph helps Fantom Alert carrying out the functionality it is providing. You can checkout the subgraph that Fantom Alert uses <a href="https://thegraph.com/hosted-service/subgraph/vaibhavarora19/getter">here</a> and you can query the subgraph using the URI given below

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

- You can create a channel using createChannel function
    
```bash
channel.createChannel{value: 0.001 ether}(string calldata name, string calldata description);
```

- A user can subscribe to the channel using the subscribe function

```bash
channel.susbcribe(uint id);
```

<br />
<h1 align="center">Sending notification</h1>

<br/>

There are multiple functions to send notification to your subscribers depending on your use case. Only owner of the contract can call these functions.

<br/>

Send notification to only one subscriber👇

```bash
channel.notificationForSingle(uint _id, address subscriber, string calldata title, string calldata description);
```

Send notification to multiple subscribers👇

```bash 
channel.notificationForMultiple(uint _id, address[] memory subscribers, string calldata title, string calldata description);
```

Send notification all subscribers👇
```bash
channel.notificationForAll(uint _id, string calldata title, string calldata description);
```

<br/>

<h3>Read methods</h3>

There are some read methods as well that allows you to directly read from the blockchain state.

<br/>

Get all the subscribers of a channel👇

```bash 
channel.getSubscribers(uint _id);
```


Get all notifications of a channel👇
```bash
channel.getAllNotifications(uint _id);
```

Get all channels👇
```bash
channel.getAllChannels();
```

While `getSubscribers` & `getAllNotifications` can only be called by the owner of the channel. The function `getAllChannels` can be called by anyone.
<br/>
## API

Fantom Alert also provides you the API that you can call to read data. To implement API in your application.
Refer <a href="https://github.com/VaibhavArora19/FantomAlert/blob/main/Api.md">here</a>

<br/>

## 🤔 Bug Reports/Feature Requests

Kindly open an issue if you face any kind of bug or any other kind of problem by going <a href = "https://github.com/VaibhavArora19/FantomAlert/issues">here</a>.

<br/>

## Support

Kindly support me if you like the project by starring 🌟 the project. It'll be much appreciated 😄.