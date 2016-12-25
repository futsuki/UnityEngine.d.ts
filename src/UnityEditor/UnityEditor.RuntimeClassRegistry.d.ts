declare namespace UnityEditor {
  class RuntimeClassRegistry {
    // constructors
    constructor();
    // methods
    GetScenesForClass(ID: number): any;
    AddNativeClassID(ID: number): any;
    SetUsedTypesInUserAssembly(typeNames: string[], assemblyName: string): any;
    IsDLLUsed(dll: string): boolean;
    AddMonoClass(className: string): any;
    AddMonoClasses(classes: any): any;
    SynchronizeClasses(): any;
    GetAllNativeClassesAsString(): any;
    GetAllNativeClassesIncludingManagersAsString(): any;
    GetAllManagedClassesAsString(): any;
    GetAllManagedBaseClassesAsString(): any;
    static Create(): UnityEditor.RuntimeClassRegistry;
    Initialize(nativeClassIDs: number[], buildTarget: UnityEditor.BuildTarget): any;
    SetSceneClasses(nativeClassIDs: number[], scene: string): any;
    GetRetentionLevel(className: string): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly UsedTypePerUserAssembly: any;
    // fields
  }
}
