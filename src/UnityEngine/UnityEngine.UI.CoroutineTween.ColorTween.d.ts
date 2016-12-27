declare namespace UnityEngine.UI.CoroutineTween {
  class ColorTween {
    // constructors
    private constructor();
    // methods
    TweenValue(floatPercentage: number): void;
    AddOnChangedCallback(callback: ((UnityEngine.Color) => void)): void;
    GetIgnoreTimescale(): boolean;
    GetDuration(): number;
    ValidTarget(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    startColor: UnityEngine.Color;
    targetColor: UnityEngine.Color;
    tweenMode: UnityEngine.UI.CoroutineTween.ColorTween.ColorTweenMode;
    duration: number;
    ignoreTimeScale: boolean;
    // fields
  }
}
