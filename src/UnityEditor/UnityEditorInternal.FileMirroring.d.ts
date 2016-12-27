declare namespace UnityEditorInternal {
  class FileMirroring extends System.Object {
    // constructors
    protected constructor();
    // methods
    static MirrorFile(from: string, to: string): void;
    static MirrorFile(from: string, to: string, comparer: ((arg1: string, arg2: string) => boolean)): void;
    static MirrorFolder(from: string, to: string): void;
    static MirrorFolder(from: string, to: string, comparer: ((arg1: string, arg2: string) => boolean)): void;
    static CanSkipCopy(from: string, to: string): boolean;
    // properties
    // fields
  }
}
