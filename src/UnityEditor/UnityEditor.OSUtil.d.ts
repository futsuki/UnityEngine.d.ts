declare namespace UnityEditor {
  class OSUtil {
    // constructors
    constructor();
    // methods
    static GetDefaultApps(fileType: string): string[];
    static GetAppFriendlyName(app: string): string;
    static GetDefaultAppPath(fileType: string): string;
    static GetDefaultCachePath(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
