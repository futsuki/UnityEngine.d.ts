declare namespace UnityEditor {
  class Json {
    // constructors
    private constructor();
    // methods
    static Deserialize(json: string): any;
    static Serialize(obj: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
