import { eEra } from "./era";

export enum eUnitType {
  UNITTYPE_ALL = 0,
  UNITTYPE_DETECT /*侦查*/,
  UNITTYPE_CLOSECOMBAT /*肉搏*/,
  UNITTYPE_REMOTE /*弓箭*/,
  UNITTYPE_WEAPON /*火器*/,
  UNITTYPE_SIEGE /*攻城*/,
  UNITTYPE_RIDING /*骑乘*/,
  UNITTYPE_SEACLOSECOMBAT /*海上近战*/,
  UNITTYPE_SEAREMOTE /*海上远程*/,
  UNITTYPE_CITY /*城市*/,
  UNITYPE_MAX,
}

export function unitTypeEnum2String(unitType: number) {
  let retVal!: string;
  switch (unitType) {
    case eUnitType.UNITTYPE_ALL:
      retVal = "全部";
      break;
    case eUnitType.UNITTYPE_DETECT:
      retVal = "侦查";
      break;
    case eUnitType.UNITTYPE_CLOSECOMBAT:
      retVal = "肉搏";
      break;
    case eUnitType.UNITTYPE_REMOTE:
      retVal = "弓箭";
      break;
    case eUnitType.UNITTYPE_WEAPON:
      retVal = "火器";
      break;
    case eUnitType.UNITTYPE_SIEGE:
      retVal = "攻城";
      break;
    case eUnitType.UNITTYPE_RIDING:
      retVal = "骑乘";
      break;
    case eUnitType.UNITTYPE_SEACLOSECOMBAT:
      retVal = "海上近战";
      break;
    case eUnitType.UNITTYPE_SEAREMOTE:
      retVal = "海上远程";
      break;
    case eUnitType.UNITTYPE_CITY:
      retVal = "城市";
      break;
    default:
      retVal = "未定义";
      break;
  }
  return retVal;
}

export const battleUnitArray = [
  {
    id: 0,
    name: "斥候",
    era: eEra.ERA_ANCIENT,
    type: eUnitType.UNITTYPE_DETECT,
  },
];
