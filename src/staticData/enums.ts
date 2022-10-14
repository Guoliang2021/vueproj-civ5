export enum eEra {
  ERA_ALL = 0,
  ERA_ANCIENT,
  ERA_CLASSICAL,
  ERA_MEDIEVAL,
  ERA_RENAISSANCE,
  ERA_INDUSTRIAL,
  ERA_MODERN,
  ERA_ATOMIC,
  ERA_INFOMATION,
  ERA_FUTURE,
  ERA_MAX,
}

export function eraEnum2String(era: number) {
  let retVal!: string;
  switch (era) {
    case eEra.ERA_ALL:
      retVal = "全部";
      break;
    case eEra.ERA_ANCIENT:
      retVal = "远古";
      break;
    case eEra.ERA_CLASSICAL:
      retVal = "古典";
      break;
    case eEra.ERA_MEDIEVAL:
      retVal = "中古";
      break;
    case eEra.ERA_RENAISSANCE:
      retVal = "启蒙";
      break;
    case eEra.ERA_INDUSTRIAL:
      retVal = "工业";
      break;
    case eEra.ERA_MODERN:
      retVal = "现代";
      break;
    case eEra.ERA_ATOMIC:
      retVal = "原子";
      break;
    case eEra.ERA_INFOMATION:
      retVal = "资讯";
      break;
    case eEra.ERA_FUTURE:
      retVal = "未来";
      break;
    default:
      retVal = "未定义";
      break;
  }
  return retVal;
}

export enum eNationality {
  NATION_NONE,
  NATION_BARBARIAN,
  NATION_AMERICA,
  NATION_ARABIA,
  NATION_ASSYRIA,
  NATION_AUSTRIA,
  NATION_AZTAKA,
  NATION_BABYLON,
  NATION_BRAZIL,
  NATION_BYZANTIUM,
  NATION_CARTHAGE,
  NATION_CHINA,
  NATION_CELTIC,
  NATION_DENMARK,
  NATION_EGYPT,
  NATION_ENGLAND,
  NATION_ETHIOPIA,
  NATION_FRANCE,
  NATION_GERMANY,
  NATION_GREECE,
  NATION_HUN,
  NATION_INDIA,
  NATION_INDONESIA,
  NATION_INCA,
  NATION_IROQUOIS,
  NATION_JANPAN,
  NATION_KOREA,
  NATION_MONGOLIA,
  NATION_MOROCCO,
  NATION_MAYA,
  NATION_NETHERLANDS,
  NATION_OSMAN,
  NATION_PERSIA,
  NATION_POLAND,
  NATION_POLYNESIA,
  NATION_PORTUGAL,
  NATION_ROMA,
  NATION_RUSSIA,
  NATION_SIAM,
  NATION_SONGHAI,
  NATION_SPAIN,
  NATION_SWEDEN,
  NATION_SHOSHONE,
  NATION_VENICE,
  NATION_ZURU,
  NATION_MAX,
}

