declare namespace UnityEditor {
  class ManipulationToolUtility extends System.Object {
    // constructors
    constructor();
    // methods
    static SetMinDragDifferenceForPos(position: any): void;
    static DisableMinDragDifference(): void;
    static DisableMinDragDifferenceForAxis(axis: number): void;
    static DisableMinDragDifferenceBasedOnSnapping(positionBeforeSnapping: any, positionAfterSnapping: any): void;
    static BeginDragging(handleName: string): void;
    static EndDragging(handleName: string): void;
    static DetectDraggingBasedOnMouseDownUp(handleName: string, typeBefore: any): void;
    // properties
    static minDragDifference: any;
    // fields
    static handleDragChange: ((handleName: string, dragging: boolean) => void);
  }
}
