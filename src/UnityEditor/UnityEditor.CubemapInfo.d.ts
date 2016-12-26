declare namespace UnityEditor {
  class CubemapInfo {
    // constructors
    constructor();
    // methods
    SetCubemapShadowInfo(newCubemapShadowInfo: UnityEditor.CubemapInfo): void;
    ResetEnvInfos(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
