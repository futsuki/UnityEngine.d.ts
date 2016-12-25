declare namespace UnityEngine {
  class MovieTexture {
    // constructors
    constructor();
    // methods
    Play(): any;
    Stop(): any;
    Pause(): any;
    GetNativeTexturePtr(): any;
    GetNativeTextureID(): number;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly audioClip: UnityEngine.AudioClip;
    loop: boolean;
    readonly isPlaying: boolean;
    readonly isReadyToPlay: boolean;
    readonly duration: number;
    width: number;
    height: number;
    dimension: UnityEngine.Rendering.TextureDimension;
    filterMode: UnityEngine.FilterMode;
    anisoLevel: number;
    wrapMode: UnityEngine.TextureWrapMode;
    mipMapBias: number;
    readonly texelSize: UnityEngine.Vector2;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
