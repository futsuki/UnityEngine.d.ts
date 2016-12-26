declare namespace UnityEditorInternal {
  class ChartData {
    // constructors
    constructor();
    // methods
    Assign(items: UnityEditorInternal.ChartSeries[], firstFrame: number, firstSelectableFrame: number): void;
    AssignScale(scale: number[]): void;
    SetGrid(grid: number[], labels: string[]): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly NumberOfFrames: number;
    // fields
    charts: UnityEditorInternal.ChartSeries[];
    chartOrder: number[];
    scale: number[];
    grid: number[];
    gridLabels: string[];
    selectedLabels: string[];
    firstFrame: number;
    firstSelectableFrame: number;
    hasOverlay: boolean;
    maxValue: number;
  }
}
