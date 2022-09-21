import { eEra } from "./era";
import { eNationality } from "./nation";
import { eTechnology } from "./technology";
import { UnitModel } from "../src/types/commonType";

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
  UNIT_MAX, //TODO:
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
  UNIT_SPANISH_TERCIO,
  UNIT_FRENCH_MUSKETEER,
  UNIT_AMERICAN_MINUTEMAN,
}

export const battleUnitArray: Array<UnitModel> = [
  /*eg
   {
      id: 单位ID,取eUnit枚举值
      name: 单位名称
      era: 单位所在时代,取eEra枚举值
      type: 单位类型,取eUnitType枚举值
      nationality: 单位国籍,eNationality枚举值
      substitution: 如果是uu,则指明替代单位,取eUnitType枚举值
      promote: 晋升单位,取eUnit枚举值
      cost: 单位所需产能
      closeCombat: 单位攻击类型 true:近战 false:远程
      attackRange: 单位攻击范围
      attackValue: 单位战斗力
      rangeAttackValue: 单位远程战斗力
      TerrainDefense: 享受复杂地形防御加成 true:享受 false:不享受
      movement: 单位移动力
      resource: 单位战略资源需要,取eUnitResource枚举值
      startTechnology: 单位需要科技
      endTechnology: 单位过期科技
      iconSrc: 单位图标路径
   }
   */
  {
    id: eUnit.UNIT_CITY,
    name: "城市",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_CITY,
    nationality: eNationality.NATION_NONE,
    substitution: eUnit.UNIT_NONE,
    promote: eUnit.UNIT_NONE,
    cost: 0,
    closeCombat: false,
    attackRange: 2,
    attackValue: 0,
    rangeAttackValue: 0,
    TerrainDefense: false,
    movement: 0,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_AGRICULTURE,
    endTechnology: eTechnology.TECH_AGRICULTURE,
    iconSrc: "UNIT_CITY.png",
  },
  {
    id: eUnit.UNIT_SCOUT,
    name: "斥候",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_DETECT,
    nationality: eNationality.NATION_NONE,
    substitution: eUnit.UNIT_NONE,
    promote: eUnit.UNIT_NONE,
    cost: 25,
    closeCombat: true,
    attackRange: 1,
    attackValue: 5,
    rangeAttackValue: 5,
    TerrainDefense: true,
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_AGRICULTURE,
    endTechnology: eTechnology.TECH_AGRICULTURE,
    iconSrc: "UNIT_SCOUT.png",
  },
  {
    id: eUnit.UNIT_SHOSHONE_PATHFINDER,
    name: "探路者",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_DETECT,
    nationality: eNationality.NATION_SHOSHONE,
    substitution: eUnit.UNIT_SCOUT,
    promote: eUnit.UNIT_NONE,
    cost: 45,
    closeCombat: true,
    attackRange: 1,
    attackValue: 8,
    rangeAttackValue: 8,
    TerrainDefense: true,
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_AGRICULTURE,
    endTechnology: eTechnology.TECH_AGRICULTURE,
    iconSrc: "UNIT_SHOSHONE_PATHFINDER.png",
  },
  {
    id: eUnit.UNIT_GALLEY,
    name: "桨帆船",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_SEACLOSECOMBAT,
    nationality: eNationality.NATION_BARBARIAN,
    substitution: eUnit.UNIT_NONE,
    promote: eUnit.UNIT_TRIREME,
    cost: 40,
    closeCombat: true,
    attackRange: 1,
    attackValue: 7,
    rangeAttackValue: 7,
    TerrainDefense: true,
    movement: 3,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_AGRICULTURE,
    endTechnology: eTechnology.TECH_AGRICULTURE,
    iconSrc: "UNIT_GALLEY.png",
  },
  {
    id: eUnit.UNIT_TRIREME,
    name: "三列桨帆船",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_SEACLOSECOMBAT,
    nationality: eNationality.NATION_NONE,
    substitution: eUnit.UNIT_NONE,
    promote: eUnit.UNIT_NONE,
    cost: 45,
    closeCombat: true,
    attackRange: 1,
    attackValue: 10,
    rangeAttackValue: 10,
    TerrainDefense: true,
    movement: 4,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_SAILING,
    endTechnology: eTechnology.TECH_ASTRONOMY,
    iconSrc: "UNIT_TRIREME.png",
  },
  {
    id: eUnit.UNIT_CARTHAGINIAN_QUINQUEREME,
    name: "五列桨战船",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_SEACLOSECOMBAT,
    nationality: eNationality.NATION_CARTHAGE,
    substitution: eUnit.UNIT_TRIREME,
    promote: eUnit.UNIT_NONE,
    cost: 45,
    closeCombat: true,
    attackRange: 1,
    attackValue: 13,
    rangeAttackValue: 13,
    TerrainDefense: true,
    movement: 4,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_SAILING,
    endTechnology: eTechnology.TECH_ASTRONOMY,
    iconSrc: "UNIT_CARTHAGINIAN_QUINQUEREME.png",
  },
  {
    id: eUnit.UNIT_BYZANTINE_DROMON,
    name: "喷火船",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_SEAREMOTE,
    nationality: eNationality.NATION_BYZANTIUM,
    substitution: eUnit.UNIT_TRIREME,
    promote: eUnit.UNIT_NONE,
    cost: 56,
    closeCombat: false,
    attackRange: 2,
    attackValue: 8,
    rangeAttackValue: 10,
    TerrainDefense: true,
    movement: 4,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_SAILING,
    endTechnology: eTechnology.TECH_ASTRONOMY,
    iconSrc: "UNIT_BYZANTINE_DROMON.png",
  },
  {
    id: eUnit.UNIT_CHARIOT_ARCHER,
    name: "弓弩战车",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_REMOTE,
    nationality: eNationality.NATION_NONE,
    substitution: eUnit.UNIT_NONE,
    promote: eUnit.UNIT_NONE,
    cost: 56,
    closeCombat: false,
    attackRange: 2,
    attackValue: 6,
    rangeAttackValue: 10,
    TerrainDefense: false,
    movement: 4,
    resource: eUnitResource.UNIT_RESOURCE_HORSE,
    startTechnology: eTechnology.TECH_THE_WHEEL,
    endTechnology: eTechnology.TECH_CHIVALRY,
    iconSrc: "UNIT_CHARIOT_ARCHER.png",
  },
  {
    id: eUnit.UNIT_INDIAN_WARELEPHANT,
    name: "战象",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_REMOTE,
    nationality: eNationality.NATION_INDIA,
    substitution: eUnit.UNIT_CHARIOT_ARCHER,
    promote: eUnit.UNIT_NONE,
    cost: 70,
    closeCombat: false,
    attackRange: 2,
    attackValue: 9,
    rangeAttackValue: 11,
    TerrainDefense: false,
    movement: 3,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_THE_WHEEL,
    endTechnology: eTechnology.TECH_CHIVALRY,
    iconSrc: "UNIT_INDIAN_WARELEPHANT.png",
  },
  {
    id: eUnit.UNIT_EGYPTIAN_WARCHARIOT,
    name: "战车",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_REMOTE,
    nationality: eNationality.NATION_EGYPT,
    substitution: eUnit.UNIT_CHARIOT_ARCHER,
    promote: eUnit.UNIT_NONE,
    cost: 56,
    closeCombat: false,
    attackRange: 2,
    attackValue: 6,
    rangeAttackValue: 10,
    TerrainDefense: false,
    movement: 5,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_THE_WHEEL,
    endTechnology: eTechnology.TECH_CHIVALRY,
    iconSrc: "UNIT_EGYPTIAN_WARCHARIOT.png",
  },
  {
    id: eUnit.UNIT_BARBARIAN_AXMAN,
    name: "掷斧手",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_REMOTE,
    nationality: eNationality.NATION_BARBARIAN,
    substitution: eUnit.UNIT_CHARIOT_ARCHER,
    promote: eUnit.UNIT_NONE,
    cost: 56,
    closeCombat: false,
    attackRange: 1,
    attackValue: 9,
    rangeAttackValue: 9,
    TerrainDefense: true,
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_THE_WHEEL,
    endTechnology: eTechnology.TECH_CHIVALRY,
    iconSrc: "UNIT_BARBARIAN_AXMAN.png",
  },
  {
    id: eUnit.UNIT_HUN_HORSE_ARCHER,
    name: "骑射手",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_REMOTE,
    nationality: eNationality.NATION_HUN,
    substitution: eUnit.UNIT_CHARIOT_ARCHER,
    promote: eUnit.UNIT_NONE,
    cost: 56,
    closeCombat: false,
    attackRange: 2,
    attackValue: 7,
    rangeAttackValue: 10,
    TerrainDefense: false,
    movement: 4,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_THE_WHEEL,
    endTechnology: eTechnology.TECH_CHIVALRY,
    iconSrc: "UNIT_HUN_HORSE_ARCHER.png",
  },
  {
    id: eUnit.UNIT_ARCHER,
    name: "弓箭手",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_REMOTE,
    nationality: eNationality.NATION_NONE,
    substitution: eUnit.UNIT_NONE,
    promote: eUnit.UNIT_NONE,
    cost: 40,
    closeCombat: false,
    attackRange: 2,
    attackValue: 5,
    rangeAttackValue: 7,
    TerrainDefense: true,
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_ARCHERY,
    endTechnology: eTechnology.TECH_CONSTRUCTION,
    iconSrc: "UNIT_ARCHER.png",
  },
  {
    id: eUnit.UNIT_BABYLONIAN_BOWMAN,
    name: "巴比伦弓",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_REMOTE,
    nationality: eNationality.NATION_BABYLON,
    substitution: eUnit.UNIT_ARCHER,
    promote: eUnit.UNIT_NONE,
    cost: 40,
    closeCombat: false,
    attackRange: 2,
    attackValue: 7,
    rangeAttackValue: 9,
    TerrainDefense: true,
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_ARCHERY,
    endTechnology: eTechnology.TECH_CONSTRUCTION,
    iconSrc: "UNIT_BABYLONIAN_BOWMAN.png",
  },
  {
    id: eUnit.UNIT_MAYAN_ATLATLIST,
    name: "掷矛战士",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_REMOTE,
    nationality: eNationality.NATION_MAYA,
    substitution: eUnit.UNIT_ARCHER,
    promote: eUnit.UNIT_NONE,
    cost: 36,
    closeCombat: false,
    attackRange: 2,
    attackValue: 5,
    rangeAttackValue: 7,
    TerrainDefense: true,
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_AGRICULTURE,
    endTechnology: eTechnology.TECH_CONSTRUCTION,
    iconSrc: "UNIT_MAYAN_ATLATLIST.png",
  },
  {
    id: eUnit.UNIT_INCAN_SLINGER,
    name: "掷石手",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_REMOTE,
    nationality: eNationality.NATION_INCA,
    substitution: eUnit.UNIT_ARCHER,
    promote: eUnit.UNIT_NONE,
    cost: 40,
    closeCombat: false,
    attackRange: 2,
    attackValue: 4,
    rangeAttackValue: 7,
    TerrainDefense: true,
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_AGRICULTURE,
    endTechnology: eTechnology.TECH_CONSTRUCTION,
    iconSrc: "UNIT_INCAN_SLINGER.png",
  },
  {
    id: eUnit.UNIT_SPEARMAN,
    name: "长矛兵",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_CLOSECOMBAT,
    nationality: eNationality.NATION_NONE,
    substitution: eUnit.UNIT_NONE,
    promote: eUnit.UNIT_NONE,
    cost: 56,
    closeCombat: true,
    attackRange: 1,
    attackValue: 11,
    rangeAttackValue: 11,
    TerrainDefense: true,
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_BRONZE_WORKING,
    endTechnology: eTechnology.TECH_CIVIL_SERVICE,
    iconSrc: "UNIT_SPEARMAN.png",
  },
  {
    id: eUnit.UNIT_CELT_PICTISH_WARRIOR,
    name: "皮克特战士",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_CLOSECOMBAT,
    nationality: eNationality.NATION_CELTIC,
    substitution: eUnit.UNIT_SPEARMAN,
    promote: eUnit.UNIT_NONE,
    cost: 56,
    closeCombat: true,
    attackRange: 1,
    attackValue: 11,
    rangeAttackValue: 11,
    TerrainDefense: true,
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_BRONZE_WORKING,
    endTechnology: eTechnology.TECH_CIVIL_SERVICE,
    iconSrc: "UNIT_CELT_PICTISH_WARRIOR.png",
  },
];
