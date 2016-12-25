declare namespace UnityEngine {
  class CacheIndex {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    // fields
    name: string;
    bytesUsed: number;
    expires: number;
  }
}