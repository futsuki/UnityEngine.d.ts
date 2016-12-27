declare namespace UnityEngine {
  class Light extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    AddCommandBuffer(evt: UnityEngine.Rendering.LightEvent, buffer: UnityEngine.Rendering.CommandBuffer): void;
    RemoveCommandBuffer(evt: UnityEngine.Rendering.LightEvent, buffer: UnityEngine.Rendering.CommandBuffer): void;
    RemoveCommandBuffers(evt: UnityEngine.Rendering.LightEvent): void;
    RemoveAllCommandBuffers(): void;
    GetCommandBuffers(evt: UnityEngine.Rendering.LightEvent): UnityEngine.Rendering.CommandBuffer[];
    static GetLights(type: UnityEngine.LightType, layer: number): UnityEngine.Light[];
    // properties
    type: UnityEngine.LightType;
    color: UnityEngine.Color;
    intensity: number;
    bounceIntensity: number;
    shadows: UnityEngine.LightShadows;
    shadowStrength: number;
    shadowResolution: UnityEngine.Rendering.LightShadowResolution;
    shadowCustomResolution: number;
    shadowBias: number;
    shadowNormalBias: number;
    shadowNearPlane: number;
    shadowSoftness: number;
    shadowSoftnessFade: number;
    range: number;
    spotAngle: number;
    cookieSize: number;
    cookie: UnityEngine.Texture;
    flare: UnityEngine.Flare;
    renderMode: UnityEngine.LightRenderMode;
    alreadyLightmapped: boolean;
    bakedIndex: number;
    readonly isBaked: boolean;
    cullingMask: number;
    areaSize: UnityEngine.Vector2;
    lightmappingMode: UnityEngine.LightmappingMode;
    readonly commandBufferCount: number;
    static pixelLightCount: number;
    shadowConstantBias: number;
    shadowObjectSizeBias: number;
    attenuate: boolean;
    // fields
  }
}
