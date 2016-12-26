declare namespace UnityEditor {
  class UsabilityAnalytics {
    // constructors
    constructor();
    // methods
    static Track(page: string): void;
    static Event(category: string, action: string, label: string, value: number): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
