declare namespace UnityEditor {
  class SplitterState extends System.Object {
    // constructors
    constructor(relativeSizes: number[]);
    constructor(realSizes: number[], minSizes: number[], maxSizes: number[]);
    constructor(relativeSizes: number[], minSizes: number[], maxSizes: number[]);
    constructor(relativeSizes: number[], minSizes: number[], maxSizes: number[], splitSize: number);
    // methods
    NormalizeRelativeSizes(): void;
    RealToRelativeSizes(): void;
    RelativeToRealSizes(totalSpace: number): void;
    DoSplitter(i1: number, i2: number, diff: number): void;
    // properties
    // fields
    ID: number;
    splitterInitialOffset: number;
    currentActiveSplitter: number;
    realSizes: number[];
    relativeSizes: number[];
    minSizes: number[];
    maxSizes: number[];
    lastTotalSize: number;
    splitSize: number;
    xOffset: number;
  }
}
