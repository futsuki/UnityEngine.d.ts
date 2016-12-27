declare namespace UnityEngine {
  class ContextMenu extends System.Attribute {
    // constructors
    constructor(itemName: string);
    constructor(itemName: string, isValidateFunction: boolean);
    constructor(itemName: string, isValidateFunction: boolean, priority: number);
    // methods
    // properties
    // fields
    menuItem: string;
    validate: boolean;
    priority: number;
  }
}
