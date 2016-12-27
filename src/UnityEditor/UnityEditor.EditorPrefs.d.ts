declare namespace UnityEditor {
  class EditorPrefs extends System.Object {
    // constructors
    constructor();
    // methods
    static SetInt(key: string, value: number): void;
    static GetInt(key: string, defaultValue: number): number;
    static GetInt(key: string): number;
    static SetFloat(key: string, value: number): void;
    static GetFloat(key: string, defaultValue: number): number;
    static GetFloat(key: string): number;
    static SetString(key: string, value: string): void;
    static GetString(key: string, defaultValue: string): string;
    static GetString(key: string): string;
    static SetBool(key: string, value: boolean): void;
    static GetBool(key: string, defaultValue: boolean): boolean;
    static GetBool(key: string): boolean;
    static HasKey(key: string): boolean;
    static DeleteKey(key: string): void;
    static DeleteAll(): void;
    // properties
    // fields
  }
}
