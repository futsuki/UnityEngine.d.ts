declare namespace UnityEditor.Web {
  class CollabAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    EnableService(enabled: boolean): void;
    IsCollabUIAccessible(): boolean;
    IsServiceEnabled(): boolean;
    OnProjectUnbound(): void;
    ShowServicePage(): void;
    GoBackToHub(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly Instance: UnityEditor.Web.CollabAccess;
    // fields
  }
}
