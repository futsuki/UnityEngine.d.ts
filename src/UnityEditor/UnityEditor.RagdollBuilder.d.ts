declare namespace UnityEditor {
  class RagdollBuilder {
    // constructors
    constructor();
    // methods
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
    helpString: string;
    errorString: string;
    createButtonName: string;
    otherButtonName: string;
    isValid: boolean;
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
    pelvis: any;
    leftHips: any;
    leftKnee: any;
    leftFoot: any;
    rightHips: any;
    rightKnee: any;
    rightFoot: any;
    leftArm: any;
    leftElbow: any;
    rightArm: any;
    rightElbow: any;
    middleSpine: any;
    head: any;
    totalMass: number;
    strength: number;
    flipForward: boolean;
  }
}
