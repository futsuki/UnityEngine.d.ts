declare namespace UnityEditorInternal.AudioProfilerDSPView {
  class AudioProfilerDSPWire {
    // constructors
    constructor(source: UnityEditorInternal.AudioProfilerDSPView.AudioProfilerDSPNode, target: UnityEditorInternal.AudioProfilerDSPView.AudioProfilerDSPNode, info: UnityEditorInternal.AudioProfilerDSPInfo);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    source: UnityEditorInternal.AudioProfilerDSPView.AudioProfilerDSPNode;
    target: UnityEditorInternal.AudioProfilerDSPView.AudioProfilerDSPNode;
    info: UnityEditorInternal.AudioProfilerDSPInfo;
    targetPort: number;
  }
}
