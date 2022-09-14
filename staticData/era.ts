export enum eEra {
  ERA_ALL = 0,
  ERA_ANCIENT,
  ERA_CLASSICAL,
  ERA_MEDIEVAL,
  ERA_RENAISSANCE,
  ERA_INDUSTRY,
  ERA_NUCLEON,
  ERA_INFOMATION,
  ERA_MAX,
}

export function eraEnum2String(era: number) {
  let retVal!: string;
  switch (era) {
    case eEra.ERA_ALL:
      retVal = "全部";
      break;
    case eEra.ERA_ANCIENT:
      retVal = "远古";
      break;
    case eEra.ERA_CLASSICAL:
      retVal = "古典";
      break;
    case eEra.ERA_MEDIEVAL:
      retVal = "中古";
      break;
    case eEra.ERA_RENAISSANCE:
      retVal = "启蒙";
      break;
    case eEra.ERA_INDUSTRY:
      retVal = "工业";
      break;
    case eEra.ERA_NUCLEON:
      retVal = "核子";
      break;
    case eEra.ERA_INFOMATION:
      retVal = "资讯";
      break;
    default:
      retVal = "未定义";
      break;
  }
  return retVal;
}
