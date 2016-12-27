declare namespace UnityEngine {
  class NScreenBridge extends UnityEngine.Object {
    // constructors
    constructor();
    // methods
    InitServer(id: number): void;
    Update(): void;
    StartWatchdogForPid(pid: number): void;
    SetResolution(x: number, y: number): void;
    SetInput(x: number, y: number, button: number, key: number, type: number): void;
    ResetInput(): void;
    GetScreenTexture(): any;
    Shutdown(): void;
    // properties
    // fields
  }
}