export function nationEnum2String(nation: number) {
  let retVal!: string;
  switch (nation) {
    case eNationality.NATION_NONE:
      retVal = "无";
      break;
    case eNationality.NATION_BARBARIAN:
      retVal = "蛮族";
      break;
    case eNationality.NATION_AMERICA:
      retVal = "美国";
      break;
    case eNationality.NATION_ARABIA:
      retVal = "阿拉伯";
      break;
    case eNationality.NATION_ASSYRIA:
      retVal = "亚述";
      break;
    case eNationality.NATION_AUSTRIA:
      retVal = "奥地利";
      break;
    case eNationality.NATION_AZTAKA:
      retVal = "阿兹特克";
      break;
    case eNationality.NATION_BABYLON:
      retVal = "巴比伦";
      break;
    case eNationality.NATION_BRAZIL:
      retVal = "巴西";
      break;
    case eNationality.NATION_BYZANTIUM:
      retVal = "拜占庭";
      break;
    case eNationality.NATION_CARTHAGE:
      retVal = "迦太基";
      break;
    case eNationality.NATION_CHINA:
      retVal = "中国";
      break;
    case eNationality.NATION_CELTIC:
      retVal = "凯尔特";
      break;
    case eNationality.NATION_DENMARK:
      retVal = "丹麦";
      break;
    case eNationality.NATION_EGYPT:
      retVal = "埃及";
      break;
    case eNationality.NATION_ENGLAND:
      retVal = "英国";
      break;
    case eNationality.NATION_ETHIOPIA:
      retVal = "埃塞尔比亚";
      break;
    case eNationality.NATION_FRANCE:
      retVal = "法国";
      break;
    case eNationality.NATION_GERMANY:
      retVal = "德国";
      break;
    case eNationality.NATION_GREECE:
      retVal = "希腊";
      break;
    case eNationality.NATION_HUN:
      retVal = "匈";
      break;
    case eNationality.NATION_INDIA:
      retVal = "印度";
      break;
    case eNationality.NATION_INDONESIA:
      retVal = "印度尼西亚";
      break;
    case eNationality.NATION_INCA:
      retVal = "印加";
      break;
    case eNationality.NATION_IROQUOIS:
      retVal = "易洛魁";
      break;
    case eNationality.NATION_JANPAN:
      retVal = "日本";
      break;
    case eNationality.NATION_KOREA:
      retVal = "朝鲜";
      break;
    case eNationality.NATION_MONGOLIA:
      retVal = "蒙古";
      break;
    case eNationality.NATION_MOROCCO:
      retVal = "摩洛哥";
      break;
    case eNationality.NATION_MAYA:
      retVal = "玛雅";
      break;
    case eNationality.NATION_NETHERLANDS:
      retVal = "荷兰";
      break;
    case eNationality.NATION_OSMAN:
      retVal = "奥斯曼";
      break;
    case eNationality.NATION_PERSIA:
      retVal = "波斯";
      break;
    case eNationality.NATION_POLAND:
      retVal = "波兰";
      break;
    case eNationality.NATION_POLYNESIA:
      retVal = "波利尼西亚";
      break;
    case eNationality.NATION_PORTUGAL:
      retVal = "葡萄牙";
      break;
    case eNationality.NATION_ROMA:
      retVal = "罗马";
      break;
    case eNationality.NATION_RUSSIA:
      retVal = "俄罗斯";
      break;
    case eNationality.NATION_SIAM:
      retVal = "暹罗";
      break;
    case eNationality.NATION_SONGHAI:
      retVal = "桑海";
      break;
    case eNationality.NATION_SPAIN:
      retVal = "西班牙";
      break;
    case eNationality.NATION_SWEDEN:
      retVal = "瑞典";
      break;
    case eNationality.NATION_SHOSHONE:
      retVal = "肖肖尼";
      break;
    case eNationality.NATION_VENICE:
      retVal = "威尼斯";
      break;
    case eNationality.NATION_ZURU:
      retVal = "祖鲁";
      break;
    default:
      retVal = "未定义";
      break;
  }
  return retVal;
}

