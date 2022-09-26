export enum eTerrainType {
  TERRAIN_PLAINS,
  TERRAIN_HILLS,
  TERRAIN_FOREST,
  TERRAIN_FALLOUT,
  TERRAIN_OASIS,
  TERRAIN_FLOOD_PLAINS,
  TERRAIN_MARSH,
  TERRAIN_OCEAN,
  TERRAIN_MAX,
}

export function terrainEnum2Info(terrain: number) {
  let retVal!: {
    name: string;
    rugged: boolean;
    modify: number;
  };
  switch (terrain) {
    case eTerrainType.TERRAIN_PLAINS:
      retVal = {
        name: "平地",
        modify: 0,
        rugged: false,
      };
      break;
    case eTerrainType.TERRAIN_HILLS:
      retVal = {
        name: "丘陵",
        modify: 25,
        rugged: true,
      };
      break;
    case eTerrainType.TERRAIN_FOREST:
      retVal = {
        name: "森/从林",
        modify: 25,
        rugged: true,
      };
      break;
    case eTerrainType.TERRAIN_FALLOUT:
      retVal = {
        name: "辐射区",
        modify: -15,
        rugged: false,
      };
      break;
    case eTerrainType.TERRAIN_OASIS:
      retVal = {
        name: "绿洲",
        modify: -10,
        rugged: false,
      };
      break;
    case eTerrainType.TERRAIN_FLOOD_PLAINS:
      retVal = {
        name: "冲击平原",
        modify: -10,
        rugged: false,
      };
      break;
    case eTerrainType.TERRAIN_MARSH:
      retVal = {
        name: "沼泽",
        modify: -15,
        rugged: false,
      };
      break;
    case eTerrainType.TERRAIN_OCEAN:
      retVal = {
        name: "海面",
        modify: 0,
        rugged: false,
      };
      break;
    default:
      retVal = {
        name: "未定义",
        modify: 0,
        rugged: false,
      };
      break;
  }
  return retVal;
}
