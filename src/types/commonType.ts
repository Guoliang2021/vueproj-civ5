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
  promote: number;
  cost: number;
  closeCombat: boolean;
  attackRange: number;
  attackValue: number;
  rangeAttackValue: number;
  TerrainDefense: boolean;
  movement: number;
  resource: number;
  startTechnology: number;
  endTechnology: number;
  iconSrc: string;
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
