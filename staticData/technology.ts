import { eEra } from "./era";

export enum eTechnology {
  /*before ancient */
  TECH_AGRICULTURE,
  /*ancient first*/
  TECH_POTTERY,
  TECH_ANIMAL_HUSBANDRY,
  TECH_ARCHERY,
  TECH_MINING,
  /*ancient second*/
  TECH_SAILING,
  TECH_CALENDAR,
  TECH_WRITING,
  TECH_TRAPPING,
  TECH_THE_WHEEL,
  TECH_MASONRY,
  TECH_BRONZE_WORKING,
  /*classical first*/
  TECH_OPTICS,
  TECH_HORSEBACK_RIDING,
  TECH_MATHEMATICS,
  TECH_CONSTRUCTION,
  /*classical second*/
  TECH_PHILOSOPHY,
  TECH_DRAMA,
  TECH_CURRENCY,
  TECH_ENGINEERING,
  TECH_IRON_WORKING,
  /*medieval first*/
  TECH_THEOLOGY,
  TECH_CIVIL_SERVICE,
  TECH_GUILDS,
  TECH_METAL_CASTING,
  /*medieval second*/
  TECH_COMPASS,
  TECH_EDUCATION,
  TECH_CHIVALRY,
  TECH_MACHINERY,
  TECH_PHYSICS,
  TECH_STEEL,
  /*renaissance first*/
  TECH_ASTRONOMY,
  TECH_ACOUSTICS,
  TECH_BANKING,
  TECH_PRINTING_PRESS,
  TECH_GUNPOWDER,
  /*renaissance second*/
  TECH_NAVIGATION,
  TECH_ARCHITECTURE,
  TECH_ECONOMICS,
  TECH_METALLURGY,
  TECH_CHEMISTRY,
  /*industrial first*/
  TECH_ARCHAEOLOGY,
  TECH_SCIENTIFIC_THEORY,
  TECH_INDUSTRIALIZATION,
  TECH_RIFLING,
  TECH_MILITARY_SCIENCE,
  TECH_FERTILIZER,
  /*industrial second*/
  TECH_BIOLOGY,
  TECH_ELECTRICITY,
  TECH_STEAM_POWER,
  TECH_DYNAMITE,
  /*modern first*/
  TECH_REFRIGERATION,
  TECH_RADIO,
  TECH_REPLACEABLE_PARTS,
  TECH_FLIGHT,
  TECH_RAILROAD,
  /*modern second*/
  TECH_PLASTIC,
  TECH_ELECTRONICS,
  TECH_BALLISTICS,
  TECH_COMBUSTION,
  /*atomic first*/
  TECH_PENICILIN,
  TECH_ATOMIC_THEORY,
  TECH_RADAR,
  TECH_COMBINED_ARMS,
  /*atomic second*/
  TECH_ECOLOGY,
  TECH_NUCLEAR_FISSION,
  TECH_ROCKETRY,
  TECH_COMPUTERS,
  /*infomation first*/
  TECH_TELECOM,
  TECH_MOBILE_TACTICS,
  TECH_ADVANCED_BALLISTICS,
  TECH_SATELLITES,
  TECH_ROBOTICS,
  TECH_LASERS,
  /*infomation second*/
  TECH_INTERNET,
  TECH_GLOBALIZATION,
  TECH_PARTICLE_PHYSICS,
  TECH_NUCLEAR_FUSION,
  TECH_NANOTECHNOLOGY,
  TECH_STEALTH,
  /*future*/
  TECH_FUTURE_TECH,
}

