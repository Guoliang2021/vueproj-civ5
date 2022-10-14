import { UnitModel } from "@/types/commonType";
import {
  eEra,
  eNationality,
  eTechnology,
  ePromotion,
  eUnitType,
  eUnit,
  eUnitResource,
} from "@/staticData/enums";

export const battleUnitArray: Array<UnitModel> = [
  {
    id: eUnit.UNIT_CITY,
    name: "城市",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_CITY,
    nationality: eNationality.NATION_NONE,
    substitution: eUnit.UNIT_NONE,
    upgrade: eUnit.UNIT_NONE,
    cost: 0,
    closeCombat: false,
    attackRange: 2,
    attackValue: 0,
    rangeAttackValue: 0,
    terrainDefense: false,
    originPromotion: [],
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
    upgrade: eUnit.UNIT_NONE,
    cost: 25,
    closeCombat: true,
    attackRange: 1,
    attackValue: 5,
    rangeAttackValue: 5,
    terrainDefense: true,
    originPromotion: [],
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
    upgrade: eUnit.UNIT_NONE,
    cost: 45,
    closeCombat: true,
    attackRange: 1,
    attackValue: 8,
    rangeAttackValue: 8,
    terrainDefense: true,
    originPromotion: [],
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
    upgrade: eUnit.UNIT_TRIREME,
    cost: 40,
    closeCombat: true,
    attackRange: 1,
    attackValue: 7,
    rangeAttackValue: 7,
    terrainDefense: true,
    originPromotion: [],
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
    upgrade: eUnit.UNIT_NONE,
    cost: 45,
    closeCombat: true,
    attackRange: 1,
    attackValue: 10,
    rangeAttackValue: 10,
    terrainDefense: true,
    originPromotion: [],
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
    upgrade: eUnit.UNIT_NONE,
    cost: 45,
    closeCombat: true,
    attackRange: 1,
    attackValue: 13,
    rangeAttackValue: 13,
    terrainDefense: true,
    originPromotion: [],
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
    upgrade: eUnit.UNIT_NONE,
    cost: 56,
    closeCombat: false,
    attackRange: 2,
    attackValue: 8,
    rangeAttackValue: 10,
    terrainDefense: true,
    originPromotion: [ePromotion.PROMOTION_STINGOUT],
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
    upgrade: eUnit.UNIT_NONE,
    cost: 56,
    closeCombat: false,
    attackRange: 2,
    attackValue: 6,
    rangeAttackValue: 10,
    terrainDefense: false,
    originPromotion: [],
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
    upgrade: eUnit.UNIT_NONE,
    cost: 70,
    closeCombat: false,
    attackRange: 2,
    attackValue: 9,
    rangeAttackValue: 11,
    terrainDefense: false,
    originPromotion: [],
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
    upgrade: eUnit.UNIT_NONE,
    cost: 56,
    closeCombat: false,
    attackRange: 2,
    attackValue: 6,
    rangeAttackValue: 10,
    terrainDefense: false,
    originPromotion: [],
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
    upgrade: eUnit.UNIT_NONE,
    cost: 56,
    closeCombat: false,
    attackRange: 1,
    attackValue: 9,
    rangeAttackValue: 9,
    terrainDefense: true,
    originPromotion: [],
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
    upgrade: eUnit.UNIT_NONE,
    cost: 56,
    closeCombat: false,
    attackRange: 2,
    attackValue: 7,
    rangeAttackValue: 10,
    terrainDefense: false,
    originPromotion: [ePromotion.PROMOTION_ACCURACY_I],
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
    upgrade: eUnit.UNIT_NONE,
    cost: 40,
    closeCombat: false,
    attackRange: 2,
    attackValue: 5,
    rangeAttackValue: 7,
    terrainDefense: true,
    originPromotion: [],
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
    upgrade: eUnit.UNIT_NONE,
    cost: 40,
    closeCombat: false,
    attackRange: 2,
    attackValue: 7,
    rangeAttackValue: 9,
    terrainDefense: true,
    originPromotion: [],
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
    upgrade: eUnit.UNIT_NONE,
    cost: 36,
    closeCombat: false,
    attackRange: 2,
    attackValue: 5,
    rangeAttackValue: 7,
    terrainDefense: true,
    originPromotion: [],
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
    upgrade: eUnit.UNIT_NONE,
    cost: 40,
    closeCombat: false,
    attackRange: 2,
    attackValue: 4,
    rangeAttackValue: 7,
    terrainDefense: true,
    originPromotion: [ePromotion.PROMOTION_GREAT_GENENAL], //TODO:
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
    upgrade: eUnit.UNIT_NONE,
    cost: 56,
    closeCombat: true,
    attackRange: 1,
    attackValue: 11,
    rangeAttackValue: 11,
    terrainDefense: true,
    originPromotion: [ePromotion.PROMOTION_COUTER_RIDING],
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
    upgrade: eUnit.UNIT_NONE,
    cost: 56,
    closeCombat: true,
    attackRange: 1,
    attackValue: 11,
    rangeAttackValue: 11,
    terrainDefense: true,
    originPromotion: [],
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_BRONZE_WORKING,
    endTechnology: eTechnology.TECH_CIVIL_SERVICE,
    iconSrc: "UNIT_CELT_PICTISH_WARRIOR.png",
  },
  {
    id: eUnit.UNIT_GREEK_HOPLITE,
    name: "重装步兵",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_CLOSECOMBAT,
    nationality: eNationality.NATION_GREECE,
    substitution: eUnit.UNIT_SPEARMAN,
    upgrade: eUnit.UNIT_NONE,
    cost: 56,
    closeCombat: true,
    attackRange: 1,
    attackValue: 13,
    rangeAttackValue: 13,
    terrainDefense: true,
    originPromotion: [ePromotion.PROMOTION_COUTER_RIDING],
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_BRONZE_WORKING,
    endTechnology: eTechnology.TECH_CIVIL_SERVICE,
    iconSrc: "UNIT_GREEK_HOPLITE.png",
  },
  {
    id: eUnit.UNIT_PERSIAN_IMMORTAL,
    name: "长生军",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_CLOSECOMBAT,
    nationality: eNationality.NATION_PERSIA,
    substitution: eUnit.UNIT_SPEARMAN,
    upgrade: eUnit.UNIT_NONE,
    cost: 56,
    closeCombat: true,
    attackRange: 1,
    attackValue: 12,
    rangeAttackValue: 12,
    terrainDefense: true,
    originPromotion: [ePromotion.PROMOTION_COUTER_RIDING],
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_BRONZE_WORKING,
    endTechnology: eTechnology.TECH_CIVIL_SERVICE,
    iconSrc: "UNIT_PERSIAN_IMMORTAL.png",
  },
  {
    id: eUnit.UNIT_HUN_BATTERING_RAM,
    name: "冲车",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_CLOSECOMBAT,
    nationality: eNationality.NATION_HUN,
    substitution: eUnit.UNIT_SPEARMAN,
    upgrade: eUnit.UNIT_NONE,
    cost: 75,
    closeCombat: true,
    attackRange: 1,
    attackValue: 10,
    rangeAttackValue: 10,
    terrainDefense: false,
    originPromotion: [ePromotion.PROMOTION_COUNTER_CITY_300],
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_BRONZE_WORKING,
    endTechnology: eTechnology.TECH_PHYSICS,
    iconSrc: "UNIT_HUN_BATTERING_RAM.png",
  },
  {
    id: eUnit.UNIT_WARRIOR,
    name: "战士",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_CLOSECOMBAT,
    nationality: eNationality.NATION_NONE,
    substitution: eUnit.UNIT_NONE,
    upgrade: eUnit.UNIT_NONE,
    cost: 40,
    closeCombat: true,
    attackRange: 1,
    attackValue: 8,
    rangeAttackValue: 8,
    terrainDefense: true,
    originPromotion: [],
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_AGRICULTURE,
    endTechnology: eTechnology.TECH_METAL_CASTING,
    iconSrc: "UNIT_WARRIOR.png",
  },
  {
    id: eUnit.UNIT_AZTEC_JAGUAR,
    name: "美洲虎战士",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_CLOSECOMBAT,
    nationality: eNationality.NATION_AZTAKA,
    substitution: eUnit.UNIT_WARRIOR,
    upgrade: eUnit.UNIT_NONE,
    cost: 40,
    closeCombat: true,
    attackRange: 1,
    attackValue: 8,
    rangeAttackValue: 8,
    terrainDefense: true,
    originPromotion: [ePromotion.PROMOTION_JUNGLE_ROGUE],
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_AGRICULTURE,
    endTechnology: eTechnology.TECH_METAL_CASTING,
    iconSrc: "UNIT_AZTEC_JAGUAR.png",
  },
  {
    id: eUnit.UNIT_POLYNESIAN_MAORI_WARRIOR,
    name: "毛利勇士",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNIT_TYPE_CLOSECOMBAT,
    nationality: eNationality.NATION_POLYNESIA,
    substitution: eUnit.UNIT_WARRIOR,
    upgrade: eUnit.UNIT_NONE,
    cost: 40,
    closeCombat: true,
    attackRange: 1,
    attackValue: 8,
    rangeAttackValue: 8,
    terrainDefense: true,
    originPromotion: [ePromotion.PROMOTION_HAKKAR_DANCE],
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_AGRICULTURE,
    endTechnology: eTechnology.TECH_METAL_CASTING,
    iconSrc: "UNIT_POLYNESIAN_MAORI_WARRIOR.png",
  },
  {
    id: eUnit.UNIT_CATAPULT,
    name: "投石车",
    era: eEra.ERA_CLASSICAL,
    type: eUnitType.UNIT_TYPE_SIEGE,
    nationality: eNationality.NATION_NONE,
    substitution: eUnit.UNIT_NONE,
    upgrade: eUnit.UNIT_NONE,
    cost: 75,
    closeCombat: false,
    attackRange: 2,
    attackValue: 7,
    rangeAttackValue: 8,
    terrainDefense: false,
    originPromotion: [ePromotion.PROMOTION_COUNTER_CITY_200],
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_MATHEMATICS,
    endTechnology: eTechnology.TECH_PHYSICS,
    iconSrc: "UNIT_CATAPULT.png",
  },
  {
    id: eUnit.UNIT_ROMAN_BALLISTA,
    name: "弩炮",
    era: eEra.ERA_CLASSICAL,
    type: eUnitType.UNIT_TYPE_SIEGE,
    nationality: eNationality.NATION_ROMA,
    substitution: eUnit.UNIT_CATAPULT,
    upgrade: eUnit.UNIT_NONE,
    cost: 75,
    closeCombat: false,
    attackRange: 2,
    attackValue: 8,
    rangeAttackValue: 10,
    terrainDefense: false,
    originPromotion: [ePromotion.PROMOTION_COUNTER_CITY_200],
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_MATHEMATICS,
    endTechnology: eTechnology.TECH_PHYSICS,
    iconSrc: "UNIT_ROMAN_BALLISTA.png",
  },
  {
    id: eUnit.UNIT_ASSYRIAN_SIEGE_TOWER,
    name: "攻城塔",
    era: eEra.ERA_CLASSICAL,
    type: eUnitType.UNIT_TYPE_SIEGE,
    nationality: eNationality.NATION_ASSYRIA,
    substitution: eUnit.UNIT_CATAPULT,
    upgrade: eUnit.UNIT_NONE,
    cost: 75,
    closeCombat: true,
    attackRange: 1,
    attackValue: 12,
    rangeAttackValue: 12,
    terrainDefense: false,
    originPromotion: [
      ePromotion.PROMOTION_COVER_I,
      ePromotion.PROMOTION_COUNTER_CITY_200,
    ],
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_MATHEMATICS,
    endTechnology: eTechnology.TECH_PHYSICS,
    iconSrc: "UNIT_ASSYRIAN_SIEGE_TOWER.png",
  },
  {
    id: eUnit.UNIT_SWORDSMAN,
    name: "剑士",
    era: eEra.ERA_CLASSICAL,
    type: eUnitType.UNIT_TYPE_CLOSECOMBAT,
    nationality: eNationality.NATION_NONE,
    substitution: eUnit.UNIT_NONE,
    upgrade: eUnit.UNIT_NONE,
    cost: 75,
    closeCombat: true,
    attackRange: 1,
    attackValue: 14,
    rangeAttackValue: 14,
    terrainDefense: true,
    originPromotion: [],
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_IRON,
    startTechnology: eTechnology.TECH_IRON_WORKING,
    endTechnology: eTechnology.TECH_STEEL,
    iconSrc: "UNIT_SWORDSMAN.png",
  },
  {
    id: eUnit.UNIT_ROMAN_LEGION,
    name: "军团",
    era: eEra.ERA_CLASSICAL,
    type: eUnitType.UNIT_TYPE_CLOSECOMBAT,
    nationality: eNationality.NATION_ROMA,
    substitution: eUnit.UNIT_SWORDSMAN,
    upgrade: eUnit.UNIT_NONE,
    cost: 75,
    closeCombat: true,
    attackRange: 1,
    attackValue: 17,
    rangeAttackValue: 17,
    terrainDefense: true,
    originPromotion: [],
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_IRON,
    startTechnology: eTechnology.TECH_IRON_WORKING,
    endTechnology: eTechnology.TECH_STEEL,
    iconSrc: "UNIT_ROMAN_LEGION.png",
  },
  {
    id: eUnit.UNIT_IROQUOIAN_MOHAWKWARRIOR,
    name: "莫霍克战士",
    era: eEra.ERA_CLASSICAL,
    type: eUnitType.UNIT_TYPE_CLOSECOMBAT,
    nationality: eNationality.NATION_IROQUOIS,
    substitution: eUnit.UNIT_SWORDSMAN,
    upgrade: eUnit.UNIT_NONE,
    cost: 75,
    closeCombat: true,
    attackRange: 1,
    attackValue: 14,
    rangeAttackValue: 14,
    terrainDefense: true,
    originPromotion: [ePromotion.PROMOTION_JUNGLE_ROGUE],
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_IRON_WORKING,
    endTechnology: eTechnology.TECH_STEEL,
    iconSrc: "UNIT_ROMAN_LEGION.png",
  },
  {
    id: eUnit.UNIT_KRIS_SWORDSMAN,
    name: "波刃剑士",
    era: eEra.ERA_CLASSICAL,
    type: eUnitType.UNIT_TYPE_CLOSECOMBAT,
    nationality: eNationality.NATION_INDONESIA,
    substitution: eUnit.UNIT_SWORDSMAN,
    upgrade: eUnit.UNIT_NONE,
    cost: 75,
    closeCombat: true,
    attackRange: 1,
    attackValue: 14,
    rangeAttackValue: 14,
    terrainDefense: true,
    originPromotion: [],
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_IRON,
    startTechnology: eTechnology.TECH_IRON_WORKING,
    endTechnology: eTechnology.TECH_STEEL,
    iconSrc: "UNIT_KRIS_SWORDSMAN.png",
  },
  {
    id: eUnit.UNIT_HORSEMAN,
    name: "骑手",
    era: eEra.ERA_CLASSICAL,
    type: eUnitType.UNIT_TYPE_RIDING,
    nationality: eNationality.NATION_NONE,
    substitution: eUnit.UNIT_NONE,
    upgrade: eUnit.UNIT_NONE,
    cost: 75,
    closeCombat: true,
    attackRange: 1,
    attackValue: 12,
    rangeAttackValue: 12,
    terrainDefense: false,
    originPromotion: [ePromotion.PROMOTION_DEBUFF_CITY_33],
    movement: 4,
    resource: eUnitResource.UNIT_RESOURCE_HORSE,
    startTechnology: eTechnology.TECH_HORSEBACK_RIDING,
    endTechnology: eTechnology.TECH_CHIVALRY,
    iconSrc: "UNIT_HORSEMAN.png",
  },
  {
    id: eUnit.UNIT_GREEK_COMPANIONCAVALRY,
    name: "王伴骑兵",
    era: eEra.ERA_CLASSICAL,
    type: eUnitType.UNIT_TYPE_RIDING,
    nationality: eNationality.NATION_GREECE,
    substitution: eUnit.UNIT_HORSEMAN,
    upgrade: eUnit.UNIT_NONE,
    cost: 75,
    closeCombat: true,
    attackRange: 1,
    attackValue: 14,
    rangeAttackValue: 14,
    terrainDefense: false,
    originPromotion: [ePromotion.PROMOTION_DEBUFF_CITY_33],
    movement: 5,
    resource: eUnitResource.UNIT_RESOURCE_HORSE,
    startTechnology: eTechnology.TECH_HORSEBACK_RIDING,
    endTechnology: eTechnology.TECH_CHIVALRY,
    iconSrc: "UNIT_GREEK_COMPANIONCAVALRY.png",
  },
  {
    id: eUnit.UNIT_CARTHAGINIAN_FOREST_ELEPHANT,
    name: "非洲森林象",
    era: eEra.ERA_CLASSICAL,
    type: eUnitType.UNIT_TYPE_RIDING,
    nationality: eNationality.NATION_CARTHAGE,
    substitution: eUnit.UNIT_HORSEMAN,
    upgrade: eUnit.UNIT_NONE,
    cost: 100,
    closeCombat: true,
    attackRange: 1,
    attackValue: 14,
    rangeAttackValue: 14,
    terrainDefense: false,
    originPromotion: [
      ePromotion.PROMOTION_DEBUFF_CITY_33,
      ePromotion.PROMOTION_ELEPHANT_SCARE,
    ],
    movement: 3,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_HORSEBACK_RIDING,
    endTechnology: eTechnology.TECH_CHIVALRY,
    iconSrc: "UNIT_CARTHAGINIAN_FOREST_ELEPHANT.png",
  },
  {
    id: eUnit.UNIT_BYZANTINE_CATAPHRACT,
    name: "铁甲骑兵",
    era: eEra.ERA_CLASSICAL,
    type: eUnitType.UNIT_TYPE_RIDING,
    nationality: eNationality.NATION_BYZANTIUM,
    substitution: eUnit.UNIT_HORSEMAN,
    upgrade: eUnit.UNIT_NONE,
    cost: 75,
    closeCombat: true,
    attackRange: 1,
    attackValue: 15,
    rangeAttackValue: 15,
    terrainDefense: true,
    originPromotion: [ePromotion.PROMOTION_DEBUFF_CITY_25],
    movement: 3,
    resource: eUnitResource.UNIT_RESOURCE_HORSE,
    startTechnology: eTechnology.TECH_HORSEBACK_RIDING,
    endTechnology: eTechnology.TECH_CHIVALRY,
    iconSrc: "UNIT_BYZANTINE_CATAPHRACT.png",
  },
  {
    id: eUnit.UNIT_COMPOSITE_BOWMAN,
    name: "复合弓手",
    era: eEra.ERA_CLASSICAL,
    type: eUnitType.UNIT_TYPE_REMOTE,
    nationality: eNationality.NATION_NONE,
    substitution: eUnit.UNIT_NONE,
    upgrade: eUnit.UNIT_NONE,
    cost: 75,
    closeCombat: false,
    attackRange: 2,
    attackValue: 7,
    rangeAttackValue: 11,
    terrainDefense: true,
    originPromotion: [],
    movement: 2,
    resource: eUnitResource.UNIT_RESOURCE_NONE,
    startTechnology: eTechnology.TECH_CONSTRUCTION,
    endTechnology: eTechnology.TECH_MACHINERY,
    iconSrc: "UNIT_COMPOSITE_BOWMAN.png",
  },
];
