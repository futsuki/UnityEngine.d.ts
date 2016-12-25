declare namespace UnityEditor.Collaboration.Collab {
  class CollabStateID {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static None: UnityEditor.Collaboration.Collab.CollabStateID;
    static Uninitialized: UnityEditor.Collaboration.Collab.CollabStateID;
    static Initialized: UnityEditor.Collaboration.Collab.CollabStateID;
  }
}
