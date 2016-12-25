declare namespace UnityEditor {
  class ModelImporter {
    // constructors
    constructor();
    // methods
    CreateDefaultMaskForClip(clip: UnityEditor.ModelImporterClipAnimation): any;
    SetAssetBundleNameAndVariant(assetBundleName: string, assetBundleVariant: string): any;
    SaveAndReimport(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    generateMaterials: UnityEditor.ModelImporterGenerateMaterials;
    importMaterials: boolean;
    materialName: UnityEditor.ModelImporterMaterialName;
    materialSearch: UnityEditor.ModelImporterMaterialSearch;
    globalScale: number;
    readonly isUseFileUnitsSupported: boolean;
    useFileUnits: boolean;
    readonly fileScale: number;
    readonly isFileScaleUsed: boolean;
    importBlendShapes: boolean;
    addCollider: boolean;
    normalSmoothingAngle: number;
    splitTangentsAcrossSeams: boolean;
    swapUVChannels: boolean;
    generateSecondaryUV: boolean;
    secondaryUVAngleDistortion: number;
    secondaryUVAreaDistortion: number;
    secondaryUVHardAngle: number;
    secondaryUVPackMargin: number;
    generateAnimations: UnityEditor.ModelImporterGenerateAnimations;
    readonly importedTakeInfos: UnityEditor.TakeInfo[];
    readonly transformPaths: string[];
    readonly referencedClips: string[];
    isReadable: boolean;
    optimizeMesh: boolean;
    normalImportMode: UnityEditor.ModelImporterTangentSpaceMode;
    tangentImportMode: UnityEditor.ModelImporterTangentSpaceMode;
    importNormals: UnityEditor.ModelImporterNormals;
    importTangents: UnityEditor.ModelImporterTangents;
    bakeIK: boolean;
    readonly isBakeIKSupported: boolean;
    resampleRotations: boolean;
    resampleCurves: boolean;
    readonly isTangentImportSupported: boolean;
    meshCompression: UnityEditor.ModelImporterMeshCompression;
    importAnimation: boolean;
    optimizeGameObjects: boolean;
    extraExposedTransformPaths: string[];
    animationCompression: UnityEditor.ModelImporterAnimationCompression;
    animationRotationError: number;
    animationPositionError: number;
    animationScaleError: number;
    animationWrapMode: any;
    animationType: UnityEditor.ModelImporterAnimationType;
    humanoidOversampling: UnityEditor.ModelImporterHumanoidOversampling;
    motionNodeName: string;
    sourceAvatar: any;
    humanDescription: any;
    splitAnimations: boolean;
    clipAnimations: UnityEditor.ModelImporterClipAnimation[];
    readonly defaultClipAnimations: UnityEditor.ModelImporterClipAnimation[];
    readonly assetPath: string;
    readonly assetTimeStamp: number;
    userData: string;
    assetBundleName: string;
    assetBundleVariant: string;
    name: string;
    hideFlags: any;
    // fields
  }
}