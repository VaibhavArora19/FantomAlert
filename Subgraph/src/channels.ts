import { Bytes } from "@graphprotocol/graph-ts"
import {
  newChannel as newChannelEvent,
  newNotification as newNotificationEvent,
  newSubscriber as newSubscriberEvent
} from "../generated/Channels/Channels"
import { Channel, Notification, Subscriber } from "../generated/schema"

export function handlenewChannel(event: newChannelEvent): void {
  let channel = new Channel(
    event.params.channelId.toString()
  )
  channel.title = event.params.title
  channel.description = event.params.description
  channel.owner = event.params.owner;
  channel.totalSubscribers = [];
  channel.notifications = [];

  channel.save()
}

export function handlenewSubscriber(event: newSubscriberEvent): void {

  let channel = Channel.load(event.params.channelId.toString());
  
  if(channel) {
    let subscriber = Subscriber.load(event.params.subscriber);

    if(subscriber) {
      let totalSubscribers = channel.totalSubscribers;
      totalSubscribers.push(subscriber.id);
      channel.totalSubscribers = totalSubscribers;
      
      channel.save();
    }else {
      let newSubscriber = new Subscriber(event.params.subscriber);

      newSubscriber.save();

      let totalSubscribers = channel.totalSubscribers;
      totalSubscribers.push(newSubscriber.id);
      channel.totalSubscribers = totalSubscribers;

      channel.save();
    }
  }

}

export function handlenewNotification(event: newNotificationEvent): void {
  
  let notification = new Notification(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  
  let channel = Channel.load(event.params.channelId.toString());

  notification.channel = event.params.channelId.toString();
  notification.subscribers = event.params.subscribers.map<Bytes>((subscriber:Bytes) => subscriber)
  notification.title = event.params.title
  notification.description = event.params.description
   
  notification.save()

  if(channel) {
    let totalNotifications = channel.notifications;
    totalNotifications.push(notification.id);
    channel.notifications = totalNotifications;
    channel.save();
  }

}
