declare namespace UnityEditor {
  class AnimationWindow {
    // constructors
    constructor();
    // methods
    static GetAllAnimationWindows(): any;
    ForceRefresh(): void;
    OnEnable(): void;
    OnDisable(): void;
    OnDestroy(): void;
    Update(): void;
    OnGUI(): void;
    OnSelectionChange(): void;
    OnFocus(): void;
    OnControllerChange(): void;
    OnLostFocus(): void;
    EditGameObject(gameObject: any): void;
    EditAnimationClip(animationClip: any, sourceObject: any): void;
    BeginWindows(): void;
    EndWindows(): void;
    ShowNotification(notification: any): void;
    RemoveNotification(): void;
    ShowTab(): void;
    Focus(): void;
    ShowUtility(): void;
    ShowPopup(): void;
    ShowAsDropDown(buttonRect: any, windowSize: any): void;
    Show(): void;
    Show(immediateDisplay: boolean): void;
    ShowAuxWindow(): void;
    Close(): void;
    Repaint(): void;
    SendEvent(e: any): boolean;
    SetDirty(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    wantsMouseMove: boolean;
    autoRepaintOnSceneChange: boolean;
    maximized: boolean;
    minSize: any;
    maxSize: any;
    title: string;
    titleContent: any;
    depthBufferBits: number;
    antiAlias: number;
    position: any;
    name: string;
    hideFlags: any;
    // fields
  }
}
