declare namespace UnityEditor {
  class EditorGUIUtility extends UnityEngine.GUIUtility {
    // constructors
    constructor();
    // methods
    static SerializeMainMenuToString(): string;
    static SetMenuLocalizationTestMode(onoff: boolean): void;
    static IconContent(name: string): any;
    static IconContent(name: string, text: string): any;
    static ObjectContent(obj: UnityEngine.Object, type: any): any;
    static HasObjectThumbnail(objType: any): boolean;
    static SetIconSize(size: any): void;
    static GetIconSize(): any;
    static FindTexture(name: string): any;
    static GetBuiltinSkin(skin: UnityEditor.EditorSkin): any;
    static LoadRequired(path: string): UnityEngine.Object;
    static Load(path: string): UnityEngine.Object;
    static PingObject(obj: UnityEngine.Object): void;
    static PingObject(targetInstanceID: number): void;
    static RenderGameViewCameras(target: any, targetDisplay: number, screenRect: any, mousePosition: any, gizmos: boolean): void;
    static RenderGameViewCameras(cameraRect: any, gizmos: boolean, gui: boolean): void;
    static RenderGameViewCameras(cameraRect: any, statsRect: any, gizmos: boolean, gui: boolean): void;
    static IsDisplayReferencedByCameras(displayIndex: number): boolean;
    static QueueGameViewInputEvent(evt: any): void;
    static LookLikeControls(labelWidth: number): void;
    static LookLikeControls(): void;
    static LookLikeControls(labelWidth: number, fieldWidth: number): void;
    static LookLikeInspector(): void;
    static CommandEvent(commandName: string): any;
    static DrawColorSwatch(position: any, color: any): void;
    static DrawCurveSwatch(position: any, curve: any, property: UnityEditor.SerializedProperty, color: any, bgColor: any): void;
    static DrawCurveSwatch(position: any, curve: any, property: UnityEditor.SerializedProperty, color: any, bgColor: any, topFillColor: any, bottomFillColor: any): void;
    static DrawCurveSwatch(position: any, curve: any, property: UnityEditor.SerializedProperty, color: any, bgColor: any, topFillColor: any, bottomFillColor: any, curveRanges: any): void;
    static DrawCurveSwatch(position: any, curve: any, property: UnityEditor.SerializedProperty, color: any, bgColor: any, curveRanges: any): void;
    static DrawRegionSwatch(position: any, property: UnityEditor.SerializedProperty, property2: UnityEditor.SerializedProperty, color: any, bgColor: any, curveRanges: any): void;
    static DrawRegionSwatch(position: any, curve: any, curve2: any, color: any, bgColor: any, curveRanges: any): void;
    static RGBToHSV(rgbColor: any, H: any, S: any, V: any): void;
    static HSVToRGB(H: number, S: number, V: number): any;
    static HSVToRGB(H: number, S: number, V: number, hdr: boolean): any;
    static AddCursorRect(position: any, mouse: UnityEditor.MouseCursor): void;
    static AddCursorRect(position: any, mouse: UnityEditor.MouseCursor, controlID: number): void;
    static SetWantsMouseJumping(wantz: number): void;
    static GetObjectPickerObject(): UnityEngine.Object;
    static GetObjectPickerControlID(): number;
    static PointsToPixels(rect: any): any;
    static PointsToPixels(position: any): any;
    static PixelsToPoints(rect: any): any;
    static PixelsToPoints(position: any): any;
    static GetFlowLayoutedRects(rect: any, style: any, horizontalSpacing: number, verticalSpacing: number, items: string[]): any[];
    // properties
    static readonly singleLineHeight: number;
    static readonly standardVerticalSpacing: number;
    static readonly isProSkin: boolean;
    static readonly whiteTexture: any;
    static editingTextField: boolean;
    static hierarchyMode: boolean;
    static wideMode: boolean;
    static readonly currentViewWidth: number;
    static labelWidth: number;
    static fieldWidth: number;
    static systemCopyBuffer: string;
    static readonly pixelsPerPoint: number;
    // fields
    static "native": any;
  }
}
