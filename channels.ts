import { Bytes } from "@graphprotocol/graph-ts";
import {
  newListedChannel as newListedChannelEvent,
  notificationMultiple as notificationMultipleEvent,
  notificationSingle as notificationSingleEvent,
  notificationToAll as notificationToAllEvent
} from "../generated/Channels/Channels"
import {
  Channel, Notification
} from "../generated/schema"

export function handlenewListedChannel(event: newListedChannelEvent): void {
    const id = event.params.channelAddress.toHex();

    let channel = new Channel(id);

    channel.channelName = event.params.channelName.toString();
    channel.channelAddress = event.params.channelAddress;

    channel.save();
}

export function handlenotificationMultiple(
  event: notificationMultipleEvent
): void {
    const id = event.params._channel.toHex();

    let channel = Channel.load(id)

    if(channel) {
      let time = Date.now();

      let notificationId = event.params._channel.toHex() + time.toString();
      let notification = new Notification(notificationId)

      notification.type = "Multiple"
      notification.title = event.params.title.toString()
      notification.body = event.params.body;
      notification.subscribers = event.params.subscribers.map<Bytes>((subscriber:Bytes) => subscriber);
      notification._channel = event.params._channel;
      notification.blockTimestamp = time.toString();

      notification.save();

      channel.notifications.push(notificationId);
    }
}

export function handlenotificationSingle(event: notificationSingleEvent): void {
  const id = event.params._channel.toHex();

  let channel = Channel.load(id);

  if(channel){
    let time = Date.now();
    let notificationId = event.params._channel.toHex() + time.toString();
    let notification = new Notification(notificationId);

    notification.type = "Single";
    notification.title = event.params.title.toString();
    notification.body = event.params.body;
    notification.subscribers = [event.params.subscriber];
    notification._channel = event.params._channel;
    notification.blockTimestamp = time.toString();

    notification.save();
    
    channel.notifications.push(notificationId);

  }
}

export function handlenotificationToAll(event: notificationToAllEvent): void {
  const id = event.params._channel.toHex();

  let channel = Channel.load(id)

  if(channel) {
    let time = Date.now();

    let notificationId = event.params._channel.toHex() + time.toString();
    let notification = new Notification(notificationId)

    notification.type = "All"
    notification.title = event.params.title.toString()
    notification.body = event.params.body;
    notification.subscribers = event.params.subscribers.map<Bytes>((subscriber:Bytes) => subscriber);
    notification._channel = event.params._channel;
    notification.blockTimestamp = time.toString();

    notification.save();

    channel.notifications.push(notificationId)
  }
}
