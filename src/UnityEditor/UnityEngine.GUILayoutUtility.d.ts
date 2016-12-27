declare namespace UnityEngine {
  class GUILayoutUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static BeginGroup(GroupName: string): void;
    static EndGroup(groupName: string): void;
    static GetRect(content: any, style: any): any;
    static GetRect(content: any, style: any, options: any[]): any;
    static GetRect(width: number, height: number): any;
    static GetRect(width: number, height: number, style: any): any;
    static GetRect(width: number, height: number, options: any[]): any;
    static GetRect(width: number, height: number, style: any, options: any[]): any;
    static GetRect(minWidth: number, maxWidth: number, minHeight: number, maxHeight: number): any;
    static GetRect(minWidth: number, maxWidth: number, minHeight: number, maxHeight: number, style: any): any;
    static GetRect(minWidth: number, maxWidth: number, minHeight: number, maxHeight: number, options: any[]): any;
    static GetRect(minWidth: number, maxWidth: number, minHeight: number, maxHeight: number, style: any, options: any[]): any;
    static GetLastRect(): any;
    static GetAspectRect(aspect: number): any;
    static GetAspectRect(aspect: number, style: any): any;
    static GetAspectRect(aspect: number, options: any[]): any;
    static GetAspectRect(aspect: number, style: any, options: any[]): any;
    // properties
    // fields
  }
}
