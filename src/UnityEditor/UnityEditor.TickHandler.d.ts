declare namespace UnityEditor {
  class TickHandler extends System.Object {
    // constructors
    constructor();
    // methods
    SetTickModulos(tickModulos: number[]): void;
    SetTickModulosForFrameRate(frameRate: number): void;
    SetRanges(minValue: number, maxValue: number, minPixel: number, maxPixel: number): void;
    GetTicksAtLevel(level: number, excludeTicksFromHigherlevels: boolean): number[];
    GetStrengthOfLevel(level: number): number;
    GetPeriodOfLevel(level: number): number;
    GetLevelWithMinSeparation(pixelSeparation: number): number;
    SetTickStrengths(tickMinSpacing: number, tickMaxSpacing: number, sqrt: boolean): void;
    // properties
    readonly tickLevels: number;
    // fields
  }
}
