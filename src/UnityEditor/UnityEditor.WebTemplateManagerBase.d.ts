declare namespace UnityEditor {
  class WebTemplateManagerBase {
    // constructors
    private constructor();
    // methods
    GetTemplateIndex(path: string): number;
    ClearTemplates(): void;
    SelectionUI(templateProp: UnityEditor.SerializedProperty): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly customTemplatesFolder: string;
    readonly builtinTemplatesFolder: string;
    readonly defaultIcon: any;
    readonly Templates: UnityEditor.WebTemplate[];
    readonly TemplateGUIThumbnails: any[];
    // fields
  }
}
