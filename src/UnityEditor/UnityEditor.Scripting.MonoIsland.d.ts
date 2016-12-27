declare namespace UnityEditor.Scripting {
  class MonoIsland extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    GetExtensionOfSourceFiles(): string;
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
