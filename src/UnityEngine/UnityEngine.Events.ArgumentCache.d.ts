declare namespace UnityEngine.Events {
  class ArgumentCache extends System.Object {
    // constructors
    constructor();
    // methods
    OnBeforeSerialize(): void;
    OnAfterDeserialize(): void;
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
