declare namespace UnityEngine.UI.CoroutineTween {
  class ITweenValue {
    // constructors
    private constructor();
    // methods
    TweenValue(floatPercentage: number): void;
    ValidTarget(): boolean;
    // properties
    readonly ignoreTimeScale: boolean;
    readonly duration: number;
    // fields
  }
}
