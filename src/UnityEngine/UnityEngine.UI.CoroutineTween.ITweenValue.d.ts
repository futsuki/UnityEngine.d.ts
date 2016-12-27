declare namespace UnityEngine.UI.CoroutineTween {
  class ITweenValue {
    // constructors
    protected constructor();
    // methods
    TweenValue(floatPercentage: number): void;
    ValidTarget(): boolean;
    // properties
    readonly ignoreTimeScale: boolean;
    readonly duration: number;
    // fields
  }
}
