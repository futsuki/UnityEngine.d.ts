declare namespace UnityEditor {
  class HeightmapFilters {
    // constructors
    constructor();
    // methods
    static Smooth(heights: number[], terrain: any): any;
    static Smooth(terrain: any): any;
    static Flatten(terrain: any, height: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
