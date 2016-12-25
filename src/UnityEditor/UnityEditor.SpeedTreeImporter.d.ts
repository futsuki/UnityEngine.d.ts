declare namespace UnityEditor {
  class SpeedTreeImporter {
    // constructors
    constructor();
    // methods
    GenerateMaterials(): any;
    SetAssetBundleNameAndVariant(assetBundleName: string, assetBundleVariant: string): any;
    SaveAndReimport(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly hasImported: boolean;
    readonly materialFolderPath: string;
    scaleFactor: number;
    mainColor: any;
    specColor: any;
    shininess: number;
    hueVariation: any;
    alphaTestRef: number;
    readonly hasBillboard: boolean;
    enableSmoothLODTransition: boolean;
    animateCrossFading: boolean;
    billboardTransitionCrossFadeWidth: number;
    fadeOutWidth: number;
    LODHeights: number[];
    castShadows: boolean[];
    receiveShadows: boolean[];
    useLightProbes: boolean[];
    reflectionProbeUsages: any[];
    enableBump: boolean[];
    enableHue: boolean[];
    readonly bestWindQuality: number;
    windQualities: number[];
    readonly assetPath: string;
    readonly assetTimeStamp: number;
    userData: string;
    assetBundleName: string;
    assetBundleVariant: string;
    name: string;
    hideFlags: any;
    // fields
    static windQualityNames: string[];
  }
}
