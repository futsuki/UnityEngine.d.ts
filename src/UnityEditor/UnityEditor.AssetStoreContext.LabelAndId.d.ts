declare namespace UnityEditor.AssetStoreContext {
  class LabelAndId {
    // constructors
    constructor();
    // methods
    Initialize(json: UnityEditorInternal.JSONValue): any;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    label: string;
    id: string;
  }
}
