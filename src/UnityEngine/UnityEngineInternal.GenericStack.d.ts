declare namespace UnityEngineInternal {
  class GenericStack {
    // constructors
    constructor();
    // methods
    Clear(): any;
    Clone(): any;
    Contains(obj: any): boolean;
    CopyTo(array: any, index: number): any;
    GetEnumerator(): any;
    Peek(): any;
    Pop(): any;
    Push(obj: any): any;
    ToArray(): any[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Count: number;
    readonly IsSynchronized: boolean;
    readonly SyncRoot: any;
    // fields
  }
}
