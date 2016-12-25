declare namespace UnityEngine.iOS {
  class CalendarUnit {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Era: UnityEngine.iOS.CalendarUnit;
    static Year: UnityEngine.iOS.CalendarUnit;
    static Month: UnityEngine.iOS.CalendarUnit;
    static Day: UnityEngine.iOS.CalendarUnit;
    static Hour: UnityEngine.iOS.CalendarUnit;
    static Minute: UnityEngine.iOS.CalendarUnit;
    static Second: UnityEngine.iOS.CalendarUnit;
    static Week: UnityEngine.iOS.CalendarUnit;
    static Weekday: UnityEngine.iOS.CalendarUnit;
    static WeekdayOrdinal: UnityEngine.iOS.CalendarUnit;
    static Quarter: UnityEngine.iOS.CalendarUnit;
  }
}
