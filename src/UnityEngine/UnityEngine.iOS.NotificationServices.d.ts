declare namespace UnityEngine.iOS {
  class NotificationServices extends System.Object {
    // constructors
    constructor();
    // methods
    static GetLocalNotification(index: number): UnityEngine.iOS.LocalNotification;
    static ScheduleLocalNotification(notification: UnityEngine.iOS.LocalNotification): void;
    static PresentLocalNotificationNow(notification: UnityEngine.iOS.LocalNotification): void;
    static CancelLocalNotification(notification: UnityEngine.iOS.LocalNotification): void;
    static CancelAllLocalNotifications(): void;
    static GetRemoteNotification(index: number): UnityEngine.iOS.RemoteNotification;
    static ClearLocalNotifications(): void;
    static ClearRemoteNotifications(): void;
    static RegisterForNotifications(notificationTypes: UnityEngine.iOS.NotificationType): void;
    static RegisterForNotifications(notificationTypes: UnityEngine.iOS.NotificationType, registerForRemote: boolean): void;
    static UnregisterForRemoteNotifications(): void;
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
