declare namespace UnityEditor {
  class ColorPickerHDRConfig {
    // constructors
    constructor(minBrightness: number, maxBrightness: number, minExposureValue: number, maxExposureValue: number);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    minBrightness: number;
    maxBrightness: number;
    minExposureValue: number;
    maxExposureValue: number;
  }
}
