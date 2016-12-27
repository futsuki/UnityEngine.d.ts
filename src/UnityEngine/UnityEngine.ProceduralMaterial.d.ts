declare namespace UnityEngine {
  class ProceduralMaterial extends UnityEngine.Material {
    // constructors
    protected constructor();
    // methods
    GetProceduralPropertyDescriptions(): UnityEngine.ProceduralPropertyDescription[];
    HasProceduralProperty(inputName: string): boolean;
    GetProceduralBoolean(inputName: string): boolean;
    IsProceduralPropertyVisible(inputName: string): boolean;
    SetProceduralBoolean(inputName: string, value: boolean): void;
    GetProceduralFloat(inputName: string): number;
    SetProceduralFloat(inputName: string, value: number): void;
    GetProceduralVector(inputName: string): UnityEngine.Vector4;
    SetProceduralVector(inputName: string, value: UnityEngine.Vector4): void;
    GetProceduralColor(inputName: string): UnityEngine.Color;
    SetProceduralColor(inputName: string, value: UnityEngine.Color): void;
    GetProceduralEnum(inputName: string): number;
    SetProceduralEnum(inputName: string, value: number): void;
    GetProceduralTexture(inputName: string): UnityEngine.Texture2D;
    SetProceduralTexture(inputName: string, value: UnityEngine.Texture2D): void;
    IsProceduralPropertyCached(inputName: string): boolean;
    CacheProceduralProperty(inputName: string, value: boolean): void;
    ClearCache(): void;
    RebuildTextures(): void;
    RebuildTexturesImmediately(): void;
    static StopRebuilds(): void;
    GetGeneratedTextures(): UnityEngine.Texture[];
    GetGeneratedTexture(textureName: string): UnityEngine.ProceduralTexture;
    FreezeAndReleaseSourceData(): void;
    // properties
    cacheSize: UnityEngine.ProceduralCacheSize;
    animationUpdateRate: number;
    readonly isProcessing: boolean;
    readonly isCachedDataAvailable: boolean;
    isLoadTimeGenerated: boolean;
    readonly loadingBehavior: UnityEngine.ProceduralLoadingBehavior;
    static readonly isSupported: boolean;
    static substanceProcessorUsage: UnityEngine.ProceduralProcessorUsage;
    preset: string;
    isReadable: boolean;
    readonly isFrozen: boolean;
    // fields
  }
}
