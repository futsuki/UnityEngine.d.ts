declare namespace UnityEditor.Audio {
  class MixerParameterDefinition {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    name: string;
    description: string;
    units: string;
    displayScale: number;
    displayExponent: number;
    minRange: number;
    maxRange: number;
    defaultValue: number;
  }
}
