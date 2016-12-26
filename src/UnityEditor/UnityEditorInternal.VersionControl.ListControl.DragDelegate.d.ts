declare namespace UnityEditorInternal.VersionControl.ListControl {
  class DragDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(target: UnityEditor.VersionControl.ChangeSet): void;
    BeginInvoke(target: UnityEditor.VersionControl.ChangeSet, callback: any, object: any): any;
    EndInvoke(result: any): void;
    GetObjectData(info: any, context: any): void;
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
