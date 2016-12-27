declare namespace UnityEditor.BuildPlayerWindow {
  class BuildPlatform extends System.Object {
    // constructors
    constructor(locTitle: string, iconId: string, targetGroup: UnityEditor.BuildTargetGroup, forceShowTarget: boolean);
    constructor(locTitle: string, tooltip: string, iconId: string, targetGroup: UnityEditor.BuildTargetGroup, forceShowTarget: boolean);
    // methods
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
