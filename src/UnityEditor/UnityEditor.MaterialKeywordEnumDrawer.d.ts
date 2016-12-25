declare namespace UnityEditor {
  class MaterialKeywordEnumDrawer {
    // constructors
    constructor(kw1: string);
    constructor(kw1: string, kw2: string);
    constructor(kw1: string, kw2: string, kw3: string);
    constructor(kw1: string, kw2: string, kw3: string, kw4: string);
    constructor(kw1: string, kw2: string, kw3: string, kw4: string, kw5: string);
    constructor(kw1: string, kw2: string, kw3: string, kw4: string, kw5: string, kw6: string);
    constructor(kw1: string, kw2: string, kw3: string, kw4: string, kw5: string, kw6: string, kw7: string);
    constructor(kw1: string, kw2: string, kw3: string, kw4: string, kw5: string, kw6: string, kw7: string, kw8: string);
    constructor(kw1: string, kw2: string, kw3: string, kw4: string, kw5: string, kw6: string, kw7: string, kw8: string, kw9: string);
    constructor(keywords: string[]);
    // methods
    GetPropertyHeight(prop: UnityEditor.MaterialProperty, label: string, editor: UnityEditor.MaterialEditor): number;
    OnGUI(position: any, prop: UnityEditor.MaterialProperty, label: any, editor: UnityEditor.MaterialEditor): any;
    Apply(prop: UnityEditor.MaterialProperty): any;
    OnGUI(position: any, prop: UnityEditor.MaterialProperty, label: string, editor: UnityEditor.MaterialEditor): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}