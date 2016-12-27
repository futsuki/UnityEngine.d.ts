declare namespace UnityEngine {
  class ColorUsageAttribute extends UnityEngine.PropertyAttribute {
    // constructors
    constructor(showAlpha: boolean);
    constructor(showAlpha: boolean, hdr: boolean, minBrightness: number, maxBrightness: number, minExposureValue: number, maxExposureValue: number);
    // methods
    // properties
    // fields
    showAlpha: boolean;
    hdr: boolean;
    minBrightness: number;
    maxBrightness: number;
    minExposureValue: number;
    maxExposureValue: number;
  }
}
