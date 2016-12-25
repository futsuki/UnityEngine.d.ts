declare namespace UnityEngine.iOS {
  class NotificationType {
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
    static None: UnityEngine.iOS.NotificationType;
    static Badge: UnityEngine.iOS.NotificationType;
    static Sound: UnityEngine.iOS.NotificationType;
    static Alert: UnityEngine.iOS.NotificationType;
  }
}
