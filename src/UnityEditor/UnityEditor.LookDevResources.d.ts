declare namespace UnityEditor {
  class LookDevResources extends System.Object {
    // constructors
    constructor();
    // methods
    static Initialize(): void;
    static Cleanup(): void;
    static UpdateShadowInfoWithBrightestSpot(cubemapInfo: UnityEditor.CubemapInfo): void;
    // properties
    // fields
    static m_ZeroAmbientProbe: any;
    static m_SkyboxMaterial: any;
    static m_GBufferPatchMaterial: any;
    static m_DrawBallsMaterial: any;
    static m_ScreenQuadMesh: any;
    static m_LookDevCompositing: any;
    static m_DeferredOverlayMaterial: any;
    static m_DefaultHDRI: any;
    static m_LookDevCubeToLatlong: any;
    static m_SelectionTexture: any;
    static m_BrightestPointRT: any;
    static m_BrightestPointTexture: any;
  }
}
