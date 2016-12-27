declare namespace UnityEngine {
  class SystemClock extends System.Object {
    // constructors
    constructor();
    // methods
    static ToUnixTimeMilliseconds(date: any): number;
    static ToUnixTimeSeconds(date: any): number;
    // properties
    static readonly now: any;
    // fields
  }
}
