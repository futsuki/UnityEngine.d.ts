declare namespace UnityEditor {
  class Help extends System.Object {
    // constructors
    constructor();
    // methods
    static HasHelpForObject(obj: UnityEngine.Object): boolean;
    static GetHelpURLForObject(obj: UnityEngine.Object): string;
    static ShowHelpForObject(obj: UnityEngine.Object): void;
    static ShowHelpPage(page: string): void;
    static BrowseURL(url: string): void;
    // properties
    // fields
  }
}
