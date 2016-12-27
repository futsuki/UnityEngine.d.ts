declare namespace UnityEditor {
  class CubemapInfo extends System.Object {
    // constructors
    constructor();
    // methods
    SetCubemapShadowInfo(newCubemapShadowInfo: UnityEditor.CubemapInfo): void;
    ResetEnvInfos(): void;
    // properties
    // fields
    cubemap: any;
    cubemapShadowInfo: UnityEditor.CubemapInfo;
    angleOffset: number;
    ambientProbe: any;
    shadowInfo: UnityEditor.ShadowInfo;
    serialIndexMain: number;
    serialIndexShadow: number;
    alreadyComputed: boolean;
  }
}
