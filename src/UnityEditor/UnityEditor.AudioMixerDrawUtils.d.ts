declare namespace UnityEditor {
  class AudioMixerDrawUtils {
    // constructors
    constructor();
    // methods
    static GetEffectColor(effect: UnityEditor.Audio.AudioMixerEffectController): any;
    static InitStyles(): any;
    static GetAlpha(): number;
    static DrawSplitter(): any;
    static Vertex(x: number, y: number): any;
    static DrawLine(x1: number, y1: number, x2: number, y2: number, c: any): any;
    static DrawGradientRect(r: any, c1: any, c2: any): any;
    static DrawGradientRectHorizontal(r: any, c1: any, c2: any): any;
    static DrawRegionBg(rect: any, headerRect: any, contentRect: any): any;
    static HeaderLabel(r: any, text: any, icon: any): any;
    static BuildGUIStyleForLabel(color: any, fontSize: number, wrapText: boolean, fontstyle: any, anchor: any): any;
    static ReadOnlyLabel(r: any, content: any, style: any): any;
    static ReadOnlyLabel(r: any, text: string, style: any): any;
    static ReadOnlyLabel(r: any, text: string, style: any, tooltipText: string): any;
    static AddTooltipOverlay(r: any, tooltip: string): any;
    static DrawConnection(col: any, mixLevel: number, srcX: number, srcY: number, dstX: number, dstY: number, width: number): any;
    static DrawVerticalShow(rect: any, fadeToTheRight: boolean): any;
    static DrawScrollDropShadow(scrollViewRect: any, scrollY: number, contentHeight: number): any;
    static DrawRect(rect: any, color: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly styles: UnityEditor.AudioMixerDrawUtils.Styles;
    // fields
    static kBackgroundHi: any;
    static kBackgroundLo: any;
    static kBackgroundHiHighlight: any;
    static kBackgroundLoHighlight: any;
  }
}
