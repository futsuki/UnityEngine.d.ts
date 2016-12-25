declare namespace UnityEngine.AI {
  class OffMeshLinkType {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static LinkTypeManual: UnityEngine.AI.OffMeshLinkType;
    static LinkTypeDropDown: UnityEngine.AI.OffMeshLinkType;
    static LinkTypeJumpAcross: UnityEngine.AI.OffMeshLinkType;
  }
}
