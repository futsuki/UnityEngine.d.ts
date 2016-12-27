declare namespace UnityEditor {
  class UsabilityAnalytics extends System.Object {
    // constructors
    constructor();
    // methods
    static Track(page: string): void;
    static Event(category: string, action: string, label: string, value: number): void;
    // properties
    // fields
  }
}
