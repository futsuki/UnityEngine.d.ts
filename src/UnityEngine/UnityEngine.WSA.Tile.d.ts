declare namespace UnityEngine.WSA {
  class Tile {
    // constructors
    private constructor();
    // methods
    static GetTemplate(templ: UnityEngine.WSA.TileTemplate): string;
    static Exists(tileId: string): boolean;
    static CreateOrUpdateSecondary(data: UnityEngine.WSA.SecondaryTileData): UnityEngine.WSA.Tile;
    static CreateOrUpdateSecondary(data: UnityEngine.WSA.SecondaryTileData, pos: UnityEngine.Vector2): UnityEngine.WSA.Tile;
    static CreateOrUpdateSecondary(data: UnityEngine.WSA.SecondaryTileData, area: UnityEngine.Rect): UnityEngine.WSA.Tile;
    static GetSecondary(tileId: string): UnityEngine.WSA.Tile;
    static GetSecondaries(): UnityEngine.WSA.Tile[];
    static DeleteSecondary(tileId: string): any;
    static DeleteSecondary(tileId: string, pos: UnityEngine.Vector2): any;
    static DeleteSecondary(tileId: string, area: UnityEngine.Rect): any;
    // properties
    // fields
  }
}
