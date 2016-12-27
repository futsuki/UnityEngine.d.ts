declare namespace UnityEngine.UI.CoroutineTween {
  class FloatTween extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    TweenValue(floatPercentage: number): void;
    AddOnChangedCallback(callback: ((arg0: number) => void)): void;
    GetIgnoreTimescale(): boolean;
    GetDuration(): number;
    ValidTarget(): boolean;
    // properties
    startValue: number;
    targetValue: number;
    duration: number;
    ignoreTimeScale: boolean;
    // fields
  }
}
