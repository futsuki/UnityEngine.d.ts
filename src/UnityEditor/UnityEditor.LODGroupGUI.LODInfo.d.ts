declare namespace UnityEditor.LODGroupGUI {
  class LODInfo extends System.Object {
    // constructors
    constructor(lodLevel: number, name: string, screenPercentage: number);
    // methods
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
