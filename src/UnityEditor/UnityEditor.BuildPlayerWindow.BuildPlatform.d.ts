declare namespace UnityEditor.BuildPlayerWindow {
  class BuildPlatform {
    // constructors
    constructor(locTitle: string, iconId: string, targetGroup: UnityEditor.BuildTargetGroup, forceShowTarget: boolean);
    constructor(locTitle: string, tooltip: string, iconId: string, targetGroup: UnityEditor.BuildTargetGroup, forceShowTarget: boolean);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly DefaultTarget: UnityEditor.BuildTarget;
    // fields
    name: string;
    title: any;
    smallIcon: any;
    targetGroup: UnityEditor.BuildTargetGroup;
    forceShowTarget: boolean;
    tooltip: string;
  }
}
