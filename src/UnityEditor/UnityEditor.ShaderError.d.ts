declare namespace UnityEditor {
  class ShaderError {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    message: string;
    messageDetails: string;
    platform: string;
    file: string;
    line: number;
    warning: number;
  }
}
