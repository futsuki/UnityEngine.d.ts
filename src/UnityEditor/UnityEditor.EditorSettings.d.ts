declare namespace UnityEditor {
  class EditorSettings {
    // constructors
    constructor();
    // methods
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    static unityRemoteDevice: string;
    static unityRemoteCompression: string;
    static unityRemoteResolution: string;
    static unityRemoteJoystickSource: string;
    static externalVersionControl: string;
    static serializationMode: UnityEditor.SerializationMode;
    static webSecurityEmulationEnabled: boolean;
    static webSecurityEmulationHostUrl: string;
    static defaultBehaviorMode: UnityEditor.EditorBehaviorMode;
    static spritePackerMode: UnityEditor.SpritePackerMode;
    static spritePackerPaddingPower: number;
    static projectGenerationUserExtensions: string[];
    static readonly projectGenerationBuiltinExtensions: string[];
    static projectGenerationRootNamespace: string;
    name: string;
    hideFlags: any;
    // fields
  }
}
