declare namespace UnityEngine {
  class Ping {
    // constructors
    constructor(address: string);
    // methods
    DestroyPing(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly isDone: boolean;
    readonly time: number;
    readonly ip: string;
    // fields
  }
}
