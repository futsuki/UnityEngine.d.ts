declare namespace UnityEditor.Connect {
  class ProjectInfo {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    readonly valid: boolean;
    readonly buildAllowed: boolean;
    readonly projectBound: boolean;
    readonly projectGUID: string;
    readonly projectName: string;
    readonly organizationId: string;
    readonly organizationName: string;
    readonly organizationForeignKey: string;
    readonly COPPA: UnityEditor.Connect.COPPACompliance;
    readonly coppaLock: boolean;
    readonly moveLock: boolean;
    // fields
  }
}
