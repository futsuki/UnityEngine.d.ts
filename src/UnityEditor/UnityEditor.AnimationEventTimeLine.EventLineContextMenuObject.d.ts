declare namespace UnityEditor.AnimationEventTimeLine {
  class EventLineContextMenuObject {
    // constructors
    constructor(animated: any, clip: any, time: number, index: number);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_Animated: any;
    m_Clip: any;
    m_Time: number;
    m_Index: number;
  }
}
