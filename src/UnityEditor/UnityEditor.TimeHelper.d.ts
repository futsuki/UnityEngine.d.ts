declare namespace UnityEditor {
  class TimeHelper {
    // constructors
    private constructor();
    // methods
    Begin(): any;
    Update(): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    deltaTime: number;
  }
}