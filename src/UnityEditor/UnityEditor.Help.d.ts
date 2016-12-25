declare namespace UnityEditor {
  class Help {
    // constructors
    constructor();
    // methods
    static HasHelpForObject(obj: any): boolean;
    static GetHelpURLForObject(obj: any): string;
    static ShowHelpForObject(obj: any): any;
    static ShowHelpPage(page: string): any;
    static BrowseURL(url: string): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
