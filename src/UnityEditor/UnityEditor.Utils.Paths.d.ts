declare namespace UnityEditor.Utils {
  class Paths extends System.Object {
    // constructors
    protected constructor();
    // methods
    static Combine(components: string[]): string;
    static Split(path: string): string[];
    static GetFileOrFolderName(path: string): string;
    static CreateTempDirectory(): string;
    static NormalizePath(path: string): string;
    static UnifyDirectorySeparator(path: string): string;
    static AreEqual(pathA: string, pathB: string, ignoreCase: boolean): boolean;
    // properties
    // fields
  }
}
