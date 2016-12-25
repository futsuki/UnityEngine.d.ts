declare namespace UnityEngine {
  class ProceduralPropertyDescription {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    name: string;
    label: string;
    group: string;
    type: UnityEngine.ProceduralPropertyType;
    hasRange: boolean;
    minimum: number;
    maximum: number;
    step: number;
    enumOptions: string[];
    componentLabels: string[];
  }
}
