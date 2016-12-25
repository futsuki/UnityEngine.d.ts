declare namespace UnityEditorInternal {
  class AudioProfilerGroupInfo {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    assetInstanceId: number;
    objectInstanceId: number;
    assetNameOffset: number;
    objectNameOffset: number;
    parentId: number;
    uniqueId: number;
    flags: number;
    playCount: number;
    distanceToListener: number;
    volume: number;
    audibility: number;
    minDist: number;
    maxDist: number;
    time: number;
    duration: number;
    frequency: number;
  }
}
