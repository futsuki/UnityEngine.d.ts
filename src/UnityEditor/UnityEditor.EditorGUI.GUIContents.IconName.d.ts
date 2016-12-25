declare namespace UnityEditor.EditorGUI.GUIContents {
  class IconName {
    // constructors
    constructor(name: string);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly name: string;
    readonly TypeId: any;
    // fields
  }
}
