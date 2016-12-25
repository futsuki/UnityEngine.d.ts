declare namespace UnityEditor.Undo {
  class PostprocessModifications {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(modifications: UnityEditor.UndoPropertyModification[]): UnityEditor.UndoPropertyModification[];
    BeginInvoke(modifications: UnityEditor.UndoPropertyModification[], callback: any, object: any): any;
    EndInvoke(result: any): UnityEditor.UndoPropertyModification[];
    GetObjectData(info: any, context: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetInvocationList(): any[];
    DynamicInvoke(args: any[]): any;
    Clone(): any;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Method: any;
    readonly Target: any;
    // fields
  }
}
