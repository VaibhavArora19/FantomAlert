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
  let entity = new newListedChannel(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.channelName = event.params.channelName
  entity.channelAddress = event.params.channelAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlenotificationMultiple(
  event: notificationMultipleEvent
): void {
  let entity = new notificationMultiple(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.title = event.params.title
  entity.body = event.params.body
  entity._channel = event.params._channel
  entity.subscribers = event.params.subscribers

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlenotificationSingle(event: notificationSingleEvent): void {
  let entity = new notificationSingle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.title = event.params.title
  entity.body = event.params.body
  entity._channel = event.params._channel
  entity.subscriber = event.params.subscriber

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlenotificationToAll(event: notificationToAllEvent): void {
  let entity = new notificationToAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.title = event.params.title
  entity.body = event.params.body
  entity._channel = event.params._channel
  entity.subscribers = event.params.subscribers

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
