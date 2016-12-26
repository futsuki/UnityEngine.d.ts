declare namespace UnityEngine.Rendering {
  class SplashScreen {
    // constructors
    constructor();
    // methods
    static Begin(): void;
    static Draw(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly isFinished: boolean;
    // fields
  }
}
