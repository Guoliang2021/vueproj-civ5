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
