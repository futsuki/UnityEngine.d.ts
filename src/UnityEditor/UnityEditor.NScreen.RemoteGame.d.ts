declare namespace UnityEditor.NScreen {
  class RemoteGame extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    SizeSelectionCallback(indexClicked: number, objectSelected: any): void;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    // properties
    lowResolutionForAspectRatios: boolean;
    readonly forceLowResolutionAspectRatios: boolean;
    readonly showLowResolutionToggle: boolean;
    // fields
    bridge: UnityEngine.NScreenBridge;
    shouldExit: boolean;
    shouldBuild: boolean;
    id: number;
  }
}
