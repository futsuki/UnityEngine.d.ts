declare namespace UnityEditorInternal {
  class ProfilerHierarchyGUI {
    // constructors
    constructor(window: UnityEditorInternal.IProfilerWindowController, columnSettingsName: string, columnsToShow: UnityEditorInternal.ProfilerColumn[], columnNames: string[], detailPane: boolean, sort: UnityEditorInternal.ProfilerColumn);
    // methods
    SetKeyboardFocus(): any;
    SelectFirstRow(): any;
    GetDetailedProperty(property: UnityEditorInternal.ProfilerProperty): UnityEditorInternal.ProfilerProperty;
    FrameSelection(): any;
    DoGUI(property: UnityEditorInternal.ProfilerProperty, searchString: string, expandAll: boolean): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    selectedIndex: number;
    readonly sortType: UnityEditorInternal.ProfilerColumn;
    // fields
  }
}
