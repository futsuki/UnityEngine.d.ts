declare namespace UnityEngine.Events {
  class ArgumentCache {
    // constructors
    constructor();
    // methods
    OnBeforeSerialize(): void;
    OnAfterDeserialize(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    unityObjectArgument: UnityEngine.Object;
    readonly unityObjectArgumentAssemblyTypeName: string;
    intArgument: number;
    floatArgument: number;
    stringArgument: string;
    boolArgument: boolean;
    // fields
  }
}
