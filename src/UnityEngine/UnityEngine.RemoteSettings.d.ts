declare namespace UnityEngine {
  class RemoteSettings {
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
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
