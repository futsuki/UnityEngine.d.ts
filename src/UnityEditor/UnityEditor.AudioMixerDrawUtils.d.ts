declare namespace UnityEditor {
  class AudioMixerDrawUtils extends System.Object {
    // constructors
    constructor();
    // methods
    static GetEffectColor(effect: UnityEditor.Audio.AudioMixerEffectController): any;
    static InitStyles(): void;
    static GetAlpha(): number;
    static DrawSplitter(): void;
    static Vertex(x: number, y: number): void;
    static DrawLine(x1: number, y1: number, x2: number, y2: number, c: any): void;
    static DrawGradientRect(r: any, c1: any, c2: any): void;
    static DrawGradientRectHorizontal(r: any, c1: any, c2: any): void;
    static DrawRegionBg(rect: any, headerRect: any, contentRect: any): void;
    static HeaderLabel(r: any, text: any, icon: any): void;
    static BuildGUIStyleForLabel(color: any, fontSize: number, wrapText: boolean, fontstyle: any, anchor: any): any;
    static ReadOnlyLabel(r: any, content: any, style: any): void;
    static ReadOnlyLabel(r: any, text: string, style: any): void;
    static ReadOnlyLabel(r: any, text: string, style: any, tooltipText: string): void;
    static AddTooltipOverlay(r: any, tooltip: string): void;
    static DrawConnection(col: any, mixLevel: number, srcX: number, srcY: number, dstX: number, dstY: number, width: number): void;
    static DrawVerticalShow(rect: any, fadeToTheRight: boolean): void;
    static DrawScrollDropShadow(scrollViewRect: any, scrollY: number, contentHeight: number): void;
    static DrawRect(rect: any, color: any): void;
    // properties
    static readonly styles: UnityEditor.AudioMixerDrawUtils.Styles;
    // fields
    static kBackgroundHi: any;
    static kBackgroundLo: any;
    static kBackgroundHiHighlight: any;
    static kBackgroundLoHighlight: any;
  }
}
