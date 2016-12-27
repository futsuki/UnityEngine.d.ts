declare namespace UnityEditor.AvatarSetupTool {
  class BonePoseData extends System.Object {
    // constructors
    constructor(dir: any, globalSpace: boolean, maxAngleDiff: number);
    constructor(dir: any, globalSpace: boolean, maxAngleDiff: number, children: number[]);
    constructor(dir: any, globalSpace: boolean, maxAngleDiff: number, planeNormal: any, children: number[]);
    // methods
    // properties
    // fields
    direction: any;
    compareInGlobalSpace: boolean;
    maxAngle: number;
    childIndices: number[];
    planeNormal: any;
  }
}
