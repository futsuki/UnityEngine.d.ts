declare namespace UnityEditor {
  class MenuUtils extends System.Object {
    // constructors
    constructor();
    // methods
    static MenuCallback(callbackObject: any): void;
    static ExtractSubMenuWithPath(path: string, menu: UnityEditor.GenericMenu, replacementPath: string, temporaryContext: UnityEngine.Object[]): void;
    static ExtractMenuItemWithPath(menuString: string, menu: UnityEditor.GenericMenu, replacementMenuString: string, temporaryContext: UnityEngine.Object[], userData: number, onBeforeExecuteCallback: ((arg1: string, arg2: UnityEngine.Object[], arg3: number) => void), onAfterExecuteCallback: ((arg1: string, arg2: UnityEngine.Object[], arg3: number) => void)): void;
    // properties
    // fields
  }
}
