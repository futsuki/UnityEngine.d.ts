declare namespace UnityEngine {
  class Ping extends System.Object {
    // constructors
    constructor(address: string);
    // methods
    DestroyPing(): void;
    // properties
    readonly isDone: boolean;
    readonly time: number;
    readonly ip: string;
    // fields
  }
}
