import { PromotionModel } from "@/types/commonType";
import {
  ePromotion,
  eScene,
  eTerrainType,
  eUnitType,
  eUnit,
} from "@/staticData/enums";

export const promotionArray: Array<PromotionModel> = [
  {
    id: ePromotion.PROMOTION_GREAT_GENENAL,
    name: "大军",
    scene: eScene.SCENE_ALL,
    selfUnitType: [],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 15,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "相邻单位战斗力+15%",
    uuid: [],
    iconName: "UNIT_GREAT_GENERAL.png",
  },
  {
    id: ePromotion.PROMOTION_CITADEL,
    name: "军事要塞",
    scene: eScene.SCENE_DEF,
    selfUnitType: [],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 100,
    targetTerrainType: eUnitType.UNIT_TYPE_ALL,
    targetUnitType: [],
    targetModify: 0,
    barbarainOnly: false,
    description: "防御时战斗力+100%",
    uuid: [],
    iconName: "IMPROVEMENT_CITADEL.png",
  },
  {
    id: ePromotion.PROMOTION_GARRISON,
    name: "驻防",
    scene: eScene.SCENE_DEF,
    selfUnitType: [eUnitType.UNIT_TYPE_CLOSECOMBAT, eUnitType.UNIT_TYPE_WEAPON],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 40,
    targetTerrainType: eUnitType.UNIT_TYPE_ALL,
    targetUnitType: [],
    targetModify: 0,
    barbarainOnly: false,
    description: "驻防时战斗力+40%",
    uuid: [],
    iconName: "BUILDING_ARMORY.png",
  },
  {
    id: ePromotion.PROMOTION_PINCER,
    name: "夹击",
    scene: eScene.SCENE_ATK,
    selfUnitType: [eUnitType.UNIT_TYPE_CLOSECOMBAT, eUnitType.UNIT_TYPE_WEAPON],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 10,
    targetTerrainType: eUnitType.UNIT_TYPE_ALL,
    targetUnitType: [],
    targetModify: 0,
    barbarainOnly: false,
    description: "夹击时战斗力+10%",
    uuid: [],
    iconName: "POLICY_PROFESSIONAL_ARMY.png",
  },
  {
    id: ePromotion.PROMOTION_HONOR,
    name: "荣誉开门",
    scene: eScene.SCENE_ALL,
    selfUnitType: [],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 33,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: true,
    description: "对蛮族单位战斗力+33%",
    uuid: [],
    iconName: "POLICY_NEW_ORDER.png",
  },
  {
    id: ePromotion.PROMOTION_HONOR_DISCIPLINE,
    name: "军事纪律",
    scene: eScene.SCENE_ALL,
    selfUnitType: [eUnitType.UNIT_TYPE_CLOSECOMBAT, eUnitType.UNIT_TYPE_WEAPON],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 33,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "有相邻友方单位时战斗力+15%",
    uuid: [],
    iconName: "POLICY_DISCIPLINE.png",
  },
  {
    id: ePromotion.PROMOTION_FORMATION_I,
    name: "列阵一级",
    scene: eScene.SCENE_ALL,
    selfUnitType: [eUnitType.UNIT_TYPE_CLOSECOMBAT, eUnitType.UNIT_TYPE_WEAPON],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 33,
    targetUnitType: [eUnitType.UNIT_TYPE_RIDING],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "与骑乘单位战斗时战斗力+33%",
    uuid: [],
    iconName: "PROMOTION_PROMOTION_ATLAS24.png",
  },
  {
    id: ePromotion.PROMOTION_FORMATION_II,
    name: "列阵二级",
    scene: eScene.SCENE_ALL,
    selfUnitType: [eUnitType.UNIT_TYPE_CLOSECOMBAT, eUnitType.UNIT_TYPE_WEAPON],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 33,
    targetUnitType: [eUnitType.UNIT_TYPE_RIDING],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "与骑乘单位战斗时战斗力+33%",
    uuid: [],
    iconName: "PROMOTION_PROMOTION_ATLAS25.png",
  },
  {
    id: ePromotion.PROMOTION_SHOCK_I,
    name: "冲击一级",
    scene: eScene.SCENE_ALL,
    selfUnitType: [eUnitType.UNIT_TYPE_CLOSECOMBAT, eUnitType.UNIT_TYPE_WEAPON],
    selfTerrainType: eTerrainType.TERRAIN_INRUGGED,
    selfModify: 15,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "在开阔地形战斗时战斗力+15%",
    uuid: [],
    iconName: "PROMOTION_PROMOTION_ATLAS44.png",
  },
  {
    id: ePromotion.PROMOTION_SHOCK_II,
    name: "冲击二级",
    scene: eScene.SCENE_ALL,
    selfUnitType: [eUnitType.UNIT_TYPE_CLOSECOMBAT, eUnitType.UNIT_TYPE_WEAPON],
    selfTerrainType: eTerrainType.TERRAIN_INRUGGED,
    selfModify: 15,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "在开阔地形战斗时战斗力+15%",
    uuid: [],
    iconName: "PROMOTION_PROMOTION_ATLAS45.png",
  },
  {
    id: ePromotion.PROMOTION_SHOCK_III,
    name: "冲击三级",
    scene: eScene.SCENE_ALL,
    selfUnitType: [eUnitType.UNIT_TYPE_CLOSECOMBAT, eUnitType.UNIT_TYPE_WEAPON],
    selfTerrainType: eTerrainType.TERRAIN_INRUGGED,
    selfModify: 15,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "在开阔地形战斗时战斗力+15%",
    uuid: [],
    iconName: "PROMOTION_PROMOTION_ATLAS46.png",
  },
  {
    id: ePromotion.PROMOTION_DRILL_I,
    name: "操练一级",
    scene: eScene.SCENE_ALL,
    selfUnitType: [eUnitType.UNIT_TYPE_CLOSECOMBAT, eUnitType.UNIT_TYPE_WEAPON],
    selfTerrainType: eTerrainType.TERRAIN_RUGGED,
    selfModify: 15,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "在崎岖地形战斗时战斗力+15%",
    uuid: [],
    iconName: "PROMOTION_PROMOTION_ATLAS19.png",
  },
  {
    id: ePromotion.PROMOTION_DRILL_II,
    name: "操练二级",
    scene: eScene.SCENE_ALL,
    selfUnitType: [eUnitType.UNIT_TYPE_CLOSECOMBAT, eUnitType.UNIT_TYPE_WEAPON],
    selfTerrainType: eTerrainType.TERRAIN_RUGGED,
    selfModify: 15,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "在崎岖地形战斗时战斗力+15%",
    uuid: [],
    iconName: "PROMOTION_PROMOTION_ATLAS20.png",
  },
  {
    id: ePromotion.PROMOTION_DRILL_III,
    name: "操练三级",
    scene: eScene.SCENE_ALL,
    selfUnitType: [eUnitType.UNIT_TYPE_CLOSECOMBAT, eUnitType.UNIT_TYPE_WEAPON],
    selfTerrainType: eTerrainType.TERRAIN_RUGGED,
    selfModify: 15,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "在崎岖地形战斗时战斗力+15%",
    uuid: [],
    iconName: "PROMOTION_PROMOTION_ATLAS21.png",
  },
  {
    id: ePromotion.PROMOTION_COVER_I,
    name: "隐蔽一级",
    scene: eScene.SCENE_DEF,
    selfUnitType: [],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 33,
    targetUnitType: [eUnitType.UNIT_TYPE_CITY, eUnitType.UNIT_TYPE_REMOTE],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "对所有受到的远程攻击时防御战斗力+33%",
    uuid: [],
    iconName: "PROMOTION_PROMOTION_ATLAS14.png",
  },
  {
    id: ePromotion.PROMOTION_COVER_II,
    name: "隐蔽二级",
    scene: eScene.SCENE_DEF,
    selfUnitType: [],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 33,
    targetUnitType: [eUnitType.UNIT_TYPE_CITY, eUnitType.UNIT_TYPE_REMOTE],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "对所有受到的远程攻击时防御战斗力+33%",
    uuid: [],
    iconName: "PROMOTION_PROMOTION_ATLAS15.png",
  },
  {
    id: ePromotion.PROMOTION_ACCURACY_I,
    name: "精准一级",
    scene: eScene.SCENE_ATK,
    selfUnitType: [eUnitType.UNIT_TYPE_REMOTE],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 15,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_INRUGGED,
    targetModify: 0,
    barbarainOnly: false,
    description: "攻击位于开阔地形单位时远程战斗力+15%",
    uuid: [],
    iconName: "PROMOTION_PROMOTION_ATLAS0.png",
  },
  {
    id: ePromotion.PROMOTION_ACCURACY_II,
    name: "精准二级",
    scene: eScene.SCENE_ATK,
    selfUnitType: [eUnitType.UNIT_TYPE_REMOTE],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 15,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_INRUGGED,
    targetModify: 0,
    barbarainOnly: false,
    description: "攻击位于开阔地形单位时远程战斗力+15%",
    uuid: [],
    iconName: "PROMOTION_PROMOTION_ATLAS1.png",
  },
  {
    id: ePromotion.PROMOTION_ACCURACY_III,
    name: "精准三级",
    scene: eScene.SCENE_ATK,
    selfUnitType: [eUnitType.UNIT_TYPE_REMOTE],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 15,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_INRUGGED,
    targetModify: 0,
    barbarainOnly: false,
    description: "攻击位于开阔地形单位时远程战斗力+15%",
    uuid: [],
    iconName: "PROMOTION_PROMOTION_ATLAS2.png",
  },
  {
    id: ePromotion.PROMOTION_BARRAGE_I,
    name: "弹幕一级",
    scene: eScene.SCENE_ATK,
    selfUnitType: [eUnitType.UNIT_TYPE_REMOTE],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 15,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_RUGGED,
    targetModify: 0,
    barbarainOnly: false,
    description: "攻击位于崎岖地形单位时远程战斗力+15%",
    uuid: [],
    iconName: "PROMOTION_PROMOTION_ATLAS6.png",
  },
  {
    id: ePromotion.PROMOTION_BARRAGE_II,
    name: "弹幕二级",
    scene: eScene.SCENE_ATK,
    selfUnitType: [eUnitType.UNIT_TYPE_REMOTE],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 15,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_RUGGED,
    targetModify: 0,
    barbarainOnly: false,
    description: "攻击位于崎岖地形单位时远程战斗力+15%",
    uuid: [],
    iconName: "PROMOTION_PROMOTION_ATLAS7.png",
  },
  {
    id: ePromotion.PROMOTION_BARRAGE_III,
    name: "弹幕三级",
    scene: eScene.SCENE_ATK,
    selfUnitType: [eUnitType.UNIT_TYPE_REMOTE],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 15,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_RUGGED,
    targetModify: 0,
    barbarainOnly: false,
    description: "攻击位于崎岖地形单位时远程战斗力+15%",
    uuid: [],
    iconName: "PROMOTION_PROMOTION_ATLAS8.png",
  },
  {
    id: ePromotion.PROMOTION_HITCOAST_I,
    name: "海岸侵袭一级",
    scene: eScene.SCENE_ATK,
    selfUnitType: [eUnitType.UNIT_TYPE_SEACLOSECOMBAT],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 20,
    targetUnitType: [eUnitType.UNIT_TYPE_CITY],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "进攻城市时战斗力+20%,掠夺造成城市伤害值33%的金钱",
    uuid: [],
    iconName: "PROMOTION_EXPANSION_PROMOTION_ATLAS3.png",
  },
  {
    id: ePromotion.PROMOTION_HITCOAST_II,
    name: "海岸侵袭二级",
    scene: eScene.SCENE_ATK,
    selfUnitType: [eUnitType.UNIT_TYPE_SEACLOSECOMBAT],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 20,
    targetUnitType: [eUnitType.UNIT_TYPE_CITY],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "进攻城市时战斗力+20%,掠夺造成城市伤害值33%的金钱",
    uuid: [],
    iconName: "PROMOTION_EXPANSION_PROMOTION_ATLAS4.png",
  },
  {
    id: ePromotion.PROMOTION_HITCOAST_III,
    name: "海岸侵袭三级",
    scene: eScene.SCENE_ATK,
    selfUnitType: [eUnitType.UNIT_TYPE_SEACLOSECOMBAT],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 20,
    targetUnitType: [eUnitType.UNIT_TYPE_CITY],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "进攻城市时战斗力+20%,掠夺造成城市伤害值33%的金钱",
    uuid: [],
    iconName: "PROMOTION_EXPANSION_PROMOTION_ATLAS5.png",
  },
  {
    id: ePromotion.PROMOTION_VOLLEY,
    name: "齐射能力",
    scene: eScene.SCENE_ALL,
    selfUnitType: [eUnitType.UNIT_TYPE_REMOTE],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 50,
    targetUnitType: [eUnitType.UNIT_TYPE_CITY, eUnitType.UNIT_TYPE_CLOSECOMBAT],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "与驻防单位或城市战斗时战斗力+50%",
    uuid: [],
    iconName: "PROMOTION_PROMOTION_ATLAS55.png",
  },
  {
    id: ePromotion.PROMOTION_STATUE_ZEUS,
    name: "宙斯神像",
    scene: eScene.SCENE_ATK,
    selfUnitType: [],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 15,
    targetUnitType: [eUnitType.UNIT_TYPE_CITY],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "攻击城市时战斗力+15%",
    uuid: [],
    iconName: "BUILDING_STATUE_ZEUS.png",
  },
  {
    id: ePromotion.PROMOTION_STINGOUT,
    name: "对海喷火",
    scene: eScene.SCENE_ALL,
    selfUnitType: [],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 50,
    targetUnitType: [
      eUnitType.UNIT_TYPE_SEACLOSECOMBAT,
      eUnitType.UNIT_TYPE_SEAREMOTE,
    ],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "对海上单位战斗力+50%",
    uuid: [eUnit.UNIT_BYZANTINE_DROMON],
    iconName: "PROMOTION_59.png",
  },
  {
    id: ePromotion.PROMOTION_COUTER_RIDING,
    name: "枪击骑乘",
    scene: eScene.SCENE_ALL,
    selfUnitType: [],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 50,
    targetUnitType: [eUnitType.UNIT_TYPE_RIDING],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "对骑乘单位战斗力+50%",
    uuid: [
      eUnit.UNIT_SPEARMAN,
      eUnit.UNIT_GREEK_HOPLITE,
      eUnit.UNIT_PERSIAN_IMMORTAL,
      eUnit.UNIT_GERMAN_LANDSKNECHT,
      eUnit.UNIT_SIAMESE_WARELEPHANT,
      eUnit.UNIT_PIKEMAN,
      eUnit.UNIT_SPANISH_TERCIO,
    ],
    iconName: "PROMOTION_59.png",
  },
  {
    id: ePromotion.PROMOTION_OUTSIDE_COUNTRY,
    name: "境外加成",
    scene: eScene.SCENE_ALL,
    selfUnitType: [],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 20,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "境外战斗力+20%",
    uuid: [eUnit.UNIT_CELT_PICTISH_WARRIOR],
    iconName: "PROMOTION_59.png",
  },
  {
    id: ePromotion.PROMOTION_COUNTER_CITY_20,
    name: "攻城20",
    scene: eScene.SCENE_ATK,
    selfUnitType: [],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 20,
    targetUnitType: [eUnitType.UNIT_TYPE_CITY],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "攻城战斗力+20%",
    uuid: [eUnit.UNIT_OTTOMAN_JANISSARY],
    iconName: "PROMOTION_59.png",
  },
  {
    id: ePromotion.PROMOTION_COUNTER_CITY_200,
    name: "攻城200",
    scene: eScene.SCENE_ATK,
    selfUnitType: [],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 200,
    targetUnitType: [eUnitType.UNIT_TYPE_CITY],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "攻城战斗力+200%",
    uuid: [
      eUnit.UNIT_CATAPULT,
      eUnit.UNIT_ROMAN_BALLISTA,
      eUnit.UNIT_ASSYRIAN_SIEGE_TOWER,
      eUnit.UNIT_TREBUCHET,
      eUnit.UNIT_CANNON,
    ],
    iconName: "PROMOTION_59.png",
  },
  {
    id: ePromotion.PROMOTION_COUNTER_CITY_300,
    name: "攻城300",
    scene: eScene.SCENE_ATK,
    selfUnitType: [],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 300,
    targetUnitType: [eUnitType.UNIT_TYPE_CITY],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "攻城战斗力+300%",
    uuid: [eUnit.UNIT_HUN_BATTERING_RAM],
    iconName: "PROMOTION_59.png",
  },
  {
    id: ePromotion.PROMOTION_JUNGLE_ROGUE,
    name: "林间游侠",
    scene: eScene.SCENE_ALL,
    selfUnitType: [],
    selfTerrainType: eTerrainType.TERRAIN_FOREST,
    selfModify: 33,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "在森/丛林中战斗力+33%",
    uuid: [eUnit.UNIT_AZTEC_JAGUAR, eUnit.UNIT_IROQUOIAN_MOHAWKWARRIOR],
    iconName: "PROMOTION_59.png",
  },
  {
    id: ePromotion.PROMOTION_HAKKAR_DANCE,
    name: "哈卡战舞",
    scene: eScene.SCENE_ALL,
    selfUnitType: [],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 0,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: -10,
    barbarainOnly: false,
    description: "相邻敌方单位战斗力-10%",
    uuid: [eUnit.UNIT_POLYNESIAN_MAORI_WARRIOR],
    iconName: "PROMOTION_59.png",
  },
  {
    id: ePromotion.PROMOTION_DEBUFF_CITY_25,
    name: "攻城减益25",
    scene: eScene.SCENE_ATK,
    selfUnitType: [eUnitType.UNIT_TYPE_RIDING],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: -25,
    targetUnitType: [eUnitType.UNIT_TYPE_CITY],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "攻城时战斗力-25%",
    uuid: [eUnit.UNIT_BYZANTINE_CATAPHRACT],
    iconName: "PROMOTION_ABILITY_ATLAS57.png",
  },
  {
    id: ePromotion.PROMOTION_DEBUFF_CITY_33,
    name: "攻城减益33",
    scene: eScene.SCENE_ATK,
    selfUnitType: [eUnitType.UNIT_TYPE_RIDING],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: -33,
    targetUnitType: [eUnitType.UNIT_TYPE_CITY],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "攻城时战斗力-33%",
    uuid: [
      eUnit.UNIT_HORSEMAN,
      eUnit.UNIT_GREEK_COMPANIONCAVALRY,
      eUnit.UNIT_CARTHAGINIAN_FOREST_ELEPHANT,
      eUnit.UNIT_KNIGHT,
      eUnit.UNIT_SIAMESE_WARELEPHANT,
      eUnit.UNIT_LANCER,
    ],
    iconName: "PROMOTION_ABILITY_ATLAS57.png",
  },
  {
    id: ePromotion.PROMOTION_ELEPHANT_SCARE,
    name: "巨象之惧",
    scene: eScene.SCENE_ALL,
    selfUnitType: [eUnitType.UNIT_TYPE_RIDING],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 0,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: -10,
    barbarainOnly: false,
    description: "相邻敌方单位战斗力-10%",
    uuid: [eUnit.UNIT_CARTHAGINIAN_FOREST_ELEPHANT],
    iconName: "PROMOTION_59.png",
  },
  {
    id: ePromotion.PROMOTION_SWEDEN_GENENAL,
    name: "北境大军",
    scene: eScene.SCENE_ALL,
    selfUnitType: [eUnitType.UNIT_TYPE_RIDING],
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 15,
    targetUnitType: [],
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "相邻敌方单位战斗力-10%",
    uuid: [eUnit.UNIT_SWEDISH_HAKKAPELIITTA],
    iconName: "PROMOTION_59.png",
  },
];
