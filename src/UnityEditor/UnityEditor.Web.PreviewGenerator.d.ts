declare namespace UnityEditor.Web {
  class PreviewGenerator extends System.Object {
    // constructors
    constructor();
    // methods
    static GetInstance(): UnityEditor.Web.PreviewGenerator;
    GeneratePreview(assetPath: string, width: number, height: number): number[];
    // properties
    // fields
  }
}
