declare namespace UnityEditor {
  class FileUtil extends System.Object {
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
    // properties
    // fields
  }
}
