declare namespace UnityEditor.Scripting {
  class MonoIsland {
    // constructors
    private constructor();
    // methods
    GetExtensionOfSourceFiles(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    _target: UnityEditor.BuildTarget;
    _development_player: boolean;
    _editor: boolean;
    _classlib_profile: string;
    _files: string[];
    _references: string[];
    _defines: string[];
    _output: string;
  }
}
