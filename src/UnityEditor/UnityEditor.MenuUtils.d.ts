declare namespace UnityEditor {
  class MenuUtils {
    // constructors
    constructor();
    // methods
    static MenuCallback(callbackObject: any): any;
    static ExtractSubMenuWithPath(path: string, menu: UnityEditor.GenericMenu, replacementPath: string, temporaryContext: any[]): any;
    static ExtractMenuItemWithPath(menuString: string, menu: UnityEditor.GenericMenu, replacementMenuString: string, temporaryContext: any[], userData: number, onBeforeExecuteCallback: any, onAfterExecuteCallback: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
