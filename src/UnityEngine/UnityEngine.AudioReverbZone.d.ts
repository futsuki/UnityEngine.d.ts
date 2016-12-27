declare namespace UnityEngine {
  class AudioReverbZone extends UnityEngine.Behaviour {
    // constructors
    constructor();
    // methods
    // properties
    minDistance: number;
    maxDistance: number;
    reverbPreset: UnityEngine.AudioReverbPreset;
    room: number;
    roomHF: number;
    roomLF: number;
    decayTime: number;
    decayHFRatio: number;
    reflections: number;
    reflectionsDelay: number;
    reverb: number;
    reverbDelay: number;
    HFReference: number;
    LFReference: number;
    roomRolloffFactor: number;
    diffusion: number;
    density: number;
    // fields
  }
}
