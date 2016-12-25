declare namespace UnityEditor.ProceduralMaterialInspector {
  class ProceduralPlatformSetting {
    // constructors
    constructor(objects: any[], _name: string, _target: UnityEditor.BuildTarget, _icon: any);
    // methods
    SetOverride(master: UnityEditor.ProceduralMaterialInspector.ProceduralPlatformSetting): any;
    ClearOverride(master: UnityEditor.ProceduralMaterialInspector.ProceduralPlatformSetting): any;
    HasChanged(): boolean;
    Apply(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly isDefault: boolean;
    textureFormat: number;
    readonly overridden: boolean;
    // fields
    name: string;
    m_Overridden: boolean;
    maxTextureWidth: number;
    maxTextureHeight: number;
    m_TextureFormat: number;
    m_LoadBehavior: number;
    target: UnityEditor.BuildTarget;
    icon: any;
  }
}
