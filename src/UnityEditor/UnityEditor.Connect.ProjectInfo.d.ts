declare namespace UnityEditor.Connect {
  class ProjectInfo extends System.ValueType {
    // constructors
    protected constructor();
    // methods
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
