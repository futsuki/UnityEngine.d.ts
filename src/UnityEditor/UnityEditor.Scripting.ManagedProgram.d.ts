declare namespace UnityEditor.Scripting {
  class ManagedProgram extends UnityEditor.Utils.Program {
    // constructors
    constructor(monodistribution: string, profile: string, executable: string, arguments_: string, setupStartInfo: ((obj: any) => void));
    constructor(monodistribution: string, profile: string, executable: string, arguments_: string, setMonoEnvironmentVariables: boolean, setupStartInfo: ((obj: any) => void));
    // methods
    // properties
    // fields
  }
}
