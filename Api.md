<h1 align="center">REST API</h1>

There are 2 ways to get the channels and notification informations of the Fantom Alert. You can either use the Fantom Alert Dashboard or you can use the built-in APIs to get the data. Here are all the APIs you can call to get the information about channels and notifications.

## APIs

=> `/channels` : Get all the channels exists on Fantom Alert. 


```bash
const data = await fetch('http://localhost:8080/channels');

const response = await data.json();
```
<br />

=> `/channel/:id` : Get information about a single channel.

```bash
const data = await fetch(`http://localhost:8080/channel/${id}`);

const response = await data.json();
```
Here, `id` is the id of the channel.

<br/>

=> `/subscribedChannels/:address` : Get the subscribed channels of a particular address

```bash
const data = await fetch(`http://localhost:8080/subscribedChannels/${address}`);

const response = await data.json();
```
Here, `address` is the user address.

<br />

=> `/notification/:address` : Get all the notification for a particular address

```bash
    const data = await fetch(`http://localhost:8080/notification/${address}`);
    
    const response = await data.json();
```

Here, `address` is the user address.

<br />

=> `/singleNotification/:id` : Get all the details about a single notification


```bash 
    const data = await fetch(`http://localhost:8080/singleNotification${id}`);
    
    const response = await data.json();
```

Here, `id` is the notification id.
