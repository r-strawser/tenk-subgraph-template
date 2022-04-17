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

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("signerId", Value.fromString(""));
    this.set("total_owned", Value.fromBigInt(BigInt.zero()));
    this.set("total_minted", Value.fromBigInt(BigInt.zero()));
    this.set("total_burned", Value.fromBigInt(BigInt.zero()));
    this.set("total_transferred", Value.fromBigInt(BigInt.zero()));
    this.set("last_updated", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Account entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get signerId(): string {
    let value = this.get("signerId");
    return value!.toString();
  }

  set signerId(value: string) {
    this.set("signerId", Value.fromString(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get sent(): Array<string> {
    let value = this.get("sent");
    return value!.toStringArray();
  }

  set sent(value: Array<string>) {
    this.set("sent", Value.fromStringArray(value));
  }

  get received(): Array<string> {
    let value = this.get("received");
    return value!.toStringArray();
  }

  set received(value: Array<string>) {
    this.set("received", Value.fromStringArray(value));
  }

  get total_owned(): BigInt {
    let value = this.get("total_owned");
    return value!.toBigInt();
  }

  set total_owned(value: BigInt) {
    this.set("total_owned", Value.fromBigInt(value));
  }

  get total_minted(): BigInt {
    let value = this.get("total_minted");
    return value!.toBigInt();
  }

  set total_minted(value: BigInt) {
    this.set("total_minted", Value.fromBigInt(value));
  }

  get total_burned(): BigInt {
    let value = this.get("total_burned");
    return value!.toBigInt();
  }

  set total_burned(value: BigInt) {
    this.set("total_burned", Value.fromBigInt(value));
  }

  get total_transferred(): BigInt {
    let value = this.get("total_transferred");
    return value!.toBigInt();
  }

  set total_transferred(value: BigInt) {
    this.set("total_transferred", Value.fromBigInt(value));
  }

  get last_updated(): string {
    let value = this.get("last_updated");
    return value!.toString();
  }

  set last_updated(value: string) {
    this.set("last_updated", Value.fromString(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("standard", Value.fromString(""));
    this.set("version", Value.fromString(""));
    this.set("event", Value.fromString(""));
    this.set("owner", Value.fromString(""));
    this.set("ownerId", Value.fromString(""));
    this.set("total_transfers", Value.fromBigInt(BigInt.zero()));
    this.set("mintedBy", Value.fromString(""));
    this.set("original_minter", Value.fromString(""));
    this.set("minted_timestamp", Value.fromString(""));
    this.set("minted_blockHeight", Value.fromString(""));
    this.set("mintedByLinkdrop", Value.fromString(""));
    this.set("burned", Value.fromString(""));
    this.set("contract", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get standard(): string {
    let value = this.get("standard");
    return value!.toString();
  }

  set standard(value: string) {
    this.set("standard", Value.fromString(value));
  }

  get version(): string {
    let value = this.get("version");
    return value!.toString();
  }

  set version(value: string) {
    this.set("version", Value.fromString(value));
  }

  get event(): string {
    let value = this.get("event");
    return value!.toString();
  }

  set event(value: string) {
    this.set("event", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get ownerId(): string {
    let value = this.get("ownerId");
    return value!.toString();
  }

  set ownerId(value: string) {
    this.set("ownerId", Value.fromString(value));
  }

  get prev_owner(): string | null {
    let value = this.get("prev_owner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set prev_owner(value: string | null) {
    if (!value) {
      this.unset("prev_owner");
    } else {
      this.set("prev_owner", Value.fromString(<string>value));
    }
  }

  get prev_ownerId(): string | null {
    let value = this.get("prev_ownerId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set prev_ownerId(value: string | null) {
    if (!value) {
      this.unset("prev_ownerId");
    } else {
      this.set("prev_ownerId", Value.fromString(<string>value));
    }
  }

  get tokenId(): string | null {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokenId(value: string | null) {
    if (!value) {
      this.unset("tokenId");
    } else {
      this.set("tokenId", Value.fromString(<string>value));
    }
  }

  get metadata(): string | null {
    let value = this.get("metadata");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set metadata(value: string | null) {
    if (!value) {
      this.unset("metadata");
    } else {
      this.set("metadata", Value.fromString(<string>value));
    }
  }

  get image(): string | null {
    let value = this.get("image");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set image(value: string | null) {
    if (!value) {
      this.unset("image");
    } else {
      this.set("image", Value.fromString(<string>value));
    }
  }

  get total_transfers(): BigInt {
    let value = this.get("total_transfers");
    return value!.toBigInt();
  }

  set total_transfers(value: BigInt) {
    this.set("total_transfers", Value.fromBigInt(value));
  }

  get transfers(): Array<string> {
    let value = this.get("transfers");
    return value!.toStringArray();
  }

  set transfers(value: Array<string>) {
    this.set("transfers", Value.fromStringArray(value));
  }

  get mints(): Array<string> {
    let value = this.get("mints");
    return value!.toStringArray();
  }

  set mints(value: Array<string>) {
    this.set("mints", Value.fromStringArray(value));
  }

  get mintedBy(): string {
    let value = this.get("mintedBy");
    return value!.toString();
  }

  set mintedBy(value: string) {
    this.set("mintedBy", Value.fromString(value));
  }

  get original_minter(): string {
    let value = this.get("original_minter");
    return value!.toString();
  }

  set original_minter(value: string) {
    this.set("original_minter", Value.fromString(value));
  }

  get minted_timestamp(): string {
    let value = this.get("minted_timestamp");
    return value!.toString();
  }

  set minted_timestamp(value: string) {
    this.set("minted_timestamp", Value.fromString(value));
  }

  get minted_blockHeight(): string {
    let value = this.get("minted_blockHeight");
    return value!.toString();
  }

  set minted_blockHeight(value: string) {
    this.set("minted_blockHeight", Value.fromString(value));
  }

  get mintedByLinkdrop(): string {
    let value = this.get("mintedByLinkdrop");
    return value!.toString();
  }

  set mintedByLinkdrop(value: string) {
    this.set("mintedByLinkdrop", Value.fromString(value));
  }

  get burned(): string {
    let value = this.get("burned");
    return value!.toString();
  }

  set burned(value: string) {
    this.set("burned", Value.fromString(value));
  }

  get burnedBy(): string | null {
    let value = this.get("burnedBy");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set burnedBy(value: string | null) {
    if (!value) {
      this.unset("burnedBy");
    } else {
      this.set("burnedBy", Value.fromString(<string>value));
    }
  }

  get prev_sale_price(): BigInt | null {
    let value = this.get("prev_sale_price");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set prev_sale_price(value: BigInt | null) {
    if (!value) {
      this.unset("prev_sale_price");
    } else {
      this.set("prev_sale_price", Value.fromBigInt(<BigInt>value));
    }
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }
}

export class Contract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("symbol", Value.fromString(""));
    this.set("base_uri", Value.fromString(""));
    this.set("media_uri", Value.fromString(""));
    this.set("copies", Value.fromBigInt(BigInt.zero()));
    this.set("total_minted", Value.fromBigInt(BigInt.zero()));
    this.set("total_burned", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Contract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Contract entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Contract", id.toString(), this);
    }
  }

  static load(id: string): Contract | null {
    return changetype<Contract | null>(store.get("Contract", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get base_uri(): string {
    let value = this.get("base_uri");
    return value!.toString();
  }

  set base_uri(value: string) {
    this.set("base_uri", Value.fromString(value));
  }

  get media_uri(): string {
    let value = this.get("media_uri");
    return value!.toString();
  }

  set media_uri(value: string) {
    this.set("media_uri", Value.fromString(value));
  }

  get nfts(): Array<string> {
    let value = this.get("nfts");
    return value!.toStringArray();
  }

  set nfts(value: Array<string>) {
    this.set("nfts", Value.fromStringArray(value));
  }

  get copies(): BigInt {
    let value = this.get("copies");
    return value!.toBigInt();
  }

  set copies(value: BigInt) {
    this.set("copies", Value.fromBigInt(value));
  }

  get total_minted(): BigInt {
    let value = this.get("total_minted");
    return value!.toBigInt();
  }

  set total_minted(value: BigInt) {
    this.set("total_minted", Value.fromBigInt(value));
  }

  get total_burned(): BigInt {
    let value = this.get("total_burned");
    return value!.toBigInt();
  }

  set total_burned(value: BigInt) {
    this.set("total_burned", Value.fromBigInt(value));
  }

  get original_minters(): Array<string> {
    let value = this.get("original_minters");
    return value!.toStringArray();
  }

  set original_minters(value: Array<string>) {
    this.set("original_minters", Value.fromStringArray(value));
  }
}

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("standard", Value.fromString(""));
    this.set("version", Value.fromString(""));
    this.set("event", Value.fromString(""));
    this.set("methodName", Value.fromString(""));
    this.set("from", Value.fromString(""));
    this.set("to", Value.fromString(""));
    this.set("nft", Value.fromString(""));
    this.set("idx", Value.fromString(""));
    this.set("is_marketSale", Value.fromString(""));
    this.set("timestamp", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Transfer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Transfer", id.toString(), this);
    }
  }

  static load(id: string): Transfer | null {
    return changetype<Transfer | null>(store.get("Transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get standard(): string {
    let value = this.get("standard");
    return value!.toString();
  }

  set standard(value: string) {
    this.set("standard", Value.fromString(value));
  }

  get version(): string {
    let value = this.get("version");
    return value!.toString();
  }

  set version(value: string) {
    this.set("version", Value.fromString(value));
  }

  get event(): string {
    let value = this.get("event");
    return value!.toString();
  }

  set event(value: string) {
    this.set("event", Value.fromString(value));
  }

  get methodName(): string {
    let value = this.get("methodName");
    return value!.toString();
  }

  set methodName(value: string) {
    this.set("methodName", Value.fromString(value));
  }

  get from(): string {
    let value = this.get("from");
    return value!.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value!.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get old_ownerId(): string | null {
    let value = this.get("old_ownerId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set old_ownerId(value: string | null) {
    if (!value) {
      this.unset("old_ownerId");
    } else {
      this.set("old_ownerId", Value.fromString(<string>value));
    }
  }

  get new_ownerId(): string | null {
    let value = this.get("new_ownerId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set new_ownerId(value: string | null) {
    if (!value) {
      this.unset("new_ownerId");
    } else {
      this.set("new_ownerId", Value.fromString(<string>value));
    }
  }

  get tokenId(): string | null {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokenId(value: string | null) {
    if (!value) {
      this.unset("tokenId");
    } else {
      this.set("tokenId", Value.fromString(<string>value));
    }
  }

  get authorizedId(): string | null {
    let value = this.get("authorizedId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set authorizedId(value: string | null) {
    if (!value) {
      this.unset("authorizedId");
    } else {
      this.set("authorizedId", Value.fromString(<string>value));
    }
  }

  get nft(): string {
    let value = this.get("nft");
    return value!.toString();
  }

  set nft(value: string) {
    this.set("nft", Value.fromString(value));
  }

  get idx(): string {
    let value = this.get("idx");
    return value!.toString();
  }

  set idx(value: string) {
    this.set("idx", Value.fromString(value));
  }

  get is_marketSale(): string {
    let value = this.get("is_marketSale");
    return value!.toString();
  }

  set is_marketSale(value: string) {
    this.set("is_marketSale", Value.fromString(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value!.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get blockHash(): string | null {
    let value = this.get("blockHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set blockHash(value: string | null) {
    if (!value) {
      this.unset("blockHash");
    } else {
      this.set("blockHash", Value.fromString(<string>value));
    }
  }

  get blockHeight(): string | null {
    let value = this.get("blockHeight");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set blockHeight(value: string | null) {
    if (!value) {
      this.unset("blockHeight");
    } else {
      this.set("blockHeight", Value.fromString(<string>value));
    }
  }
}

export class Mint extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("standard", Value.fromString(""));
    this.set("version", Value.fromString(""));
    this.set("event", Value.fromString(""));
    this.set("tokenId", Value.fromString(""));
    this.set("owner", Value.fromString(""));
    this.set("contract", Value.fromString(""));
    this.set("nft", Value.fromString(""));
    this.set("idx", Value.fromString(""));
    this.set("timestamp", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Mint entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Mint entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Mint", id.toString(), this);
    }
  }

  static load(id: string): Mint | null {
    return changetype<Mint | null>(store.get("Mint", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get standard(): string {
    let value = this.get("standard");
    return value!.toString();
  }

  set standard(value: string) {
    this.set("standard", Value.fromString(value));
  }

  get version(): string {
    let value = this.get("version");
    return value!.toString();
  }

  set version(value: string) {
    this.set("version", Value.fromString(value));
  }

  get event(): string {
    let value = this.get("event");
    return value!.toString();
  }

  set event(value: string) {
    this.set("event", Value.fromString(value));
  }

  get tokenId(): string {
    let value = this.get("tokenId");
    return value!.toString();
  }

  set tokenId(value: string) {
    this.set("tokenId", Value.fromString(value));
  }

  get ownerId(): string | null {
    let value = this.get("ownerId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ownerId(value: string | null) {
    if (!value) {
      this.unset("ownerId");
    } else {
      this.set("ownerId", Value.fromString(<string>value));
    }
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get nft(): string {
    let value = this.get("nft");
    return value!.toString();
  }

  set nft(value: string) {
    this.set("nft", Value.fromString(value));
  }

  get idx(): string {
    let value = this.get("idx");
    return value!.toString();
  }

  set idx(value: string) {
    this.set("idx", Value.fromString(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value!.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get blockHash(): string | null {
    let value = this.get("blockHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set blockHash(value: string | null) {
    if (!value) {
      this.unset("blockHash");
    } else {
      this.set("blockHash", Value.fromString(<string>value));
    }
  }

  get blockHeight(): string | null {
    let value = this.get("blockHeight");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set blockHeight(value: string | null) {
    if (!value) {
      this.unset("blockHeight");
    } else {
      this.set("blockHeight", Value.fromString(<string>value));
    }
  }
}

export class Burn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("standard", Value.fromString(""));
    this.set("version", Value.fromString(""));
    this.set("event", Value.fromString(""));
    this.set("tokenId", Value.fromString(""));
    this.set("owner", Value.fromString(""));
    this.set("contract", Value.fromString(""));
    this.set("nft", Value.fromString(""));
    this.set("idx", Value.fromString(""));
    this.set("timestamp", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Burn entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Burn entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Burn", id.toString(), this);
    }
  }

  static load(id: string): Burn | null {
    return changetype<Burn | null>(store.get("Burn", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get standard(): string {
    let value = this.get("standard");
    return value!.toString();
  }

  set standard(value: string) {
    this.set("standard", Value.fromString(value));
  }

  get version(): string {
    let value = this.get("version");
    return value!.toString();
  }

  set version(value: string) {
    this.set("version", Value.fromString(value));
  }

  get event(): string {
    let value = this.get("event");
    return value!.toString();
  }

  set event(value: string) {
    this.set("event", Value.fromString(value));
  }

  get tokenId(): string {
    let value = this.get("tokenId");
    return value!.toString();
  }

  set tokenId(value: string) {
    this.set("tokenId", Value.fromString(value));
  }

  get ownerId(): string | null {
    let value = this.get("ownerId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ownerId(value: string | null) {
    if (!value) {
      this.unset("ownerId");
    } else {
      this.set("ownerId", Value.fromString(<string>value));
    }
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get nft(): string {
    let value = this.get("nft");
    return value!.toString();
  }

  set nft(value: string) {
    this.set("nft", Value.fromString(value));
  }

  get idx(): string {
    let value = this.get("idx");
    return value!.toString();
  }

  set idx(value: string) {
    this.set("idx", Value.fromString(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value!.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get blockHash(): string | null {
    let value = this.get("blockHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set blockHash(value: string | null) {
    if (!value) {
      this.unset("blockHash");
    } else {
      this.set("blockHash", Value.fromString(<string>value));
    }
  }

  get blockHeight(): string | null {
    let value = this.get("blockHeight");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set blockHeight(value: string | null) {
    if (!value) {
      this.unset("blockHeight");
    } else {
      this.set("blockHeight", Value.fromString(<string>value));
    }
  }
}
