declare namespace UnityEditor.MemoryProfiler {
  class PackedNativeUnityEngineObject {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly isPersistent: boolean;
    readonly isDontDestroyOnLoad: boolean;
    readonly isManager: boolean;
    readonly name: string;
    readonly instanceId: number;
    readonly size: number;
    readonly classId: number;
    readonly hideFlags: any;
    readonly nativeObjectAddress: number;
    // fields
  }
}
