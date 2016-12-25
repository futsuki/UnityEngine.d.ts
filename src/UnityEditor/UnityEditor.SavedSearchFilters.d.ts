declare namespace UnityEditor {
  class SavedSearchFilters {
    // constructors
    constructor();
    // methods
    static AddSavedFilter(displayName: string, filter: UnityEditor.SearchFilter, previewSize: number): number;
    static AddSavedFilterAfterInstanceID(displayName: string, filter: UnityEditor.SearchFilter, previewSize: number, insertAfterID: number, addAsChild: boolean): number;
    static RemoveSavedFilter(instanceID: number): any;
    static IsSavedFilter(instanceID: number): boolean;
    static GetRootInstanceID(): number;
    static GetFilter(instanceID: number): UnityEditor.SearchFilter;
    static GetPreviewSize(instanceID: number): number;
    static GetName(instanceID: number): string;
    static SetName(instanceID: number, name: string): any;
    static UpdateExistingSavedFilter(instanceID: number, filter: UnityEditor.SearchFilter, previewSize: number): any;
    static ConvertToTreeView(): UnityEditor.IMGUI.Controls.TreeViewItem;
    static AddChangeListener(callback: any): any;
    static MoveSavedFilter(instanceID: number, parentInstanceID: number, targetInstanceID: number, after: boolean): any;
    static CanMoveSavedFilter(instanceID: number, parentInstanceID: number, targetInstanceID: number, after: boolean): boolean;
    static AllowsHierarchy(): boolean;
    ToString(): string;
    SetDirty(): any;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    name: string;
    hideFlags: any;
    // fields
  }
}
