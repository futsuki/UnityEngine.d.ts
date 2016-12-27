declare namespace UnityEngine {
  class Security extends System.Object {
    // constructors
    constructor();
    // methods
    static PrefetchSocketPolicy(ip: string, atPort: number): boolean;
    static PrefetchSocketPolicy(ip: string, atPort: number, timeout: number): boolean;
    static LoadAndVerifyAssembly(assemblyData: number[], authorizationKey: string): any;
    static LoadAndVerifyAssembly(assemblyData: number[]): any;
    // properties
    // fields
  }
}
