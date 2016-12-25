declare namespace UnityEditor.AttributeHelper {
  class MonoMenuItem {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    menuItem: string;
    index: number;
    priority: number;
    executeType: any;
    executeMethod: any;
    executeName: string;
    validateType: any;
    validateMethod: any;
    validateName: string;
  }
}
