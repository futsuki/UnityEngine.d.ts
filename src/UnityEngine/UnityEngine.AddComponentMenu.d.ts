declare namespace UnityEngine {
  class AddComponentMenu extends System.Attribute {
    // constructors
    constructor(menuName: string);
    constructor(menuName: string, order: number);
    // methods
    // properties
    readonly componentMenu: string;
    readonly componentOrder: number;
    // fields
  }
}
