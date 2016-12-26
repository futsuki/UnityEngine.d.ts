declare namespace UnityEditor {
  class GUISlideGroup {
    // constructors
    constructor();
    // methods
    Begin(): void;
    End(): void;
    Reset(): void;
    BeginHorizontal(id: number, options: any[]): any;
    EndHorizontal(): void;
    GetRect(id: number, r: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
