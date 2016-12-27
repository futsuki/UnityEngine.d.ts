declare namespace UnityEditor {
  class RuntimeClassRegistry extends System.Object {
    // constructors
    constructor();
    // methods
    GetScenesForClass(ID: number): string[];
    AddNativeClassID(ID: number): void;
    SetUsedTypesInUserAssembly(typeNames: string[], assemblyName: string): void;
    IsDLLUsed(dll: string): boolean;
    AddMonoClass(className: string): void;
    AddMonoClasses(classes: string[]): void;
    SynchronizeClasses(): void;
    GetAllNativeClassesAsString(): string[];
    GetAllNativeClassesIncludingManagersAsString(): string[];
    GetAllManagedClassesAsString(): string[];
    GetAllManagedBaseClassesAsString(): string[];
    static Create(): UnityEditor.RuntimeClassRegistry;
    Initialize(nativeClassIDs: number[], buildTarget: UnityEditor.BuildTarget): void;
    SetSceneClasses(nativeClassIDs: number[], scene: string): void;
    GetRetentionLevel(className: string): string;
    // properties
    readonly UsedTypePerUserAssembly: any;
    // fields
  }
}
