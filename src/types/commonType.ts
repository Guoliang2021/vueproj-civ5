export interface BattleDamageCalModel {
  // unit props
  unitname: string; //单位名称
  unitId: number; //单位id eUnit
  unitType: number; //单位类型 eUnitType
  nationality: number; //所属国籍 eNationality
  closeCombat: boolean; //是否近战肉搏
  attackRange: number; //攻击范围
  attackValue: number; //攻击力(近)
  rangeAttackValue: number; //攻击力(远,如果有)
  TerrainDefense: boolean; //是否享受复杂地形防御加成

  //conditions
  terrainId: number; //当前所处地形id eTerrainType
  health: number; //当前血量
  happiness: number; //当前红脸
  promotions: number[]; //加成列表

  // calculate params
  calcAttackValue: number; //攻击力取值
  modifiedAttackValue: number; //修正攻击力
  minDamage: string; //最小伤害
  maxDamage: string; //最大伤害
  avgDamage: string; //平均伤害
}

export interface TechnologyModel {
  id: number; //科技id eTechnology
  name: string; //科技名称
  era: number; //科技所处时代 eEra
  cost: number; //研发所需瓶数
  preTechList: number[]; //前置科技列表
}

export interface UnitModel {
  id: number; //单位ID eUnit
  name: string; //单位名称
  era: number; //单位归类时代 eEra
  type: number; //单位类型 eUnitType
  nationality: number; //单位国籍 eNationality
  substitution: number; //uu替代的原始单位
  upgrade: number; //升级单位id
  cost: number; //生产单位所需产能
  closeCombat: boolean; //是否近战肉搏
  attackRange: number; //攻击范围
  attackValue: number; //攻击力(近)
  rangeAttackValue: number; //攻击力(远,如果有)
  terrainDefense: boolean; //是否享受复杂地形防御加成
  originPromotion: number[]; //单位原始享受晋升技能列表
  movement: number; //单位移动力
  resource: number; //生产单位所需战略资源
  startTechnology: number; //生产单位所需科技
  endTechnology: number; //生产单位过时科技
  iconSrc: string; //单位对应图标名称
}

export interface PromotionModel {
  id: number; //晋升id ePromotion
  name: string; //晋升名称
  scene: number; //战斗场景 eScene
  selfUnitType: number; //自身有效单位类型
  selfTerrainType: number; //自身有限地形
  selfModify: number; //自身战斗力修正值
  targetUnitType: number[]; //攻击目标有效单位类型,可能有多个
  targetTerrainType: number; //攻击目标有限地形
  targetModify: number; //攻击目标战斗力修正值
  barbarainOnly: boolean; //是否只对蛮族生效
  description: string; //晋升描述
  iconName: string; //晋升对应图标名称
}

export interface ECascaderOption {
  value: number;
  label: string;
  children: ECascaderOption[];
}

export interface ETerrainPickerOption {
  value: number;
  label: string;
}

export interface EPromotionBoxOption {
  value: number;
  label: string;
  checked: boolean;
  disabled: boolean;
  src: string;
}
