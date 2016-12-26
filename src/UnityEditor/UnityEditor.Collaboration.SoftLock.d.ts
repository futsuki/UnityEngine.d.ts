declare namespace UnityEditor.Collaboration {
  class SoftLock {
    // constructors
    private constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly userID: string;
    readonly machineID: string;
    readonly displayName: string;
    readonly timeStamp: number;
    // fields
  }
}
