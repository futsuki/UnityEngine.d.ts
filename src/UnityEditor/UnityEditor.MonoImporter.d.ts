declare namespace UnityEditor {
  class MonoImporter {
    // constructors
    constructor();
    // methods
    SetDefaultReferences(name: string[], target: any[]): void;
    static GetAllRuntimeMonoScripts(): UnityEditor.MonoScript[];
    static SetExecutionOrder(script: UnityEditor.MonoScript, order: number): void;
    static GetExecutionOrder(script: UnityEditor.MonoScript): number;
    GetScript(): UnityEditor.MonoScript;
    GetDefaultReference(name: string): any;
    SetAssetBundleNameAndVariant(assetBundleName: string, assetBundleVariant: string): void;
    SaveAndReimport(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly assetPath: string;
    readonly assetTimeStamp: number;
    userData: string;
    assetBundleName: string;
    assetBundleVariant: string;
    name: string;
    hideFlags: any;
    // fields
  }
}
