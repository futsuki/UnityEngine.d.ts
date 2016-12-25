declare namespace UnityEditor.ASMainWindow {
  class Page {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static NotInitialized: UnityEditor.ASMainWindow.Page;
    static Overview: UnityEditor.ASMainWindow.Page;
    static Update: UnityEditor.ASMainWindow.Page;
    static Commit: UnityEditor.ASMainWindow.Page;
    static History: UnityEditor.ASMainWindow.Page;
    static ServerConfig: UnityEditor.ASMainWindow.Page;
    static Admin: UnityEditor.ASMainWindow.Page;
  }
}
