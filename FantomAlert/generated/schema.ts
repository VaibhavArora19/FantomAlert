// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Notification extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Notification entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Notification must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Notification", id.toString(), this);
    }
  }

  static load(id: string): Notification | null {
    return changetype<Notification | null>(store.get("Notification", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get title(): string {
    let value = this.get("title");
    return value!.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get body(): string {
    let value = this.get("body");
    return value!.toString();
  }

  set body(value: string) {
    this.set("body", Value.fromString(value));
  }

  get subscribers(): Array<Bytes> {
    let value = this.get("subscribers");
    return value!.toBytesArray();
  }

  set subscribers(value: Array<Bytes>) {
    this.set("subscribers", Value.fromBytesArray(value));
  }

  get _channel(): Bytes {
    let value = this.get("_channel");
    return value!.toBytes();
  }

  set _channel(value: Bytes) {
    this.set("_channel", Value.fromBytes(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }
}

export class Channel extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Channel entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Channel must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Channel", id.toString(), this);
    }
  }

  static load(id: string): Channel | null {
    return changetype<Channel | null>(store.get("Channel", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get channelName(): string {
    let value = this.get("channelName");
    return value!.toString();
  }

  set channelName(value: string) {
    this.set("channelName", Value.fromString(value));
  }

  get channelAddress(): Bytes {
    let value = this.get("channelAddress");
    return value!.toBytes();
  }

  set channelAddress(value: Bytes) {
    this.set("channelAddress", Value.fromBytes(value));
  }

  get notifications(): Array<string> | null {
    let value = this.get("notifications");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set notifications(value: Array<string> | null) {
    if (!value) {
      this.unset("notifications");
    } else {
      this.set("notifications", Value.fromStringArray(<Array<string>>value));
    }
  }
}
