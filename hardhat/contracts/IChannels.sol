//SPDX-License-Identifier:MIT

pragma solidity ^0.8.17;

interface IChannels {

    event newChannel(uint channelId, address owner, string title, string description);
    event newSubscriber(uint channelId, address subscriber);
    event newNotification(uint notificationId, uint channelId, address[] subscribers, string title, string description);

    
    ///@dev the structue of notification
    struct Notification {
        string title;
        string description;
        address[] subscribers;   
    }

    /**
    *@dev The structure of each channel
    */
    struct Channel {
        uint id;
        address owner;
        string name;
        string description;
    }
    /**
    *@dev create a new channel
    *@param _title the title of the channel
    @param _description the description of the channel
    */
    function createChannel(string calldata _title, string calldata _description) external payable;

    ///@dev subscribe to a channel
    ///@param _id the id of the channel
    function subscribe(uint _id) external;


     /**
    *@dev send notification to one subscriber of a channel
    *@param _id of the channel
    *@param subscriber  is the address of subscriber
    *@param title of the notification
    *@param description of the notification
    */
    function notficationForSingle(uint _id, address subscriber, string calldata title, string calldata description) external;

     /**
    * @dev send notification to multiple subscribers of a channel
    *@param subscribers is the addresses of subscriber
    *@param title of the notification
    *@param description of the notification
    */
    function notificationForMultiple(uint _id, address[] memory subscribers, string calldata title, string calldata description) external;

    /**
    * @dev send notification to multiple subscribers of a channel
    *@param title of the notification
    *@param description of the notification
    */
    function notificationForAll(uint _id, string calldata title, string calldata description) external;

    ///@dev get all the subscriber of a particular channel
    function getSubscribers(uint _id) external view returns(address[] memory);

    ///@dev get all notifications of a given channel
    function getAllNotifications(uint _id) external view returns(Notification[] memory);

    ///@dev get all the channels
    function getAllChannels() external view returns(Channel[] memory);
}
