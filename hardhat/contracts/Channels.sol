//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract Channels {

    event newChannel(uint channelId, address owner, string title, string description);
    event newSubscriber(uint channelId, address subscriber);
    event newNotification(uint notificationId, uint channelId, address[] subscribers, string title, string description);

    ///@dev the total number of channels
    uint public channels;

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

    ///@dev array of all channels
    Channel[] public allChannels;

    ///subscribers of each channel;
    mapping(uint => address[]) internal subscribersOfAChannel;


    ///notifications of a channel
    mapping(uint => Notification[]) internal notificationsOfAChannel;


    ///@dev allow one user to create only one channel
    mapping(address => bool) public hasChannel;

    ///@dev mapping of address with the subscribed channels
    mapping(address => uint[]) public subscribedChannels;

    /**
    *@dev create a new channel
    *@param _title the title of the channel
    @param _description the description of the channel
    */
    function createChannel(string calldata _title, string calldata _description) public payable{
        require(msg.value >= 0.001 ether, "Amount sent is not correct");
        require(!hasChannel[msg.sender], "You already have a channel");

        allChannels.push(Channel(channels, msg.sender, _title, _description));
        hasChannel[msg.sender] = true;

        emit newChannel(channels, msg.sender, _title, _description);
        channels++; 
    }

    ///@dev subscribe to a channel
    ///@param _id the id of the channel
    function subscribe(uint _id) external {
        require(_id >= 0 && _id <= channels, "Channel does not exist");
        
        for(uint i =0; i<subscribersOfAChannel[_id].length; i++){
            if(subscribersOfAChannel[_id][i] == msg.sender) {
                revert("You have already subscribed");
            }
        }

        subscribersOfAChannel[_id].push(msg.sender);      
        subscribedChannels[msg.sender].push(_id);
        
        emit newSubscriber(_id, msg.sender);
    }

    /**
    *@dev send notification to one subscriber of a channel
    *@param _id of the channel
    *@param subscriber  is the address of subscriber
    *@param title of the notification
    *@param description of the notification
    */
    function notficationForSingle(uint _id, address subscriber, string calldata title, string calldata description) external {
        require(_id >= 0 && _id <= channels, "Channel does not exist");
        require(msg.sender == allChannels[_id].owner, "You are not the owner of this channel");

        for(uint i = 0; i<subscribersOfAChannel[_id].length; i++){

            if(subscribersOfAChannel[_id][i] == subscriber){
                address[] memory subscriberArray = new address[](1);
                subscriberArray[0] = subscriber;

                notificationsOfAChannel[_id].push(Notification(title, description, subscriberArray));

                emit newNotification(notificationsOfAChannel[_id].length, _id, subscriberArray, title, description);
            }
        }
    }

    /**
    * @dev send notification to multiple subscribers of a channel
    *@param subscribers is the addresses of subscriber
    *@param title of the notification
    *@param description of the notification
    */
    function notificationForMultiple(uint _id, address[] memory subscribers, string calldata title, string calldata description) external {
        require(_id >= 0 && _id <= channels, "Channel does not exist");
        require(msg.sender == allChannels[_id].owner, "You are not the owner of this channel");

        for(uint i =0; i<subscribers.length; i++){
            bool isExist = false;

            for(uint j = 0; j<subscribersOfAChannel[_id].length; j++) {
                if(subscribers[i] == subscribersOfAChannel[_id][j]){
                    isExist = true;
                    continue;                   
                }    
            }
            if(!isExist) {
                revert("One of the address has not subscribed");
            }
        }

        notificationsOfAChannel[_id].push(Notification(title, description, subscribers));

        emit newNotification(notificationsOfAChannel[_id].length ,_id, subscribers, title, description);
    }

    /**
    * @dev send notification to multiple subscribers of a channel
    *@param title of the notification
    *@param description of the notification
    */
    function notificationForAll(uint _id, string calldata title, string calldata description) external{
        require(_id >= 0 && _id <= channels, "Channel does not exist");
        require(msg.sender == allChannels[_id].owner, "You are not the owner of this channel");

        notificationsOfAChannel[_id].push(Notification(title, description, subscribersOfAChannel[_id]));

        emit newNotification(notificationsOfAChannel[_id].length, _id, subscribersOfAChannel[_id], title, description);
    }

    ///@dev get all the subscriber of a particular channel
    function getSubscribers(uint _id) external view returns(address[] memory){
        require(msg.sender == allChannels[_id].owner, "You are not the owner of this channel");

        return subscribersOfAChannel[_id];
    }

    function getAllNotifications(uint _id) external view returns(Notification[] memory) {
        require(msg.sender == allChannels[_id].owner, "You are not the owner of this channel");

        return notificationsOfAChannel[_id];
    }

    fallback() external payable{}
    receive() external payable{}

}