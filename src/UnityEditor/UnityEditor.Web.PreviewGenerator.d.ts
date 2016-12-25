declare namespace UnityEditor.Web {
  class PreviewGenerator {
    // constructors
    constructor();
    // methods
    static GetInstance(): UnityEditor.Web.PreviewGenerator;
    GeneratePreview(assetPath: string, width: number, height: number): number[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
