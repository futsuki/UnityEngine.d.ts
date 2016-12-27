declare namespace UnityEditor {
  class MenuUtils {
    // constructors
    constructor();
    // methods
    static MenuCallback(callbackObject: any): void;
    static ExtractSubMenuWithPath(path: string, menu: UnityEditor.GenericMenu, replacementPath: string, temporaryContext: any[]): void;
    static ExtractMenuItemWithPath(menuString: string, menu: UnityEditor.GenericMenu, replacementMenuString: string, temporaryContext: any[], userData: number, onBeforeExecuteCallback: ((string, any[], number) => void), onAfterExecuteCallback: ((string, any[], number) => void)): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
