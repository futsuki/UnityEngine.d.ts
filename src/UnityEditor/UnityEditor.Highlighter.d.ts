declare namespace UnityEditor {
  class Highlighter extends System.Object {
    // constructors
    constructor();
    // methods
    static Stop(): void;
    static Highlight(windowTitle: string, text: string): boolean;
    static Highlight(windowTitle: string, text: string, mode: UnityEditor.HighlightSearchMode): boolean;
    static HighlightIdentifier(position: any, identifier: string): void;
    // properties
    static readonly active: boolean;
    static readonly activeVisible: boolean;
    static readonly activeText: string;
    static readonly activeRect: any;
    // fields
  }
}
