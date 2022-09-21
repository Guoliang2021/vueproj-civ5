export interface TypeGSelectItem {
  name: string;
  id: number;
  type?: number;
  era?: number;
}

export interface BattleDamageCalModel {
  unitname: string;
  unitId: number;
  unitType: number;
  nationality: number;
  closeCombat: boolean;
  attackRange: number;
  attackValue: number;
  rangeAttackValue: number;
  modifiedAttackValue: number;
  TerrainDefense: boolean;
  minDamage: string;
  maxDamage: string;
  avgDamage: string;
  iconSrc: string;
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
