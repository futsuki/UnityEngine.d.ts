declare namespace UnityEditor {
  class VerticalGridWithSplitter extends System.Object {
    // constructors
    constructor();
    // methods
    InitNumRowsAndColumns(itemCount: number, maxNumRows: number): void;
    CalcRect(itemIdx: number, yOffset: number): any;
    GetMaxVisibleItems(height: number): number;
    ResetSplit(): void;
    OpenSplit(splitAfterRowIndex: number, numItems: number): void;
    CalcSplitRect(splitIndex: number, yOffset: number): any;
    CloseSplit(): void;
    UpdateSplitAnimationOnGUI(): boolean;
    // properties
    readonly columns: number;
    readonly rows: number;
    readonly height: number;
    readonly horizontalSpacing: number;
    fixedWidth: number;
    itemSize: any;
    verticalSpacing: number;
    minHorizontalSpacing: number;
    topMargin: number;
    bottomMargin: number;
    rightMargin: number;
    leftMargin: number;
    // fields
  }
}
