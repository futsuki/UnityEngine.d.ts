declare namespace UnityEditor {
  class EditorGUILayout extends System.Object {
    // constructors
    constructor();
    // methods
    static Foldout(foldout: boolean, content: string): boolean;
    static Foldout(foldout: boolean, content: string, style: any): boolean;
    static Foldout(foldout: boolean, content: any): boolean;
    static Foldout(foldout: boolean, content: any, style: any): boolean;
    static Foldout(foldout: boolean, content: string, toggleOnLabelClick: boolean): boolean;
    static Foldout(foldout: boolean, content: string, toggleOnLabelClick: boolean, style: any): boolean;
    static Foldout(foldout: boolean, content: any, toggleOnLabelClick: boolean): boolean;
    static Foldout(foldout: boolean, content: any, toggleOnLabelClick: boolean, style: any): boolean;
    static PrefixLabel(label: string): void;
    static PrefixLabel(label: string, followingStyle: any): void;
    static PrefixLabel(label: string, followingStyle: any, labelStyle: any): void;
    static PrefixLabel(label: any): void;
    static PrefixLabel(label: any, followingStyle: any): void;
    static PrefixLabel(label: any, followingStyle: any, labelStyle: any): void;
    static LabelField(label: string, options: any[]): void;
    static LabelField(label: string, style: any, options: any[]): void;
    static LabelField(label: any, options: any[]): void;
    static LabelField(label: any, style: any, options: any[]): void;
    static LabelField(label: string, label2: string, options: any[]): void;
    static LabelField(label: string, label2: string, style: any, options: any[]): void;
    static LabelField(label: any, label2: any, options: any[]): void;
    static LabelField(label: any, label2: any, style: any, options: any[]): void;
    static Toggle(value: boolean, options: any[]): boolean;
    static Toggle(label: string, value: boolean, options: any[]): boolean;
    static Toggle(label: any, value: boolean, options: any[]): boolean;
    static Toggle(value: boolean, style: any, options: any[]): boolean;
    static Toggle(label: string, value: boolean, style: any, options: any[]): boolean;
    static Toggle(label: any, value: boolean, style: any, options: any[]): boolean;
    static ToggleLeft(label: string, value: boolean, options: any[]): boolean;
    static ToggleLeft(label: any, value: boolean, options: any[]): boolean;
    static ToggleLeft(label: string, value: boolean, labelStyle: any, options: any[]): boolean;
    static ToggleLeft(label: any, value: boolean, labelStyle: any, options: any[]): boolean;
    static TextField(text: string, options: any[]): string;
    static TextField(text: string, style: any, options: any[]): string;
    static TextField(label: string, text: string, options: any[]): string;
    static TextField(label: string, text: string, style: any, options: any[]): string;
    static TextField(label: any, text: string, options: any[]): string;
    static TextField(label: any, text: string, style: any, options: any[]): string;
    static DelayedTextField(text: string, options: any[]): string;
    static DelayedTextField(text: string, style: any, options: any[]): string;
    static DelayedTextField(label: string, text: string, options: any[]): string;
    static DelayedTextField(label: string, text: string, style: any, options: any[]): string;
    static DelayedTextField(label: any, text: string, options: any[]): string;
    static DelayedTextField(label: any, text: string, style: any, options: any[]): string;
    static DelayedTextField(property: UnityEditor.SerializedProperty, options: any[]): void;
    static DelayedTextField(property: UnityEditor.SerializedProperty, label: any, options: any[]): void;
    static TextArea(text: string, options: any[]): string;
    static TextArea(text: string, style: any, options: any[]): string;
    static SelectableLabel(text: string, options: any[]): void;
    static SelectableLabel(text: string, style: any, options: any[]): void;
    static PasswordField(password: string, options: any[]): string;
    static PasswordField(password: string, style: any, options: any[]): string;
    static PasswordField(label: string, password: string, options: any[]): string;
    static PasswordField(label: string, password: string, style: any, options: any[]): string;
    static PasswordField(label: any, password: string, options: any[]): string;
    static PasswordField(label: any, password: string, style: any, options: any[]): string;
    static FloatField(value: number, options: any[]): number;
    static FloatField(value: number, style: any, options: any[]): number;
    static FloatField(label: string, value: number, options: any[]): number;
    static FloatField(label: string, value: number, style: any, options: any[]): number;
    static FloatField(label: any, value: number, options: any[]): number;
    static FloatField(label: any, value: number, style: any, options: any[]): number;
    static DelayedFloatField(value: number, options: any[]): number;
    static DelayedFloatField(value: number, style: any, options: any[]): number;
    static DelayedFloatField(label: string, value: number, options: any[]): number;
    static DelayedFloatField(label: string, value: number, style: any, options: any[]): number;
    static DelayedFloatField(label: any, value: number, options: any[]): number;
    static DelayedFloatField(label: any, value: number, style: any, options: any[]): number;
    static DelayedFloatField(property: UnityEditor.SerializedProperty, options: any[]): void;
    static DelayedFloatField(property: UnityEditor.SerializedProperty, label: any, options: any[]): void;
    static DoubleField(value: number, options: any[]): number;
    static DoubleField(value: number, style: any, options: any[]): number;
    static DoubleField(label: string, value: number, options: any[]): number;
    static DoubleField(label: string, value: number, style: any, options: any[]): number;
    static DoubleField(label: any, value: number, options: any[]): number;
    static DoubleField(label: any, value: number, style: any, options: any[]): number;
    static DelayedDoubleField(value: number, options: any[]): number;
    static DelayedDoubleField(value: number, style: any, options: any[]): number;
    static DelayedDoubleField(label: string, value: number, options: any[]): number;
    static DelayedDoubleField(label: string, value: number, style: any, options: any[]): number;
    static DelayedDoubleField(label: any, value: number, options: any[]): number;
    static DelayedDoubleField(label: any, value: number, style: any, options: any[]): number;
    static IntField(value: number, options: any[]): number;
    static IntField(value: number, style: any, options: any[]): number;
    static IntField(label: string, value: number, options: any[]): number;
    static IntField(label: string, value: number, style: any, options: any[]): number;
    static IntField(label: any, value: number, options: any[]): number;
    static IntField(label: any, value: number, style: any, options: any[]): number;
    static DelayedIntField(value: number, options: any[]): number;
    static DelayedIntField(value: number, style: any, options: any[]): number;
    static DelayedIntField(label: string, value: number, options: any[]): number;
    static DelayedIntField(label: string, value: number, style: any, options: any[]): number;
    static DelayedIntField(label: any, value: number, options: any[]): number;
    static DelayedIntField(label: any, value: number, style: any, options: any[]): number;
    static DelayedIntField(property: UnityEditor.SerializedProperty, options: any[]): void;
    static DelayedIntField(property: UnityEditor.SerializedProperty, label: any, options: any[]): void;
    static LongField(value: number, options: any[]): number;
    static LongField(value: number, style: any, options: any[]): number;
    static LongField(label: string, value: number, options: any[]): number;
    static LongField(label: string, value: number, style: any, options: any[]): number;
    static LongField(label: any, value: number, options: any[]): number;
    static LongField(label: any, value: number, style: any, options: any[]): number;
    static Slider(value: number, leftValue: number, rightValue: number, options: any[]): number;
    static Slider(label: string, value: number, leftValue: number, rightValue: number, options: any[]): number;
    static Slider(label: any, value: number, leftValue: number, rightValue: number, options: any[]): number;
    static Slider(property: UnityEditor.SerializedProperty, leftValue: number, rightValue: number, options: any[]): void;
    static Slider(property: UnityEditor.SerializedProperty, leftValue: number, rightValue: number, label: string, options: any[]): void;
    static Slider(property: UnityEditor.SerializedProperty, leftValue: number, rightValue: number, label: any, options: any[]): void;
    static IntSlider(value: number, leftValue: number, rightValue: number, options: any[]): number;
    static IntSlider(label: string, value: number, leftValue: number, rightValue: number, options: any[]): number;
    static IntSlider(label: any, value: number, leftValue: number, rightValue: number, options: any[]): number;
    static IntSlider(property: UnityEditor.SerializedProperty, leftValue: number, rightValue: number, options: any[]): void;
    static IntSlider(property: UnityEditor.SerializedProperty, leftValue: number, rightValue: number, label: string, options: any[]): void;
    static IntSlider(property: UnityEditor.SerializedProperty, leftValue: number, rightValue: number, label: any, options: any[]): void;
    static MinMaxSlider(minValue: any, maxValue: any, minLimit: number, maxLimit: number, options: any[]): void;
    static MinMaxSlider(label: string, minValue: any, maxValue: any, minLimit: number, maxLimit: number, options: any[]): void;
    static MinMaxSlider(label: any, minValue: any, maxValue: any, minLimit: number, maxLimit: number, options: any[]): void;
    static Popup(selectedIndex: number, displayedOptions: string[], options: any[]): number;
    static Popup(selectedIndex: number, displayedOptions: string[], style: any, options: any[]): number;
    static Popup(selectedIndex: number, displayedOptions: any[], options: any[]): number;
    static Popup(selectedIndex: number, displayedOptions: any[], style: any, options: any[]): number;
    static Popup(label: string, selectedIndex: number, displayedOptions: string[], options: any[]): number;
    static Popup(label: string, selectedIndex: number, displayedOptions: string[], style: any, options: any[]): number;
    static Popup(label: any, selectedIndex: number, displayedOptions: any[], options: any[]): number;
    static Popup(label: any, selectedIndex: number, displayedOptions: any[], style: any, options: any[]): number;
    static EnumPopup(selected: System.Enum, options: any[]): System.Enum;
    static EnumPopup(selected: System.Enum, style: any, options: any[]): System.Enum;
    static EnumPopup(label: string, selected: System.Enum, options: any[]): System.Enum;
    static EnumPopup(label: string, selected: System.Enum, style: any, options: any[]): System.Enum;
    static EnumPopup(label: any, selected: System.Enum, options: any[]): System.Enum;
    static EnumPopup(label: any, selected: System.Enum, style: any, options: any[]): System.Enum;
    static EnumMaskPopup(label: string, selected: System.Enum, options: any[]): System.Enum;
    static EnumMaskPopup(label: string, selected: System.Enum, style: any, options: any[]): System.Enum;
    static EnumMaskPopup(label: any, selected: System.Enum, options: any[]): System.Enum;
    static EnumMaskPopup(label: any, selected: System.Enum, style: any, options: any[]): System.Enum;
    static IntPopup(selectedValue: number, displayedOptions: string[], optionValues: number[], options: any[]): number;
    static IntPopup(selectedValue: number, displayedOptions: string[], optionValues: number[], style: any, options: any[]): number;
    static IntPopup(selectedValue: number, displayedOptions: any[], optionValues: number[], options: any[]): number;
    static IntPopup(selectedValue: number, displayedOptions: any[], optionValues: number[], style: any, options: any[]): number;
    static IntPopup(label: string, selectedValue: number, displayedOptions: string[], optionValues: number[], options: any[]): number;
    static IntPopup(label: string, selectedValue: number, displayedOptions: string[], optionValues: number[], style: any, options: any[]): number;
    static IntPopup(label: any, selectedValue: number, displayedOptions: any[], optionValues: number[], options: any[]): number;
    static IntPopup(label: any, selectedValue: number, displayedOptions: any[], optionValues: number[], style: any, options: any[]): number;
    static IntPopup(property: UnityEditor.SerializedProperty, displayedOptions: any[], optionValues: number[], options: any[]): void;
    static IntPopup(property: UnityEditor.SerializedProperty, displayedOptions: any[], optionValues: number[], label: any, options: any[]): void;
    static IntPopup(property: UnityEditor.SerializedProperty, displayedOptions: any[], optionValues: number[], label: any, style: any, options: any[]): void;
    static TagField(tag: string, options: any[]): string;
    static TagField(tag: string, style: any, options: any[]): string;
    static TagField(label: string, tag: string, options: any[]): string;
    static TagField(label: string, tag: string, style: any, options: any[]): string;
    static TagField(label: any, tag: string, options: any[]): string;
    static TagField(label: any, tag: string, style: any, options: any[]): string;
    static LayerField(layer: number, options: any[]): number;
    static LayerField(layer: number, style: any, options: any[]): number;
    static LayerField(label: string, layer: number, options: any[]): number;
    static LayerField(label: string, layer: number, style: any, options: any[]): number;
    static LayerField(label: any, layer: number, options: any[]): number;
    static LayerField(label: any, layer: number, style: any, options: any[]): number;
    static MaskField(label: any, mask: number, displayedOptions: string[], style: any, options: any[]): number;
    static MaskField(label: string, mask: number, displayedOptions: string[], style: any, options: any[]): number;
    static MaskField(label: any, mask: number, displayedOptions: string[], options: any[]): number;
    static MaskField(label: string, mask: number, displayedOptions: string[], options: any[]): number;
    static MaskField(mask: number, displayedOptions: string[], style: any, options: any[]): number;
    static MaskField(mask: number, displayedOptions: string[], options: any[]): number;
    static EnumMaskField(label: any, enumValue: System.Enum, style: any, options: any[]): System.Enum;
    static EnumMaskField(label: string, enumValue: System.Enum, style: any, options: any[]): System.Enum;
    static EnumMaskField(label: any, enumValue: System.Enum, options: any[]): System.Enum;
    static EnumMaskField(label: string, enumValue: System.Enum, options: any[]): System.Enum;
    static EnumMaskField(enumValue: System.Enum, style: any, options: any[]): System.Enum;
    static EnumMaskField(enumValue: System.Enum, options: any[]): System.Enum;
    static ObjectField(obj: UnityEngine.Object, objType: any, options: any[]): UnityEngine.Object;
    static ObjectField(obj: UnityEngine.Object, objType: any, allowSceneObjects: boolean, options: any[]): UnityEngine.Object;
    static ObjectField(label: string, obj: UnityEngine.Object, objType: any, options: any[]): UnityEngine.Object;
    static ObjectField(label: string, obj: UnityEngine.Object, objType: any, allowSceneObjects: boolean, options: any[]): UnityEngine.Object;
    static ObjectField(label: any, obj: UnityEngine.Object, objType: any, options: any[]): UnityEngine.Object;
    static ObjectField(label: any, obj: UnityEngine.Object, objType: any, allowSceneObjects: boolean, options: any[]): UnityEngine.Object;
    static ObjectField(property: UnityEditor.SerializedProperty, options: any[]): void;
    static ObjectField(property: UnityEditor.SerializedProperty, label: any, options: any[]): void;
    static ObjectField(property: UnityEditor.SerializedProperty, objType: any, options: any[]): void;
    static ObjectField(property: UnityEditor.SerializedProperty, objType: any, label: any, options: any[]): void;
    static Vector2Field(label: string, value: any, options: any[]): any;
    static Vector2Field(label: any, value: any, options: any[]): any;
    static Vector3Field(label: string, value: any, options: any[]): any;
    static Vector3Field(label: any, value: any, options: any[]): any;
    static Vector4Field(label: string, value: any, options: any[]): any;
    static Vector4Field(label: any, value: any, options: any[]): any;
    static RectField(value: any, options: any[]): any;
    static RectField(label: string, value: any, options: any[]): any;
    static RectField(label: any, value: any, options: any[]): any;
    static BoundsField(value: any, options: any[]): any;
    static BoundsField(label: string, value: any, options: any[]): any;
    static BoundsField(label: any, value: any, options: any[]): any;
    static ColorField(value: any, options: any[]): any;
    static ColorField(label: string, value: any, options: any[]): any;
    static ColorField(label: any, value: any, options: any[]): any;
    static ColorField(label: any, value: any, showEyedropper: boolean, showAlpha: boolean, hdr: boolean, hdrConfig: UnityEditor.ColorPickerHDRConfig, options: any[]): any;
    static CurveField(value: any, options: any[]): any;
    static CurveField(label: string, value: any, options: any[]): any;
    static CurveField(label: any, value: any, options: any[]): any;
    static CurveField(value: any, color: any, ranges: any, options: any[]): any;
    static CurveField(label: string, value: any, color: any, ranges: any, options: any[]): any;
    static CurveField(label: any, value: any, color: any, ranges: any, options: any[]): any;
    static CurveField(property: UnityEditor.SerializedProperty, color: any, ranges: any, options: any[]): void;
    static CurveField(property: UnityEditor.SerializedProperty, color: any, ranges: any, label: any, options: any[]): void;
    static InspectorTitlebar(foldout: boolean, targetObj: UnityEngine.Object): boolean;
    static InspectorTitlebar(foldout: boolean, targetObj: UnityEngine.Object, expandable: boolean): boolean;
    static InspectorTitlebar(foldout: boolean, targetObjs: UnityEngine.Object[]): boolean;
    static InspectorTitlebar(foldout: boolean, targetObjs: UnityEngine.Object[], expandable: boolean): boolean;
    static InspectorTitlebar(targetObjs: UnityEngine.Object[]): void;
    static HelpBox(message: string, type: UnityEditor.MessageType): void;
    static HelpBox(message: string, type: UnityEditor.MessageType, wide: boolean): void;
    static Space(): void;
    static Separator(): void;
    static BeginToggleGroup(label: string, toggle: boolean): boolean;
    static BeginToggleGroup(label: any, toggle: boolean): boolean;
    static EndToggleGroup(): void;
    static BeginHorizontal(options: any[]): any;
    static BeginHorizontal(style: any, options: any[]): any;
    static EndHorizontal(): void;
    static BeginVertical(options: any[]): any;
    static BeginVertical(style: any, options: any[]): any;
    static EndVertical(): void;
    static BeginScrollView(scrollPosition: any, options: any[]): any;
    static BeginScrollView(scrollPosition: any, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean, options: any[]): any;
    static BeginScrollView(scrollPosition: any, horizontalScrollbar: any, verticalScrollbar: any, options: any[]): any;
    static BeginScrollView(scrollPosition: any, style: any, options: any[]): any;
    static BeginScrollView(scrollPosition: any, alwaysShowHorizontal: boolean, alwaysShowVertical: boolean, horizontalScrollbar: any, verticalScrollbar: any, background: any, options: any[]): any;
    static EndScrollView(): void;
    static PropertyField(property: UnityEditor.SerializedProperty, options: any[]): boolean;
    static PropertyField(property: UnityEditor.SerializedProperty, label: any, options: any[]): boolean;
    static PropertyField(property: UnityEditor.SerializedProperty, includeChildren: boolean, options: any[]): boolean;
    static PropertyField(property: UnityEditor.SerializedProperty, label: any, includeChildren: boolean, options: any[]): boolean;
    static GetControlRect(options: any[]): any;
    static GetControlRect(hasLabel: boolean, options: any[]): any;
    static GetControlRect(hasLabel: boolean, height: number, options: any[]): any;
    static GetControlRect(hasLabel: boolean, height: number, style: any, options: any[]): any;
    static BeginFadeGroup(value: number): boolean;
    static EndFadeGroup(): void;
    static Knob(knobSize: any, value: number, minValue: number, maxValue: number, unit: string, backgroundColor: any, activeColor: any, showValue: boolean, options: any[]): number;
    // properties
    // fields
  }
}
