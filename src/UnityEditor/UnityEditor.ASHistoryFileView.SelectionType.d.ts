declare namespace UnityEditor.ASHistoryFileView {
  class SelectionType {
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
    static None: UnityEditor.ASHistoryFileView.SelectionType;
    static All: UnityEditor.ASHistoryFileView.SelectionType;
    static Items: UnityEditor.ASHistoryFileView.SelectionType;
    static DeletedItemsRoot: UnityEditor.ASHistoryFileView.SelectionType;
    static DeletedItems: UnityEditor.ASHistoryFileView.SelectionType;
  }
}
