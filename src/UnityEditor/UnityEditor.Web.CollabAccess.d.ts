declare namespace UnityEditor.Web {
  class CollabAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    EnableService(enabled: boolean): any;
    IsCollabUIAccessible(): boolean;
    IsServiceEnabled(): boolean;
    OnProjectUnbound(): any;
    ShowServicePage(): any;
    GoBackToHub(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly Instance: UnityEditor.Web.CollabAccess;
    // fields
  }
}
