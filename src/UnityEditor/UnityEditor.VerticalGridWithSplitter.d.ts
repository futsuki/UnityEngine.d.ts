declare namespace UnityEditor {
  class VerticalGridWithSplitter {
    // constructors
    constructor();
    // methods
    InitNumRowsAndColumns(itemCount: number, maxNumRows: number): any;
    CalcRect(itemIdx: number, yOffset: number): any;
    GetMaxVisibleItems(height: number): number;
    ResetSplit(): any;
    OpenSplit(splitAfterRowIndex: number, numItems: number): any;
    CalcSplitRect(splitIndex: number, yOffset: number): any;
    CloseSplit(): any;
    UpdateSplitAnimationOnGUI(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
