declare namespace UnityEngine {
  class ColorUsageAttribute {
    // constructors
    constructor(showAlpha: boolean);
    constructor(showAlpha: boolean, hdr: boolean, minBrightness: number, maxBrightness: number, minExposureValue: number, maxExposureValue: number);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    order: number;
    readonly TypeId: any;
    // fields
    showAlpha: boolean;
    hdr: boolean;
    minBrightness: number;
    maxBrightness: number;
    minExposureValue: number;
    maxExposureValue: number;
  }
}
