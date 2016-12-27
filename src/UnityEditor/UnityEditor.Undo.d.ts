declare namespace UnityEditor {
  class Undo {
    // constructors
    constructor();
    // methods
    static RegisterCompleteObjectUndo(objectToUndo: any, name: string): void;
    static RegisterCompleteObjectUndo(objectsToUndo: any[], name: string): void;
    static SetTransformParent(transform: any, newParent: any, name: string): void;
    static MoveGameObjectToScene(go: any, scene: any, name: string): void;
    static RegisterCreatedObjectUndo(objectToUndo: any, name: string): void;
    static DestroyObjectImmediate(objectToUndo: any): void;
    static AddComponent(gameObject: any, type: any): any;
    static RegisterFullObjectHierarchyUndo(objectToUndo: any, name: string): void;
    static RegisterFullObjectHierarchyUndo(objectToUndo: any): void;
    static RecordObject(objectToUndo: any, name: string): void;
    static RecordObjects(objectsToUndo: any[], name: string): void;
    static ClearUndo(identifier: any): void;
    static PerformUndo(): void;
    static PerformRedo(): void;
    static IncrementCurrentGroup(): void;
    static GetCurrentGroup(): number;
    static GetCurrentGroupName(): string;
    static SetCurrentGroupName(name: string): void;
    static RevertAllInCurrentGroup(): void;
    static RevertAllDownToGroup(group: number): void;
    static CollapseUndoOperations(groupIndex: number): void;
    static RegisterUndo(objectToUndo: any, name: string): void;
    static RegisterUndo(objectsToUndo: any[], name: string): void;
    static FlushUndoRecordObjects(): void;
    static SetSnapshotTarget(objectToUndo: any, name: string): void;
    static SetSnapshotTarget(objectsToUndo: any[], name: string): void;
    static ClearSnapshotTarget(): void;
    static CreateSnapshot(): void;
    static RestoreSnapshot(): void;
    static RegisterSnapshot(): void;
    static RegisterSceneUndo(name: string): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static undoRedoPerformed: (() => void);
    static willFlushUndoRecord: (() => void);
    static postprocessModifications: ((UnityEditor.UndoPropertyModification[]) => UnityEditor.UndoPropertyModification[]);
  }
}
