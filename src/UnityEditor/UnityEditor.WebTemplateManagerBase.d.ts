declare namespace UnityEditor {
  class WebTemplateManagerBase extends System.Object {
    // constructors
    protected constructor();
    // methods
    GetTemplateIndex(path: string): number;
    ClearTemplates(): void;
    SelectionUI(templateProp: UnityEditor.SerializedProperty): void;
    // properties
    readonly customTemplatesFolder: string;
    readonly builtinTemplatesFolder: string;
    readonly defaultIcon: any;
    readonly Templates: UnityEditor.WebTemplate[];
    readonly TemplateGUIThumbnails: any[];
    // fields
  }
}
