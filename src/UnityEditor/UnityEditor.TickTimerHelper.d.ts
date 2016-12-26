declare namespace UnityEditor {
  class TickTimerHelper {
    // constructors
    constructor(intervalBetweenTicksInSeconds: number);
    // methods
    DoTick(): boolean;
    Reset(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
