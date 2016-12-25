declare namespace UnityEditor {
  class LookDevConfig {
    // constructors
    constructor();
    // methods
    UpdateFloatProperty(type: UnityEditor.LookDevProperty, value: number): any;
    UpdateFloatProperty(type: UnityEditor.LookDevProperty, value: number, recordUndo: boolean): any;
    UpdateIntProperty(property: UnityEditor.LookDevProperty, value: number): any;
    UpdateIntProperty(property: UnityEditor.LookDevProperty, value: number, recordUndo: boolean): any;
    GetFloatProperty(property: UnityEditor.LookDevProperty, context: UnityEditor.LookDevEditionContext): number;
    GetIntProperty(property: UnityEditor.LookDevProperty, context: UnityEditor.LookDevEditionContext): number;
    UpdateFloatProperty(property: UnityEditor.LookDevProperty, value: number, recordUndo: boolean, forceLinked: boolean): any;
    UpdateIntProperty(property: UnityEditor.LookDevProperty, value: number, recordUndo: boolean, forceLinked: boolean): any;
    IsPropertyLinked(type: UnityEditor.LookDevProperty): boolean;
    UpdatePropertyLink(property: UnityEditor.LookDevProperty, value: boolean): any;
    GetObjectLoDCount(context: UnityEditor.LookDevEditionContext): number;
    UpdateFocus(context: UnityEditor.LookDevEditionContext): any;
    SetEnabledRecursive(go: any, enabled: boolean): any;
    ResynchronizeObjects(): any;
    UpdateCurrentObjectArray(): any;
    SetCurrentPreviewObject(go: any): boolean;
    SetCurrentPreviewObject(go: any, context: UnityEditor.LookDevEditionContext): any;
    OnEnable(): any;
    OnDestroy(): any;
    Cleanup(): any;
    SetLookDevView(lookDevView: UnityEditor.LookDevView): any;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    enableShadowCubemap: boolean;
    sideBySideCameraLinked: boolean;
    readonly currentEditionContextIndex: number;
    readonly currentEditionContext: UnityEditor.LookDevEditionContext;
    dualViewBlendFactor: number;
    gizmo: UnityEditor.GizmoInfo;
    readonly lookDevContexts: UnityEditor.LookDevContext[];
    readonly currentLookDevContext: UnityEditor.LookDevContext;
    readonly currentObject: any[];
    readonly cameraState: UnityEditor.CameraState[];
    cameraStateCommon: UnityEditor.CameraState;
    cameraStateLeft: UnityEditor.CameraState;
    cameraStateRight: UnityEditor.CameraState;
    lookDevMode: UnityEditor.LookDevMode;
    enableToneMap: boolean;
    allowDifferentObjects: boolean;
    exposureRange: number;
    shadowDistance: number;
    showBalls: boolean;
    showControlWindows: boolean;
    rotateObjectMode: boolean;
    objRotationSpeed: number;
    rotateEnvMode: boolean;
    envRotationSpeed: number;
    name: string;
    hideFlags: any;
    // fields
  }
}
