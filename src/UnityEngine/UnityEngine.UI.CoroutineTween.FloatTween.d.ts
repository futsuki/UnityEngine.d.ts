declare namespace UnityEngine.UI.CoroutineTween {
  class FloatTween {
    // constructors
    private constructor();
    // methods
    TweenValue(floatPercentage: number): void;
    AddOnChangedCallback(callback: any): void;
    GetIgnoreTimescale(): boolean;
    GetDuration(): number;
    ValidTarget(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    ToString(): string;
    GetType(): any;
    // properties
    startValue: number;
    targetValue: number;
    duration: number;
    ignoreTimeScale: boolean;
    // fields
  }
}
