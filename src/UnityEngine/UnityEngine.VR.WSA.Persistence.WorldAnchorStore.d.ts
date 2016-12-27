declare namespace UnityEngine.VR.WSA.Persistence {
  class WorldAnchorStore extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetAsync(onCompleted: ((store: UnityEngine.VR.WSA.Persistence.WorldAnchorStore) => void)): void;
    Save(id: string, anchor: UnityEngine.VR.WSA.WorldAnchor): boolean;
    Load(id: string, go: UnityEngine.GameObject): UnityEngine.VR.WSA.WorldAnchor;
    Delete(id: string): boolean;
    Clear(): void;
    GetAllIds(ids: string[]): number;
    GetAllIds(): string[];
    // properties
    readonly anchorCount: number;
    // fields
  }
}
