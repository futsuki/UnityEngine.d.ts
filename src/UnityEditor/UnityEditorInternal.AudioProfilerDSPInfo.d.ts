declare namespace UnityEditorInternal {
  class AudioProfilerDSPInfo {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    id: number;
    target: number;
    targetPort: number;
    numChannels: number;
    nameOffset: number;
    weight: number;
    cpuLoad: number;
    level1: number;
    level2: number;
    numLevels: number;
    flags: number;
  }
}
