declare namespace UnityEngine {
  class AudioListener extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    static GetOutputData(numSamples: number, channel: number): number[];
    static GetOutputData(samples: number[], channel: number): void;
    static GetSpectrumData(numSamples: number, channel: number, window: UnityEngine.FFTWindow): number[];
    static GetSpectrumData(samples: number[], channel: number, window: UnityEngine.FFTWindow): void;
    // properties
    static volume: number;
    static pause: boolean;
    velocityUpdateMode: UnityEngine.AudioVelocityUpdateMode;
    // fields
  }
}
