declare namespace UnityEngine {
  class NScreenBridge {
    // constructors
    constructor();
    // methods
    InitServer(id: number): any;
    Update(): any;
    StartWatchdogForPid(pid: number): any;
    SetResolution(x: number, y: number): any;
    SetInput(x: number, y: number, button: number, key: number, type: number): any;
    ResetInput(): any;
    GetScreenTexture(): any;
    Shutdown(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: any;
    // fields
  }
}
