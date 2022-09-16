export enum eNationality {
  NATION_NONE,
  NATION_BARBARIAN,
  NATION_AMERICA,
  NATION_ARAB,
  NATION_ASSYRIA,
  NATION_AUSTRIA,
  NATION_AZTAKA,
  NATION_BABYLON,
  NATION_BRAZIL,
  NATION_BYZANTIUM,
  NATION_CARTHAGE,
  NATION_CHINA,
  NATION_CELTIC,
  NATION_DENMARK,
  NATION_EGYPT,
  NATION_ENGLAND,
  NATION_ETHIOPIA,
  NATION_FRANCE,
  NATION_GERMANY,
  NATION_GREECE,
  NATION_HUN,
  NATION_INDIA,
  NATION_INDONESIA,
  NATION_INCA,
  NATION_IROQUOIS,
  NATION_JANPAN,
  NATION_KOREA,
  NATION_MONGOLIA,
  NATION_MOROCCO,
  NATION_MAYA,
  NATION_NETHERLANDS,
  NATION_OSMAN,
  NATION_PERSIA,
  NATION_POLAND,
  NATION_POLYNESIA,
  NATION_PORTUGAL,
  NATION_ROMA,
  NATION_RUSSIA,
  NATION_SIAM,
  NATION_SONGHAI,
  NATION_SPAIN,
  NATION_SWEDEN,
  NATION_SHOSHONE,
  NATION_VENICE,
  NATION_ZURU,
  NATION_MAX,
}

export function nationEnum2String(nation: number) {
  let retVal!: string;
  switch (nation) {
    case eNationality.NATION_NONE:
      retVal = "无";
      break;
    case eNationality.NATION_BARBARIAN:
      retVal = "蛮族";
      break;
    case eNationality.NATION_AMERICA:
      retVal = "美国";
      break;
    case eNationality.NATION_ARAB:
      retVal = "阿拉伯";
      break;
    case eNationality.NATION_ASSYRIA:
      retVal = "亚述";
      break;
    case eNationality.NATION_AUSTRIA:
      retVal = "奥地利";
      break;
    case eNationality.NATION_AZTAKA:
      retVal = "阿兹特克";
      break;
    case eNationality.NATION_BABYLON:
      retVal = "巴比伦";
      break;
    case eNationality.NATION_BRAZIL:
      retVal = "巴西";
      break;
    case eNationality.NATION_BYZANTIUM:
      retVal = "拜占庭";
      break;
    case eNationality.NATION_CARTHAGE:
      retVal = "迦太基";
      break;
    case eNationality.NATION_CHINA:
      retVal = "中国";
      break;
    case eNationality.NATION_CELTIC:
      retVal = "凯尔特";
      break;
    case eNationality.NATION_DENMARK:
      retVal = "丹麦";
      break;
    case eNationality.NATION_EGYPT:
      retVal = "埃及";
      break;
    case eNationality.NATION_ENGLAND:
      retVal = "英国";
      break;
    case eNationality.NATION_ETHIOPIA:
      retVal = "埃塞尔比亚";
      break;
    case eNationality.NATION_FRANCE:
      retVal = "法国";
      break;
    case eNationality.NATION_GERMANY:
      retVal = "德国";
      break;
    case eNationality.NATION_GREECE:
      retVal = "希腊";
      break;
    case eNationality.NATION_HUN:
      retVal = "匈";
      break;
    case eNationality.NATION_INDIA:
      retVal = "印度";
      break;
    case eNationality.NATION_INDONESIA:
      retVal = "印度尼西亚";
      break;
    case eNationality.NATION_INCA:
      retVal = "印加";
      break;
    case eNationality.NATION_IROQUOIS:
      retVal = "易洛魁";
      break;
    case eNationality.NATION_JANPAN:
      retVal = "日本";
      break;
    case eNationality.NATION_KOREA:
      retVal = "朝鲜";
      break;
    case eNationality.NATION_MONGOLIA:
      retVal = "蒙古";
      break;
    case eNationality.NATION_MOROCCO:
      retVal = "摩洛哥";
      break;
    case eNationality.NATION_MAYA:
      retVal = "玛雅";
      break;
    case eNationality.NATION_NETHERLANDS:
      retVal = "荷兰";
      break;
    case eNationality.NATION_OSMAN:
      retVal = "奥斯曼";
      break;
    case eNationality.NATION_PERSIA:
      retVal = "波斯";
      break;
    case eNationality.NATION_POLAND:
      retVal = "波兰";
      break;
    case eNationality.NATION_POLYNESIA:
      retVal = "波利尼西亚";
      break;
    case eNationality.NATION_PORTUGAL:
      retVal = "葡萄牙";
      break;
    case eNationality.NATION_ROMA:
      retVal = "罗马";
      break;
    case eNationality.NATION_RUSSIA:
      retVal = "俄罗斯";
      break;
    case eNationality.NATION_SIAM:
      retVal = "暹罗";
      break;
    case eNationality.NATION_SONGHAI:
      retVal = "桑海";
      break;
    case eNationality.NATION_SPAIN:
      retVal = "西班牙";
      break;
    case eNationality.NATION_SWEDEN:
      retVal = "瑞典";
      break;
    case eNationality.NATION_SHOSHONE:
      retVal = "肖肖尼";
      break;
    case eNationality.NATION_VENICE:
      retVal = "威尼斯";
      break;
    case eNationality.NATION_ZURU:
      retVal = "祖鲁";
      break;
    default:
      retVal = "未定义";
      break;
  }
  return retVal;
}
