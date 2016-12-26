declare namespace UnityEngine {
  class ClusterInput {
    // constructors
    constructor();
    // methods
    static GetAxis(name: string): number;
    static GetButton(name: string): boolean;
    static GetTrackerPosition(name: string): UnityEngine.Vector3;
    static GetTrackerRotation(name: string): UnityEngine.Quaternion;
    static SetAxis(name: string, value: number): void;
    static SetButton(name: string, value: boolean): void;
    static SetTrackerPosition(name: string, value: UnityEngine.Vector3): void;
    static SetTrackerRotation(name: string, value: UnityEngine.Quaternion): void;
    static AddInput(name: string, deviceName: string, serverUrl: string, index: number, type: UnityEngine.ClusterInputType): boolean;
    static EditInput(name: string, deviceName: string, serverUrl: string, index: number, type: UnityEngine.ClusterInputType): boolean;
    static CheckConnectionToServer(name: string): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
