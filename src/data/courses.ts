export interface VibeCourse {
  level: string;
  title: string;
  shortTitle: string;
  positioning: string;
  cycle: string;
  offlinePrice: string;
  onlinePrice: string;
  hourlyPriceOffline: string;
  hourlyPriceOnline: string;
  goal: string;
  keywords: string[];
  lessons: string[];
  deliverables: string[];
  projects: string[];
  suitableStudents: string[];
  coreOutput: string;
}

export const courses: VibeCourse[] = [
  {
    level: 'VC-L0',
    title: 'AI 编程逻辑启蒙课',
    shortTitle: '逻辑启蒙',
    positioning: 'VibeCoding 前置课，不直接让孩子写复杂代码，而是先建立顺序、条件、循环、事件和变量的基础理解。',
    cycle: '5 次课，每次 1.5 小时',
    offlinePrice: '1699 元',
    onlinePrice: '1299 元',
    hourlyPriceOffline: '约 226 元/小时',
    hourlyPriceOnline: '约 173 元/小时',
    goal: '理解顺序、条件、循环、事件、变量，能把一个想法拆成清楚的规则和流程。',
    keywords: ['逻辑感知', '规则表达', '流程图', '互动启蒙'],
    lessons: ['顺序：先做什么再做什么', '条件：如果发生 A 就执行 B', '循环：重复任务与规律观察', '事件：点击、触发与反馈', '变量：分数、次数和状态变化'],
    deliverables: ['一个小游戏规则图', '一个流程图', '一个简单互动作品', '一份孩子逻辑能力反馈'],
    projects: ['流程图', '小游戏规则图', '简单互动作品'],
    suitableStudents: ['第一次接触 AI 编程的孩子', '喜欢游戏但表达规则不够清楚的孩子', '需要先建立逻辑感和任务拆解能力的孩子'],
    coreOutput: '逻辑规则图、流程图、互动作品',
  },
  {
    level: 'VC-L1',
    title: 'VibeCoding 网页启蒙课',
    shortTitle: '网页启蒙',
    positioning: '孩子用 AI 完成第一个网页，从自然语言想法进入页面结构、内容组织和视觉表达。',
    cycle: '5 次课，每次 2 小时',
    offlinePrice: '2999 元',
    onlinePrice: '1999 元',
    hourlyPriceOffline: '约 300 元/小时',
    hourlyPriceOnline: '约 200 元/小时',
    goal: '理解网页结构、页面内容、按钮、图片、样式，并完成一个可打开、可讲述的主题网页。',
    keywords: ['网页表达', 'AI 生成', '页面结构', '作品展示'],
    lessons: ['网页由哪些区域组成', '如何用自然语言描述页面', '标题、卡片、按钮和图片组织', '颜色、字体与页面审美', '作品发布与展示讲述'],
    deliverables: ['一个可打开的主题网页', '一份网页说明', '一份项目展示卡'],
    projects: ['我的第一个 AI 个人网站', 'AI 梦想星光馆', 'AI 兴趣主题展馆', 'AI 活动邀请网站', 'AI 个人作品集网站'],
    suitableStudents: ['有明确兴趣主题或梦想表达的孩子', '希望做出第一个网页作品的孩子', '可以从 AI 梦想体验馆进入网页创作的孩子'],
    coreOutput: '主题网页',
  },
  {
    level: 'VC-L2',
    title: 'VibeCoding 小游戏课',
    shortTitle: '小游戏',
    positioning: '从网页进入互动游戏，让孩子理解规则、事件、变量、计分和胜负条件。',
    cycle: '6 次课，每次 2 小时',
    offlinePrice: '3999 元',
    onlinePrice: '2699 元',
    hourlyPriceOffline: '约 333 元/小时',
    hourlyPriceOnline: '约 225 元/小时',
    goal: '能设计并完成一个可玩的小游戏，清楚表达游戏规则、反馈方式和升级方向。',
    keywords: ['交互游戏', '事件触发', '变量计分', '胜负条件'],
    lessons: ['游戏规则拆解', '点击事件与即时反馈', '变量、分数和生命值', '随机、计时和关卡', '胜负条件与体验优化', '游戏升级与作品发布'],
    deliverables: ['一个可玩的小游戏', '一份游戏规则说明', '一次作品展示'],
    projects: ['AI 猜数字密码挑战', 'AI 打地鼠反应挑战', 'AI 记忆翻牌挑战', 'AI 迷宫寻宝大冒险', 'AI 口算 / 单词飞船挑战', '游戏升级与作品发布'],
    suitableStudents: ['喜欢游戏并愿意设计规则的孩子', '已经完成网页启蒙作品的孩子', '希望把互动逻辑做得更完整的孩子'],
    coreOutput: '小游戏',
  },
  {
    level: 'VC-L3',
    title: 'VibeCoding 产品小工具课',
    shortTitle: '产品小工具',
    positioning: '从好玩的游戏进入有用的小工具，让孩子开始理解产品、场景和用户需求。',
    cycle: '8 次课，每次 2 小时',
    offlinePrice: '5699 元',
    onlinePrice: '3999 元',
    hourlyPriceOffline: '约 356 元/小时',
    hourlyPriceOnline: '约 250 元/小时',
    goal: '让孩子做出一个能解决小问题的工具，并能说明用户是谁、问题是什么、如何使用。',
    keywords: ['产品思维', '工具设计', '用户场景', '作品原型展示'],
    lessons: ['发现一个真实小问题', '用户场景与功能清单', '表单、列表与状态管理', '数据展示与结果反馈', '界面优化与使用说明', '产品说明文档', '展示 PPT 设计', '作品原型汇报与迭代'],
    deliverables: ['一个小工具作品原型', '一份产品说明文档', '一份展示 PPT'],
    projects: ['每日学习打卡工具', '今日任务安排器', '校园活动报名工具', '班级随机点名 / 分组工具', '零花钱预算助手', '个人知识卡片库'],
    suitableStudents: ['开始关注效率和学习管理的学生', '希望做出“有用作品”的孩子', '可以从游戏创作升级到产品思维的孩子'],
    coreOutput: '产品小工具作品原型',
  },
  {
    level: 'VC-L4',
    title: 'AI 小应用开发课',
    shortTitle: 'AI 小应用',
    positioning: '正式进入 AI 应用开发，理解 AI 能力如何接入一个产品，而不是只会和 AI 聊天。',
    cycle: '10 次课，每次 2 小时',
    offlinePrice: '7999 元',
    onlinePrice: '4999 元',
    hourlyPriceOffline: '约 400 元/小时',
    hourlyPriceOnline: '约 250 元/小时',
    goal: '完成一个 AI 小应用作品原型，理解需求、Prompt、交互流程和产品展示之间的关系。',
    keywords: ['AI 应用', 'Prompt 设计', '产品需求', '项目展示'],
    lessons: ['AI 能力边界与应用场景', '产品需求文档 PRD', 'Prompt 结构与测试', 'AI 交互流程设计', '知识库与问答体验', '结果展示与用户反馈', '应用界面优化', '项目文档整理', '展示 PPT 设计', '作品原型路演与复盘'],
    deliverables: ['一个 AI 小应用作品原型', '一份产品需求文档', '一份 Prompt 设计文档', '一份项目展示 PPT'],
    projects: ['AI 学习计划助手', 'AI 作文素材采访官', 'AI 知识库问答助手', 'AI 活动策划器', 'AI 作品点评官', 'AI 小客服机器人'],
    suitableStudents: ['有一定项目基础的学生', '希望理解 AI 产品如何产生的孩子', '准备科创项目或作品集表达的学生'],
    coreOutput: 'AI 小应用作品原型',
  },
];

export const progression = ['逻辑感知', '网页表达', '交互游戏', '产品小工具', 'AI 小应用', '科创项目'];

export const vibeKeywords = ['自然语言表达', 'AI 辅助生成', '基础技术理解', '项目作品产出'];




