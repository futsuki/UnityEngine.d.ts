declare namespace UnityEditor.PopupList {
  class ListElement extends System.Object {
    // constructors
    constructor(text: string, selected: boolean, score: number);
    constructor(text: string, selected: boolean);
    constructor(text: string);
    // methods
    ResetScore(): void;
    // properties
    filterScore: number;
    selected: boolean;
    enabled: boolean;
    partiallySelected: boolean;
    text: string;
    // fields
    m_Content: any;
  }
}
