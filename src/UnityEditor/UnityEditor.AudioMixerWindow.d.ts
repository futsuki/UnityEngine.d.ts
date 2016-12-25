declare namespace UnityEditor {
  class AudioMixerWindow {
    // constructors
    constructor();
    // methods
    static Create(): any;
    static RepaintAudioMixerWindow(): any;
    Awake(): any;
    OnEnable(): any;
    OnDisable(): any;
    UndoRedoPerformed(): any;
    Update(): any;
    OnGUI(): any;
    ParamDef(name: string, desc: string, units: string, displayScale: number, minRange: number, maxRange: number, defaultValue: number): UnityEditor.Audio.MixerParameterDefinition;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): any;
    BeginWindows(): any;
    EndWindows(): any;
    ShowNotification(notification: any): any;
    RemoveNotification(): any;
    ShowTab(): any;
    Focus(): any;
    ShowUtility(): any;
    ShowPopup(): any;
    ShowAsDropDown(buttonRect: any, windowSize: any): any;
    Show(): any;
    Show(immediateDisplay: boolean): any;
    ShowAuxWindow(): any;
    Close(): any;
    Repaint(): any;
    SendEvent(e: any): boolean;
    SetDirty(): any;
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
