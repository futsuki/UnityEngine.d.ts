declare namespace UnityEditor.AssetStoreContext {
  class Package {
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
    title: string;
    id: string;
    version: string;
    version_id: string;
    local_icon: string;
    local_path: string;
    pubdate: string;
    description: string;
    publisher: UnityEditor.AssetStoreContext.LabelAndId;
    category: UnityEditor.AssetStoreContext.LabelAndId;
    link: UnityEditor.AssetStoreContext.Link;
  }
}
