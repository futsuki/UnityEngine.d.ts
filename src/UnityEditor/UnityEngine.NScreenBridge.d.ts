declare namespace UnityEngine {
  class NScreenBridge {
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
