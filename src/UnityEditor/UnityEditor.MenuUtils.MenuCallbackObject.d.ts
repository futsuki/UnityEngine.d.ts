declare namespace UnityEditor.MenuUtils {
  class MenuCallbackObject extends System.Object {
    // constructors
    constructor();
    // methods
    // properties
    // fields
    menuItemPath: string;
    temporaryContext: UnityEngine.Object[];
    onBeforeExecuteCallback: ((arg1: string, arg2: UnityEngine.Object[], arg3: number) => void);
    onAfterExecuteCallback: ((arg1: string, arg2: UnityEngine.Object[], arg3: number) => void);
    userData: number;
  }
}
