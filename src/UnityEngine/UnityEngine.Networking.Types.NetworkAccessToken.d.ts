declare namespace UnityEngine.Networking.Types {
  class NetworkAccessToken extends System.Object {
    // constructors
    constructor();
    constructor(array: number[]);
    constructor(strArray: string);
    // methods
    GetByteString(): string;
    IsValid(): boolean;
    // properties
    // fields
    array: number[];
  }
}
