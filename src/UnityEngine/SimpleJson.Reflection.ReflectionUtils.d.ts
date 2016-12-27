declare namespace SimpleJson.Reflection {
  class ReflectionUtils {
    // constructors
    constructor();
    // methods
    static GetAttribute(info: any, type: any): any;
    static GetAttribute(objectType: any, attributeType: any): any;
    static GetGenericTypeArguments(type: any): any[];
    static IsTypeGenericeCollectionInterface(type: any): boolean;
    static IsAssignableFrom(type1: any, type2: any): boolean;
    static IsTypeDictionary(type: any): boolean;
    static IsNullableType(type: any): boolean;
    static ToNullableType(obj: any, nullableType: any): any;
    static IsValueType(type: any): boolean;
    static GetConstructors(type: any): any;
    static GetConstructorInfo(type: any, argsType: any[]): any;
    static GetProperties(type: any): any;
    static GetFields(type: any): any;
    static GetGetterMethodInfo(propertyInfo: any): any;
    static GetSetterMethodInfo(propertyInfo: any): any;
    static GetContructor(constructorInfo: any): ((any[]) => any);
    static GetContructor(type: any, argsType: any[]): ((any[]) => any);
    static GetConstructorByReflection(constructorInfo: any): ((any[]) => any);
    static GetConstructorByReflection(type: any, argsType: any[]): ((any[]) => any);
    static GetGetMethod(propertyInfo: any): ((any) => any);
    static GetGetMethod(fieldInfo: any): ((any) => any);
    static GetGetMethodByReflection(propertyInfo: any): ((any) => any);
    static GetGetMethodByReflection(fieldInfo: any): ((any) => any);
    static GetSetMethod(propertyInfo: any): ((any, any) => void);
    static GetSetMethod(fieldInfo: any): ((any, any) => void);
    static GetSetMethodByReflection(propertyInfo: any): ((any, any) => void);
    static GetSetMethodByReflection(fieldInfo: any): ((any, any) => void);
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
