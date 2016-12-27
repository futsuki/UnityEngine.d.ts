declare namespace UnityEditorInternal {
  class ChartSeries extends System.Object {
    // constructors
    constructor(name: string, len: number, clr: any);
    // methods
    CreateOverlayData(): void;
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
