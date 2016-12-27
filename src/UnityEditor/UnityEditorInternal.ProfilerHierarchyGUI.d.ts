declare namespace UnityEditorInternal {
  class ProfilerHierarchyGUI extends System.Object {
    // constructors
    constructor(window: UnityEditorInternal.IProfilerWindowController, columnSettingsName: string, columnsToShow: UnityEditorInternal.ProfilerColumn[], columnNames: string[], detailPane: boolean, sort: UnityEditorInternal.ProfilerColumn);
    // methods
    SetKeyboardFocus(): void;
    SelectFirstRow(): void;
    GetDetailedProperty(property: UnityEditorInternal.ProfilerProperty): UnityEditorInternal.ProfilerProperty;
    FrameSelection(): void;
    DoGUI(property: UnityEditorInternal.ProfilerProperty, searchString: string, expandAll: boolean): void;
    // properties
    selectedIndex: number;
    readonly sortType: UnityEditorInternal.ProfilerColumn;
    // fields
  }
}
