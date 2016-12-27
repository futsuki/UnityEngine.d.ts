declare namespace UnityEngine {
  class RemoteSettings extends System.Object {
    // constructors
    constructor();
    // methods
    static CallOnUpdate(): void;
    static GetInt(key: string, defaultValue: number): number;
    static GetInt(key: string): number;
    static GetFloat(key: string, defaultValue: number): number;
    static GetFloat(key: string): number;
    static GetString(key: string, defaultValue: string): string;
    static GetString(key: string): string;
    static GetBool(key: string, defaultValue: boolean): boolean;
    static GetBool(key: string): boolean;
    static HasKey(key: string): boolean;
    // properties
    // fields
  }
}
