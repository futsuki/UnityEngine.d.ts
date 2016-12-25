declare namespace UnityEditor {
  class MaterialEnumDrawer {
    // constructors
    constructor(enumName: string);
    constructor(n1: string, v1: number);
    constructor(n1: string, v1: number, n2: string, v2: number);
    constructor(n1: string, v1: number, n2: string, v2: number, n3: string, v3: number);
    constructor(n1: string, v1: number, n2: string, v2: number, n3: string, v3: number, n4: string, v4: number);
    constructor(n1: string, v1: number, n2: string, v2: number, n3: string, v3: number, n4: string, v4: number, n5: string, v5: number);
    constructor(n1: string, v1: number, n2: string, v2: number, n3: string, v3: number, n4: string, v4: number, n5: string, v5: number, n6: string, v6: number);
    constructor(n1: string, v1: number, n2: string, v2: number, n3: string, v3: number, n4: string, v4: number, n5: string, v5: number, n6: string, v6: number, n7: string, v7: number);
    constructor(enumNames: string[], vals: number[]);
    // methods
    GetPropertyHeight(prop: UnityEditor.MaterialProperty, label: string, editor: UnityEditor.MaterialEditor): number;
    OnGUI(position: any, prop: UnityEditor.MaterialProperty, label: any, editor: UnityEditor.MaterialEditor): any;
    OnGUI(position: any, prop: UnityEditor.MaterialProperty, label: string, editor: UnityEditor.MaterialEditor): any;
    Apply(prop: UnityEditor.MaterialProperty): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
