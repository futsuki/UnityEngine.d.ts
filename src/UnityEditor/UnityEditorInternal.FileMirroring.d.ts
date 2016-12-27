declare namespace UnityEditorInternal {
  class FileMirroring {
    // constructors
    private constructor();
    // methods
    static MirrorFile(from: string, to: string): void;
    static MirrorFile(from: string, to: string, comparer: ((string, string) => boolean)): void;
    static MirrorFolder(from: string, to: string): void;
    static MirrorFolder(from: string, to: string, comparer: ((string, string) => boolean)): void;
    static CanSkipCopy(from: string, to: string): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
