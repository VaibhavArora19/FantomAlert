//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract Channels {

    event newChannel(string title, string description);
    event newSubscriber(uint channelId, address subscriber);

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
    mapping(uint => address[]) public subscribersOfAChannel;


    ///notifications of a channel
    mapping(uint => Notification[]) public notificationsOfAChannel;


    ///@dev allow one user to create only one channel
    mapping(address => bool) public hasChannel;

    /**
    *@dev create a new channel
    */
    function createChannel(string calldata _title, string calldata _description) public payable{
        require(msg.value >= 0.001 ether, "Amount sent is not correct");
        require(!hasChannel[msg.sender], "You already have a channel");

        allChannels.push(Channel(channels, msg.sender, _title, _description));
        hasChannel[msg.sender] = true;

        emit newChannel(_title, _description);
    }

    function subscribe(uint _id) external {
        require(_id >= 0 && _id <= channels, "Channel does not exist");
        subscribersOfAChannel[_id].push(msg.sender);      
    
        emit newSubscriber(_id, msg.sender);
    }


    fallback() external payable{}
    receive() external payable{}

}