import { PromotionModel } from "@/types/commonType";
import { eUnitType } from "@/staticData/units";
import { eTerrainType } from "@/staticData/terrain";
export enum eScene {
  SCENE_ALL = 0,
  SCENE_ATK,
  SCENE_DEF,
}

export enum ePromotion {
  PROMOTION_GREAT_GENENAL = 0,
  PROMOTION_HONOR,
  PROMOTION_HONOR_DISCIPLINE,
}

export const promotionArray: Array<PromotionModel> = [
  {
    id: ePromotion.PROMOTION_GREAT_GENENAL,
    name: "大军",
    scene: eScene.SCENE_ALL,
    selfUnitType: eUnitType.UNIT_TYPE_ALL,
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 15,
    targetUnitType: eUnitType.UNIT_TYPE_ALL,
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "相邻单位战斗力+15%",
    iconName: "UNIT_GREAT_GENERAL.png",
  },
  {
    id: ePromotion.PROMOTION_HONOR,
    name: "荣誉开门",
    scene: eScene.SCENE_ALL,
    selfUnitType: eUnitType.UNIT_TYPE_ALL,
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 33,
    targetUnitType: eUnitType.UNIT_TYPE_ALL,
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: true,
    description: "对蛮族单位战斗力+33%",
    iconName: "UNIT_GREAT_GENERAL.png", //TODO:
  },
  {
    id: ePromotion.PROMOTION_HONOR_DISCIPLINE,
    name: "军事纪律",
    scene: eScene.SCENE_ALL,
    selfUnitType: eUnitType.UNIT_TYPE_CLOSECOMBAT,
    selfTerrainType: eTerrainType.TERRAIN_ALL,
    selfModify: 33,
    targetUnitType: eUnitType.UNIT_TYPE_ALL,
    targetTerrainType: eTerrainType.TERRAIN_ALL,
    targetModify: 0,
    barbarainOnly: false,
    description: "有相邻友方单位时战斗力+15%",
    iconName: "POLICY_DISCIPLINE.png",
  },
];
