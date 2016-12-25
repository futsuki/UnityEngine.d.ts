declare namespace UnityEditor.ShadowCascadeSplitGUI {
  class DragCache {
    // constructors
    constructor(activePartition: number, normalizedPartitionSize: number, currentMousePos: any);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_ActivePartition: number;
    m_NormalizedPartitionSize: number;
    m_LastCachedMousePosition: any;
  }
}
