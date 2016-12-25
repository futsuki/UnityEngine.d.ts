declare namespace UnityEngine {
  class TreePrototype {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    prefab: UnityEngine.GameObject;
    bendFactor: number;
    // fields
  }
}
