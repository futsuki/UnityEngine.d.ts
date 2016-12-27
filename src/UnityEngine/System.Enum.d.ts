declare namespace System {
  class Enum extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    GetTypeCode(): any;
    static GetValues(enumType: any): any;
    static GetNames(enumType: any): string[];
    static GetName(enumType: any, value: any): string;
    static IsDefined(enumType: any, value: any): boolean;
    static GetUnderlyingType(enumType: any): any;
    static Parse(enumType: any, value: string): any;
    static Parse(enumType: any, value: string, ignoreCase: boolean): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    static ToObject(enumType: any, value: number): any;
    static ToObject(enumType: any, value: number): any;
    static ToObject(enumType: any, value: number): any;
    static ToObject(enumType: any, value: number): any;
    static ToObject(enumType: any, value: any): any;
    static ToObject(enumType: any, value: number): any;
    static ToObject(enumType: any, value: number): any;
    static ToObject(enumType: any, value: number): any;
    static ToObject(enumType: any, value: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    static Format(enumType: any, value: any, format: string): string;
    // properties
    // fields
  }
}
