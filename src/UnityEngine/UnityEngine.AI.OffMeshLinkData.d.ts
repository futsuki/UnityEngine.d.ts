declare namespace UnityEngine.AI {
  class OffMeshLinkData {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly valid: boolean;
    readonly activated: boolean;
    readonly linkType: UnityEngine.AI.OffMeshLinkType;
    readonly startPos: UnityEngine.Vector3;
    readonly endPos: UnityEngine.Vector3;
    readonly offMeshLink: UnityEngine.AI.OffMeshLink;
    // fields
  }
}
