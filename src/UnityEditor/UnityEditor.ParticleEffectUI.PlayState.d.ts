declare namespace UnityEditor.ParticleEffectUI {
  class PlayState {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Stopped: UnityEditor.ParticleEffectUI.PlayState;
    static Playing: UnityEditor.ParticleEffectUI.PlayState;
    static Paused: UnityEditor.ParticleEffectUI.PlayState;
  }
}
