export interface BattleDamageCalModel {
  // unit props
  unitname: string;
  unitId: number;
  unitType: number;
  nationality: number;
  closeCombat: boolean;
  attackRange: number;
  attackValue: number;
  rangeAttackValue: number;
  TerrainDefense: boolean;

  //conditions
  terrainId: number;
  health: number;
  happiness: number;

  // calculate params
  calcAttackValue: number;
  modifiedAttackValue: number;
  minDamage: string;
  maxDamage: string;
  avgDamage: string;
}

export interface UnitModel {
  id: number;
  name: string;
  era: number;
  type: number;
  nationality: number;
  substitution: number;
  upgrade: number;
  cost: number;
  closeCombat: boolean;
  attackRange: number;
  attackValue: number;
  rangeAttackValue: number;
  terrainDefense: boolean;
  movement: number;
  resource: number;
  startTechnology: number;
  endTechnology: number;
  iconSrc: string;
}

export interface PromotionModel {
  id: number;
  name: string;
  scene: number;
  selfUnitType: number;
  selfTerrainType: number;
  selfModify: number;
  targetUnitType: number;
  targetTerrainType: number;
  targetModify: number;
  barbarainOnly: boolean;
  description: string;
  iconName: string;
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
}
