declare namespace UnityEngine.VR.WSA.Persistence {
  class WorldAnchorStore {
    // constructors
    private constructor();
    // methods
    static GetAsync(onCompleted: ((UnityEngine.VR.WSA.Persistence.WorldAnchorStore) => void)): void;
    Save(id: string, anchor: UnityEngine.VR.WSA.WorldAnchor): boolean;
    Load(id: string, go: UnityEngine.GameObject): UnityEngine.VR.WSA.WorldAnchor;
    Delete(id: string): boolean;
    Clear(): void;
    GetAllIds(ids: string[]): number;
    GetAllIds(): string[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly anchorCount: number;
    // fields
  }
}
