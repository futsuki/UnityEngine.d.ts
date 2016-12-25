declare namespace UnityEditor {
  class LookDevContext {
    // constructors
    constructor();
    // methods
    GetProperty(property: UnityEditor.LookDevProperty): UnityEditor.LookDevContext.LookDevPropertyValue;
    UpdateProperty(property: UnityEditor.LookDevProperty, value: number): any;
    UpdateProperty(property: UnityEditor.LookDevProperty, value: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly exposureValue: number;
    envRotation: number;
    currentHDRIIndex: number;
    readonly shadingMode: number;
    readonly lodIndex: number;
    // fields
  }
}
