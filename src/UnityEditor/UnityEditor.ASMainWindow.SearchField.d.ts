declare namespace UnityEditor.ASMainWindow {
  class SearchField {
    // constructors
    constructor();
    // methods
    DoGUI(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly FilterText: string;
    Show: boolean;
    // fields
  }
}
