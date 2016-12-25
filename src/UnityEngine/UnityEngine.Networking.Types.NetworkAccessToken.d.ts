declare namespace UnityEngine.Networking.Types {
  class NetworkAccessToken {
    // constructors
    constructor();
    constructor(array: number[]);
    constructor(strArray: string);
    // methods
    GetByteString(): string;
    IsValid(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    array: number[];
  }
}
