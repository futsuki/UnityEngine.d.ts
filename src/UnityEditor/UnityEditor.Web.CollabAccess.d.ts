declare namespace UnityEditor.Web {
  class CollabAccess extends UnityEditor.Web.CloudServiceAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    EnableService(enabled: boolean): void;
    IsCollabUIAccessible(): boolean;
    // properties
    static readonly Instance: UnityEditor.Web.CollabAccess;
    // fields
  }
}
