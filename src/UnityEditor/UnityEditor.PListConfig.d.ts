declare namespace UnityEditor {
  class PListConfig extends System.Object {
    // constructors
    constructor(fileName: string);
    // methods
    Save(): void;
    Clear(): void;
    // properties
    get_Item(paramName: string): string;
    set_Item(paramName: string, value: string): void;
    // fields
  }
}
