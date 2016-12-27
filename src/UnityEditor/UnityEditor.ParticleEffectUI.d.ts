declare namespace UnityEditor {
  class ParticleEffectUI extends System.Object {
    // constructors
    constructor(owner: UnityEditor.ParticleEffectUIOwner);
    // methods
    InitializeIfNeeded(shuriken: any): boolean;
    Clear(): void;
    static GetMinSize(): any;
    Refresh(): void;
    GetNextParticleSystemName(): string;
    IsParticleSystemUIVisible(psUI: UnityEditor.ParticleSystemUI): boolean;
    GetParticleSystemUIForParticleSystem(shuriken: any): UnityEditor.ParticleSystemUI;
    PlayOnAwakeChanged(newPlayOnAwake: boolean): void;
    ValidateParticleSystemProperty(shurikenProperty: UnityEditor.SerializedProperty): boolean;
    CreateParticleSystem(parentOfNewParticleSystem: any, defaultType: UnityEditor.SubModuleUI.SubEmitterType): any;
    GetParticleSystemUIList(shurikens: any[]): UnityEditor.ParticleSystemUI[];
    GetParticleSystemCurveEditor(): ParticleSystemCurveEditor;
    OnSceneViewGUI(): void;
    OnSceneGUI(): void;
    OnGUI(): void;
    // properties
    // fields
    m_Owner: UnityEditor.ParticleEffectUIOwner;
    m_Emitters: UnityEditor.ParticleSystemUI[];
    static m_ShowWireframe: boolean;
    static m_ShowBounds: boolean;
    static m_VerticalLayout: boolean;
  }
}
