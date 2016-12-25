declare namespace UnityEngine.WSA {
  class Folder {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Installation: UnityEngine.WSA.Folder;
    static Temporary: UnityEngine.WSA.Folder;
    static Local: UnityEngine.WSA.Folder;
    static Roaming: UnityEngine.WSA.Folder;
    static CameraRoll: UnityEngine.WSA.Folder;
    static DocumentsLibrary: UnityEngine.WSA.Folder;
    static HomeGroup: UnityEngine.WSA.Folder;
    static MediaServerDevices: UnityEngine.WSA.Folder;
    static MusicLibrary: UnityEngine.WSA.Folder;
    static PicturesLibrary: UnityEngine.WSA.Folder;
    static Playlists: UnityEngine.WSA.Folder;
    static RemovableDevices: UnityEngine.WSA.Folder;
    static SavedPictures: UnityEngine.WSA.Folder;
    static VideosLibrary: UnityEngine.WSA.Folder;
  }
}
