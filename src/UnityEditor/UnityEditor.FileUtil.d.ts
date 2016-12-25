declare namespace UnityEditor {
  class FileUtil {
    // constructors
    constructor();
    // methods
    static DeleteFileOrDirectory(path: string): boolean;
    static CopyFileOrDirectory(from: string, to: string): any;
    static CopyFileOrDirectoryFollowSymlinks(from: string, to: string): any;
    static MoveFileOrDirectory(from: string, to: string): any;
    static GetUniqueTempPathInProject(): string;
    static GetProjectRelativePath(path: string): string;
    static ReplaceFile(src: string, dst: string): any;
    static ReplaceDirectory(src: string, dst: string): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
