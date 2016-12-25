declare namespace UnityEngine {
  class LocalNotification {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    fireDate: any;
    timeZone: string;
    repeatInterval: UnityEngine.CalendarUnit;
    repeatCalendar: UnityEngine.CalendarIdentifier;
    alertBody: string;
    alertAction: string;
    hasAction: boolean;
    alertLaunchImage: string;
    applicationIconBadgeNumber: number;
    soundName: string;
    static readonly defaultSoundName: string;
    userInfo: any;
    // fields
  }
}
