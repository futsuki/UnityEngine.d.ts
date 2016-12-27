declare namespace SimpleJson.Reflection {
  class ReflectionUtils extends System.Object {
    // constructors
    constructor();
    // methods
    static GetAttribute(info: any, type: any): System.Attribute;
    static GetAttribute(objectType: any, attributeType: any): System.Attribute;
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
    static GetContructor(constructorInfo: any): ((args: any[]) => any);
    static GetContructor(type: any, argsType: any[]): ((args: any[]) => any);
    static GetConstructorByReflection(constructorInfo: any): ((args: any[]) => any);
    static GetConstructorByReflection(type: any, argsType: any[]): ((args: any[]) => any);
    static GetGetMethod(propertyInfo: any): ((source: any) => any);
    static GetGetMethod(fieldInfo: any): ((source: any) => any);
    static GetGetMethodByReflection(propertyInfo: any): ((source: any) => any);
    static GetGetMethodByReflection(fieldInfo: any): ((source: any) => any);
    static GetSetMethod(propertyInfo: any): ((source: any, value: any) => void);
    static GetSetMethod(fieldInfo: any): ((source: any, value: any) => void);
    static GetSetMethodByReflection(propertyInfo: any): ((source: any, value: any) => void);
    static GetSetMethodByReflection(fieldInfo: any): ((source: any, value: any) => void);
    // properties
    // fields
  }
}
