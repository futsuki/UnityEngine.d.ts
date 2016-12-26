declare namespace UnityEditor.Web {
  class ClipboardAccess {
    // constructors
    private constructor();
    // methods
    CopyToClipboard(value: string): void;
    PasteFromClipboard(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
