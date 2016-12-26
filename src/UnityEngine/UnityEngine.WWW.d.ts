declare namespace UnityEngine {
  class WWW {
    // constructors
    constructor(url: string);
    constructor(url: string, form: UnityEngine.WWWForm);
    constructor(url: string, postData: number[]);
    constructor(url: string, postData: number[], headers: any);
    // methods
    Dispose(): void;
    InitWWW(url: string, postData: number[], iHeaders: string[]): void;
    static EscapeURL(s: string): string;
    static EscapeURL(s: string, e: any): string;
    static UnEscapeURL(s: string): string;
    static UnEscapeURL(s: string, e: any): string;
    GetAudioClip(threeD: boolean): UnityEngine.AudioClip;
    GetAudioClip(threeD: boolean, stream: boolean): UnityEngine.AudioClip;
    GetAudioClip(threeD: boolean, stream: boolean, audioType: UnityEngine.AudioType): UnityEngine.AudioClip;
    GetAudioClipCompressed(): UnityEngine.AudioClip;
    GetAudioClipCompressed(threeD: boolean): UnityEngine.AudioClip;
    GetAudioClipCompressed(threeD: boolean, audioType: UnityEngine.AudioType): UnityEngine.AudioClip;
    LoadImageIntoTexture(tex: UnityEngine.Texture2D): void;
    static GetURL(url: string): string;
    static GetTextureFromURL(url: string): UnityEngine.Texture2D;
    LoadUnityWeb(): void;
    static LoadFromCacheOrDownload(url: string, version: number): UnityEngine.WWW;
    static LoadFromCacheOrDownload(url: string, version: number, crc: number): UnityEngine.WWW;
    static LoadFromCacheOrDownload(url: string, hash: UnityEngine.Hash128): UnityEngine.WWW;
    static LoadFromCacheOrDownload(url: string, hash: UnityEngine.Hash128, crc: number): UnityEngine.WWW;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly responseHeaders: any;
    readonly text: string;
    readonly data: string;
    readonly bytes: number[];
    readonly size: number;
    readonly error: string;
    readonly texture: UnityEngine.Texture2D;
    readonly textureNonReadable: UnityEngine.Texture2D;
    readonly audioClip: UnityEngine.AudioClip;
    readonly movie: UnityEngine.MovieTexture;
    readonly isDone: boolean;
    readonly progress: number;
    readonly uploadProgress: number;
    readonly bytesDownloaded: number;
    readonly oggVorbis: UnityEngine.AudioClip;
    readonly url: string;
    readonly assetBundle: UnityEngine.AssetBundle;
    threadPriority: UnityEngine.ThreadPriority;
    // fields
  }
}
