declare namespace UnityEngine {
  class LocalNotification extends System.Object {
    // constructors
    constructor();
    // methods
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
