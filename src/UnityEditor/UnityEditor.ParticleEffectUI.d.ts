declare namespace UnityEditor {
  class ParticleEffectUI {
    // constructors
    constructor(owner: UnityEditor.ParticleEffectUIOwner);
    // methods
    InitializeIfNeeded(shuriken: any): boolean;
    Clear(): any;
    static GetMinSize(): any;
    Refresh(): any;
    GetNextParticleSystemName(): string;
    IsParticleSystemUIVisible(psUI: UnityEditor.ParticleSystemUI): boolean;
    GetParticleSystemUIForParticleSystem(shuriken: any): UnityEditor.ParticleSystemUI;
    PlayOnAwakeChanged(newPlayOnAwake: boolean): any;
    ValidateParticleSystemProperty(shurikenProperty: UnityEditor.SerializedProperty): boolean;
    CreateParticleSystem(parentOfNewParticleSystem: any, defaultType: UnityEditor.SubModuleUI.SubEmitterType): any;
    GetParticleSystemUIList(shurikens: any): any;
    GetParticleSystemCurveEditor(): ParticleSystemCurveEditor;
    OnSceneViewGUI(): any;
    OnSceneGUI(): any;
    OnGUI(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_Owner: UnityEditor.ParticleEffectUIOwner;
    m_Emitters: UnityEditor.ParticleSystemUI[];
    static m_ShowWireframe: boolean;
    static m_ShowBounds: boolean;
    static m_VerticalLayout: boolean;
  }
}
