declare namespace UnityEngine {
  class AndroidReflection {
    // constructors
    constructor();
    // methods
    static IsPrimitive(t: any): boolean;
    static IsAssignableFrom(t: any, from: any): boolean;
    static GetConstructorMember(jclass: any, signature: string): any;
    static GetMethodMember(jclass: any, methodName: string, signature: string, isStatic: boolean): any;
    static GetFieldMember(jclass: any, fieldName: string, signature: string, isStatic: boolean): any;
    static NewProxyInstance(delegateHandle: number, interfaze: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
