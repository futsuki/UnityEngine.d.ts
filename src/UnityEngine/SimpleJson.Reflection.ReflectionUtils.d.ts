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
    static GetContructor(constructorInfo: any): SimpleJson.Reflection.ReflectionUtils.ConstructorDelegate;
    static GetContructor(type: any, argsType: any[]): SimpleJson.Reflection.ReflectionUtils.ConstructorDelegate;
    static GetConstructorByReflection(constructorInfo: any): SimpleJson.Reflection.ReflectionUtils.ConstructorDelegate;
    static GetConstructorByReflection(type: any, argsType: any[]): SimpleJson.Reflection.ReflectionUtils.ConstructorDelegate;
    static GetGetMethod(propertyInfo: any): SimpleJson.Reflection.ReflectionUtils.GetDelegate;
    static GetGetMethod(fieldInfo: any): SimpleJson.Reflection.ReflectionUtils.GetDelegate;
    static GetGetMethodByReflection(propertyInfo: any): SimpleJson.Reflection.ReflectionUtils.GetDelegate;
    static GetGetMethodByReflection(fieldInfo: any): SimpleJson.Reflection.ReflectionUtils.GetDelegate;
    static GetSetMethod(propertyInfo: any): SimpleJson.Reflection.ReflectionUtils.SetDelegate;
    static GetSetMethod(fieldInfo: any): SimpleJson.Reflection.ReflectionUtils.SetDelegate;
    static GetSetMethodByReflection(propertyInfo: any): SimpleJson.Reflection.ReflectionUtils.SetDelegate;
    static GetSetMethodByReflection(fieldInfo: any): SimpleJson.Reflection.ReflectionUtils.SetDelegate;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
