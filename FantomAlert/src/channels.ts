import { Bytes } from "@graphprotocol/graph-ts"
import {
  newChannel as newChannelEvent,
  newNotification as newNotificationEvent,
  newSubscriber as newSubscriberEvent
} from "../generated/Channels/Channels"
import { Channel, Notification } from "../generated/schema"

export function handlenewChannel(event: newChannelEvent): void {
  let entity = new Channel(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.title = event.params.title
  entity.description = event.params.description

  entity.save()
}

export function handlenewNotification(event: newNotificationEvent): void {
  
  let entity = new Notification(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.channelId = event.params.channelId
  entity.subscribers = event.params.subscribers.map<Bytes>((subscriber:Bytes) => subscriber)
  entity.title = event.params.title
  entity.description = event.params.description

  entity.save()
}
