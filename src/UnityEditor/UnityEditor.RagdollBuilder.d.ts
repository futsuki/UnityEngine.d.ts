declare namespace UnityEditor {
  class RagdollBuilder {
    // constructors
    constructor();
    // methods
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
