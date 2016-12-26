declare namespace UnityEditor {
  class FileUtil {
    // constructors
    constructor();
    // methods
    static DeleteFileOrDirectory(path: string): boolean;
    static CopyFileOrDirectory(from: string, to: string): void;
    static CopyFileOrDirectoryFollowSymlinks(from: string, to: string): void;
    static MoveFileOrDirectory(from: string, to: string): void;
    static GetUniqueTempPathInProject(): string;
    static GetProjectRelativePath(path: string): string;
    static ReplaceFile(src: string, dst: string): void;
    static ReplaceDirectory(src: string, dst: string): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
