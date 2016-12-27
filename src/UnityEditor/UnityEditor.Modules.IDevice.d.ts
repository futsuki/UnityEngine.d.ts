declare namespace UnityEditor.Modules {
  class IDevice {
    // constructors
    protected constructor();
    // methods
    StartRemoteSupport(): UnityEditor.Modules.RemoteAddress;
    StopRemoteSupport(): void;
    StartPlayerConnectionSupport(): UnityEditor.Modules.RemoteAddress;
    StopPlayerConnectionSupport(): void;
    // properties
    // fields
  }
}
