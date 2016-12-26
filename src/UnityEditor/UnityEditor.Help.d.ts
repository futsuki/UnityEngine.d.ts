declare namespace UnityEditor {
  class Help {
    // constructors
    constructor();
    // methods
    static HasHelpForObject(obj: any): boolean;
    static GetHelpURLForObject(obj: any): string;
    static ShowHelpForObject(obj: any): void;
    static ShowHelpPage(page: string): void;
    static BrowseURL(url: string): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
