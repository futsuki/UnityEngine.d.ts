declare namespace UnityEditor.Web {
  class UnetAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
    SetMultiplayerId(id: number): any;
    IsServiceEnabled(): boolean;
    EnableService(enabled: boolean): any;
    OnProjectUnbound(): any;
    ShowServicePage(): any;
    GoBackToHub(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
