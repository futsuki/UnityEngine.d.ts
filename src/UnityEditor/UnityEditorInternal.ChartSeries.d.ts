declare namespace UnityEditorInternal {
  class ChartSeries {
    // constructors
    constructor(name: string, len: number, clr: any);
    // methods
    CreateOverlayData(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    identifierName: string;
    name: string;
    data: number[];
    overlayData: number[];
    color: any;
    enabled: boolean;
  }
}
