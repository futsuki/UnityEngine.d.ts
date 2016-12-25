declare namespace UnityEngine {
  class Security {
    // constructors
    constructor();
    // methods
    static PrefetchSocketPolicy(ip: string, atPort: number): boolean;
    static PrefetchSocketPolicy(ip: string, atPort: number, timeout: number): boolean;
    static LoadAndVerifyAssembly(assemblyData: number[], authorizationKey: string): any;
    static LoadAndVerifyAssembly(assemblyData: number[]): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
