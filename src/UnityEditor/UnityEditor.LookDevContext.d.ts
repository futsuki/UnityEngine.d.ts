declare namespace UnityEditor {
  class LookDevContext extends System.Object {
    // constructors
    constructor();
    // methods
    GetProperty(property: UnityEditor.LookDevProperty): UnityEditor.LookDevContext.LookDevPropertyValue;
    UpdateProperty(property: UnityEditor.LookDevProperty, value: number): void;
    UpdateProperty(property: UnityEditor.LookDevProperty, value: number): void;
    // properties
    readonly exposureValue: number;
    envRotation: number;
    currentHDRIIndex: number;
    readonly shadingMode: number;
    readonly lodIndex: number;
    // fields
  }
}
