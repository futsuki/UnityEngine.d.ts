declare namespace UnityEditor {
  class SpeedTreeImporter extends UnityEditor.AssetImporter {
    // constructors
    constructor();
    // methods
    GenerateMaterials(): void;
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
    // fields
    static windQualityNames: string[];
  }
}
