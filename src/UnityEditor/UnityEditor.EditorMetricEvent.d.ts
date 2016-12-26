declare namespace UnityEditor {
  class EditorMetricEvent {
    // constructors
    constructor(en: UnityEditor.EditorMetricCollectionType);
    // methods
    Send(): void;
    Dispose(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
