declare namespace UnityEngine.WSA {
  class Tile extends System.Object {
    // constructors
    protected constructor();
    // methods
    static GetTemplate(templ: UnityEngine.WSA.TileTemplate): string;
    Update(xml: string): void;
    Update(medium: string, wide: string, large: string, text: string): void;
    PeriodicUpdate(uri: string, interval: number): void;
    StopPeriodicUpdate(): void;
    UpdateBadgeImage(image: string): void;
    UpdateBadgeNumber(number: number): void;
    RemoveBadge(): void;
    PeriodicBadgeUpdate(uri: string, interval: number): void;
    StopPeriodicBadgeUpdate(): void;
    static Exists(tileId: string): boolean;
    static CreateOrUpdateSecondary(data: UnityEngine.WSA.SecondaryTileData): UnityEngine.WSA.Tile;
    static CreateOrUpdateSecondary(data: UnityEngine.WSA.SecondaryTileData, pos: UnityEngine.Vector2): UnityEngine.WSA.Tile;
    static CreateOrUpdateSecondary(data: UnityEngine.WSA.SecondaryTileData, area: UnityEngine.Rect): UnityEngine.WSA.Tile;
    static GetSecondary(tileId: string): UnityEngine.WSA.Tile;
    static GetSecondaries(): UnityEngine.WSA.Tile[];
    Delete(): void;
    Delete(pos: UnityEngine.Vector2): void;
    Delete(area: UnityEngine.Rect): void;
    static DeleteSecondary(tileId: string): void;
    static DeleteSecondary(tileId: string, pos: UnityEngine.Vector2): void;
    static DeleteSecondary(tileId: string, area: UnityEngine.Rect): void;
    // properties
    static readonly main: UnityEngine.WSA.Tile;
    readonly id: string;
    readonly hasUserConsent: boolean;
    readonly exists: boolean;
    // fields
  }
}
