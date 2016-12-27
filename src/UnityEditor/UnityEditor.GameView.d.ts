declare namespace UnityEditor {
  class GameView extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    OnValidate(): void;
    OnEnable(): void;
    OnDisable(): void;
    static RepaintAll(): void;
    IsShowingGizmos(): boolean;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    SizeSelectionCallback(indexClicked: number, objectSelected: any): void;
    // properties
    lowResolutionForAspectRatios: boolean;
    readonly forceLowResolutionAspectRatios: boolean;
    readonly showLowResolutionToggle: boolean;
    maximizeOnPlay: boolean;
    // fields
  }
}
