declare namespace UnityEditorInternal {
  class AssetStore {
    // constructors
    constructor();
    // methods
    static Open(assetStoreURL: string): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
