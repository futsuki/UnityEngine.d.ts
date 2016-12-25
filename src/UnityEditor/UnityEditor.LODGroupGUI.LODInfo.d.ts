declare namespace UnityEditor.LODGroupGUI {
  class LODInfo {
    // constructors
    constructor(lodLevel: number, name: string, screenPercentage: number);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly LODLevel: number;
    readonly LODName: string;
    RawScreenPercent: number;
    ScreenPercent: number;
    // fields
    m_ButtonPosition: any;
    m_RangePosition: any;
  }
}
