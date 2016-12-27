declare namespace UnityEditor {
  class BoxEditor extends System.Object {
    // constructors
    constructor(useLossyScale: boolean, controlIdHint: number);
    constructor(useLossyScale: boolean, controlIdHint: number, disableZaxis: boolean);
    // methods
    OnEnable(): void;
    OnDisable(): void;
    SetAlwaysDisplayHandles(enable: boolean): void;
    OnSceneGUI(transform: any, color: any, center: any, size: any): boolean;
    OnSceneGUI(transform: any, color: any, handlesOnly: boolean, center: any, size: any): boolean;
    OnSceneGUI(transform: any, color: any, handlesOnly: boolean, center: any, size: any): boolean;
    OnSceneGUI(transform: any, boxColor: any, midPointHandleColor: any, handlesOnly: boolean, center: any, size: any): boolean;
    // properties
    allowNegativeSize: boolean;
    backfaceAlphaMultiplier: number;
    // fields
    drawMethodForHandles: ((controlID: number, position: any, rotation: any, size: number) => void);
    getHandleSizeMethod: ((arg1: any) => number);
  }
}
