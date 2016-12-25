declare namespace UnityEngine {
  class TextAsset {
    // constructors
    constructor();
    // methods
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly text: string;
    readonly bytes: number[];
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
