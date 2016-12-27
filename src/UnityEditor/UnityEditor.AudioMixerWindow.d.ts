declare namespace UnityEditor {
  class AudioMixerWindow extends UnityEditor.EditorWindow {
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
    // properties
    readonly controller: UnityEditor.Audio.AudioMixerController;
    // fields
  }
}
