declare namespace UnityEditor {
  class ManipulationToolUtility {
    // constructors
    constructor();
    // methods
    static SetMinDragDifferenceForPos(position: any): any;
    static DisableMinDragDifference(): any;
    static DisableMinDragDifferenceForAxis(axis: number): any;
    static DisableMinDragDifferenceBasedOnSnapping(positionBeforeSnapping: any, positionAfterSnapping: any): any;
    static BeginDragging(handleName: string): any;
    static EndDragging(handleName: string): any;
    static DetectDraggingBasedOnMouseDownUp(handleName: string, typeBefore: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static minDragDifference: any;
    // fields
    static handleDragChange: UnityEditor.ManipulationToolUtility.HandleDragChange;
  }
}
