declare namespace UnityEditorInternal {
  class FileMirroring {
    // constructors
    private constructor();
    // methods
    static MirrorFile(from: string, to: string): any;
    static MirrorFile(from: string, to: string, comparer: any): any;
    static MirrorFolder(from: string, to: string): any;
    static MirrorFolder(from: string, to: string, comparer: any): any;
    static CanSkipCopy(from: string, to: string): boolean;
    // properties
    // fields
  }
}
