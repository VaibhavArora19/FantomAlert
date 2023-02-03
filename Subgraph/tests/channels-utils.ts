import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  newChannel,
  newNotification,
  newSubscriber
} from "../generated/Channels/Channels"

export function createnewChannelEvent(
  channelId: BigInt,
  owner: Address,
  title: string,
  description: string
): newChannel {
  let newChannelEvent = changetype<newChannel>(newMockEvent())

  newChannelEvent.parameters = new Array()

  newChannelEvent.parameters.push(
    new ethereum.EventParam(
      "channelId",
      ethereum.Value.fromUnsignedBigInt(channelId)
    )
  )
  newChannelEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  newChannelEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  newChannelEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )

  return newChannelEvent
}

export function createnewNotificationEvent(
  notificationId: BigInt,
  channelId: BigInt,
  subscribers: Array<Address>,
  title: string,
  description: string
): newNotification {
  let newNotificationEvent = changetype<newNotification>(newMockEvent())

  newNotificationEvent.parameters = new Array()

  newNotificationEvent.parameters.push(
    new ethereum.EventParam(
      "notificationId",
      ethereum.Value.fromUnsignedBigInt(notificationId)
    )
  )
  newNotificationEvent.parameters.push(
    new ethereum.EventParam(
      "channelId",
      ethereum.Value.fromUnsignedBigInt(channelId)
    )
  )
  newNotificationEvent.parameters.push(
    new ethereum.EventParam(
      "subscribers",
      ethereum.Value.fromAddressArray(subscribers)
    )
  )
  newNotificationEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  newNotificationEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )

  return newNotificationEvent
}

export function createnewSubscriberEvent(
  channelId: BigInt,
  subscriber: Address
): newSubscriber {
  let newSubscriberEvent = changetype<newSubscriber>(newMockEvent())

  newSubscriberEvent.parameters = new Array()

  newSubscriberEvent.parameters.push(
    new ethereum.EventParam(
      "channelId",
      ethereum.Value.fromUnsignedBigInt(channelId)
    )
  )
  newSubscriberEvent.parameters.push(
    new ethereum.EventParam(
      "subscriber",
      ethereum.Value.fromAddress(subscriber)
    )
  )

  return newSubscriberEvent
}
