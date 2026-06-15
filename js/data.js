/* ===== TonTen AI - 工具数据（按实际用途分类） ===== */

const siteName = "TonTen AI · 工具聚合导航";
const siteDesc = "按用途分类的AI工具导航，每个工具都说清楚能帮你干什么";

const tools = [
  /* ==================== 日常对话与写作 ==================== */
  {
    id: 1,
    name: "ChatGPT",
    category: "chat",
    useCase: "通用对话、写作辅助、头脑风暴、翻译润色",
    desc: "最适合日常使用的全能AI助手。写文章、改简历、翻译、解释概念、头脑风暴，几乎所有文字相关的活都能干。支持上传图片和文件让它分析。",
    url: "https://chat.openai.com",
    pricing: "免费 / Plus $20/月 / Pro $200/月",
    tags: ["写作", "翻译", "头脑风暴", "多模态"],
    rating: 4.9,
    country: "美国"
  },
  {
    id: 2,
    name: "Claude",
    category: "chat",
    useCase: "长文写作、代码生成、文档分析、深度对话",
    desc: "适合处理长文本和复杂任务。200K上下文能一次吞下整本书，写作质量高、代码能力强。Artifacts功能能实时预览生成结果（网页/图表/代码）。",
    url: "https://claude.ai",
    pricing: "免费 / Pro $20/月 / Team $25/人/月",
    tags: ["长文写作", "代码", "Artifacts", "长上下文"],
    rating: 4.8,
    country: "美国"
  },
  {
    id: 3,
    name: "DeepSeek",
    category: "chat",
    useCase: "中文对话、深度推理、编程辅助、学习答疑",
    desc: "国产最强，推理能力极为出色，中文理解自然流畅。适合用来学新知识、分析复杂问题、写代码。免费且API价格极低，个人使用零成本。",
    url: "https://chat.deepseek.com",
    pricing: "免费 / API按量付费（极低）",
    tags: ["推理", "中文", "编程", "免费"],
    rating: 4.7,
    country: "中国"
  },
  {
    id: 4,
    name: "Kimi",
    category: "chat",
    useCase: "长文档阅读、论文总结、合同分析、报告撰写",
    desc: "专攻长文本处理，200万字上下文能帮你读完几百页的PDF。适合学生读论文、律师看合同、分析师读研报，上传文件直接对话提问。",
    url: "https://kimi.moonshot.cn",
    pricing: "免费 / 会员制",
    tags: ["长文档", "论文", "合同", "总结"],
    rating: 4.5,
    country: "中国"
  },
  {
    id: 5,
    name: "豆包",
    category: "chat",
    useCase: "日常聊天、语音对话、生活助手、创意灵感",
    desc: "字节出品，集成在抖音/头条生态中。语音对话体验好，适合开车或做家务时用语音互动。日常闲聊、提创意、查资料都很顺手。",
    url: "https://www.doubao.com",
    pricing: "免费",
    tags: ["语音", "日常", "生活助手"],
    rating: 4.3,
    country: "中国"
  },
  {
    id: 6,
    name: "通义千问",
    category: "chat",
    useCase: "企业办公、开发辅助、数据分析、阿里生态集成",
    desc: "阿里云出品，和钉钉/阿里云深度打通。适合已经在用阿里系产品的企业和开发者，能直接分析表格数据、写工作汇报、生成代码。",
    url: "https://tongyi.aliyun.com",
    pricing: "免费 / API按量付费",
    tags: ["企业", "数据分析", "阿里生态"],
    rating: 4.2,
    country: "中国"
  },
  {
    id: 7,
    name: "文心一言",
    category: "chat",
    useCase: "中文内容创作、知识问答、文案策划、百度生态",
    desc: "百度出品，中文知识面广，适合查资料、写文案。和百度搜索/文库打通，适合需要大量中文素材的内容创作者。",
    url: "https://yiyan.baidu.com",
    pricing: "免费 / 专业版会员",
    tags: ["中文", "知识", "文案", "搜索"],
    rating: 4.0,
    country: "中国"
  },
  {
    id: 8,
    name: "Gemini",
    category: "chat",
    useCase: "多模态问答、Google生态整合、实时信息查询",
    desc: "Google出品，和Gmail/Docs/YouTube/Maps全家桶深度打通。适合重度Google用户——让它帮你总结邮件、分析表格、搜YouTube内容。",
    url: "https://gemini.google.com",
    pricing: "免费 / Advanced $19.99/月",
    tags: ["Google", "多模态", "邮件", "实时信息"],
    rating: 4.4,
    country: "美国"
  },
  {
    id: 9,
    name: "Poe",
    category: "chat",
    useCase: "多模型对比、快速切换、按需选择最优模型",
    desc: "Quora出品，一个平台订阅就能用ChatGPT/Claude/Gemini/DeepSeek等几十个模型。适合想对比不同模型效果、或者按任务选最合适模型的人。",
    url: "https://poe.com",
    pricing: "免费 / 订阅 $19.99/月",
    tags: ["多模型", "对比", "切换"],
    rating: 4.3,
    country: "美国"
  },

  /* ==================== 深度搜索与研究 ==================== */
  {
    id: 10,
    name: "Perplexity",
    category: "search",
    useCase: "联网搜索、事实核查、学术调研、市场研究",
    desc: "AI搜索引擎，每次回答都附引用来源链接。适合查最新信息、写论文调研、做市场分析，每个结论都能追溯到源头，不像其他AI会胡编。",
    url: "https://www.perplexity.ai",
    pricing: "免费 / Pro $20/月",
    tags: ["引用来源", "实时搜索", "调研"],
    rating: 4.6,
    country: "美国"
  },
  {
    id: 11,
    name: "秘塔AI搜索",
    category: "search",
    useCase: "中文搜索、学术检索、深度研究、无广告搜索",
    desc: "国产最好用的AI搜索引擎，输入问题直接给答案而非一堆链接。支持学术搜索模式，找论文和研究资料特别方便，而且完全免费。",
    url: "https://metaso.cn",
    pricing: "免费",
    tags: ["中文搜索", "学术", "免费", "无广告"],
    rating: 4.5,
    country: "中国"
  },
  {
    id: 12,
    name: "天工AI搜索",
    category: "search",
    useCase: "深度追问、多轮研究、信息整合",
    desc: "昆仑万维出品，支持深度研究模式，能对一个话题持续追问挖掘。适合需要全面了解一个话题、做竞品分析、写深度报告的人。",
    url: "https://www.tiangong.cn",
    pricing: "免费",
    tags: ["深度研究", "追问", "信息整合"],
    rating: 4.2,
    country: "中国"
  },
  {
    id: 13,
    name: "Consensus",
    category: "search",
    useCase: "学术论文检索、证据查找、科研辅助、文献综述",
    desc: "专门搜索学术论文的AI，从2亿+篇论文中提取结论。适合科研人员、医学生、需要查证据的人——输入问题直接看到哪些论文支持或反对某个观点。",
    url: "https://consensus.app",
    pricing: "免费 / Premium $8.99/月",
    tags: ["学术论文", "科研", "证据", "文献"],
    rating: 4.4,
    country: "美国"
  },

  /* ==================== 图像创作与设计 ==================== */
  {
    id: 20,
    name: "Midjourney",
    category: "image",
    useCase: "艺术创作、概念设计、海报/插画、风格化图像",
    desc: "AI绘画的王者，艺术感和画质业界天花板。适合设计师找灵感、画概念图、做海报和插画。需要用Discord操作，有一定学习门槛但效果惊艳。",
    url: "https://www.midjourney.com",
    pricing: "Basic $10/月 / Standard $30/月",
    tags: ["艺术", "海报", "概念图", "高画质"],
    rating: 4.9,
    country: "美国"
  },
  {
    id: 21,
    name: "Stable Diffusion",
    category: "image",
    useCase: "本地生图、模型训练、风格定制、二次元/游戏美术",
    desc: "开源生图模型，能装在自己电脑上无限免费生成。社区模型库Civitai有海量风格模型。适合技术党、游戏美术、二次元创作，自由度远超其他工具。",
    url: "https://stability.ai",
    pricing: "开源免费 / 云服务收费",
    tags: ["开源", "本地", "二次元", "模型训练"],
    rating: 4.7,
    country: "英国"
  },
  {
    id: 22,
    name: "DALL·E 3",
    category: "image",
    useCase: "自然语言生图、产品图、带文字的设计图",
    desc: "OpenAI出品，听懂人话的AI画家。不需要复杂的提示词，用自然语言描述就能生成符合预期的图片。特别擅长在图中准确渲染文字和logo。",
    url: "https://openai.com/dall-e-3",
    pricing: "含在ChatGPT Plus中",
    tags: ["自然语言", "文字渲染", "产品图"],
    rating: 4.5,
    country: "美国"
  },
  {
    id: 23,
    name: "即梦",
    category: "image",
    useCase: "短视频素材、电商图、社交媒体配图、中文风格",
    desc: "字节出品，中文提示词友好，模板丰富。适合做短视频封面、小红书配图、电商主图，自带视频生成功能，一个工具覆盖图文+视频。",
    url: "https://jimeng.jianying.com",
    pricing: "免费额度 / 会员制",
    tags: ["短视频", "电商", "中文", "模板"],
    rating: 4.2,
    country: "中国"
  },
  {
    id: 24,
    name: "通义万相",
    category: "image",
    useCase: "电商设计、风格转换、产品展示、中文场景",
    desc: "阿里出品，中文语义理解准，支持文生图/图生图/风格迁移。适合电商运营做产品图、活动海报，和阿里生态打通。",
    url: "https://tongyi.aliyun.com/wanxiang",
    pricing: "免费额度 / 按量付费",
    tags: ["电商", "风格迁移", "产品图"],
    rating: 4.1,
    country: "中国"
  },
  {
    id: 25,
    name: "Leonardo.ai",
    category: "image",
    useCase: "游戏角色、概念艺术、材质贴图、影视概念",
    desc: "游戏和影视行业热门，擅长角色设计和场景概念图。能用自己的图片训练模型，生成风格统一的系列作品，专业用户的首选。",
    url: "https://leonardo.ai",
    pricing: "免费额度 / 付费$12起/月",
    tags: ["游戏", "角色", "概念艺术", "训练"],
    rating: 4.4,
    country: "澳大利亚"
  },
  {
    id: 26,
    name: "Canva AI",
    category: "image",
    useCase: "快速设计、社交媒体图、PPT、小白友好",
    desc: "Canva内置AI，不用学设计也能出好看的图。文生图、智能抠图、魔法橡皮擦一键搞定。适合做社媒图、PPT、简单海报的非设计师。",
    url: "https://www.canva.com",
    pricing: "免费 / Pro $12.99/月",
    tags: ["设计", "易用", "社媒", "PPT"],
    rating: 4.3,
    country: "澳大利亚"
  },

  /* ==================== 视频创作 ==================== */
  {
    id: 30,
    name: "可灵 (Kling)",
    category: "video",
    useCase: "短视频创作、广告素材、创意视频、影视预演",
    desc: "快手出品，国产文生视频的标杆。生成的视频运动自然、物理效果真实，在国产工具中画质最好。适合做短视频素材、广告创意。",
    url: "https://kling.kuaishou.com",
    pricing: "免费额度 / 会员制",
    tags: ["短视频", "广告", "文生视频", "高画质"],
    rating: 4.7,
    country: "中国"
  },
  {
    id: 31,
    name: "Sora",
    category: "video",
    useCase: "高质量视频生成、影视级画面、创意短片",
    desc: "OpenAI出品，目前视频生成画质和一致性的天花板。适合需要电影级画面的创作者，画面细节和光影表现远超同类。",
    url: "https://sora.com",
    pricing: "含在ChatGPT Plus/Pro中",
    tags: ["电影级", "高画质", "创意"],
    rating: 4.8,
    country: "美国"
  },
  {
    id: 32,
    name: "Runway",
    category: "video",
    useCase: "专业视频编辑、特效制作、视频风格化、后期处理",
    desc: "专业级AI视频工具，不只是生成视频，还能做视频风格转换、动态笔刷、绿幕抠像等后期特效。适合视频创作者和专业剪辑师。",
    url: "https://runwayml.com",
    pricing: "免费额度 / Standard $15/月",
    tags: ["专业", "特效", "风格化", "后期"],
    rating: 4.5,
    country: "美国"
  },
  {
    id: 33,
    name: "Pika",
    category: "video",
    useCase: "趣味短视频、GIF动图、社交媒体内容",
    desc: "轻量级AI视频工具，操作简单上手快。适合做微信/微博上的趣味短视频和GIF表情包，不需要专业知识也能用。",
    url: "https://pika.art",
    pricing: "免费 / 付费$8起/月",
    tags: ["轻量", "GIF", "趣味", "社媒"],
    rating: 4.3,
    country: "美国"
  },
  {
    id: 34,
    name: "HeyGen",
    category: "video",
    useCase: "数字人播报、多语种视频、口播内容、培训视频",
    desc: "上传一张照片就能生成逼真的说话视频。支持多语种口型同步，适合做企业培训视频、产品介绍、跨境营销，省去真人拍摄成本。",
    url: "https://www.heygen.com",
    pricing: "免费额度 / Creator $29/月",
    tags: ["数字人", "多语种", "口播", "培训"],
    rating: 4.6,
    country: "美国"
  },
  {
    id: 35,
    name: "即创",
    category: "video",
    useCase: "电商短视频、直播切片、带货文案、营销素材",
    desc: "字节出品，专为电商和营销打造的AI视频工具。能自动生成带货脚本+视频素材，适合抖音/快手电商卖家批量产出内容。",
    url: "https://www.jianying.com",
    pricing: "免费额度 / 会员制",
    tags: ["电商", "营销", "带货", "批量"],
    rating: 4.2,
    country: "中国"
  },

  /* ==================== 编程与开发 ==================== */
  {
    id: 40,
    name: "GitHub Copilot",
    category: "code",
    useCase: "代码自动补全、Bug修复、代码重构、写注释",
    desc: "微软出品，编程助手的行业标杆。在VS Code/JetBrains里写代码时实时补全，能猜到你下一步要写什么。适合所有程序员日常coding提效。",
    url: "https://github.com/features/copilot",
    pricing: "个人 $10/月 / 企业 $19/月",
    tags: ["代码补全", "IDE", "微软"],
    rating: 4.8,
    country: "美国"
  },
  {
    id: 41,
    name: "Cursor",
    category: "code",
    useCase: "AI辅助编程、代码对话、项目重构、新手友好",
    desc: "目前最受开发者喜爱的AI编辑器。能理解整个项目上下文，用自然语言让它改代码、修Bug、加功能。编程新手也能用它从零搭建项目。",
    url: "https://cursor.sh",
    pricing: "免费 / Pro $20/月",
    tags: ["编辑器", "对话编程", "项目理解"],
    rating: 4.9,
    country: "美国"
  },
  {
    id: 42,
    name: "Windsurf",
    category: "code",
    useCase: "大型项目开发、代码库分析、智能重构",
    desc: "Codeium出品，Cascade智能体能自动分析整个代码库，理解项目结构后再帮你写代码。适合维护大型项目的开发者。",
    url: "https://codeium.com/windsurf",
    pricing: "免费 / Pro $15/月",
    tags: ["大型项目", "代码分析", "智能体"],
    rating: 4.6,
    country: "美国"
  },
  {
    id: 43,
    name: "通义灵码",
    category: "code",
    useCase: "免费编程助手、中文注释、代码解释、快速上手",
    desc: "阿里出品，完全免费的AI编程助手。中文理解好，能看懂中文注释生成对应代码。适合学生和不想付费的开发者。",
    url: "https://tongyi.aliyun.com/lingma",
    pricing: "免费",
    tags: ["免费", "中文", "代码解释"],
    rating: 4.3,
    country: "中国"
  },
  {
    id: 44,
    name: "v0 (Vercel)",
    category: "code",
    useCase: "前端页面生成、UI原型、React组件、快速预览",
    desc: "Vercel出品，用自然语言描述页面长什么样，自动生成React代码和预览。适合产品经理出原型、前端开发快速搭页面、设计师验证想法。",
    url: "https://v0.dev",
    pricing: "免费 / 付费套餐",
    tags: ["前端", "React", "原型", "UI"],
    rating: 4.5,
    country: "美国"
  },
  {
    id: 45,
    name: "Bolt.new",
    category: "code",
    useCase: "全栈Web应用、MVP快速搭建、零代码开发",
    desc: "StackBlitz出品，在浏览器里描述需求就能生成完整Web应用。适合创业者快速做MVP、产品经理做demo、不会写代码但有想法的人。",
    url: "https://bolt.new",
    pricing: "免费额度 / Pro $20/月",
    tags: ["全栈", "MVP", "浏览器", "零代码"],
    rating: 4.6,
    country: "美国"
  },
  {
    id: 46,
    name: "Replit Agent",
    category: "code",
    useCase: "全栈开发、一键部署、学习编程、项目原型",
    desc: "Replit的AI智能体，说人话就能让它搭网站、做应用、写爬虫，自动部署上线。适合编程新手和想快速验证想法的人。",
    url: "https://replit.com",
    pricing: "免费 / Core $20/月",
    tags: ["全栈", "部署", "新手", "在线IDE"],
    rating: 4.4,
    country: "美国"
  },

  /* ==================== 办公与效率 ==================== */
  {
    id: 50,
    name: "Notion AI",
    category: "office",
    useCase: "智能笔记、文档写作、知识管理、项目协作",
    desc: "Notion内置AI，在写笔记/文档时按空格就能让AI帮你续写、总结、翻译、头脑风暴。适合用Notion管理知识和项目的人。",
    url: "https://www.notion.so/product/ai",
    pricing: "$10/人/月（附加）",
    tags: ["笔记", "写作", "知识管理"],
    rating: 4.5,
    country: "美国"
  },
  {
    id: 51,
    name: "Gamma",
    category: "office",
    useCase: "PPT制作、文档排版、演示汇报、快速出稿",
    desc: "输入一个主题，自动生成排版精美的PPT/文档/网页。不用在排版上花时间，专注内容就好。适合经常要做汇报和演示的职场人。",
    url: "https://gamma.app",
    pricing: "免费 / Plus $10/月",
    tags: ["PPT", "演示", "自动排版"],
    rating: 4.6,
    country: "美国"
  },
  {
    id: 52,
    name: "Microsoft Copilot",
    category: "office",
    useCase: "Office办公、Excel分析、Word写作、会议总结",
    desc: "微软Office全家桶的AI助手。在Word里帮你写文档、在Excel里分析数据、在Teams里总结会议。适合企业办公场景，和现有工作流无缝衔接。",
    url: "https://copilot.microsoft.com",
    pricing: "免费版 / 企业版 $30/人/月",
    tags: ["Office", "Excel", "会议", "企业"],
    rating: 4.4,
    country: "美国"
  },
  {
    id: 53,
    name: "钉钉AI",
    category: "office",
    useCase: "企业协同、会议纪要、审批流程、工作汇报",
    desc: "阿里钉钉内置AI，会议自动生成纪要、文档智能总结、审批智能建议。适合已经在用钉钉的企业团队，不用额外切换工具。",
    url: "https://www.dingtalk.com",
    pricing: "免费 / 企业版付费",
    tags: ["企业", "会议", "审批", "钉钉"],
    rating: 4.1,
    country: "中国"
  },
  {
    id: 54,
    name: "飞书智能伙伴",
    category: "office",
    useCase: "团队协作、文档处理、数据分析、会议管理",
    desc: "字节飞书内置AI，覆盖文档/表格/会议/消息全场景。适合用飞书的团队，一个平台实现AI+协作一体化。",
    url: "https://www.feishu.cn",
    pricing: "免费 / 企业版付费",
    tags: ["协作", "文档", "会议", "飞书"],
    rating: 4.3,
    country: "中国"
  },
  {
    id: 55,
    name: "PDF.ai",
    category: "office",
    useCase: "PDF问答、合同审查、论文精读、报告提取",
    desc: "上传PDF直接对话提问。适合律师快速审查合同条款、学生精读论文、分析师从财报里提取关键数据——不用逐页翻找。",
    url: "https://pdf.ai",
    pricing: "免费额度 / Pro $15/月",
    tags: ["PDF", "合同", "论文", "财报"],
    rating: 4.2,
    country: "美国"
  },

  /* ==================== 音频与音乐 ==================== */
  {
    id: 60,
    name: "Suno",
    category: "audio",
    useCase: "音乐创作、歌曲生成、背景音乐、灵感demo",
    desc: "输入歌词和风格描述就能生成一首完整的歌。适合音乐爱好者做demo、视频创作者做背景音乐、或者单纯想给自己写首歌的人。",
    url: "https://suno.com",
    pricing: "免费 / Pro $10/月",
    tags: ["音乐", "作曲", "背景音乐"],
    rating: 4.7,
    country: "美国"
  },
  {
    id: 61,
    name: "ElevenLabs",
    category: "audio",
    useCase: "语音合成、声音克隆、有声书、多语种配音",
    desc: "AI语音合成天花板，生成的语音自然到难辨真假。能克隆你自己的声音，支持29种语言。适合做有声书、播客、视频配音。",
    url: "https://elevenlabs.io",
    pricing: "免费额度 / Starter $5/月",
    tags: ["语音合成", "声音克隆", "有声书", "多语种"],
    rating: 4.8,
    country: "美国"
  },
  {
    id: 62,
    name: "剪映AI配音",
    category: "audio",
    useCase: "短视频配音、旁白解说、多音色切换",
    desc: "剪映内置AI配音，免费的多种音色可选，支持语速和情感调节。短视频创作者的标配，不需要额外付费。",
    url: "https://www.jianying.com",
    pricing: "免费",
    tags: ["配音", "短视频", "免费"],
    rating: 4.4,
    country: "中国"
  },
  {
    id: 63,
    name: "魔音工坊",
    category: "audio",
    useCase: "专业配音、多角色对话、广告配音、课程录音",
    desc: "出门问问出品的专业配音工具，音色库丰富。支持多角色对话式配音，适合做有声剧、广告配音、在线课程录音。",
    url: "https://www.moyin.com",
    pricing: "免费额度 / 会员制",
    tags: ["专业配音", "多角色", "广告"],
    rating: 4.3,
    country: "中国"
  }
];

/* 分类定义——按实际用途 */
const categories = [
  { id: "all",     name: "全部工具",   icon: "🔥", useDesc: "浏览所有收录的AI工具" },
  { id: "chat",    name: "对话写作",   icon: "💬", useDesc: "日常聊天、文案创作、翻译润色、学习答疑" },
  { id: "search",  name: "搜索研究",   icon: "🔍", useDesc: "联网搜索、事实核查、学术调研、深度研究" },
  { id: "image",   name: "图像创作",   icon: "🎨", useDesc: "AI绘画、设计素材、产品图、风格化图像" },
  { id: "video",   name: "视频创作",   icon: "🎬", useDesc: "视频生成、数字人播报、后期特效、营销素材" },
  { id: "code",    name: "编程开发",   icon: "💻", useDesc: "代码补全、全栈开发、项目搭建、Bug修复" },
  { id: "office",  name: "办公效率",   icon: "📊", useDesc: "PPT制作、文档处理、会议纪要、合同审查" },
  { id: "audio",   name: "音频音乐",   icon: "🎵", useDesc: "音乐创作、语音合成、配音克隆、有声内容" }
];
