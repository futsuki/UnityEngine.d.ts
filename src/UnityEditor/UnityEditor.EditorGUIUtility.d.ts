declare namespace UnityEditor {
  class EditorGUIUtility {
    // constructors
    constructor();
    // methods
    static SerializeMainMenuToString(): string;
    static SetMenuLocalizationTestMode(onoff: boolean): any;
    static IconContent(name: string): any;
    static IconContent(name: string, text: string): any;
    static ObjectContent(obj: any, type: any): any;
    static HasObjectThumbnail(objType: any): boolean;
    static SetIconSize(size: any): any;
    static GetIconSize(): any;
    static FindTexture(name: string): any;
    static GetBuiltinSkin(skin: UnityEditor.EditorSkin): any;
    static LoadRequired(path: string): any;
    static Load(path: string): any;
    static PingObject(obj: any): any;
    static PingObject(targetInstanceID: number): any;
    static RenderGameViewCameras(target: any, targetDisplay: number, screenRect: any, mousePosition: any, gizmos: boolean): any;
    static RenderGameViewCameras(cameraRect: any, gizmos: boolean, gui: boolean): any;
    static RenderGameViewCameras(cameraRect: any, statsRect: any, gizmos: boolean, gui: boolean): any;
    static IsDisplayReferencedByCameras(displayIndex: number): boolean;
    static QueueGameViewInputEvent(evt: any): any;
    static LookLikeControls(labelWidth: number): any;
    static LookLikeControls(): any;
    static LookLikeControls(labelWidth: number, fieldWidth: number): any;
    static LookLikeInspector(): any;
    static CommandEvent(commandName: string): any;
    static DrawColorSwatch(position: any, color: any): any;
    static DrawCurveSwatch(position: any, curve: any, property: UnityEditor.SerializedProperty, color: any, bgColor: any): any;
    static DrawCurveSwatch(position: any, curve: any, property: UnityEditor.SerializedProperty, color: any, bgColor: any, topFillColor: any, bottomFillColor: any): any;
    static DrawCurveSwatch(position: any, curve: any, property: UnityEditor.SerializedProperty, color: any, bgColor: any, topFillColor: any, bottomFillColor: any, curveRanges: any): any;
    static DrawCurveSwatch(position: any, curve: any, property: UnityEditor.SerializedProperty, color: any, bgColor: any, curveRanges: any): any;
    static DrawRegionSwatch(position: any, property: UnityEditor.SerializedProperty, property2: UnityEditor.SerializedProperty, color: any, bgColor: any, curveRanges: any): any;
    static DrawRegionSwatch(position: any, curve: any, curve2: any, color: any, bgColor: any, curveRanges: any): any;
    static RGBToHSV(rgbColor: any, H: any, S: any, V: any): any;
    static HSVToRGB(H: number, S: number, V: number): any;
    static HSVToRGB(H: number, S: number, V: number, hdr: boolean): any;
    static AddCursorRect(position: any, mouse: UnityEditor.MouseCursor): any;
    static AddCursorRect(position: any, mouse: UnityEditor.MouseCursor, controlID: number): any;
    static SetWantsMouseJumping(wantz: number): any;
    static GetObjectPickerObject(): any;
    static GetObjectPickerControlID(): number;
    static PointsToPixels(rect: any): any;
    static PixelsToPoints(rect: any): any;
    static PointsToPixels(position: any): any;
    static PixelsToPoints(position: any): any;
    static GetFlowLayoutedRects(rect: any, style: any, horizontalSpacing: number, verticalSpacing: number, items: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
