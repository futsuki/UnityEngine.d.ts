declare namespace UnityEngine.UI.Dropdown {
  class OptionData {
    // constructors
    constructor();
    constructor(text: string);
    constructor(image: UnityEngine.Sprite);
    constructor(text: string, image: UnityEngine.Sprite);
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    text: string;
    image: UnityEngine.Sprite;
    // fields
  }
}
