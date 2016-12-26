declare namespace UnityEngineInternal {
  class GenericStack {
    // constructors
    constructor();
    // methods
    Clear(): void;
    Clone(): any;
    Contains(obj: any): boolean;
    CopyTo(array: any, index: number): void;
    GetEnumerator(): any;
    Peek(): any;
    Pop(): any;
    Push(obj: any): void;
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
