declare namespace UnityEngine {
  class CalendarIdentifier {
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
    static GregorianCalendar: UnityEngine.CalendarIdentifier;
    static BuddhistCalendar: UnityEngine.CalendarIdentifier;
    static ChineseCalendar: UnityEngine.CalendarIdentifier;
    static HebrewCalendar: UnityEngine.CalendarIdentifier;
    static IslamicCalendar: UnityEngine.CalendarIdentifier;
    static IslamicCivilCalendar: UnityEngine.CalendarIdentifier;
    static JapaneseCalendar: UnityEngine.CalendarIdentifier;
    static RepublicOfChinaCalendar: UnityEngine.CalendarIdentifier;
    static PersianCalendar: UnityEngine.CalendarIdentifier;
    static IndianCalendar: UnityEngine.CalendarIdentifier;
    static ISO8601Calendar: UnityEngine.CalendarIdentifier;
  }
}
