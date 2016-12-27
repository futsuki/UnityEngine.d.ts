declare namespace UnityEngine {
  class PlayerPrefs extends System.Object {
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
    static HasKey(key: string): boolean;
    static DeleteKey(key: string): void;
    static DeleteAll(): void;
    static Save(): void;
    // properties
    // fields
  }
}
