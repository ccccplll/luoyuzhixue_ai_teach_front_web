export type WorkCategory = '全部' | '守护型' | '探索型' | '创造型' | '温暖型' | '自然型' | '故事型';

export interface StudentWork {
  id: string;
  title: string;
  grade: string;
  studentName: string;
  type: string;
  category: Exclude<WorkCategory, '全部'>;
  tags: string[];
  summary: string;
  themeColor: string;
  accentColor: string;
  heroText: string;
  identity: string;
  abilities: string[];
  futureDay: string[];
  seedPlan: string[];
  letter: string;
  teacherComment: string;
  honorTitle: string;
  isFeatured: boolean;
  icon: string;
}

export const works: StudentWork[] = [
  {
    id: 'guardian',
    title: '光之守护者梦想馆',
    grade: '三年级作品',
    studentName: '陈X琴',
    type: '守护型梦想',
    category: '守护型',
    tags: ['勇敢', '善良', '责任感', '星光反馈'],
    summary: '把“想成为守护者”的想象，做成会回应孩子勇气的星光网页。',
    themeColor: '#f7c948',
    accentColor: '#38bdf8',
    heroText: '当我点亮心里的光，也能照亮身边的人。',
    identity: '光之守护者',
    abilities: ['勇敢表达', '善良帮助', '责任感', '坚持训练'],
    futureDay: ['清晨完成能量训练', '课间主动帮助同学', '遇到困难先想办法', '晚上记录今天守护的小事'],
    seedPlan: ['每天运动 15 分钟', '主动帮助一位同学', '勇敢说出自己的想法', '每周完成一次梦想复盘'],
    letter: '你每一次善良和勇敢，都是在发光。真正的守护者，是先照顾好自己，也温柔地帮助别人。',
    teacherComment: '这个作品把孩子“想成为守护者”的想象，转化成了勇敢、善良、责任感等成长关键词。孩子不仅完成了页面搭建，也学习了如何用 AI 组织内容、设计按钮交互，并将自己的想法清楚展示出来。',
    honorTitle: '本期优秀作品｜最佳梦想表达',
    isFeatured: true,
    icon: '✦',
  },
  {
    id: 'explorer',
    title: '星际探险家梦想馆',
    grade: '三年级作品',
    studentName: '周X然',
    type: '探索型梦想',
    category: '探索型',
    tags: ['宇宙', '好奇心', '探索', '任务卡'],
    summary: '用任务卡、星球档案和探索按钮，展示孩子对未知世界的好奇。',
    themeColor: '#60a5fa',
    accentColor: '#c084fc',
    heroText: '每一颗星球，都是一个值得提问的新世界。',
    identity: '星际探险家',
    abilities: ['提出问题', '观察记录', '团队协作', '路线规划'],
    futureDay: ['检查飞船能源', '记录陌生星球地貌', '向队友分享发现', '整理星际任务报告'],
    seedPlan: ['每天提出一个好问题', '阅读一本科学书', '画出自己的星球地图', '学会把发现讲给别人听'],
    letter: '好奇心是你的宇宙飞船。只要愿意提问、观察和记录，你就会抵达更远的地方。',
    teacherComment: '这个作品用“星际任务”包装孩子的探索欲，引导孩子把兴趣转化为问题、信息和页面模块。作品中的任务卡交互让家长能清楚看到孩子的信息组织与表达训练。',
    honorTitle: '本期优秀作品｜最佳探索设计',
    isFeatured: true,
    icon: '☄',
  },
  {
    id: 'inventor',
    title: '未来发明家梦想馆',
    grade: '四年级作品',
    studentName: '林X宇',
    type: '创造型梦想',
    category: '创造型',
    tags: ['发明', '实验室', '创造力', 'AI灵感'],
    summary: '用未来实验室界面，把灵感、草图和问题解决过程做成作品。',
    themeColor: '#22d3ee',
    accentColor: '#f59e0b',
    heroText: '好的发明，来自认真观察生活里的小麻烦。',
    identity: '未来发明家',
    abilities: ['发现问题', '创意联想', '原型设计', '迭代优化'],
    futureDay: ['收集生活中的小问题', '用 AI 生成灵感方案', '画出第一版草图', '请同学体验并提出建议'],
    seedPlan: ['每天记录一个问题', '每周画一张发明草图', '学习一个科学小知识', '把失败写进改进清单'],
    letter: '发明不是一下子变完美，而是一次次把想法变得更清楚。你的每张草图都很珍贵。',
    teacherComment: '这个作品强调“发现问题—提出方案—展示原型”的创造流程。孩子在作品中练习用 AI 扩展灵感，也学习把抽象想法变成有层次的网页内容。',
    honorTitle: '优秀项目作品｜最佳创意结构',
    isFeatured: true,
    icon: '⚙',
  },
  {
    id: 'doctor',
    title: '温柔医生梦想馆',
    grade: '三年级作品',
    studentName: '王X宁',
    type: '温暖型梦想',
    category: '温暖型',
    tags: ['帮助', '耐心', '关心', '成长计划'],
    summary: '用温暖的诊室卡片，表达孩子想帮助别人、照顾生命的愿望。',
    themeColor: '#fb7185',
    accentColor: '#93c5fd',
    heroText: '温柔不是很小的力量，它能让害怕的人安心。',
    identity: '温柔医生',
    abilities: ['耐心倾听', '细心观察', '安慰他人', '持续学习'],
    futureDay: ['微笑迎接小患者', '认真听别人描述感受', '用简单的话解释问题', '学习新的健康知识'],
    seedPlan: ['每天练习倾听', '学习一个身体小知识', '照顾好自己的作息', '用温柔的话鼓励别人'],
    letter: '你愿意关心别人，这是一份很珍贵的能力。温柔的表达，也能成为帮助他人的力量。',
    teacherComment: '这个作品把“想当医生”的职业梦想转化为倾听、耐心和关心等具体品质。孩子通过页面结构表达温暖主题，并学习如何让视觉风格服务于内容气质。',
    honorTitle: '温暖表达作品｜老师推荐',
    isFeatured: false,
    icon: '♡',
  },
  {
    id: 'animal',
    title: '两只猫的温暖小家',
    grade: '三年级作品',
    studentName: '赵X安',
    type: '自然型梦想',
    category: '自然型',
    tags: ['家里的两只猫', '猫咪档案', '温柔陪伴', '爱心小家'],
    summary: '赵X安把家里的两只猫做进网页里：一只是英短金渐层“栗子”，安静爱晒太阳；一只是狸花猫“闪闪”，调皮喜欢钻纸箱。网页记录了它们的小习惯，也藏着孩子对家人的温柔观察。',
    themeColor: '#34d399',
    accentColor: '#fde68a',
    heroText: '我家有两只猫：英短金渐层栗子和狸花猫闪闪。我想给它们做一个会发光的小网页。',
    identity: '两只猫的小小记录员',
    abilities: ['观察猫咪习惯', '温柔表达', '家庭记录', '整理小卡片'],
    futureDay: ['早上看看栗子有没有睡在窗边', '给英短金渐层栗子画一张名字卡', '给狸花猫闪闪设计纸箱秘密基地', '把今天的小猫表情记录进网页里'],
    seedPlan: ['给栗子和闪闪各做一张猫咪档案卡', '记录栗子喜欢晒太阳、闪闪喜欢钻纸箱', '拍下一个有趣瞬间再画成网页卡片', '做一个“今天猫咪心情”小按钮'],
    letter: '赵X安，你把家里的两只猫观察得很认真。原来网页不只可以放文字和按钮，也可以保存你和家人、猫咪在一起的小小幸福。',
    teacherComment: '这个作品来自孩子真实的生活经验：家里有两只猫，所以赵X安很自然地想为它们做一个网页。作品没有复杂的大主题，而是从猫咪名字、性格、小习惯和陪伴瞬间出发，训练孩子观察生活、整理信息和温柔表达。这样的项目更像孩子自己的作品，也更容易让家长看到孩子细腻的表达能力。',
    honorTitle: '优秀生活观察作品｜最温柔的两只猫小家',
    isFeatured: true,
    icon: '♧',
  },
  {
    id: 'storyteller',
    title: '魔法故事设计师梦想馆',
    grade: '三年级作品',
    studentName: '许X萌',
    type: '故事型梦想',
    category: '故事型',
    tags: ['想象力', '故事', '角色', '互动剧情'],
    summary: '用角色卡、剧情选择和魔法按钮，做出一段可互动的故事网页。',
    themeColor: '#a78bfa',
    accentColor: '#facc15',
    heroText: '故事是一扇门，打开它的人也在认识自己。',
    identity: '魔法故事设计师',
    abilities: ['角色塑造', '情节设计', '想象表达', '互动选择'],
    futureDay: ['设计一个新角色', '写下故事冲突', '制作剧情选择按钮', '邀请朋友体验故事结局'],
    seedPlan: ['每天写三句话故事', '收集有趣角色设定', '学习一个叙事技巧', '把故事改成互动网页'],
    letter: '你的想象力不是乱想，而是在创造一个有规则、有情感的世界。请继续写下去。',
    teacherComment: '这个作品来自喜欢故事与角色的孩子。孩子借助 AI 梳理剧情，再用网页模块呈现角色、冲突和互动选择，训练表达力与逻辑结构。',
    honorTitle: '优秀故事作品｜互动剧情亮点',
    isFeatured: true,
    icon: '✧',
  },
];

export const categories: WorkCategory[] = ['全部', '守护型', '探索型', '创造型', '温暖型', '自然型', '故事型'];

export const getWorkById = (id: string | undefined) => works.find((work) => work.id === id);













export const featuredFirstWorks = [...works].sort((a, b) => {
  if (a.id === 'animal') return -1;
  if (b.id === 'animal') return 1;
  return Number(b.isFeatured) - Number(a.isFeatured);
});

