declare namespace UnityEditor {
  class AInfo extends System.Object {
    // constructors
    constructor(gizmoEnabled: boolean, iconEnabled: boolean, flags: number, classID: number, scriptClass: string);
    // methods
    HasGizmo(): boolean;
    HasIcon(): boolean;
    CompareTo(obj: any): number;
    Equals(other: UnityEditor.AInfo): boolean;
    Equals(obj: any): boolean;
    // properties
    // fields
    m_IconEnabled: boolean;
    m_GizmoEnabled: boolean;
    m_ClassID: number;
    m_ScriptClass: string;
    m_DisplayText: string;
    m_Flags: number;
  }
}
