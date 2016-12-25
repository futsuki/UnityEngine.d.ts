declare namespace UnityEditor {
  class Undo {
    // constructors
    constructor();
    // methods
    static RegisterCompleteObjectUndo(objectToUndo: any, name: string): any;
    static RegisterCompleteObjectUndo(objectsToUndo: any[], name: string): any;
    static SetTransformParent(transform: any, newParent: any, name: string): any;
    static MoveGameObjectToScene(go: any, scene: any, name: string): any;
    static RegisterCreatedObjectUndo(objectToUndo: any, name: string): any;
    static DestroyObjectImmediate(objectToUndo: any): any;
    static AddComponent(gameObject: any, type: any): any;
    static RegisterFullObjectHierarchyUndo(objectToUndo: any, name: string): any;
    static RegisterFullObjectHierarchyUndo(objectToUndo: any): any;
    static RecordObject(objectToUndo: any, name: string): any;
    static RecordObjects(objectsToUndo: any[], name: string): any;
    static ClearUndo(identifier: any): any;
    static PerformUndo(): any;
    static PerformRedo(): any;
    static IncrementCurrentGroup(): any;
    static GetCurrentGroup(): number;
    static GetCurrentGroupName(): string;
    static SetCurrentGroupName(name: string): any;
    static RevertAllInCurrentGroup(): any;
    static RevertAllDownToGroup(group: number): any;
    static CollapseUndoOperations(groupIndex: number): any;
    static RegisterUndo(objectToUndo: any, name: string): any;
    static RegisterUndo(objectsToUndo: any[], name: string): any;
    static FlushUndoRecordObjects(): any;
    static SetSnapshotTarget(objectToUndo: any, name: string): any;
    static SetSnapshotTarget(objectsToUndo: any[], name: string): any;
    static ClearSnapshotTarget(): any;
    static CreateSnapshot(): any;
    static RestoreSnapshot(): any;
    static RegisterSnapshot(): any;
    static RegisterSceneUndo(name: string): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    static undoRedoPerformed: UnityEditor.Undo.UndoRedoCallback;
    static willFlushUndoRecord: UnityEditor.Undo.WillFlushUndoRecord;
    static postprocessModifications: UnityEditor.Undo.PostprocessModifications;
  }
}
