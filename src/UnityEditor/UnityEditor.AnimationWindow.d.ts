declare namespace UnityEditor {
  class AnimationWindow {
    // constructors
    constructor();
    // methods
    static GetAllAnimationWindows(): any;
    ForceRefresh(): any;
    OnEnable(): any;
    OnDisable(): any;
    OnDestroy(): any;
    Update(): any;
    OnGUI(): any;
    OnSelectionChange(): any;
    OnFocus(): any;
    OnControllerChange(): any;
    OnLostFocus(): any;
    EditGameObject(gameObject: any): any;
    EditAnimationClip(animationClip: any, sourceObject: any): any;
    BeginWindows(): any;
    EndWindows(): any;
    ShowNotification(notification: any): any;
    RemoveNotification(): any;
    ShowTab(): any;
    Focus(): any;
    ShowUtility(): any;
    ShowPopup(): any;
    ShowAsDropDown(buttonRect: any, windowSize: any): any;
    Show(): any;
    Show(immediateDisplay: boolean): any;
    ShowAuxWindow(): any;
    Close(): any;
    Repaint(): any;
    SendEvent(e: any): boolean;
    SetDirty(): any;
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
