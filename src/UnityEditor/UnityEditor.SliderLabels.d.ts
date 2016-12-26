declare namespace UnityEditor {
  class SliderLabels {
    // constructors
    private constructor();
    // methods
    SetLabels(leftLabel: any, rightLabel: any): void;
    HasLabels(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    leftLabel: any;
    rightLabel: any;
  }
}
