declare namespace UnityEditor.ASMainWindow {
  class ShowSearchField {
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
    static None: UnityEditor.ASMainWindow.ShowSearchField;
    static ProjectView: UnityEditor.ASMainWindow.ShowSearchField;
    static HistoryList: UnityEditor.ASMainWindow.ShowSearchField;
  }
}
