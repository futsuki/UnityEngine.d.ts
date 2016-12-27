declare namespace UnityEditorInternal {
  class DopeSheetEditor extends UnityEditor.TimeArea {
    // constructors
    constructor(owner: UnityEditor.EditorWindow);
    // methods
    OnDisable(): void;
    OnGUI(position: any, scrollPosition: any): void;
    Init(): void;
    RecalculateBounds(): void;
    DrawMasterDopelineBackground(position: any): void;
    FrameClip(): void;
    FrameSelected(): void;
    UpdateCurves(changedCurves: UnityEditor.ChangedCurve[], undoText: string): void;
    // properties
    readonly contentHeight: number;
    readonly drawingBounds: any;
    readonly selectionBounds: any;
    readonly isDragging: boolean;
    // fields
    state: UnityEditorInternal.AnimationWindowState;
    m_Owner: UnityEditor.EditorWindow;
    m_Bounds: any;
    m_SpritePreviewLoading: boolean;
    m_SpritePreviewCacheSize: number;
  }
}
