export enum eTerrainType {
  TERRAIN_PLAINS,
  TERRAIN_HILLS,
  TERRAIN_FOREST,
  TERRAIN_FALLOUT,
  TERRAIN_OASIS,
  TERRAIN_FLOOD_PLAINS,
  TERRAIN_MARSH,
  TERRAIN_OCEAN,
}

export function terrainEnum2Info(terrain: number) {
  let retVal!: {
    name: string;
    rugged: boolean;
    modify: number;
  };
  switch (terrain) {
    case eTerrainType.TERRAIN_PLAINS:
      retVal.name = "平地";
      retVal.modify = 0;
      retVal.rugged = false;
      break;
    case eTerrainType.TERRAIN_HILLS:
      retVal.name = "丘陵";
      retVal.modify = 25;
      retVal.rugged = true;
      break;
    case eTerrainType.TERRAIN_FOREST:
      retVal.name = "森/从林";
      retVal.modify = 25;
      retVal.rugged = true;
      break;
    case eTerrainType.TERRAIN_FALLOUT:
      retVal.name = "辐射区";
      retVal.modify = -15;
      retVal.rugged = false;
      break;
    case eTerrainType.TERRAIN_OASIS:
      retVal.name = "绿洲";
      retVal.modify = -10;
      retVal.rugged = false;
      break;
    case eTerrainType.TERRAIN_FLOOD_PLAINS:
      retVal.name = "冲击平原";
      retVal.modify = 10;
      retVal.rugged = false;
      break;
    case eTerrainType.TERRAIN_MARSH:
      retVal.name = "沼泽";
      retVal.modify = 15;
      retVal.rugged = false;
      break;
    case eTerrainType.TERRAIN_OCEAN:
      retVal.name = "海面";
      retVal.modify = 0;
      retVal.rugged = false;
      break;
    default:
      retVal.name = "未定义";
      retVal.modify = 0;
      retVal.rugged = false;
      break;
  }
  return retVal;
}
