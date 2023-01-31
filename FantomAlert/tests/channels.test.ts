import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { newListedChannel } from "../generated/schema"
import { newListedChannel as newListedChannelEvent } from "../generated/Channels/Channels"
import { handlenewListedChannel } from "../src/channels"
import { createnewListedChannelEvent } from "./channels-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let channelName = "Example string value"
    let channelAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newnewListedChannelEvent = createnewListedChannelEvent(
      channelName,
      channelAddress
    )
    handlenewListedChannel(newnewListedChannelEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("newListedChannel created and stored", () => {
    assert.entityCount("newListedChannel", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "newListedChannel",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "channelName",
      "Example string value"
    )
    assert.fieldEquals(
      "newListedChannel",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "channelAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
