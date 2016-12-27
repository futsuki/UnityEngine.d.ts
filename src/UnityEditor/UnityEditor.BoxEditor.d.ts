declare namespace UnityEditor {
  class BoxEditor {
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
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    allowNegativeSize: boolean;
    backfaceAlphaMultiplier: number;
    // fields
    drawMethodForHandles: ((number, any, any, number) => void);
    getHandleSizeMethod: ((any) => number);
  }
}
