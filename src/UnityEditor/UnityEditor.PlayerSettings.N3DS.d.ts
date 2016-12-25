declare namespace UnityEditor.PlayerSettings {
  class N3DS {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static disableDepthAndStencilBuffers: boolean;
    static disableStereoscopicView: boolean;
    static enableSharedListOpt: boolean;
    static enableVSync: boolean;
    static useExtSaveData: boolean;
    static compressStaticMem: boolean;
    static extSaveDataNumber: string;
    static stackSize: number;
    static targetPlatform: UnityEditor.PlayerSettings.N3DS.TargetPlatform;
    static region: UnityEditor.PlayerSettings.N3DS.Region;
    static mediaSize: UnityEditor.PlayerSettings.N3DS.MediaSize;
    static logoStyle: UnityEditor.PlayerSettings.N3DS.LogoStyle;
    static title: string;
    static productCode: string;
    static applicationId: string;
    // fields
  }
}