export enum eTerrainType {
  TERRAIN_ALL,
  TERRAIN_PLAINS,
  TERRAIN_HILLS,
  TERRAIN_FOREST,
  TERRAIN_FALLOUT,
  TERRAIN_OASIS,
  TERRAIN_FLOOD_PLAINS,
  TERRAIN_MARSH,
  TERRAIN_OCEAN,
  TERRAIN_MAX,
  TERRAIN_RUGGED,
  TERRAIN_INRUGGED,
}
export function terrainEnum2Info(terrain: number) {
  let retVal!: {
    name: string;
    rugged: boolean;
    modify: number;
  };
  switch (terrain) {
    case eTerrainType.TERRAIN_ALL:
      retVal = {
        name: "不限",
        modify: 0,
        rugged: false,
      };
      break;
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

export enum eTechnology {
  /*before ancient */
  TECH_AGRICULTURE,
  /*ancient first*/
  TECH_POTTERY,
  TECH_ANIMAL_HUSBANDRY,
  TECH_ARCHERY,
  TECH_MINING,
  /*ancient second*/
  TECH_SAILING,
  TECH_CALENDAR,
  TECH_WRITING,
  TECH_TRAPPING,
  TECH_THE_WHEEL,
  TECH_MASONRY,
  TECH_BRONZE_WORKING,
  /*classical first*/
  TECH_OPTICS,
  TECH_HORSEBACK_RIDING,
  TECH_MATHEMATICS,
  TECH_CONSTRUCTION,
  /*classical second*/
  TECH_PHILOSOPHY,
  TECH_DRAMA,
  TECH_CURRENCY,
  TECH_ENGINEERING,
  TECH_IRON_WORKING,
  /*medieval first*/
  TECH_THEOLOGY,
  TECH_CIVIL_SERVICE,
  TECH_GUILDS,
  TECH_METAL_CASTING,
  /*medieval second*/
  TECH_COMPASS,
  TECH_EDUCATION,
  TECH_CHIVALRY,
  TECH_MACHINERY,
  TECH_PHYSICS,
  TECH_STEEL,
  /*renaissance first*/
  TECH_ASTRONOMY,
  TECH_ACOUSTICS,
  TECH_BANKING,
  TECH_PRINTING_PRESS,
  TECH_GUNPOWDER,
  /*renaissance second*/
  TECH_NAVIGATION,
  TECH_ARCHITECTURE,
  TECH_ECONOMICS,
  TECH_METALLURGY,
  TECH_CHEMISTRY,
  /*industrial first*/
  TECH_ARCHAEOLOGY,
  TECH_SCIENTIFIC_THEORY,
  TECH_INDUSTRIALIZATION,
  TECH_RIFLING,
  TECH_MILITARY_SCIENCE,
  TECH_FERTILIZER,
  /*industrial second*/
  TECH_BIOLOGY,
  TECH_ELECTRICITY,
  TECH_STEAM_POWER,
  TECH_DYNAMITE,
  /*modern first*/
  TECH_REFRIGERATION,
  TECH_RADIO,
  TECH_REPLACEABLE_PARTS,
  TECH_FLIGHT,
  TECH_RAILROAD,
  /*modern second*/
  TECH_PLASTIC,
  TECH_ELECTRONICS,
  TECH_BALLISTICS,
  TECH_COMBUSTION,
  /*atomic first*/
  TECH_PENICILIN,
  TECH_ATOMIC_THEORY,
  TECH_RADAR,
  TECH_COMBINED_ARMS,
  /*atomic second*/
  TECH_ECOLOGY,
  TECH_NUCLEAR_FISSION,
  TECH_ROCKETRY,
  TECH_COMPUTERS,
  /*infomation first*/
  TECH_TELECOM,
  TECH_MOBILE_TACTICS,
  TECH_ADVANCED_BALLISTICS,
  TECH_SATELLITES,
  TECH_ROBOTICS,
  TECH_LASERS,
  /*infomation second*/
  TECH_INTERNET,
  TECH_GLOBALIZATION,
  TECH_PARTICLE_PHYSICS,
  TECH_NUCLEAR_FUSION,
  TECH_NANOTECHNOLOGY,
  TECH_STEALTH,
  /*future*/
  TECH_FUTURE_TECH,
}

export enum eScene {
  SCENE_ALL = 0,
  SCENE_ATK,
  SCENE_DEF,
}

export enum ePromotion {
  PROMOTION_GREAT_GENENAL = 0,
  PROMOTION_CITADEL,
  PROMOTION_GARRISON,
  PROMOTION_PINCER,
  PROMOTION_HONOR,
  PROMOTION_HONOR_DISCIPLINE,
  PROMOTION_FORMATION_I,
  PROMOTION_FORMATION_II,
  PROMOTION_SHOCK_I,
  PROMOTION_SHOCK_II,
  PROMOTION_SHOCK_III,
  PROMOTION_DRILL_I,
  PROMOTION_DRILL_II,
  PROMOTION_DRILL_III,
  PROMOTION_COVER_I,
  PROMOTION_COVER_II,
  PROMOTION_ACCURACY_I,
  PROMOTION_ACCURACY_II,
  PROMOTION_ACCURACY_III,
  PROMOTION_BARRAGE_I,
  PROMOTION_BARRAGE_II,
  PROMOTION_BARRAGE_III,
  PROMOTION_VOLLEY,
  PROMOTION_STATUE_ZEUS,
  PROMOTION_STINGOUT,
  PROMOTION_COUTER_RIDING,
  PROMOTION_OUTSIDE_COUNTRY,
  PROMOTION_COUNTER_CITY_200,
  PROMOTION_COUNTER_CITY_300,
  PROMOTION_JUNGLE_ROGUE,
  PROMOTION_HAKKAR_DANCE,
  PROMOTION_DEBUFF_CITY_25,
  PROMOTION_DEBUFF_CITY_33,
  PROMOTION_ELEPHANT_SCARE,
}

export enum eUnitType {
  UNIT_TYPE_ALL = 0,
  UNIT_TYPE_DETECT /*侦查*/,
  UNIT_TYPE_CLOSECOMBAT /*肉搏*/,
  UNIT_TYPE_REMOTE /*弓箭*/,
  UNIT_TYPE_WEAPON /*火器*/,
  UNIT_TYPE_SIEGE /*攻城*/,
  UNIT_TYPE_RIDING /*骑乘*/,
  UNIT_TYPE_SEACLOSECOMBAT /*海上近战*/,
  UNIT_TYPE_SEAREMOTE /*海上远程*/,
  UNIT_TYPE_CITY /*城市*/,
  UNIT_TYPE_MAX,
}

export function unitTypeEnum2String(unitType: number) {
  let retVal!: string;
  switch (unitType) {
    case eUnitType.UNIT_TYPE_ALL:
      retVal = "全部";
      break;
    case eUnitType.UNIT_TYPE_DETECT:
      retVal = "侦查";
      break;
    case eUnitType.UNIT_TYPE_CLOSECOMBAT:
      retVal = "肉搏";
      break;
    case eUnitType.UNIT_TYPE_REMOTE:
      retVal = "弓箭";
      break;
    case eUnitType.UNIT_TYPE_WEAPON:
      retVal = "火器";
      break;
    case eUnitType.UNIT_TYPE_SIEGE:
      retVal = "攻城";
      break;
    case eUnitType.UNIT_TYPE_RIDING:
      retVal = "骑乘";
      break;
    case eUnitType.UNIT_TYPE_SEACLOSECOMBAT:
      retVal = "海上近战";
      break;
    case eUnitType.UNIT_TYPE_SEAREMOTE:
      retVal = "海上远程";
      break;
    case eUnitType.UNIT_TYPE_CITY:
      retVal = "城市";
      break;
    default:
      retVal = "未定义";
      break;
  }
  return retVal;
}

export enum eUnitResource {
  UNIT_RESOURCE_NONE,
  UNIT_RESOURCE_HORSE,
  UNIT_RESOURCE_IRON,
  UNIT_RESOURCE_COAL,
  UNIT_RESOURCE_ALUMINUM,
  UNIT_RESOURCE_PETROLEUM,
  UNIT_RESOURCE_URANIUM,
}
export function unitResourceEnum2String(unitResource: number) {
  let retVal!: string;
  switch (unitResource) {
    case eUnitResource.UNIT_RESOURCE_NONE:
      retVal = "无";
      break;
    case eUnitResource.UNIT_RESOURCE_HORSE:
      retVal = "马";
      break;
    case eUnitResource.UNIT_RESOURCE_IRON:
      retVal = "铁";
      break;
    case eUnitResource.UNIT_RESOURCE_COAL:
      retVal = "煤";
      break;
    case eUnitResource.UNIT_RESOURCE_ALUMINUM:
      retVal = "铝";
      break;
    case eUnitResource.UNIT_RESOURCE_PETROLEUM:
      retVal = "油";
      break;
    case eUnitResource.UNIT_RESOURCE_URANIUM:
      retVal = "铀";
      break;
    default:
      retVal = "未定义";
      break;
  }
  return retVal;
}

export enum eUnit {
  UNIT_NONE = -1,
  UNIT_CITY,
  UNIT_SCOUT,
  UNIT_SHOSHONE_PATHFINDER,
  UNIT_GALLEY,
  UNIT_TRIREME,
  UNIT_CARTHAGINIAN_QUINQUEREME,
  UNIT_BYZANTINE_DROMON,
  UNIT_CHARIOT_ARCHER,
  UNIT_INDIAN_WARELEPHANT,
  UNIT_EGYPTIAN_WARCHARIOT,
  UNIT_BARBARIAN_AXMAN,
  UNIT_HUN_HORSE_ARCHER,
  UNIT_ARCHER,
  UNIT_BABYLONIAN_BOWMAN,
  UNIT_MAYAN_ATLATLIST,
  UNIT_INCAN_SLINGER,
  UNIT_SPEARMAN,
  UNIT_CELT_PICTISH_WARRIOR,
  UNIT_GREEK_HOPLITE,
  UNIT_PERSIAN_IMMORTAL,
  UNIT_HUN_BATTERING_RAM,
  UNIT_WARRIOR,
  UNIT_AZTEC_JAGUAR,
  UNIT_POLYNESIAN_MAORI_WARRIOR,
  UNIT_CATAPULT,
  UNIT_ROMAN_BALLISTA,
  UNIT_ASSYRIAN_SIEGE_TOWER,
  UNIT_SWORDSMAN,
  UNIT_ROMAN_LEGION,
  UNIT_IROQUOIAN_MOHAWKWARRIOR,
  UNIT_KRIS_SWORDSMAN,
  UNIT_HORSEMAN,
  UNIT_GREEK_COMPANIONCAVALRY,
  UNIT_CARTHAGINIAN_FOREST_ELEPHANT,
  UNIT_BYZANTINE_CATAPHRACT,
  UNIT_COMPOSITE_BOWMAN,
  UNIT_GALLEASS,
  UNIT_VENETIAN_GALLEASS,
  UNIT_TREBUCHET,
  UNIT_KOREAN_HWACHA,
  UNIT_GERMAN_LANDSKNECHT,
  UNIT_LONGSWORDSMAN,
  UNIT_DANISH_BERSERKER,
  UNIT_JAPANESE_SAMURAI,
  UNIT_KNIGHT,
  UNIT_MONGOLIAN_KESHIK,
  UNIT_SPANISH_CONQUISTADOR,
  UNIT_SIAMESE_WARELEPHANT,
  UNIT_SONGHAI_MUSLIMCAVALRY,
  UNIT_ARABIAN_CAMELARCHER,
  UNIT_CROSSBOWMAN,
  UNIT_ENGLISH_LONGBOWMAN,
  UNIT_CHINESE_CHUKONU,
  UNIT_PIKEMAN,
  UNIT_ZULU_IMPI,
  UNIT_MUSKETMAN,
  UNIT_MAX, //TODO:

  UNIT_SPANISH_TERCIO,
  UNIT_FRENCH_MUSKETEER,
  UNIT_AMERICAN_MINUTEMAN,
}
