declare namespace UnityEngine.iOS {
  class NotificationServices {
    // constructors
    constructor();
    // methods
    static GetLocalNotification(index: number): UnityEngine.iOS.LocalNotification;
    static ScheduleLocalNotification(notification: UnityEngine.iOS.LocalNotification): any;
    static PresentLocalNotificationNow(notification: UnityEngine.iOS.LocalNotification): any;
    static CancelLocalNotification(notification: UnityEngine.iOS.LocalNotification): any;
    static CancelAllLocalNotifications(): any;
    static GetRemoteNotification(index: number): UnityEngine.iOS.RemoteNotification;
    static ClearLocalNotifications(): any;
    static ClearRemoteNotifications(): any;
    static RegisterForNotifications(notificationTypes: UnityEngine.iOS.NotificationType): any;
    static RegisterForNotifications(notificationTypes: UnityEngine.iOS.NotificationType, registerForRemote: boolean): any;
    static UnregisterForRemoteNotifications(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly localNotificationCount: number;
    static readonly localNotifications: UnityEngine.iOS.LocalNotification[];
    static readonly scheduledLocalNotifications: UnityEngine.iOS.LocalNotification[];
    static readonly remoteNotificationCount: number;
    static readonly remoteNotifications: UnityEngine.iOS.RemoteNotification[];
    static readonly enabledNotificationTypes: UnityEngine.iOS.NotificationType;
    static readonly deviceToken: number[];
    static readonly registrationError: string;
    // fields
  }
}
