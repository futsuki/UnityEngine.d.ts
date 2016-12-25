declare namespace UnityEngine {
  class PlayerPrefs {
    // constructors
    constructor();
    // methods
    static SetInt(key: string, value: number): any;
    static GetInt(key: string, defaultValue: number): number;
    static GetInt(key: string): number;
    static SetFloat(key: string, value: number): any;
    static GetFloat(key: string, defaultValue: number): number;
    static GetFloat(key: string): number;
    static SetString(key: string, value: string): any;
    static GetString(key: string, defaultValue: string): string;
    static GetString(key: string): string;
    static HasKey(key: string): boolean;
    static DeleteKey(key: string): any;
    static DeleteAll(): any;
    static Save(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
