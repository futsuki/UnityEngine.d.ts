declare namespace UnityEditor {
  class MinMaxGradientState {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static k_Color: UnityEditor.MinMaxGradientState;
    static k_Gradient: UnityEditor.MinMaxGradientState;
    static k_RandomBetweenTwoColors: UnityEditor.MinMaxGradientState;
    static k_RandomBetweenTwoGradients: UnityEditor.MinMaxGradientState;
    static k_RandomColor: UnityEditor.MinMaxGradientState;
  }
}