export function techEnum2String(tech: number) {
  let retVal!: string;
  switch (tech) {
    case eTechnology.TECH_AGRICULTURE:
      retVal = "农业";
      break;
    case eTechnology.TECH_POTTERY:
      retVal = "制陶";
      break;
    case eTechnology.TECH_ANIMAL_HUSBANDRY:
      retVal = "畜牧";
      break;
    case eTechnology.TECH_ARCHERY:
      retVal = "弓箭";
      break;
    case eTechnology.TECH_MINING:
      retVal = "采矿";
      break;
    case eTechnology.TECH_SAILING:
      retVal = "航海";
      break;
    case eTechnology.TECH_CALENDAR:
      retVal = "历法";
      break;
    case eTechnology.TECH_WRITING:
      retVal = "书写";
      break;
    case eTechnology.TECH_TRAPPING:
      retVal = "捕猎";
      break;
    case eTechnology.TECH_THE_WHEEL:
      retVal = "车轮";
      break;
    case eTechnology.TECH_MASONRY:
      retVal = "石工";
      break;
    case eTechnology.TECH_BRONZE_WORKING:
      retVal = "青铜";
      break;
    case eTechnology.TECH_OPTICS:
      retVal = "光学";
      break;
    case eTechnology.TECH_HORSEBACK_RIDING:
      retVal = "骑术";
      break;
    case eTechnology.TECH_MATHEMATICS:
      retVal = "数学";
      break;
    case eTechnology.TECH_CONSTRUCTION:
      retVal = "建造学";
      break;
    case eTechnology.TECH_PHILOSOPHY:
      retVal = "哲学";
      break;
    case eTechnology.TECH_DRAMA:
      retVal = "戏剧";
      break;
    case eTechnology.TECH_CURRENCY:
      retVal = "货币";
      break;
    case eTechnology.TECH_ENGINEERING:
      retVal = "工程学";
      break;
    case eTechnology.TECH_IRON_WORKING:
      retVal = "铁器";
      break;
    case eTechnology.TECH_THEOLOGY:
      retVal = "神学";
      break;
    case eTechnology.TECH_CIVIL_SERVICE:
      retVal = "文官";
      break;
    case eTechnology.TECH_GUILDS:
      retVal = "行会";
      break;
    case eTechnology.TECH_METAL_CASTING:
      retVal = "铸造";
      break;
    case eTechnology.TECH_COMPASS:
      retVal = "罗盘";
      break;
    case eTechnology.TECH_EDUCATION:
      retVal = "教育";
      break;
    case eTechnology.TECH_CHIVALRY:
      retVal = "骑士";
      break;
    case eTechnology.TECH_MACHINERY:
      retVal = "机械";
      break;
    case eTechnology.TECH_PHYSICS:
      retVal = "物理学";
      break;
    case eTechnology.TECH_STEEL:
      retVal = "炼钢";
      break;
    case eTechnology.TECH_ASTRONOMY:
      retVal = "天文学";
      break;
    case eTechnology.TECH_ACOUSTICS:
      retVal = "声学";
      break;
    case eTechnology.TECH_BANKING:
      retVal = "银行";
      break;
    case eTechnology.TECH_PRINTING_PRESS:
      retVal = "印刷";
      break;
    case eTechnology.TECH_GUNPOWDER:
      retVal = "火药";
      break;
    case eTechnology.TECH_NAVIGATION:
      retVal = "导航";
      break;
    case eTechnology.TECH_ARCHITECTURE:
      retVal = "建筑学";
      break;
    case eTechnology.TECH_ECONOMICS:
      retVal = "经济学";
      break;
    case eTechnology.TECH_METALLURGY:
      retVal = "冶金";
      break;
    case eTechnology.TECH_CHEMISTRY:
      retVal = "化学";
      break;
    case eTechnology.TECH_ARCHAEOLOGY:
      retVal = "考古学";
      break;
    case eTechnology.TECH_SCIENTIFIC_THEORY:
      retVal = "科学理论";
      break;
    case eTechnology.TECH_INDUSTRIALIZATION:
      retVal = "工业化";
      break;
    case eTechnology.TECH_RIFLING:
      retVal = "膛线";
      break;
    case eTechnology.TECH_MILITARY_SCIENCE:
      retVal = "军事科学";
      break;
    case eTechnology.TECH_FERTILIZER:
      retVal = "化肥";
      break;
    case eTechnology.TECH_BIOLOGY:
      retVal = "生物学";
      break;
    case eTechnology.TECH_ELECTRICITY:
      retVal = "电力";
      break;
    case eTechnology.TECH_STEAM_POWER:
      retVal = "蒸汽动力";
      break;
    case eTechnology.TECH_DYNAMITE:
      retVal = "炸药";
      break;
    case eTechnology.TECH_REFRIGERATION:
      retVal = "制冷";
      break;
    case eTechnology.TECH_RADIO:
      retVal = "无线电";
      break;
    case eTechnology.TECH_REPLACEABLE_PARTS:
      retVal = "零组件";
      break;
    case eTechnology.TECH_FLIGHT:
      retVal = "航空";
      break;
    case eTechnology.TECH_RAILROAD:
      retVal = "铁路";
      break;
    case eTechnology.TECH_PLASTIC:
      retVal = "塑料";
      break;
    case eTechnology.TECH_ELECTRONICS:
      retVal = "电子学";
      break;
    case eTechnology.TECH_BALLISTICS:
      retVal = "弹道学";
      break;
    case eTechnology.TECH_COMBUSTION:
      retVal = "内燃机";
      break;
    case eTechnology.TECH_PENICILIN:
      retVal = "青霉素";
      break;
    case eTechnology.TECH_ATOMIC_THEORY:
      retVal = "原子理论";
      break;
    case eTechnology.TECH_RADAR:
      retVal = "雷达";
      break;
    case eTechnology.TECH_COMBINED_ARMS:
      retVal = "联合兵种";
      break;
    case eTechnology.TECH_ECOLOGY:
      retVal = "生态学";
      break;
    case eTechnology.TECH_NUCLEAR_FISSION:
      retVal = "核裂变";
      break;
    case eTechnology.TECH_ROCKETRY:
      retVal = "火箭学";
      break;
    case eTechnology.TECH_COMPUTERS:
      retVal = "计算机";
      break;
    case eTechnology.TECH_TELECOM:
      retVal = "电信科技";
      break;
    case eTechnology.TECH_MOBILE_TACTICS:
      retVal = "机动战术";
      break;
    case eTechnology.TECH_ADVANCED_BALLISTICS:
      retVal = "高级弹道学";
      break;
    case eTechnology.TECH_SATELLITES:
      retVal = "卫星";
      break;
    case eTechnology.TECH_ROBOTICS:
      retVal = "机器人学";
      break;
    case eTechnology.TECH_LASERS:
      retVal = "镭射";
      break;
    case eTechnology.TECH_INTERNET:
      retVal = "网络";
      break;
    case eTechnology.TECH_GLOBALIZATION:
      retVal = "全球化";
      break;
    case eTechnology.TECH_PARTICLE_PHYSICS:
      retVal = "粒子物理学";
      break;
    case eTechnology.TECH_NUCLEAR_FUSION:
      retVal = "核聚变";
      break;
    case eTechnology.TECH_NANOTECHNOLOGY:
      retVal = "纳米科技";
      break;
    case eTechnology.TECH_STEALTH:
      retVal = "隐形技术";
      break;
    case eTechnology.TECH_FUTURE_TECH:
      retVal = "未来科技";
      break;
    default:
      retVal = "未定义";
      break;
  }
  return retVal;
}

