declare namespace UnityEditor.RendererModuleUI {
  class StreamCallbackData {
    // constructors
    constructor(prop: UnityEditor.SerializedProperty, t: string);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    streamProp: UnityEditor.SerializedProperty;
    text: string;
  }
}
