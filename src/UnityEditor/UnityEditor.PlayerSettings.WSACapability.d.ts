declare namespace UnityEditor.PlayerSettings {
  class WSACapability {
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
    static EnterpriseAuthentication: UnityEditor.PlayerSettings.WSACapability;
    static InternetClient: UnityEditor.PlayerSettings.WSACapability;
    static InternetClientServer: UnityEditor.PlayerSettings.WSACapability;
    static MusicLibrary: UnityEditor.PlayerSettings.WSACapability;
    static PicturesLibrary: UnityEditor.PlayerSettings.WSACapability;
    static PrivateNetworkClientServer: UnityEditor.PlayerSettings.WSACapability;
    static RemovableStorage: UnityEditor.PlayerSettings.WSACapability;
    static SharedUserCertificates: UnityEditor.PlayerSettings.WSACapability;
    static VideosLibrary: UnityEditor.PlayerSettings.WSACapability;
    static WebCam: UnityEditor.PlayerSettings.WSACapability;
    static Proximity: UnityEditor.PlayerSettings.WSACapability;
    static Microphone: UnityEditor.PlayerSettings.WSACapability;
    static Location: UnityEditor.PlayerSettings.WSACapability;
    static HumanInterfaceDevice: UnityEditor.PlayerSettings.WSACapability;
    static AllJoyn: UnityEditor.PlayerSettings.WSACapability;
    static BlockedChatMessages: UnityEditor.PlayerSettings.WSACapability;
    static Chat: UnityEditor.PlayerSettings.WSACapability;
    static CodeGeneration: UnityEditor.PlayerSettings.WSACapability;
    static Objects3D: UnityEditor.PlayerSettings.WSACapability;
    static PhoneCall: UnityEditor.PlayerSettings.WSACapability;
    static UserAccountInformation: UnityEditor.PlayerSettings.WSACapability;
    static VoipCall: UnityEditor.PlayerSettings.WSACapability;
    static Bluetooth: UnityEditor.PlayerSettings.WSACapability;
    static SpatialPerception: UnityEditor.PlayerSettings.WSACapability;
    static InputInjectionBrokered: UnityEditor.PlayerSettings.WSACapability;
  }
}
