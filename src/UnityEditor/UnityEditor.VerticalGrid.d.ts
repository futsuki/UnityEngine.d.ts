declare namespace UnityEditor {
  class VerticalGrid {
    // constructors
    constructor();
    // methods
    InitNumRowsAndColumns(itemCount: number, maxNumRows: number): void;
    CalcColumns(): number;
    CalcRows(itemCount: number): number;
    CalcRect(itemIdx: number, yOffset: number): any;
    GetMaxVisibleItems(height: number): number;
    IsVisibleInScrollView(scrollViewHeight: number, scrollPos: number, gridStartY: number, maxIndex: number, startIndex: any, endIndex: any): boolean;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
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
    fixedHorizontalSpacing: number;
    useFixedHorizontalSpacing: boolean;
    // fields
  }
}
