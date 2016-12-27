declare namespace UnityEngine.VR.WSA.Sharing {
  class WorldAnchorTransferBatch {
    // constructors
    constructor();
    // methods
    static ExportAsync(transferBatch: UnityEngine.VR.WSA.Sharing.WorldAnchorTransferBatch, onDataAvailable: ((number[]) => void), onCompleted: ((UnityEngine.VR.WSA.Sharing.SerializationCompletionReason) => void)): void;
    static ImportAsync(serializedData: number[], onComplete: ((UnityEngine.VR.WSA.Sharing.SerializationCompletionReason, UnityEngine.VR.WSA.Sharing.WorldAnchorTransferBatch) => void)): void;
    static ImportAsync(serializedData: number[], offset: number, length: number, onComplete: ((UnityEngine.VR.WSA.Sharing.SerializationCompletionReason, UnityEngine.VR.WSA.Sharing.WorldAnchorTransferBatch) => void)): void;
    AddWorldAnchor(id: string, anchor: UnityEngine.VR.WSA.WorldAnchor): boolean;
    GetAllIds(ids: string[]): number;
    GetAllIds(): string[];
    LockObject(id: string, go: UnityEngine.GameObject): UnityEngine.VR.WSA.WorldAnchor;
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly anchorCount: number;
    // fields
  }
}
