declare namespace UnityEditor {
  class Undo extends System.Object {
    // constructors
    constructor();
    // methods
    static RegisterCompleteObjectUndo(objectToUndo: UnityEngine.Object, name: string): void;
    static RegisterCompleteObjectUndo(objectsToUndo: UnityEngine.Object[], name: string): void;
    static SetTransformParent(transform: any, newParent: any, name: string): void;
    static MoveGameObjectToScene(go: any, scene: any, name: string): void;
    static RegisterCreatedObjectUndo(objectToUndo: UnityEngine.Object, name: string): void;
    static DestroyObjectImmediate(objectToUndo: UnityEngine.Object): void;
    static AddComponent(gameObject: any, type: any): any;
    static RegisterFullObjectHierarchyUndo(objectToUndo: UnityEngine.Object, name: string): void;
    static RegisterFullObjectHierarchyUndo(objectToUndo: UnityEngine.Object): void;
    static RecordObject(objectToUndo: UnityEngine.Object, name: string): void;
    static RecordObjects(objectsToUndo: UnityEngine.Object[], name: string): void;
    static ClearUndo(identifier: UnityEngine.Object): void;
    static PerformUndo(): void;
    static PerformRedo(): void;
    static IncrementCurrentGroup(): void;
    static GetCurrentGroup(): number;
    static GetCurrentGroupName(): string;
    static SetCurrentGroupName(name: string): void;
    static RevertAllInCurrentGroup(): void;
    static RevertAllDownToGroup(group: number): void;
    static CollapseUndoOperations(groupIndex: number): void;
    static RegisterUndo(objectToUndo: UnityEngine.Object, name: string): void;
    static RegisterUndo(objectsToUndo: UnityEngine.Object[], name: string): void;
    static FlushUndoRecordObjects(): void;
    static SetSnapshotTarget(objectToUndo: UnityEngine.Object, name: string): void;
    static SetSnapshotTarget(objectsToUndo: UnityEngine.Object[], name: string): void;
    static ClearSnapshotTarget(): void;
    static CreateSnapshot(): void;
    static RestoreSnapshot(): void;
    static RegisterSnapshot(): void;
    static RegisterSceneUndo(name: string): void;
    // properties
    // fields
    static undoRedoPerformed: (() => void);
    static willFlushUndoRecord: (() => void);
    static postprocessModifications: ((modifications: UnityEditor.UndoPropertyModification[]) => UnityEditor.UndoPropertyModification[]);
  }
}
