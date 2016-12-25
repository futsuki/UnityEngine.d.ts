declare namespace UnityEngine.iOS {
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
    static GregorianCalendar: UnityEngine.iOS.CalendarIdentifier;
    static BuddhistCalendar: UnityEngine.iOS.CalendarIdentifier;
    static ChineseCalendar: UnityEngine.iOS.CalendarIdentifier;
    static HebrewCalendar: UnityEngine.iOS.CalendarIdentifier;
    static IslamicCalendar: UnityEngine.iOS.CalendarIdentifier;
    static IslamicCivilCalendar: UnityEngine.iOS.CalendarIdentifier;
    static JapaneseCalendar: UnityEngine.iOS.CalendarIdentifier;
    static RepublicOfChinaCalendar: UnityEngine.iOS.CalendarIdentifier;
    static PersianCalendar: UnityEngine.iOS.CalendarIdentifier;
    static IndianCalendar: UnityEngine.iOS.CalendarIdentifier;
    static ISO8601Calendar: UnityEngine.iOS.CalendarIdentifier;
  }
}
