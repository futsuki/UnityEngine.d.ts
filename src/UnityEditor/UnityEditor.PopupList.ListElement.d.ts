declare namespace UnityEditor.PopupList {
  class ListElement {
    // constructors
    constructor(text: string, selected: boolean, score: number);
    constructor(text: string, selected: boolean);
    constructor(text: string);
    // methods
    ResetScore(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
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
