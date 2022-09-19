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
  TerrainDefense: boolean;
  iconSrc: string;
}
