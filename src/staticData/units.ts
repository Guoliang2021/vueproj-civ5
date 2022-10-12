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
    originPromotion: [],
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
    originPromotion: [],
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
    originPromotion: [],
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
];
