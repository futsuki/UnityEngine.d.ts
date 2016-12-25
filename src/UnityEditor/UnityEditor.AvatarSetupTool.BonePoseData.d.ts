declare namespace UnityEditor.AvatarSetupTool {
  class BonePoseData {
    // constructors
    constructor(dir: any, globalSpace: boolean, maxAngleDiff: number);
    constructor(dir: any, globalSpace: boolean, maxAngleDiff: number, children: number[]);
    constructor(dir: any, globalSpace: boolean, maxAngleDiff: number, planeNormal: any, children: number[]);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    direction: any;
    compareInGlobalSpace: boolean;
    maxAngle: number;
    childIndices: number[];
    planeNormal: any;
  }
}
