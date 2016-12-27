declare namespace System.Collections {
  class Stack extends System.Object {
    // constructors
    constructor();
    constructor(col: any);
    constructor(initialCapacity: number);
    // methods
    static Synchronized(stack: System.Collections.Stack): System.Collections.Stack;
    Clear(): void;
    Clone(): any;
    Contains(obj: any): boolean;
    CopyTo(array: any, index: number): void;
    GetEnumerator(): any;
    Peek(): any;
    Pop(): any;
    Push(obj: any): void;
    ToArray(): any[];
    // properties
    readonly Count: number;
    readonly IsSynchronized: boolean;
    readonly SyncRoot: any;
    // fields
  }
}
