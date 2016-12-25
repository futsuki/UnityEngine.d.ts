declare namespace UnityEngine {
  class RemoteNotification {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly alertBody: string;
    readonly hasAction: boolean;
    readonly applicationIconBadgeNumber: number;
    readonly soundName: string;
    readonly userInfo: any;
    // fields
  }
}
