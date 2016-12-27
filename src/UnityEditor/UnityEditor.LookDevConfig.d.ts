declare namespace UnityEditor {
  class LookDevConfig extends UnityEngine.ScriptableObject {
    // constructors
    constructor();
    // methods
    UpdateFloatProperty(type: UnityEditor.LookDevProperty, value: number): void;
    UpdateFloatProperty(type: UnityEditor.LookDevProperty, value: number, recordUndo: boolean): void;
    UpdateFloatProperty(property: UnityEditor.LookDevProperty, value: number, recordUndo: boolean, forceLinked: boolean): void;
    UpdateIntProperty(property: UnityEditor.LookDevProperty, value: number): void;
    UpdateIntProperty(property: UnityEditor.LookDevProperty, value: number, recordUndo: boolean): void;
    UpdateIntProperty(property: UnityEditor.LookDevProperty, value: number, recordUndo: boolean, forceLinked: boolean): void;
    GetFloatProperty(property: UnityEditor.LookDevProperty, context: UnityEditor.LookDevEditionContext): number;
    GetIntProperty(property: UnityEditor.LookDevProperty, context: UnityEditor.LookDevEditionContext): number;
    IsPropertyLinked(type: UnityEditor.LookDevProperty): boolean;
    UpdatePropertyLink(property: UnityEditor.LookDevProperty, value: boolean): void;
    GetObjectLoDCount(context: UnityEditor.LookDevEditionContext): number;
    UpdateFocus(context: UnityEditor.LookDevEditionContext): void;
    SetEnabledRecursive(go: any, enabled: boolean): void;
    ResynchronizeObjects(): void;
    UpdateCurrentObjectArray(): void;
    SetCurrentPreviewObject(go: any): boolean;
    SetCurrentPreviewObject(go: any, context: UnityEditor.LookDevEditionContext): void;
    OnEnable(): void;
    OnDestroy(): void;
    Cleanup(): void;
    SetLookDevView(lookDevView: UnityEditor.LookDevView): void;
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
    // fields
  }
}
