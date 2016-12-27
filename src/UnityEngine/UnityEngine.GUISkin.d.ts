declare namespace UnityEngine {
  class GUISkin extends UnityEngine.ScriptableObject {
    // constructors
    constructor();
    // methods
    GetStyle(styleName: string): UnityEngine.GUIStyle;
    FindStyle(styleName: string): UnityEngine.GUIStyle;
    GetEnumerator(): any;
    // properties
    font: UnityEngine.Font;
    box: UnityEngine.GUIStyle;
    label: UnityEngine.GUIStyle;
    textField: UnityEngine.GUIStyle;
    textArea: UnityEngine.GUIStyle;
    button: UnityEngine.GUIStyle;
    toggle: UnityEngine.GUIStyle;
    window: UnityEngine.GUIStyle;
    horizontalSlider: UnityEngine.GUIStyle;
    horizontalSliderThumb: UnityEngine.GUIStyle;
    verticalSlider: UnityEngine.GUIStyle;
    verticalSliderThumb: UnityEngine.GUIStyle;
    horizontalScrollbar: UnityEngine.GUIStyle;
    horizontalScrollbarThumb: UnityEngine.GUIStyle;
    horizontalScrollbarLeftButton: UnityEngine.GUIStyle;
    horizontalScrollbarRightButton: UnityEngine.GUIStyle;
    verticalScrollbar: UnityEngine.GUIStyle;
    verticalScrollbarThumb: UnityEngine.GUIStyle;
    verticalScrollbarUpButton: UnityEngine.GUIStyle;
    verticalScrollbarDownButton: UnityEngine.GUIStyle;
    scrollView: UnityEngine.GUIStyle;
    customStyles: UnityEngine.GUIStyle[];
    readonly settings: UnityEngine.GUISettings;
    // fields
  }
}
