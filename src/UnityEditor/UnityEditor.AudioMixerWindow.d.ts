declare namespace UnityEditor {
  class AudioMixerWindow {
    // constructors
    constructor();
    // methods
    static Create(): void;
    static RepaintAudioMixerWindow(): void;
    Awake(): void;
    OnEnable(): void;
    OnDisable(): void;
    UndoRedoPerformed(): void;
    Update(): void;
    OnGUI(): void;
    ParamDef(name: string, desc: string, units: string, displayScale: number, minRange: number, maxRange: number, defaultValue: number): UnityEditor.Audio.MixerParameterDefinition;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    BeginWindows(): void;
    EndWindows(): void;
    ShowNotification(notification: any): void;
    RemoveNotification(): void;
    ShowTab(): void;
    Focus(): void;
    ShowUtility(): void;
    ShowPopup(): void;
    ShowAsDropDown(buttonRect: any, windowSize: any): void;
    Show(): void;
    Show(immediateDisplay: boolean): void;
    ShowAuxWindow(): void;
    Close(): void;
    Repaint(): void;
    SendEvent(e: any): boolean;
    SetDirty(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly controller: UnityEditor.Audio.AudioMixerController;
    wantsMouseMove: boolean;
    autoRepaintOnSceneChange: boolean;
    maximized: boolean;
    minSize: any;
    maxSize: any;
    title: string;
    titleContent: any;
    depthBufferBits: number;
    antiAlias: number;
    position: any;
    name: string;
    hideFlags: any;
    // fields
  }
}
