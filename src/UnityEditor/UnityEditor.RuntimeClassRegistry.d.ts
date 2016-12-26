declare namespace UnityEditor {
  class RuntimeClassRegistry {
    // constructors
    constructor();
    // methods
    GetScenesForClass(ID: number): any;
    AddNativeClassID(ID: number): void;
    SetUsedTypesInUserAssembly(typeNames: string[], assemblyName: string): void;
    IsDLLUsed(dll: string): boolean;
    AddMonoClass(className: string): void;
    AddMonoClasses(classes: any): void;
    SynchronizeClasses(): void;
    GetAllNativeClassesAsString(): any;
    GetAllNativeClassesIncludingManagersAsString(): any;
    GetAllManagedClassesAsString(): any;
    GetAllManagedBaseClassesAsString(): any;
    static Create(): UnityEditor.RuntimeClassRegistry;
    Initialize(nativeClassIDs: number[], buildTarget: UnityEditor.BuildTarget): void;
    SetSceneClasses(nativeClassIDs: number[], scene: string): void;
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
