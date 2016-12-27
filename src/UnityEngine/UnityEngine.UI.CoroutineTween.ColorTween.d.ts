declare namespace UnityEngine.UI.CoroutineTween {
  class ColorTween extends System.ValueType {
    // constructors
    protected constructor();
    // methods
    TweenValue(floatPercentage: number): void;
    AddOnChangedCallback(callback: ((arg0: UnityEngine.Color) => void)): void;
    GetIgnoreTimescale(): boolean;
    GetDuration(): number;
    ValidTarget(): boolean;
    // properties
    startColor: UnityEngine.Color;
    targetColor: UnityEngine.Color;
    tweenMode: UnityEngine.UI.CoroutineTween.ColorTween.ColorTweenMode;
    duration: number;
    ignoreTimeScale: boolean;
    // fields
  }
}
