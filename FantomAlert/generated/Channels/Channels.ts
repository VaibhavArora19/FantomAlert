// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class newChannel extends ethereum.Event {
  get params(): newChannel__Params {
    return new newChannel__Params(this);
  }
}

export class newChannel__Params {
  _event: newChannel;

  constructor(event: newChannel) {
    this._event = event;
  }

  get title(): string {
    return this._event.parameters[0].value.toString();
  }

  get description(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class newNotification extends ethereum.Event {
  get params(): newNotification__Params {
    return new newNotification__Params(this);
  }
}

export class newNotification__Params {
  _event: newNotification;

  constructor(event: newNotification) {
    this._event = event;
  }

  get channelId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get subscribers(): Array<Address> {
    return this._event.parameters[1].value.toAddressArray();
  }

  get title(): string {
    return this._event.parameters[2].value.toString();
  }

  get description(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class newSubscriber extends ethereum.Event {
  get params(): newSubscriber__Params {
    return new newSubscriber__Params(this);
  }
}

export class newSubscriber__Params {
  _event: newSubscriber;

  constructor(event: newSubscriber) {
    this._event = event;
  }

  get channelId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get subscriber(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Channels__allChannelsResult {
  value0: BigInt;
  value1: Address;
  value2: string;
  value3: string;

  constructor(value0: BigInt, value1: Address, value2: string, value3: string) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getOwner(): Address {
    return this.value1;
  }

  getName(): string {
    return this.value2;
  }

  getDescription(): string {
    return this.value3;
  }
}

export class Channels__getAllNotificationsResultValue0Struct extends ethereum.Tuple {
  get title(): string {
    return this[0].toString();
  }

  get description(): string {
    return this[1].toString();
  }

  get subscribers(): Array<Address> {
    return this[2].toAddressArray();
  }
}

export class Channels extends ethereum.SmartContract {
  static bind(address: Address): Channels {
    return new Channels("Channels", address);
  }

  allChannels(param0: BigInt): Channels__allChannelsResult {
    let result = super.call(
      "allChannels",
      "allChannels(uint256):(uint256,address,string,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Channels__allChannelsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toString(),
      result[3].toString()
    );
  }

  try_allChannels(
    param0: BigInt
  ): ethereum.CallResult<Channels__allChannelsResult> {
    let result = super.tryCall(
      "allChannels",
      "allChannels(uint256):(uint256,address,string,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Channels__allChannelsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toString(),
        value[3].toString()
      )
    );
  }

  channels(): BigInt {
    let result = super.call("channels", "channels():(uint256)", []);

    return result[0].toBigInt();
  }

  try_channels(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("channels", "channels():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAllNotifications(
    _id: BigInt
  ): Array<Channels__getAllNotificationsResultValue0Struct> {
    let result = super.call(
      "getAllNotifications",
      "getAllNotifications(uint256):((string,string,address[])[])",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return result[0].toTupleArray<
      Channels__getAllNotificationsResultValue0Struct
    >();
  }

  try_getAllNotifications(
    _id: BigInt
  ): ethereum.CallResult<
    Array<Channels__getAllNotificationsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getAllNotifications",
      "getAllNotifications(uint256):((string,string,address[])[])",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Channels__getAllNotificationsResultValue0Struct>()
    );
  }

  getSubscribers(_id: BigInt): Array<Address> {
    let result = super.call(
      "getSubscribers",
      "getSubscribers(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return result[0].toAddressArray();
  }

  try_getSubscribers(_id: BigInt): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getSubscribers",
      "getSubscribers(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  hasChannel(param0: Address): boolean {
    let result = super.call("hasChannel", "hasChannel(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_hasChannel(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasChannel", "hasChannel(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class CreateChannelCall extends ethereum.Call {
  get inputs(): CreateChannelCall__Inputs {
    return new CreateChannelCall__Inputs(this);
  }

  get outputs(): CreateChannelCall__Outputs {
    return new CreateChannelCall__Outputs(this);
  }
}

export class CreateChannelCall__Inputs {
  _call: CreateChannelCall;

  constructor(call: CreateChannelCall) {
    this._call = call;
  }

  get _title(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _description(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class CreateChannelCall__Outputs {
  _call: CreateChannelCall;

  constructor(call: CreateChannelCall) {
    this._call = call;
  }
}

export class NotficationForSingleCall extends ethereum.Call {
  get inputs(): NotficationForSingleCall__Inputs {
    return new NotficationForSingleCall__Inputs(this);
  }

  get outputs(): NotficationForSingleCall__Outputs {
    return new NotficationForSingleCall__Outputs(this);
  }
}

export class NotficationForSingleCall__Inputs {
  _call: NotficationForSingleCall;

  constructor(call: NotficationForSingleCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get subscriber(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get title(): string {
    return this._call.inputValues[2].value.toString();
  }

  get description(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class NotficationForSingleCall__Outputs {
  _call: NotficationForSingleCall;

  constructor(call: NotficationForSingleCall) {
    this._call = call;
  }
}

export class NotificationForAllCall extends ethereum.Call {
  get inputs(): NotificationForAllCall__Inputs {
    return new NotificationForAllCall__Inputs(this);
  }

  get outputs(): NotificationForAllCall__Outputs {
    return new NotificationForAllCall__Outputs(this);
  }
}

export class NotificationForAllCall__Inputs {
  _call: NotificationForAllCall;

  constructor(call: NotificationForAllCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get title(): string {
    return this._call.inputValues[1].value.toString();
  }

  get description(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class NotificationForAllCall__Outputs {
  _call: NotificationForAllCall;

  constructor(call: NotificationForAllCall) {
    this._call = call;
  }
}

export class NotificationForMultipleCall extends ethereum.Call {
  get inputs(): NotificationForMultipleCall__Inputs {
    return new NotificationForMultipleCall__Inputs(this);
  }

  get outputs(): NotificationForMultipleCall__Outputs {
    return new NotificationForMultipleCall__Outputs(this);
  }
}

export class NotificationForMultipleCall__Inputs {
  _call: NotificationForMultipleCall;

  constructor(call: NotificationForMultipleCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get subscribers(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get title(): string {
    return this._call.inputValues[2].value.toString();
  }

  get description(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class NotificationForMultipleCall__Outputs {
  _call: NotificationForMultipleCall;

  constructor(call: NotificationForMultipleCall) {
    this._call = call;
  }
}

export class SubscribeCall extends ethereum.Call {
  get inputs(): SubscribeCall__Inputs {
    return new SubscribeCall__Inputs(this);
  }

  get outputs(): SubscribeCall__Outputs {
    return new SubscribeCall__Outputs(this);
  }
}

export class SubscribeCall__Inputs {
  _call: SubscribeCall;

  constructor(call: SubscribeCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SubscribeCall__Outputs {
  _call: SubscribeCall;

  constructor(call: SubscribeCall) {
    this._call = call;
  }
}
