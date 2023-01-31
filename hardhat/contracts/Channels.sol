//SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

import {Channel} from "./Channel/Channel.sol";

contract Channels {

    /// @dev emits an event every time a new channel is created
    event newListedChannel(string indexed channelName, address indexed channelAddress);
    event notificationSingle(string indexed title, string body, address indexed _channel, address indexed subscriber);
    event notificationMultiple(string indexed title, string body, address indexed _channel, address[] indexed subscribers);
    event notificationToAll(string indexed title, string body, address indexed _channel, address[] indexed subscribers);

    /**
    * @dev struct containing the name and address of the channel 
    */
    struct channel {    
        address channelAddress;
        string channelName;
        address owner;
    }

    /**
    * @dev array to hold all the channels that exist
    */
    channel[] public channels;


    ///@dev mapping of channel address with channel struct
    mapping(address => channel) public channelAddressToChannel;


    modifier onlyChannelOwner(address channelOwner, address _channel) {
        require(channelOwner == channelAddressToChannel[_channel].owner, "Not the owner");
        _;
    }


    /**
    * @dev function to add a new channel
    * @param _channelName name of the channel
    */
    function addChannel(string memory _channelName) external payable{
        require(msg.value >= 0.1 ether, "Not enough ether sent");

        Channel newChannel = new Channel(_channelName, msg.sender);
        channels.push(channel({channelAddress: address(newChannel) ,channelName: _channelName, owner: msg.sender}));

        channelAddressToChannel[address(newChannel)] = channels[channels.length - 1];
        
        emit newListedChannel(_channelName, address(newChannel));
    }

    function getAllChannels() external view returns(channel[] memory){
        return channels;
    }
    
    /**
    * @dev function to get a channel by name
    * @param _channelName name of the channel
    */
    function getChannelByName(string memory _channelName) public view returns(channel memory){

        channel memory existingChannel;
        for(uint i =0; i<channels.length; i++){
            if(keccak256(abi.encodePacked(channels[i].channelName)) == keccak256(abi.encodePacked(_channelName))){
                existingChannel = channels[i];
                break;
            }
        }

        return existingChannel;
    }

    ///Emits an event when only a single subscriber is to benotified
    function singleNotification(address channelOwner, string calldata title, string calldata body, address _channel, address subscriber ) public onlyChannelOwner(channelOwner, _channel) {
        
        emit notificationSingle(title, body, _channel, subscriber);
    }

    ///Emits an event when all subscribers are to be notified
    function notificationAll(address channelOwner, string calldata title, string calldata body, address _channel, address[] calldata subscribers) public onlyChannelOwner(channelOwner, _channel){

        emit notificationToAll(title, body, _channel, subscribers);
    }

    ///Emits an event when multiple subscribers are to be notified
    function multipleNotification(address channelOwner, string calldata title, string calldata body, address _channel, address[] calldata subscribers) public onlyChannelOwner(channelOwner, _channel){

        emit notificationMultiple(title, body, _channel, subscribers);
    }

}