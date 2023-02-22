const {createClient} = require("@urql/core");
const {channelQuery, singleChannelQuery, subscribedChannelsQuery, notificationQuery, singleNotificationQuery} = require("../queries/queries");

const URI = 'https://api.thegraph.com/subgraphs/name/vaibhavarora19/getter';

exports.getAllChannels = async (req, res) => {

    const client = createClient({
        url: URI
    });

    const allChannels = await client.query(channelQuery).toPromise();
    res.json(allChannels.data);
}

exports.getSingleChannel = async (req, res) => {
    const {id} = req.params;


    const client = createClient({
        url: URI
    });

    const singleChannel = await client.query(singleChannelQuery, {id}).toPromise();

    res.json(singleChannel.data.channels[0]);

}

exports.getSubscribedChannels = async (req, res) => {
    let {address} = req.params;

    address = address.toLowerCase();

    const client = createClient({
        url: URI
    });

    const subscribedChannels = await client.query(subscribedChannelsQuery, {id: address}).toPromise();

    res.json(subscribedChannels.data);
}

exports.getNotification = async (req, res) => {

    let {address} = req.params;
    
    address = address.toLowerCase();

    const client = createClient({
        url: URI
    });

    const getAllNotifications = await client.query(notificationQuery, {id: address}).toPromise();

    res.json(getAllNotifications.data);
};

exports.getSingleNotification = async (req, res) => {
    let {id} = req.params;

    const client = createClient({
        url: URI
    });

    const singleNotification = await client.query(singleNotificationQuery, {id}).toPromise();

    res.json(singleNotification.data);
}