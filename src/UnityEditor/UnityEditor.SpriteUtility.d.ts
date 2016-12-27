declare namespace UnityEditor {
  class SpriteUtility extends System.Object {
    // constructors
    protected constructor();
    // methods
    static OnSceneDrag(sceneView: UnityEditor.SceneView): void;
    static GetSpriteFromPathsOrObjects(objects: UnityEngine.Object[], paths: string[], currentEventType: any): any[];
    static GetSpritesFromDraggedObjects(): any[];
    static CreateDragGO(frame: any, position: any): any;
    static AddAnimationToGO(go: any, frames: any[]): void;
    static DropSpriteToSceneToCreateGO(sprite: any, position: any): any;
    static RemapObjectToSprite(obj: UnityEngine.Object): any;
    static TextureToSprites(tex: any): any[];
    static TextureToSprite(tex: any): any;
    // properties
    // fields
  }
}
