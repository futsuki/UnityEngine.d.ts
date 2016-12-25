declare namespace UnityEditorInternal.AudioProfilerDSPView {
  class AudioProfilerDSPNode {
    // constructors
    constructor(firstTarget: UnityEditorInternal.AudioProfilerDSPView.AudioProfilerDSPNode, info: UnityEditorInternal.AudioProfilerDSPInfo, x: number, y: number, level: number);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    firstTarget: UnityEditorInternal.AudioProfilerDSPView.AudioProfilerDSPNode;
    info: UnityEditorInternal.AudioProfilerDSPInfo;
    x: number;
    y: number;
    level: number;
    maxY: number;
    targetPort: number;
    audible: boolean;
  }
}
