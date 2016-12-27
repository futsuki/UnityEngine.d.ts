declare namespace UnityEditor.Web {
  class ErrorHubAccess extends UnityEditor.Web.CloudServiceAccess {
    // constructors
    constructor();
    // methods
    GetServiceName(): string;
    // properties
    static readonly instance: UnityEditor.Web.ErrorHubAccess;
    errorMessage: string;
    // fields
    static kServiceName: string;
  }
}
