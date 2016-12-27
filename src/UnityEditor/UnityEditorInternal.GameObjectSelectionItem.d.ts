declare namespace UnityEditorInternal {
  class GameObjectSelectionItem extends UnityEditorInternal.AnimationWindowSelectionItem {
    // constructors
    constructor();
    // methods
    static Create(gameObject: any): UnityEditorInternal.GameObjectSelectionItem;
    Synchronize(): void;
    // properties
    animationClip: any;
    // fields
  }
}
