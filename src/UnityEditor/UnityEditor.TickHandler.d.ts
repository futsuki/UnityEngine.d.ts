declare namespace UnityEditor {
  class TickHandler {
    // constructors
    constructor();
    // methods
    SetTickModulos(tickModulos: number[]): any;
    SetTickModulosForFrameRate(frameRate: number): any;
    SetRanges(minValue: number, maxValue: number, minPixel: number, maxPixel: number): any;
    GetTicksAtLevel(level: number, excludeTicksFromHigherlevels: boolean): number[];
    GetStrengthOfLevel(level: number): number;
    GetPeriodOfLevel(level: number): number;
    GetLevelWithMinSeparation(pixelSeparation: number): number;
    SetTickStrengths(tickMinSpacing: number, tickMaxSpacing: number, sqrt: boolean): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly tickLevels: number;
    // fields
  }
}
