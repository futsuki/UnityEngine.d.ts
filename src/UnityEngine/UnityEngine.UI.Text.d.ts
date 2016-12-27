declare namespace UnityEngine.UI {
  class Text {
    // constructors
    private constructor();
    // methods
    FontTextureChanged(): void;
    GetGenerationSettings(extents: UnityEngine.Vector2): UnityEngine.TextGenerationSettings;
    static GetTextAnchorPivot(anchor: UnityEngine.TextAnchor): UnityEngine.Vector2;
    CalculateLayoutInputHorizontal(): void;
    CalculateLayoutInputVertical(): void;
    OnRebuildRequested(): void;
    GetModifiedMaterial(baseMaterial: UnityEngine.Material): UnityEngine.Material;
    Cull(clipRect: UnityEngine.Rect, validRect: boolean): void;
    SetClipRect(clipRect: UnityEngine.Rect, validRect: boolean): void;
    ParentMaskStateChanged(): void;
    RecalculateClipping(): void;
    RecalculateMasking(): void;
    SetAllDirty(): void;
    SetLayoutDirty(): void;
    SetVerticesDirty(): void;
    SetMaterialDirty(): void;
    Rebuild(update: UnityEngine.UI.CanvasUpdate): void;
    LayoutComplete(): void;
    GraphicUpdateComplete(): void;
    SetNativeSize(): void;
    Raycast(sp: UnityEngine.Vector2, eventCamera: UnityEngine.Camera): boolean;
    PixelAdjustPoint(point: UnityEngine.Vector2): UnityEngine.Vector2;
    GetPixelAdjustedRect(): UnityEngine.Rect;
    CrossFadeColor(targetColor: UnityEngine.Color, duration: number, ignoreTimeScale: boolean, useAlpha: boolean): void;
    CrossFadeColor(targetColor: UnityEngine.Color, duration: number, ignoreTimeScale: boolean, useAlpha: boolean, useRGB: boolean): void;
    CrossFadeAlpha(alpha: number, duration: number, ignoreTimeScale: boolean): void;
    RegisterDirtyLayoutCallback(action: (() => void)): void;
    UnregisterDirtyLayoutCallback(action: (() => void)): void;
    RegisterDirtyVerticesCallback(action: (() => void)): void;
    UnregisterDirtyVerticesCallback(action: (() => void)): void;
    RegisterDirtyMaterialCallback(action: (() => void)): void;
    UnregisterDirtyMaterialCallback(action: (() => void)): void;
    IsActive(): boolean;
    IsDestroyed(): boolean;
    Invoke(methodName: string, time: number): void;
    InvokeRepeating(methodName: string, time: number, repeatRate: number): void;
    CancelInvoke(): void;
    CancelInvoke(methodName: string): void;
    IsInvoking(methodName: string): boolean;
    IsInvoking(): boolean;
    StartCoroutine(routine: any): UnityEngine.Coroutine;
    StartCoroutine_Auto(routine: any): UnityEngine.Coroutine;
    StartCoroutine(methodName: string, value: any): UnityEngine.Coroutine;
    StartCoroutine(methodName: string): UnityEngine.Coroutine;
    StopCoroutine(methodName: string): void;
    StopCoroutine(routine: any): void;
    StopCoroutine(routine: UnityEngine.Coroutine): void;
    StopAllCoroutines(): void;
    GetComponent(type: any): UnityEngine.Component;
    GetComponent(type: string): UnityEngine.Component;
    GetComponentInChildren(t: any, includeInactive: boolean): UnityEngine.Component;
    GetComponentInChildren(t: any): UnityEngine.Component;
    GetComponentsInChildren(t: any): UnityEngine.Component[];
    GetComponentsInChildren(t: any, includeInactive: boolean): UnityEngine.Component[];
    GetComponentInParent(t: any): UnityEngine.Component;
    GetComponentsInParent(t: any): UnityEngine.Component[];
    GetComponentsInParent(t: any, includeInactive: boolean): UnityEngine.Component[];
    GetComponents(type: any): UnityEngine.Component[];
    GetComponents(type: any, results: any): void;
    CompareTag(tag: string): boolean;
    SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
    SendMessageUpwards(methodName: string, value: any): void;
    SendMessageUpwards(methodName: string): void;
    SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions): void;
    SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
    SendMessage(methodName: string, value: any): void;
    SendMessage(methodName: string): void;
    SendMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
    BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions): void;
    BroadcastMessage(methodName: string, parameter: any): void;
    BroadcastMessage(methodName: string): void;
    BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly cachedTextGenerator: UnityEngine.TextGenerator;
    readonly cachedTextGeneratorForLayout: UnityEngine.TextGenerator;
    readonly mainTexture: UnityEngine.Texture;
    font: UnityEngine.Font;
    text: string;
    supportRichText: boolean;
    resizeTextForBestFit: boolean;
    resizeTextMinSize: number;
    resizeTextMaxSize: number;
    alignment: UnityEngine.TextAnchor;
    alignByGeometry: boolean;
    fontSize: number;
    horizontalOverflow: UnityEngine.HorizontalWrapMode;
    verticalOverflow: UnityEngine.VerticalWrapMode;
    lineSpacing: number;
    fontStyle: UnityEngine.FontStyle;
    readonly pixelsPerUnit: number;
    readonly minWidth: number;
    readonly preferredWidth: number;
    readonly flexibleWidth: number;
    readonly minHeight: number;
    readonly preferredHeight: number;
    readonly flexibleHeight: number;
    readonly layoutPriority: number;
    onCullStateChanged: UnityEngine.UI.MaskableGraphic.CullStateChangedEvent;
    maskable: boolean;
    color: UnityEngine.Color;
    raycastTarget: boolean;
    readonly depth: number;
    readonly rectTransform: UnityEngine.RectTransform;
    readonly canvas: UnityEngine.Canvas;
    readonly canvasRenderer: UnityEngine.CanvasRenderer;
    readonly defaultMaterial: UnityEngine.Material;
    material: UnityEngine.Material;
    readonly materialForRendering: UnityEngine.Material;
    useGUILayout: boolean;
    runInEditMode: boolean;
    enabled: boolean;
    readonly isActiveAndEnabled: boolean;
    readonly transform: UnityEngine.Transform;
    readonly gameObject: UnityEngine.GameObject;
    tag: string;
    readonly rigidbody: UnityEngine.Component;
    readonly rigidbody2D: UnityEngine.Component;
    readonly camera: UnityEngine.Component;
    readonly light: UnityEngine.Component;
    readonly animation: UnityEngine.Component;
    readonly constantForce: UnityEngine.Component;
    readonly renderer: UnityEngine.Component;
    readonly audio: UnityEngine.Component;
    readonly guiText: UnityEngine.Component;
    readonly networkView: UnityEngine.Component;
    readonly guiElement: UnityEngine.Component;
    readonly guiTexture: UnityEngine.Component;
    readonly collider: UnityEngine.Component;
    readonly collider2D: UnityEngine.Component;
    readonly hingeJoint: UnityEngine.Component;
    readonly particleEmitter: UnityEngine.Component;
    readonly particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