export const technologiesArray = [
  /*eg.
  {
    id: 科技ID,取eTechnology枚举值
    name: 科技名,使用id配合techEnum2String转换
    era: 科技所处时代,取eEra枚举值
    cost: 获得科技所需瓶子数量(不计算科研惩罚)
    preTechList:前置科技ID列表
  } 
  */

  /*ancient */
  {
    id: eTechnology.TECH_AGRICULTURE,
    name: techEnum2String(eTechnology.TECH_AGRICULTURE),
    era: eEra.ERA_ANCIENT,
    cost: 20,
    preTechList: [],
  },
  {
    id: eTechnology.TECH_POTTERY,
    name: techEnum2String(eTechnology.TECH_POTTERY),
    era: eEra.ERA_ANCIENT,
    cost: 35,
    preTechList: [eTechnology.TECH_AGRICULTURE],
  },
  {
    id: eTechnology.TECH_ANIMAL_HUSBANDRY,
    name: techEnum2String(eTechnology.TECH_ANIMAL_HUSBANDRY),
    era: eEra.ERA_ANCIENT,
    cost: 35,
    preTechList: [eTechnology.TECH_AGRICULTURE],
  },
  {
    id: eTechnology.TECH_ARCHERY,
    name: techEnum2String(eTechnology.TECH_ARCHERY),
    era: eEra.ERA_ANCIENT,
    cost: 35,
    preTechList: [eTechnology.TECH_AGRICULTURE],
  },
  {
    id: eTechnology.TECH_MINING,
    name: techEnum2String(eTechnology.TECH_MINING),
    era: eEra.ERA_ANCIENT,
    cost: 35,
    preTechList: [eTechnology.TECH_AGRICULTURE],
  },
  {
    id: eTechnology.TECH_SAILING,
    name: techEnum2String(eTechnology.TECH_SAILING),
    era: eEra.ERA_ANCIENT,
    cost: 55,
    preTechList: [eTechnology.TECH_POTTERY],
  },
  {
    id: eTechnology.TECH_CALENDAR,
    name: techEnum2String(eTechnology.TECH_CALENDAR),
    era: eEra.ERA_ANCIENT,
    cost: 55,
    preTechList: [eTechnology.TECH_POTTERY],
  },
  {
    id: eTechnology.TECH_WRITING,
    name: techEnum2String(eTechnology.TECH_WRITING),
    era: eEra.ERA_ANCIENT,
    cost: 55,
    preTechList: [eTechnology.TECH_POTTERY],
  },
  {
    id: eTechnology.TECH_TRAPPING,
    name: techEnum2String(eTechnology.TECH_TRAPPING),
    era: eEra.ERA_ANCIENT,
    cost: 55,
    preTechList: [eTechnology.TECH_ANIMAL_HUSBANDRY],
  },
  {
    id: eTechnology.TECH_THE_WHEEL,
    name: techEnum2String(eTechnology.TECH_THE_WHEEL),
    era: eEra.ERA_ANCIENT,
    cost: 55,
    preTechList: [eTechnology.TECH_ANIMAL_HUSBANDRY, eTechnology.TECH_ARCHERY],
  },
  {
    id: eTechnology.TECH_MASONRY,
    name: techEnum2String(eTechnology.TECH_MASONRY),
    era: eEra.ERA_ANCIENT,
    cost: 55,
    preTechList: [eTechnology.TECH_MINING],
  },
  {
    id: eTechnology.TECH_BRONZE_WORKING,
    name: techEnum2String(eTechnology.TECH_BRONZE_WORKING),
    era: eEra.ERA_ANCIENT,
    cost: 55,
    preTechList: [eTechnology.TECH_MINING],
  },

  /*classical */
  {
    id: eTechnology.TECH_OPTICS,
    name: techEnum2String(eTechnology.TECH_OPTICS),
    era: eEra.ERA_CLASSICAL,
    cost: 85,
    preTechList: [eTechnology.TECH_SAILING],
  },
  {
    id: eTechnology.TECH_HORSEBACK_RIDING,
    name: techEnum2String(eTechnology.TECH_HORSEBACK_RIDING),
    era: eEra.ERA_CLASSICAL,
    cost: 105,
    preTechList: [eTechnology.TECH_TRAPPING, eTechnology.TECH_THE_WHEEL],
  },
  {
    id: eTechnology.TECH_MATHEMATICS,
    name: techEnum2String(eTechnology.TECH_MATHEMATICS),
    era: eEra.ERA_CLASSICAL,
    cost: 105,
    preTechList: [eTechnology.TECH_THE_WHEEL],
  },
  {
    id: eTechnology.TECH_CONSTRUCTION,
    name: techEnum2String(eTechnology.TECH_CONSTRUCTION),
    era: eEra.ERA_CLASSICAL,
    cost: 105,
    preTechList: [eTechnology.TECH_THE_WHEEL, eTechnology.TECH_MASONRY],
  },
  {
    id: eTechnology.TECH_PHILOSOPHY,
    name: techEnum2String(eTechnology.TECH_PHILOSOPHY),
    era: eEra.ERA_CLASSICAL,
    cost: 175,
    preTechList: [eTechnology.TECH_CALENDAR, eTechnology.TECH_WRITING],
  },
  {
    id: eTechnology.TECH_DRAMA,
    name: techEnum2String(eTechnology.TECH_DRAMA),
    era: eEra.ERA_CLASSICAL,
    cost: 175,
    preTechList: [eTechnology.TECH_WRITING],
  },
  {
    id: eTechnology.TECH_CURRENCY,
    name: techEnum2String(eTechnology.TECH_CURRENCY),
    era: eEra.ERA_CLASSICAL,
    cost: 175,
    preTechList: [eTechnology.TECH_MATHEMATICS],
  },
  {
    id: eTechnology.TECH_ENGINEERING,
    name: techEnum2String(eTechnology.TECH_ENGINEERING),
    era: eEra.ERA_CLASSICAL,
    cost: 175,
    preTechList: [eTechnology.TECH_MATHEMATICS, eTechnology.TECH_CONSTRUCTION],
  },
  {
    id: eTechnology.TECH_IRON_WORKING,
    name: techEnum2String(eTechnology.TECH_IRON_WORKING),
    era: eEra.ERA_CLASSICAL,
    cost: 175,
    preTechList: [eTechnology.TECH_BRONZE_WORKING],
  },

  /*medieval */
  {
    id: eTechnology.TECH_THEOLOGY,
    name: techEnum2String(eTechnology.TECH_THEOLOGY),
    era: eEra.ERA_MEDIEVAL,
    cost: 275,
    preTechList: [eTechnology.TECH_PHILOSOPHY, eTechnology.TECH_DRAMA],
  },
  {
    id: eTechnology.TECH_CIVIL_SERVICE,
    name: techEnum2String(eTechnology.TECH_CIVIL_SERVICE),
    era: eEra.ERA_MEDIEVAL,
    cost: 275,
    preTechList: [
      eTechnology.TECH_DRAMA,
      eTechnology.TECH_HORSEBACK_RIDING,
      eTechnology.TECH_CURRENCY,
    ],
  },
  {
    id: eTechnology.TECH_GUILDS,
    name: techEnum2String(eTechnology.TECH_GUILDS),
    era: eEra.ERA_MEDIEVAL,
    cost: 275,
    preTechList: [eTechnology.TECH_CURRENCY],
  },
  {
    id: eTechnology.TECH_METAL_CASTING,
    name: techEnum2String(eTechnology.TECH_METAL_CASTING),
    era: eEra.ERA_MEDIEVAL,
    cost: 275,
    preTechList: [eTechnology.TECH_ENGINEERING, eTechnology.TECH_IRON_WORKING],
  },
  {
    id: eTechnology.TECH_COMPASS,
    name: techEnum2String(eTechnology.TECH_COMPASS),
    era: eEra.ERA_MEDIEVAL,
    cost: 375,
    preTechList: [eTechnology.TECH_OPTICS],
  },
  {
    id: eTechnology.TECH_EDUCATION,
    name: techEnum2String(eTechnology.TECH_EDUCATION),
    era: eEra.ERA_MEDIEVAL,
    cost: 485,
    preTechList: [eTechnology.TECH_THEOLOGY, eTechnology.TECH_CIVIL_SERVICE],
  },
  {
    id: eTechnology.TECH_CHIVALRY,
    name: techEnum2String(eTechnology.TECH_CHIVALRY),
    era: eEra.ERA_MEDIEVAL,
    cost: 485,
    preTechList: [eTechnology.TECH_GUILDS, eTechnology.TECH_CIVIL_SERVICE],
  },
  {
    id: eTechnology.TECH_MACHINERY,
    name: techEnum2String(eTechnology.TECH_MACHINERY),
    era: eEra.ERA_MEDIEVAL,
    cost: 485,
    preTechList: [eTechnology.TECH_GUILDS, eTechnology.TECH_ENGINEERING],
  },
  {
    id: eTechnology.TECH_PHYSICS,
    name: techEnum2String(eTechnology.TECH_PHYSICS),
    era: eEra.ERA_MEDIEVAL,
    cost: 485,
    preTechList: [eTechnology.TECH_METAL_CASTING],
  },
  {
    id: eTechnology.TECH_STEEL,
    name: techEnum2String(eTechnology.TECH_STEEL),
    era: eEra.ERA_MEDIEVAL,
    cost: 485,
    preTechList: [eTechnology.TECH_METAL_CASTING],
  },

  /*renaissance*/
  {
    id: eTechnology.TECH_ASTRONOMY,
    name: techEnum2String(eTechnology.TECH_ASTRONOMY),
    era: eEra.ERA_RENAISSANCE,
    cost: 780,
    preTechList: [eTechnology.TECH_COMPASS, eTechnology.TECH_EDUCATION],
  },
  {
    id: eTechnology.TECH_ACOUSTICS,
    name: techEnum2String(eTechnology.TECH_ACOUSTICS),
    era: eEra.ERA_RENAISSANCE,
    cost: 780,
    preTechList: [eTechnology.TECH_EDUCATION],
  },
  {
    id: eTechnology.TECH_BANKING,
    name: techEnum2String(eTechnology.TECH_BANKING),
    era: eEra.ERA_RENAISSANCE,
    cost: 780,
    preTechList: [eTechnology.TECH_EDUCATION, eTechnology.TECH_CHIVALRY],
  },
  {
    id: eTechnology.TECH_PRINTING_PRESS,
    name: techEnum2String(eTechnology.TECH_PRINTING_PRESS),
    era: eEra.ERA_RENAISSANCE,
    cost: 780,
    preTechList: [
      eTechnology.TECH_CHIVALRY,
      eTechnology.TECH_MACHINERY,
      eTechnology.TECH_PHYSICS,
    ],
  },
  {
    id: eTechnology.TECH_GUNPOWDER,
    name: techEnum2String(eTechnology.TECH_GUNPOWDER),
    era: eEra.ERA_RENAISSANCE,
    cost: 780,
    preTechList: [eTechnology.TECH_PHYSICS, eTechnology.TECH_STEEL],
  },
  {
    id: eTechnology.TECH_NAVIGATION,
    name: techEnum2String(eTechnology.TECH_NAVIGATION),
    era: eEra.ERA_RENAISSANCE,
    cost: 1150,
    preTechList: [eTechnology.TECH_ASTRONOMY],
  },
  {
    id: eTechnology.TECH_ARCHITECTURE,
    name: techEnum2String(eTechnology.TECH_ARCHITECTURE),
    era: eEra.ERA_RENAISSANCE,
    cost: 1150,
    preTechList: [eTechnology.TECH_ACOUSTICS, eTechnology.TECH_BANKING],
  },
  {
    id: eTechnology.TECH_ECONOMICS,
    name: techEnum2String(eTechnology.TECH_ECONOMICS),
    era: eEra.ERA_RENAISSANCE,
    cost: 1150,
    preTechList: [eTechnology.TECH_PRINTING_PRESS, eTechnology.TECH_BANKING],
  },
  {
    id: eTechnology.TECH_METALLURGY,
    name: techEnum2String(eTechnology.TECH_METALLURGY),
    era: eEra.ERA_RENAISSANCE,
    cost: 1150,
    preTechList: [eTechnology.TECH_PRINTING_PRESS, eTechnology.TECH_GUNPOWDER],
  },
  {
    id: eTechnology.TECH_CHEMISTRY,
    name: techEnum2String(eTechnology.TECH_CHEMISTRY),
    era: eEra.ERA_RENAISSANCE,
    cost: 1150,
    preTechList: [eTechnology.TECH_GUNPOWDER],
  },

  /*industrial*/
  {
    id: eTechnology.TECH_ARCHAEOLOGY,
    name: techEnum2String(eTechnology.TECH_ARCHAEOLOGY),
    era: eEra.ERA_INDUSTRIAL,
    cost: 1600,
    preTechList: [eTechnology.TECH_NAVIGATION, eTechnology.TECH_ARCHITECTURE],
  },
  {
    id: eTechnology.TECH_SCIENTIFIC_THEORY,
    name: techEnum2String(eTechnology.TECH_SCIENTIFIC_THEORY),
    era: eEra.ERA_INDUSTRIAL,
    cost: 1600,
    preTechList: [eTechnology.TECH_ARCHITECTURE, eTechnology.TECH_ECONOMICS],
  },
  {
    id: eTechnology.TECH_INDUSTRIALIZATION,
    name: techEnum2String(eTechnology.TECH_INDUSTRIALIZATION),
    era: eEra.ERA_INDUSTRIAL,
    cost: 1600,
    preTechList: [eTechnology.TECH_ECONOMICS],
  },
  {
    id: eTechnology.TECH_RIFLING,
    name: techEnum2String(eTechnology.TECH_RIFLING),
    era: eEra.ERA_INDUSTRIAL,
    cost: 1600,
    preTechList: [eTechnology.TECH_ECONOMICS, eTechnology.TECH_METALLURGY],
  },
  {
    id: eTechnology.TECH_MILITARY_SCIENCE,
    name: techEnum2String(eTechnology.TECH_MILITARY_SCIENCE),
    era: eEra.ERA_INDUSTRIAL,
    cost: 1600,
    preTechList: [eTechnology.TECH_CHEMISTRY, eTechnology.TECH_METALLURGY],
  },
  {
    id: eTechnology.TECH_FERTILIZER,
    name: techEnum2String(eTechnology.TECH_FERTILIZER),
    era: eEra.ERA_INDUSTRIAL,
    cost: 1600,
    preTechList: [eTechnology.TECH_CHEMISTRY],
  },
  {
    id: eTechnology.TECH_BIOLOGY,
    name: techEnum2String(eTechnology.TECH_BIOLOGY),
    era: eEra.ERA_INDUSTRIAL,
    cost: 2350,
    preTechList: [
      eTechnology.TECH_ARCHAEOLOGY,
      eTechnology.TECH_SCIENTIFIC_THEORY,
    ],
  },
  {
    id: eTechnology.TECH_ELECTRICITY,
    name: techEnum2String(eTechnology.TECH_ELECTRICITY),
    era: eEra.ERA_INDUSTRIAL,
    cost: 2350,
    preTechList: [eTechnology.TECH_SCIENTIFIC_THEORY],
  },
  {
    id: eTechnology.TECH_STEAM_POWER,
    name: techEnum2String(eTechnology.TECH_STEAM_POWER),
    era: eEra.ERA_INDUSTRIAL,
    cost: 2350,
    preTechList: [
      eTechnology.TECH_SCIENTIFIC_THEORY,
      eTechnology.TECH_INDUSTRIALIZATION,
      eTechnology.TECH_RIFLING,
    ],
  },
  {
    id: eTechnology.TECH_DYNAMITE,
    name: techEnum2String(eTechnology.TECH_DYNAMITE),
    era: eEra.ERA_INDUSTRIAL,
    cost: 2350,
    preTechList: [
      eTechnology.TECH_MILITARY_SCIENCE,
      eTechnology.TECH_FERTILIZER,
    ],
  },

  /*modern*/
  {
    id: eTechnology.TECH_REFRIGERATION,
    name: techEnum2String(eTechnology.TECH_REFRIGERATION),
    era: eEra.ERA_MODERN,
    cost: 3100,
    preTechList: [eTechnology.TECH_BIOLOGY, eTechnology.TECH_ELECTRICITY],
  },
  {
    id: eTechnology.TECH_RADIO,
    name: techEnum2String(eTechnology.TECH_RADIO),
    era: eEra.ERA_MODERN,
    cost: 3100,
    preTechList: [eTechnology.TECH_ELECTRICITY],
  },
  {
    id: eTechnology.TECH_REPLACEABLE_PARTS,
    name: techEnum2String(eTechnology.TECH_REPLACEABLE_PARTS),
    era: eEra.ERA_MODERN,
    cost: 3100,
    preTechList: [eTechnology.TECH_ELECTRICITY, eTechnology.TECH_STEAM_POWER],
  },
  {
    id: eTechnology.TECH_FLIGHT,
    name: techEnum2String(eTechnology.TECH_FLIGHT),
    era: eEra.ERA_MODERN,
    cost: 3100,
    preTechList: [eTechnology.TECH_STEAM_POWER],
  },
  {
    id: eTechnology.TECH_RAILROAD,
    name: techEnum2String(eTechnology.TECH_RAILROAD),
    era: eEra.ERA_MODERN,
    cost: 3100,
    preTechList: [eTechnology.TECH_STEAM_POWER, eTechnology.TECH_DYNAMITE],
  },
  {
    id: eTechnology.TECH_PLASTIC,
    name: techEnum2String(eTechnology.TECH_PLASTIC),
    era: eEra.ERA_MODERN,
    cost: 4100,
    preTechList: [eTechnology.TECH_RADIO, eTechnology.TECH_REPLACEABLE_PARTS],
  },
  {
    id: eTechnology.TECH_ELECTRONICS,
    name: techEnum2String(eTechnology.TECH_ELECTRONICS),
    era: eEra.ERA_MODERN,
    cost: 4100,
    preTechList: [eTechnology.TECH_FLIGHT, eTechnology.TECH_REPLACEABLE_PARTS],
  },
  {
    id: eTechnology.TECH_BALLISTICS,
    name: techEnum2String(eTechnology.TECH_BALLISTICS),
    era: eEra.ERA_MODERN,
    cost: 4100,
    preTechList: [eTechnology.TECH_FLIGHT, eTechnology.TECH_RAILROAD],
  },
  {
    id: eTechnology.TECH_COMBUSTION,
    name: techEnum2String(eTechnology.TECH_COMBUSTION),
    era: eEra.ERA_MODERN,
    cost: 4100,
    preTechList: [eTechnology.TECH_RAILROAD],
  },

  /*atomic*/
  {
    id: eTechnology.TECH_PENICILIN,
    name: techEnum2String(eTechnology.TECH_PENICILIN),
    era: eEra.ERA_ATOMIC,
    cost: 5100,
    preTechList: [eTechnology.TECH_PLASTIC, eTechnology.TECH_REFRIGERATION],
  },
  {
    id: eTechnology.TECH_ATOMIC_THEORY,
    name: techEnum2String(eTechnology.TECH_ATOMIC_THEORY),
    era: eEra.ERA_ATOMIC,
    cost: 5100,
    preTechList: [eTechnology.TECH_PLASTIC, eTechnology.TECH_ELECTRONICS],
  },
  {
    id: eTechnology.TECH_RADAR,
    name: techEnum2String(eTechnology.TECH_RADAR),
    era: eEra.ERA_ATOMIC,
    cost: 5100,
    preTechList: [eTechnology.TECH_BALLISTICS, eTechnology.TECH_ELECTRONICS],
  },
  {
    id: eTechnology.TECH_COMBINED_ARMS,
    name: techEnum2String(eTechnology.TECH_COMBINED_ARMS),
    era: eEra.ERA_ATOMIC,
    cost: 5100,
    preTechList: [eTechnology.TECH_BALLISTICS, eTechnology.TECH_COMBUSTION],
  },
  {
    id: eTechnology.TECH_ECOLOGY,
    name: techEnum2String(eTechnology.TECH_ECOLOGY),
    era: eEra.ERA_ATOMIC,
    cost: 6400,
    preTechList: [eTechnology.TECH_PENICILIN, eTechnology.TECH_ATOMIC_THEORY],
  },
  {
    id: eTechnology.TECH_NUCLEAR_FISSION,
    name: techEnum2String(eTechnology.TECH_NUCLEAR_FISSION),
    era: eEra.ERA_ATOMIC,
    cost: 6400,
    preTechList: [eTechnology.TECH_RADAR, eTechnology.TECH_ATOMIC_THEORY],
  },
  {
    id: eTechnology.TECH_ROCKETRY,
    name: techEnum2String(eTechnology.TECH_ROCKETRY),
    era: eEra.ERA_ATOMIC,
    cost: 6400,
    preTechList: [eTechnology.TECH_RADAR, eTechnology.TECH_ATOMIC_THEORY],
  },
  {
    id: eTechnology.TECH_COMPUTERS,
    name: techEnum2String(eTechnology.TECH_COMPUTERS),
    era: eEra.ERA_ATOMIC,
    cost: 6400,
    preTechList: [eTechnology.TECH_RADAR, eTechnology.TECH_COMBINED_ARMS],
  },

  /*infomation*/
  {
    id: eTechnology.TECH_TELECOM,
    name: techEnum2String(eTechnology.TECH_TELECOM),
    era: eEra.ERA_INFOMATION,
    cost: 7700,
    preTechList: [eTechnology.TECH_ECOLOGY],
  },
  {
    id: eTechnology.TECH_MOBILE_TACTICS,
    name: techEnum2String(eTechnology.TECH_MOBILE_TACTICS),
    era: eEra.ERA_INFOMATION,
    cost: 7700,
    preTechList: [eTechnology.TECH_ECOLOGY, eTechnology.TECH_NUCLEAR_FISSION],
  },
  {
    id: eTechnology.TECH_ADVANCED_BALLISTICS,
    name: techEnum2String(eTechnology.TECH_ADVANCED_BALLISTICS),
    era: eEra.ERA_INFOMATION,
    cost: 7700,
    preTechList: [eTechnology.TECH_ROCKETRY, eTechnology.TECH_NUCLEAR_FISSION],
  },
  {
    id: eTechnology.TECH_SATELLITES,
    name: techEnum2String(eTechnology.TECH_SATELLITES),
    era: eEra.ERA_INFOMATION,
    cost: 7700,
    preTechList: [eTechnology.TECH_ROCKETRY],
  },
  {
    id: eTechnology.TECH_ROBOTICS,
    name: techEnum2String(eTechnology.TECH_ROBOTICS),
    era: eEra.ERA_INFOMATION,
    cost: 7700,
    preTechList: [eTechnology.TECH_ROCKETRY, eTechnology.TECH_COMPUTERS],
  },
  {
    id: eTechnology.TECH_LASERS,
    name: techEnum2String(eTechnology.TECH_LASERS),
    era: eEra.ERA_INFOMATION,
    cost: 7700,
    preTechList: [eTechnology.TECH_COMPUTERS],
  },
  {
    id: eTechnology.TECH_INTERNET,
    name: techEnum2String(eTechnology.TECH_INTERNET),
    era: eEra.ERA_INFOMATION,
    cost: 8800,
    preTechList: [eTechnology.TECH_TELECOM],
  },
  {
    id: eTechnology.TECH_GLOBALIZATION,
    name: techEnum2String(eTechnology.TECH_GLOBALIZATION),
    era: eEra.ERA_INFOMATION,
    cost: 8800,
    preTechList: [eTechnology.TECH_TELECOM],
  },
  {
    id: eTechnology.TECH_PARTICLE_PHYSICS,
    name: techEnum2String(eTechnology.TECH_PARTICLE_PHYSICS),
    era: eEra.ERA_INFOMATION,
    cost: 8800,
    preTechList: [
      eTechnology.TECH_TELECOM,
      eTechnology.TECH_MOBILE_TACTICS,
      eTechnology.TECH_ADVANCED_BALLISTICS,
    ],
  },
  {
    id: eTechnology.TECH_NUCLEAR_FUSION,
    name: techEnum2String(eTechnology.TECH_NUCLEAR_FUSION),
    era: eEra.ERA_INFOMATION,
    cost: 8800,
    preTechList: [
      eTechnology.TECH_ROBOTICS,
      eTechnology.TECH_SATELLITES,
      eTechnology.TECH_ADVANCED_BALLISTICS,
    ],
  },
  {
    id: eTechnology.TECH_NANOTECHNOLOGY,
    name: techEnum2String(eTechnology.TECH_NANOTECHNOLOGY),
    era: eEra.ERA_INFOMATION,
    cost: 8800,
    preTechList: [eTechnology.TECH_ROBOTICS],
  },
  {
    id: eTechnology.TECH_STEALTH,
    name: techEnum2String(eTechnology.TECH_STEALTH),
    era: eEra.ERA_INFOMATION,
    cost: 8800,
    preTechList: [eTechnology.TECH_ROBOTICS, eTechnology.TECH_LASERS],
  },

  /*future*/
  {
    id: eTechnology.TECH_FUTURE_TECH,
    name: techEnum2String(eTechnology.TECH_FUTURE_TECH),
    era: eEra.ERA_FUTURE,
    cost: 9500,
    preTechList: [
      eTechnology.TECH_INTERNET,
      eTechnology.TECH_GLOBALIZATION,
      eTechnology.TECH_PARTICLE_PHYSICS,
      eTechnology.TECH_NUCLEAR_FUSION,
      eTechnology.TECH_NANOTECHNOLOGY,
      eTechnology.TECH_STEALTH,
    ],
  },
];
