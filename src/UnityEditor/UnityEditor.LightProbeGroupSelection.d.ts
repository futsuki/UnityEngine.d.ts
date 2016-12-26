declare namespace UnityEditor {
  class LightProbeGroupSelection {
    // constructors
    constructor();
    // methods
    SetDirty(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: any;
    // fields
    m_Selection: any;
  }
}
