declare namespace UnityEditor.AssetStoreContext {
  class Link {
    // constructors
    constructor();
    // methods
    Initialize(json: UnityEditorInternal.JSONValue): void;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    type: string;
    id: string;
  }
}
