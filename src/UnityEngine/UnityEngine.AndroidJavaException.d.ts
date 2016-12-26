declare namespace UnityEngine {
  class AndroidJavaException {
    // constructors
    private constructor();
    // methods
    GetBaseException(): any;
    GetObjectData(info: any, context: any): void;
    ToString(): string;
    GetType(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    readonly StackTrace: string;
    readonly InnerException: any;
    HelpLink: string;
    readonly Message: string;
    Source: string;
    readonly TargetSite: any;
    readonly Data: any;
    // fields
  }
}
