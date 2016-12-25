declare namespace UnityEditor.Web {
  class ErrorHubAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    GetServiceDisplayName(): string;
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
    static readonly instance: UnityEditor.Web.ErrorHubAccess;
    errorMessage: string;
    // fields
    static kServiceName: string;
  }
}
