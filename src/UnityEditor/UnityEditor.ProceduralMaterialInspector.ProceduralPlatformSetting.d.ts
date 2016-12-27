declare namespace UnityEditor.ProceduralMaterialInspector {
  class ProceduralPlatformSetting extends System.Object {
    // constructors
    constructor(objects: UnityEngine.Object[], _name: string, _target: UnityEditor.BuildTarget, _icon: any);
    // methods
    SetOverride(master: UnityEditor.ProceduralMaterialInspector.ProceduralPlatformSetting): void;
    ClearOverride(master: UnityEditor.ProceduralMaterialInspector.ProceduralPlatformSetting): void;
    HasChanged(): boolean;
    Apply(): void;
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
