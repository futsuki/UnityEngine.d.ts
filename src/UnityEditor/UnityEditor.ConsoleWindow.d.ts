declare namespace UnityEditor {
  class ConsoleWindow extends UnityEditor.EditorWindow {
    // constructors
    constructor();
    // methods
    static ShowConsoleWindow(immediate: boolean): void;
    static LogChanged(): void;
    DoLogChanged(): void;
    static GetConsoleErrorPause(): boolean;
    static SetConsoleErrorPause(enabled: boolean): void;
    ToggleLogStackTraces(userData: any): void;
    ToggleLogStackTracesForAll(userData: any): void;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
    // properties
    // fields
  }
}
