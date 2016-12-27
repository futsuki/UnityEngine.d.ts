declare namespace UnityEditor {
  class OSUtil extends System.Object {
    // constructors
    constructor();
    // methods
    static GetDefaultApps(fileType: string): string[];
    static GetAppFriendlyName(app: string): string;
    static GetDefaultAppPath(fileType: string): string;
    static GetDefaultCachePath(): string;
    // properties
    // fields
  }
}
