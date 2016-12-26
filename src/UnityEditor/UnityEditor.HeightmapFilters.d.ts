declare namespace UnityEditor {
  class HeightmapFilters {
    // constructors
    constructor();
    // methods
    static Smooth(heights: number[], terrain: any): void;
    static Smooth(terrain: any): void;
    static Flatten(terrain: any, height: number): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
