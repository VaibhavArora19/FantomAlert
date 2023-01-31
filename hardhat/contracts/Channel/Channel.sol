//SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

import {Channels} from "../Channels.sol";

contract Channel {

    event SingleNotification(string title, string body, address indexed subscriber, string indexed channelName, address indexed channel);
    event AllNotification(string title, string body, address[] indexed subscribers, string indexed channelName, address indexed channel);
    event MultipleNotification(string title, string body, address[] indexed subscribers, string indexed channelName, address indexed channel);

    /**
    * @dev channel name 
    */
    string public channelName;

    /// @dev owner
    address public immutable owner;

    /**
    * @dev addresses that are subscribed to this channel
    */
    address[] public subscribers;

    /// @dev Initializing channels
    Channels public channels;

    /**
    @dev mapping to check if a user is subscribed to this channel
    */
    mapping(address => bool) public isSubscribed;

    constructor(string memory _channelName, address _owner) {
        channelName = _channelName;
        owner = _owner;
    }

    ///@dev onlyOwner modifier
    modifier onlyOwner(){
        require(msg.sender == owner, "Not the owner");
        _;
    }

    /**
    * @dev function to add a new subscriber
    * @param _subscriber address of the subscriber
    */
    function addSubscribers(address _subscriber) external{
        subscribers.push(_subscriber);
        isSubscribed[_subscriber] = true;
    }

    /**
    * @dev function to get all the subscribers
    */
    function getSubscriberList() external view returns(address[] memory){
        return subscribers;
    }

    /**
    * @dev send a notification to a single subscriber
    */
    function sendNotificationSingle(string calldata title, string calldata body, address _subscriber) external onlyOwner{
        require(isSubscribed[_subscriber], "Not a subscriber");
        
        emit SingleNotification(title, body, _subscriber, channelName, address(this));

         channels.singleNotification(msg.sender, title, body, address(this), _subscriber);

    }

    /**
    * @dev send a notification to all the subscribers
    */
    function sendNotificationAll(string calldata title, string calldata body) external onlyOwner{
        emit AllNotification(title, body, subscribers, channelName, address(this));

        channels.notificationAll(msg.sender, title, body, address(this), subscribers);
    }


    /**
    * @dev send a notification to multiple subscribers but not all
    */
    function sendNotificationMultiple(string calldata title, string calldata body, address[] memory _subscribers) external onlyOwner{
        for(uint i =0; i<_subscribers.length; i++){
            require(isSubscribed[_subscribers[i]], "Not a subscriber");
        }

        emit MultipleNotification(title, body, _subscribers, channelName, address(this));

        channels.multipleNotification(msg.sender, title, body, address(this), _subscribers);
       
    }


}