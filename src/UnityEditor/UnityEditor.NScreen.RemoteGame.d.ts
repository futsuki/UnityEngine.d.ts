declare namespace UnityEditor.NScreen {
  class RemoteGame {
    // constructors
    constructor();
    // methods
    SizeSelectionCallback(indexClicked: number, objectSelected: any): any;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): any;
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
    lowResolutionForAspectRatios: boolean;
    readonly forceLowResolutionAspectRatios: boolean;
    readonly showLowResolutionToggle: boolean;
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
    bridge: UnityEngine.NScreenBridge;
    shouldExit: boolean;
    shouldBuild: boolean;
    id: number;
  }
}
