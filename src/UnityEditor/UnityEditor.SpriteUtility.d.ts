declare namespace UnityEditor {
  class SpriteUtility {
    // constructors
    private constructor();
    // methods
    static OnSceneDrag(sceneView: UnityEditor.SceneView): any;
    static GetSpriteFromPathsOrObjects(objects: any[], paths: string[], currentEventType: any): any[];
    static GetSpritesFromDraggedObjects(): any[];
    static CreateDragGO(frame: any, position: any): any;
    static AddAnimationToGO(go: any, frames: any[]): any;
    static DropSpriteToSceneToCreateGO(sprite: any, position: any): any;
    static RemapObjectToSprite(obj: any): any;
    static TextureToSprites(tex: any): any[];
    static TextureToSprite(tex: any): any;
    // properties
    // fields
  }
}
