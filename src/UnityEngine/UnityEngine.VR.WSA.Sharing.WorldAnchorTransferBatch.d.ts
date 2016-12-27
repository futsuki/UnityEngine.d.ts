declare namespace UnityEngine.VR.WSA.Sharing {
  class WorldAnchorTransferBatch extends System.Object {
    // constructors
    constructor();
    // methods
    static ExportAsync(transferBatch: UnityEngine.VR.WSA.Sharing.WorldAnchorTransferBatch, onDataAvailable: ((data: number[]) => void), onCompleted: ((completionReason: UnityEngine.VR.WSA.Sharing.SerializationCompletionReason) => void)): void;
    static ImportAsync(serializedData: number[], onComplete: ((completionReason: UnityEngine.VR.WSA.Sharing.SerializationCompletionReason, deserializedTransferBatch: UnityEngine.VR.WSA.Sharing.WorldAnchorTransferBatch) => void)): void;
    static ImportAsync(serializedData: number[], offset: number, length: number, onComplete: ((completionReason: UnityEngine.VR.WSA.Sharing.SerializationCompletionReason, deserializedTransferBatch: UnityEngine.VR.WSA.Sharing.WorldAnchorTransferBatch) => void)): void;
    AddWorldAnchor(id: string, anchor: UnityEngine.VR.WSA.WorldAnchor): boolean;
    GetAllIds(ids: string[]): number;
    GetAllIds(): string[];
    LockObject(id: string, go: UnityEngine.GameObject): UnityEngine.VR.WSA.WorldAnchor;
    Dispose(): void;
    // properties
    readonly anchorCount: number;
    // fields
  }
}
