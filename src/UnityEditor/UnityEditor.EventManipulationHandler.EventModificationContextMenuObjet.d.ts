declare namespace UnityEditor.EventManipulationHandler {
  class EventModificationContextMenuObjet {
    // constructors
    constructor(info: UnityEditor.AnimationClipInfoProperties, time: number, index: number);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_Info: UnityEditor.AnimationClipInfoProperties;
    m_Time: number;
    m_Index: number;
  }
}
