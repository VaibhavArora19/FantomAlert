import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  newListedChannel,
  notificationMultiple,
  notificationSingle,
  notificationToAll
} from "../generated/Channels/Channels"

export function createnewListedChannelEvent(
  channelName: string,
  channelAddress: Address
): newListedChannel {
  let newListedChannelEvent = changetype<newListedChannel>(newMockEvent())

  newListedChannelEvent.parameters = new Array()

  newListedChannelEvent.parameters.push(
    new ethereum.EventParam(
      "channelName",
      ethereum.Value.fromString(channelName)
    )
  )
  newListedChannelEvent.parameters.push(
    new ethereum.EventParam(
      "channelAddress",
      ethereum.Value.fromAddress(channelAddress)
    )
  )

  return newListedChannelEvent
}

export function createnotificationMultipleEvent(
  title: string,
  body: string,
  _channel: Address,
  subscribers: Array<Address>
): notificationMultiple {
  let notificationMultipleEvent = changetype<notificationMultiple>(
    newMockEvent()
  )

  notificationMultipleEvent.parameters = new Array()

  notificationMultipleEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  notificationMultipleEvent.parameters.push(
    new ethereum.EventParam("body", ethereum.Value.fromString(body))
  )
  notificationMultipleEvent.parameters.push(
    new ethereum.EventParam("_channel", ethereum.Value.fromAddress(_channel))
  )
  notificationMultipleEvent.parameters.push(
    new ethereum.EventParam(
      "subscribers",
      ethereum.Value.fromAddressArray(subscribers)
    )
  )

  return notificationMultipleEvent
}

export function createnotificationSingleEvent(
  title: string,
  body: string,
  _channel: Address,
  subscriber: Address
): notificationSingle {
  let notificationSingleEvent = changetype<notificationSingle>(newMockEvent())

  notificationSingleEvent.parameters = new Array()

  notificationSingleEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  notificationSingleEvent.parameters.push(
    new ethereum.EventParam("body", ethereum.Value.fromString(body))
  )
  notificationSingleEvent.parameters.push(
    new ethereum.EventParam("_channel", ethereum.Value.fromAddress(_channel))
  )
  notificationSingleEvent.parameters.push(
    new ethereum.EventParam(
      "subscriber",
      ethereum.Value.fromAddress(subscriber)
    )
  )

  return notificationSingleEvent
}

export function createnotificationToAllEvent(
  title: string,
  body: string,
  _channel: Address,
  subscribers: Array<Address>
): notificationToAll {
  let notificationToAllEvent = changetype<notificationToAll>(newMockEvent())

  notificationToAllEvent.parameters = new Array()

  notificationToAllEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  notificationToAllEvent.parameters.push(
    new ethereum.EventParam("body", ethereum.Value.fromString(body))
  )
  notificationToAllEvent.parameters.push(
    new ethereum.EventParam("_channel", ethereum.Value.fromAddress(_channel))
  )
  notificationToAllEvent.parameters.push(
    new ethereum.EventParam(
      "subscribers",
      ethereum.Value.fromAddressArray(subscribers)
    )
  )

  return notificationToAllEvent
}
