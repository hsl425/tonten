/* ===== TonTen AI - 工具数据 v2.0 ===== */

const siteName = "TonTen AI · 工具聚合导航";
const siteDesc = "收录80+主流AI工具，按实际用途分类，每个都说清楚能帮你干什么";

const tools = [
  /* ==================== 对话写作 ==================== */
  { id: 1, name: "ChatGPT", category: "chat", useCase: "通用对话、写作辅助、头脑风暴、翻译润色", desc: "全球用户量最大的AI助手。写文章、改简历、翻译、解释概念、头脑风暴，几乎所有文字相关的活都能干。支持上传图片和文件让它分析。", url: "https://chat.openai.com", pricing: "免费 / Plus $20/月 / Pro $200/月", tags: ["写作","翻译","多模态"], rating: 4.9, country: "美国" },
  { id: 2, name: "Claude", category: "chat", useCase: "长文写作、代码生成、文档分析、深度对话", desc: "200K上下文能一次吞下整本书，写作质量高、代码能力强。Artifacts功能实时预览生成结果（网页/图表/代码），适合处理复杂长文本。", url: "https://claude.ai", pricing: "免费 / Pro $20/月 / Team $25/人/月", tags: ["长文写作","代码","长上下文"], rating: 4.8, country: "美国" },
  { id: 3, name: "DeepSeek", category: "chat", useCase: "中文对话、深度推理、编程辅助、学习答疑", desc: "国产最强，推理能力极为出色，中文理解自然流畅。免费且API价格极低，适合学新知识、分析复杂问题、写代码，个人使用零成本。", url: "https://chat.deepseek.com", pricing: "免费 / API按量付费", tags: ["推理","中文","编程","免费"], rating: 4.7, country: "中国" },
  { id: 4, name: "Kimi", category: "chat", useCase: "长文档阅读、论文总结、合同分析、报告撰写", desc: "200万字上下文能帮你读完几百页PDF。适合学生读论文、律师看合同、分析师读研报，上传文件直接对话提问。", url: "https://kimi.moonshot.cn", pricing: "免费 / 会员制", tags: ["长文档","论文","合同","总结"], rating: 4.5, country: "中国" },
  { id: 5, name: "豆包", category: "chat", useCase: "日常聊天、语音对话、生活助手、创意灵感", desc: "字节出品，集成抖音/头条生态。语音对话体验好，日常闲聊、提创意、查资料都很顺手，适合开车或做家务时语音互动。", url: "https://www.doubao.com", pricing: "免费", tags: ["语音","日常","生活助手"], rating: 4.3, country: "中国" },
  { id: 6, name: "通义千问", category: "chat", useCase: "企业办公、开发辅助、数据分析、阿里生态", desc: "阿里云出品，和钉钉/阿里云深度打通。能直接分析表格数据、写工作汇报、生成代码，适合已在阿里系产品的企业和开发者。", url: "https://tongyi.aliyun.com", pricing: "免费 / API按量付费", tags: ["企业","数据分析","阿里生态"], rating: 4.2, country: "中国" },
  { id: 7, name: "文心一言", category: "chat", useCase: "中文内容创作、知识问答、文案策划、百度生态", desc: "百度出品，中文知识面广。和百度搜索/文库打通，适合需要大量中文素材的内容创作者，查资料写文案效率高。", url: "https://yiyan.baidu.com", pricing: "免费 / 专业版会员", tags: ["中文","知识","文案"], rating: 4.0, country: "中国" },
  { id: 8, name: "Gemini", category: "chat", useCase: "多模态问答、Google生态、实时信息查询", desc: "Google出品，和Gmail/Docs/YouTube/Maps深度打通。适合重度Google用户，让它帮你总结邮件、分析表格、搜YouTube内容。", url: "https://gemini.google.com", pricing: "免费 / Advanced $19.99/月", tags: ["Google","多模态","邮件"], rating: 4.4, country: "美国" },
  { id: 9, name: "混元", category: "chat", useCase: "微信生态、中文对话、腾讯产品集成", desc: "腾讯出品，和微信/QQ/腾讯文档打通。在微信搜一搜、小程序里就能直接用，适合日常聊天、公众号写作、腾讯生态内办公。", url: "https://hunyuan.tencent.com", pricing: "免费 / API按量付费", tags: ["腾讯","微信","小程序"], rating: 4.2, country: "中国" },
  { id: 10, name: "讯飞星火", category: "chat", useCase: "语音交互、办公写作、教育学习、讯飞生态", desc: "科大讯飞出品，语音交互是看家本领。支持方言识别、多语种翻译，和讯飞听见/输入法深度集成，适合语音为主的交互场景。", url: "https://xinghuo.xfyun.cn", pricing: "免费 / 会员制", tags: ["语音","方言","讯飞生态"], rating: 4.3, country: "中国" },
  { id: 11, name: "Grok", category: "chat", useCase: "实时信息、社交热点、幽默风格、X平台集成", desc: "xAI/马斯克出品，和X（推特）深度打通。回答风格幽默直白，能实时获取X平台上的最新资讯和热点讨论。", url: "https://grok.com", pricing: "免费 / SuperGrok $30/月", tags: ["X/推特","实时","幽默"], rating: 4.1, country: "美国" },
  { id: 12, name: "Mistral", category: "chat", useCase: "欧洲开源模型、企业部署、多语言、代码生成", desc: "法国AI公司出品，欧洲最受关注的通用大模型。开源友好，企业可私有化部署，多语言能力强，代码和逻辑推理表现出色。", url: "https://chat.mistral.ai", pricing: "免费 / 付费套餐", tags: ["欧洲","开源","企业部署"], rating: 4.3, country: "法国" },
  { id: 13, name: "Character.ai", category: "chat", useCase: "角色扮演、创意写作、虚拟人物对话", desc: "可以和各种AI角色对话——历史人物、虚拟角色或你自创的角色。适合创意写作、练习外语、或者单纯想和AI扮演的角色聊天。", url: "https://character.ai", pricing: "免费 / c.ai+ $9.99/月", tags: ["角色扮演","创意","社交"], rating: 4.0, country: "美国" },
  { id: 14, name: "跃问", category: "chat", useCase: "中文推理、深度思考、多模态理解", desc: "阶跃星辰出品，推理和多模态能力突出。擅长处理需要逐步分析的复杂问题，对图片和文档的理解精度高。", url: "https://yuewen.cn", pricing: "免费", tags: ["推理","多模态","深度思考"], rating: 4.1, country: "中国" },
  { id: 15, name: "Poe", category: "chat", useCase: "多模型对比、快速切换、按需选择最优模型", desc: "Quora出品，一个平台能访问ChatGPT/Claude/Gemini/DeepSeek等几十个模型。适合对比不同模型效果、按任务选最合适的。", url: "https://poe.com", pricing: "免费 / 订阅 $19.99/月", tags: ["多模型","对比","切换"], rating: 4.3, country: "美国" },

  /* ==================== 搜索研究 ==================== */
  { id: 20, name: "Perplexity", category: "search", useCase: "联网搜索、事实核查、学术调研、市场研究", desc: "AI搜索引擎，每次回答都附引用来源链接。适合查最新信息、写论文调研、市场分析，每个结论都能追溯到源头。", url: "https://www.perplexity.ai", pricing: "免费 / Pro $20/月", tags: ["引用来源","实时搜索","调研"], rating: 4.6, country: "美国" },
  { id: 21, name: "秘塔AI搜索", category: "search", useCase: "中文搜索、学术检索、深度研究、无广告", desc: "国产最好用的AI搜索引擎，输入问题直接给答案。支持学术搜索模式，找论文和研究资料特别方便，完全免费无广告。", url: "https://metaso.cn", pricing: "免费", tags: ["中文搜索","学术","免费"], rating: 4.5, country: "中国" },
  { id: 22, name: "天工AI搜索", category: "search", useCase: "深度追问、多轮研究、信息整合", desc: "昆仑万维出品，支持深度研究模式，能对一个话题持续追问挖掘。适合全面了解话题、做竞品分析、写深度报告。", url: "https://www.tiangong.cn", pricing: "免费", tags: ["深度研究","追问","信息整合"], rating: 4.2, country: "中国" },
  { id: 23, name: "Consensus", category: "search", useCase: "学术论文检索、证据查找、科研辅助", desc: "从2亿+篇学术论文中提取结论。适合科研人员、医学生，输入问题直接看到哪些论文支持或反对某个观点。", url: "https://consensus.app", pricing: "免费 / Premium $8.99/月", tags: ["学术论文","科研","证据"], rating: 4.4, country: "美国" },
  { id: 24, name: "Phind", category: "search", useCase: "编程搜索、技术问答、代码调试", desc: "专为开发者打造的AI搜索引擎，搜编程问题直接给出可运行的代码方案。比普通搜索引擎更适合技术调研和代码排错。", url: "https://www.phind.com", pricing: "免费 / Pro $20/月", tags: ["编程","技术","代码"], rating: 4.5, country: "美国" },
  { id: 25, name: "纳米搜索", category: "search", useCase: "中文实时搜索、新闻追踪、热点分析", desc: "原360智脑搜索，主打中文实时信息检索。适合追踪新闻热点、查找最新资讯，免费且搜索结果时效性强。", url: "https://www.n.cn", pricing: "免费", tags: ["实时","新闻","热点"], rating: 4.0, country: "中国" },
  { id: 26, name: "知乎直答", category: "search", useCase: "中文知识问答、知乎内容整合、专业观点", desc: "知乎出品的AI搜索，回答基于知乎海量高质量内容。适合找专业领域的深度解读、行业观点和经验分享。", url: "https://zhida.zhihu.com", pricing: "免费", tags: ["知乎","知识社区","专业"], rating: 4.2, country: "中国" },

  /* ==================== 图像创作 ==================== */
  { id: 30, name: "Midjourney", category: "image", useCase: "艺术创作、概念设计、海报插画、风格化图像", desc: "AI绘画的王者，艺术感和画质业界天花板。适合设计师找灵感、画概念图、做海报和插画。用Discord操作，有一定学习门槛。", url: "https://www.midjourney.com", pricing: "Basic $10/月 / Standard $30/月", tags: ["艺术","海报","概念图"], rating: 4.9, country: "美国" },
  { id: 31, name: "Stable Diffusion", category: "image", useCase: "本地生图、模型训练、风格定制、二次元", desc: "开源生图模型，能装在自己电脑上无限免费生成。社区模型库Civitai有海量风格模型，自由度远超其他工具。", url: "https://stability.ai", pricing: "开源免费 / 云服务收费", tags: ["开源","本地","二次元","训练"], rating: 4.7, country: "英国" },
  { id: 32, name: "DALL·E 3", category: "image", useCase: "自然语言生图、产品图、带文字的设计图", desc: "OpenAI出品，听懂人话的AI画家。用自然语言描述即可生成符合预期的图片，特别擅长在图中准确渲染文字和logo。", url: "https://openai.com/dall-e-3", pricing: "含在ChatGPT Plus中", tags: ["自然语言","文字渲染","产品图"], rating: 4.5, country: "美国" },
  { id: 33, name: "Adobe Firefly", category: "image", useCase: "商业设计、PS集成、矢量图、安全商用", desc: "Adobe出品，深度集成Photoshop/Illustrator。用商业授权图片训练，生成的内容可安全商用，设计师的首选AI工具。", url: "https://firefly.adobe.com", pricing: "免费额度 / Premium $4.99/月", tags: ["Adobe","商用","PS"], rating: 4.5, country: "美国" },
  { id: 34, name: "即梦", category: "image", useCase: "短视频素材、电商图、社交媒体配图", desc: "字节出品，中文提示词友好，模板丰富。适合做短视频封面、小红书配图、电商主图，自带视频生成功能。", url: "https://jimeng.jianying.com", pricing: "免费额度 / 会员制", tags: ["短视频","电商","模板"], rating: 4.2, country: "中国" },
  { id: 35, name: "通义万相", category: "image", useCase: "电商设计、风格转换、产品展示、中文场景", desc: "阿里出品，中文语义理解准，支持文生图/图生图/风格迁移。适合电商运营做产品图、活动海报。", url: "https://tongyi.aliyun.com/wanxiang", pricing: "免费额度 / 按量付费", tags: ["电商","风格迁移","产品图"], rating: 4.1, country: "中国" },
  { id: 36, name: "Leonardo.ai", category: "image", useCase: "游戏角色、概念艺术、材质贴图、影视概念", desc: "游戏和影视行业热门，擅长角色设计和场景概念图。能用自己的图片训练模型，生成风格统一的系列作品。", url: "https://leonardo.ai", pricing: "免费额度 / 付费$12起/月", tags: ["游戏","角色","概念艺术"], rating: 4.4, country: "澳大利亚" },
  { id: 37, name: "Canva AI", category: "image", useCase: "快速设计、社交媒体图、PPT、小白友好", desc: "Canva内置AI，不用学设计也能出好看的图。文生图、智能抠图、魔法橡皮擦一键搞定，适合做社媒图、简单海报。", url: "https://www.canva.com", pricing: "免费 / Pro $12.99/月", tags: ["设计","易用","社媒"], rating: 4.3, country: "澳大利亚" },
  { id: 38, name: "堆友", category: "image", useCase: "3D素材、电商场景、营销模板", desc: "阿里出品，专攻3D风格AI生图和电商场景图。海量模板库，一键生成营销素材和商品展示图，电商运营必备。", url: "https://www.duiyouai.com", pricing: "免费额度 / 会员制", tags: ["3D","电商","阿里"], rating: 4.1, country: "中国" },
  { id: 39, name: "稿定AI", category: "image", useCase: "电商设计、新媒体配图、营销海报", desc: "稿定设计出品，和稿定设计模板库打通。适合新媒体运营做公众号封面、小红书图、营销海报，模板即改即用。", url: "https://www.gaoding.com", pricing: "免费额度 / 会员制", tags: ["新媒体","海报","模板"], rating: 4.2, country: "中国" },
  { id: 40, name: "SeaArt", category: "image", useCase: "二次元、插画、模型社区、中文友好", desc: "国产AI绘画平台，二次元风格出色。内置海量模型和LoRA，中文界面友好，适合二次元创作和新手入门。", url: "https://www.seaart.ai", pricing: "免费额度 / 会员制", tags: ["二次元","插画","LoRA"], rating: 4.3, country: "中国" },

  /* ==================== 视频创作 ==================== */
  { id: 45, name: "可灵 (Kling)", category: "video", useCase: "短视频创作、广告素材、创意视频", desc: "快手出品，国产文生视频标杆。生成的视频运动自然、物理效果真实，画质在国产工具中最好。适合短视频素材和广告创意。", url: "https://kling.kuaishou.com", pricing: "免费额度 / 会员制", tags: ["短视频","广告","高画质"], rating: 4.7, country: "中国" },
  { id: 46, name: "Sora", category: "video", useCase: "高质量视频生成、影视级画面、创意短片", desc: "OpenAI出品，视频生成画质和一致性的天花板。画面细节和光影表现远超同类，适合需要电影级画面的创作者。", url: "https://sora.com", pricing: "含在ChatGPT Plus/Pro中", tags: ["电影级","高画质","创意"], rating: 4.8, country: "美国" },
  { id: 47, name: "Runway", category: "video", useCase: "专业视频编辑、特效制作、视频风格化", desc: "专业级AI视频工具，不只是生成视频，还能做视频风格转换、动态笔刷、绿幕抠像等后期特效。适合视频创作者和剪辑师。", url: "https://runwayml.com", pricing: "免费额度 / Standard $15/月", tags: ["专业","特效","风格化"], rating: 4.5, country: "美国" },
  { id: 48, name: "Pika", category: "video", useCase: "趣味短视频、GIF动图、社交媒体内容", desc: "轻量级AI视频工具，操作简单上手快。适合做趣味短视频和GIF表情包，不需要专业知识也能用。", url: "https://pika.art", pricing: "免费 / 付费$8起/月", tags: ["轻量","GIF","趣味"], rating: 4.3, country: "美国" },
  { id: 49, name: "HeyGen", category: "video", useCase: "数字人播报、多语种视频、培训视频", desc: "上传照片生成逼真说话视频，支持多语种口型同步。适合企业培训、产品介绍、跨境营销，省去真人拍摄成本。", url: "https://www.heygen.com", pricing: "免费额度 / Creator $29/月", tags: ["数字人","多语种","培训"], rating: 4.6, country: "美国" },
  { id: 50, name: "即创", category: "video", useCase: "电商短视频、直播切片、带货文案", desc: "字节出品，专为电商和营销打造的AI视频工具。自动生成带货脚本+视频素材，适合抖音/快手电商卖家批量产出。", url: "https://www.jianying.com", pricing: "免费额度 / 会员制", tags: ["电商","营销","带货"], rating: 4.2, country: "中国" },
  { id: 51, name: "万兴播爆", category: "video", useCase: "数字人营销、跨境视频、多语种播报", desc: "万兴科技出品，主打AI数字人营销视频。海量数字人形象和模板，支持120+语种，适合跨境电商和海外营销。", url: "https://www.wondershare.cn", pricing: "免费额度 / 会员制", tags: ["数字人","跨境","多语种"], rating: 4.1, country: "中国" },
  { id: 52, name: "度加剪辑", category: "video", useCase: "视频自动剪辑、字幕生成、AI口播", desc: "百度出品，AI自动剪辑工具。输入文案自动生成口播视频、智能配字幕和BGM，适合做知识口播和资讯类视频。", url: "https://www.dujia.baidu.com", pricing: "免费额度 / 会员制", tags: ["自动剪辑","字幕","口播"], rating: 4.0, country: "中国" },
  { id: 53, name: "Invideo AI", category: "video", useCase: "一键生成视频、营销素材、YouTube内容", desc: "输入文本直接生成完整视频，自动配画面和配音。适合YouTuber、营销人员快速产出内容，不需要剪辑经验。", url: "https://invideo.io", pricing: "免费 / Plus $25/月", tags: ["一键生成","YouTube","营销"], rating: 4.3, country: "美国" },

  /* ==================== 编程开发 ==================== */
  { id: 60, name: "GitHub Copilot", category: "code", useCase: "代码自动补全、Bug修复、代码重构", desc: "微软出品，编程助手行业标杆。在VS Code/JetBrains里实时补全代码，能猜到你下一步要写什么，适合所有程序员。", url: "https://github.com/features/copilot", pricing: "个人 $10/月 / 企业 $19/月", tags: ["代码补全","IDE","微软"], rating: 4.8, country: "美国" },
  { id: 61, name: "Cursor", category: "code", useCase: "AI辅助编程、代码对话、项目重构", desc: "目前最受开发者喜爱的AI编辑器。理解整个项目上下文，用自然语言让它改代码、修Bug、加功能，新手也能用。", url: "https://cursor.sh", pricing: "免费 / Pro $20/月", tags: ["编辑器","对话编程","项目理解"], rating: 4.9, country: "美国" },
  { id: 62, name: "Windsurf", category: "code", useCase: "大型项目开发、代码库分析、智能重构", desc: "Codeium出品，Cascade智能体能自动分析整个代码库，理解项目结构后再帮你写代码。适合维护大型项目。", url: "https://codeium.com/windsurf", pricing: "免费 / Pro $15/月", tags: ["大型项目","代码分析","智能体"], rating: 4.6, country: "美国" },
  { id: 63, name: "Devin", category: "code", useCase: "全自动编程、Bug修复、项目搭建", desc: "全球首个AI软件工程师，能独立完成编码任务。给它一个需求，它自己写代码、测试、修Bug、部署，像雇了个初级程序员。", url: "https://www.cognition.ai", pricing: "$500/月起", tags: ["全自动","独立开发","智能体"], rating: 4.5, country: "美国" },
  { id: 64, name: "豆包MarsCode", category: "code", useCase: "免费IDE、中文编程、云端开发", desc: "字节出品，完全免费的云端AI IDE。中文编程体验好，内置豆包大模型，无需本地配置就能写代码，新手友好。", url: "https://www.marscode.cn", pricing: "免费", tags: ["免费","云端","中文","字节"], rating: 4.3, country: "中国" },
  { id: 65, name: "Claude Code", category: "code", useCase: "命令行编程、代码库操作、自动化开发", desc: "Anthropic出品的命令行AI编程工具。在终端里让Claude直接读代码、改代码、提交Git，适合喜欢命令行的开发者。", url: "https://docs.anthropic.com/en/docs/claude-code", pricing: "API按量付费", tags: ["命令行","终端","Git"], rating: 4.7, country: "美国" },
  { id: 66, name: "通义灵码", category: "code", useCase: "免费编程助手、中文注释、代码解释", desc: "阿里出品，完全免费的AI编程助手。中文理解好，能看懂中文注释生成对应代码，适合学生和不想付费的开发者。", url: "https://tongyi.aliyun.com/lingma", pricing: "免费", tags: ["免费","中文","代码解释"], rating: 4.3, country: "中国" },
  { id: 67, name: "Tabnine", category: "code", useCase: "代码补全、隐私优先、企业部署", desc: "老牌AI代码补全工具，主打隐私安全。支持本地化部署，代码不上传云端，适合对数据安全要求高的企业开发团队。", url: "https://www.tabnine.com", pricing: "免费 / Pro $12/月 / 企业版", tags: ["隐私","企业","补全"], rating: 4.2, country: "以色列" },
  { id: 68, name: "Sourcegraph Cody", category: "code", useCase: "代码库搜索、上下文理解、代码审查", desc: "基于代码库深度理解的AI助手，能搜索和理解整个代码仓库。适合维护大型项目、做代码审查、理解陌生代码库。", url: "https://sourcegraph.com/cody", pricing: "免费 / Pro $9/月", tags: ["代码搜索","审查","大型项目"], rating: 4.4, country: "美国" },
  { id: 69, name: "v0 (Vercel)", category: "code", useCase: "前端页面生成、UI原型、React组件", desc: "Vercel出品，用自然语言描述页面样式，自动生成React代码和预览。适合产品经理出原型、前端开发快速搭页面。", url: "https://v0.dev", pricing: "免费 / 付费套餐", tags: ["前端","React","原型"], rating: 4.5, country: "美国" },
  { id: 70, name: "Bolt.new", category: "code", useCase: "全栈Web应用、MVP快速搭建、零代码", desc: "StackBlitz出品，浏览器里描述需求就能生成完整Web应用。适合创业者做MVP、产品经理做demo、不会写代码但有想法的人。", url: "https://bolt.new", pricing: "免费额度 / Pro $20/月", tags: ["全栈","MVP","浏览器"], rating: 4.6, country: "美国" },
  { id: 71, name: "Replit Agent", category: "code", useCase: "全栈开发、一键部署、学习编程", desc: "Replit的AI智能体，说人话就能让它搭网站、做应用、写爬虫，自动部署上线。适合编程新手和想快速验证想法的人。", url: "https://replit.com", pricing: "免费 / Core $20/月", tags: ["全栈","部署","新手"], rating: 4.4, country: "美国" },

  /* ==================== 办公效率 ==================== */
  { id: 80, name: "Notion AI", category: "office", useCase: "智能笔记、文档写作、知识管理", desc: "Notion内置AI，在写笔记/文档时按空格让AI帮你续写、总结、翻译、头脑风暴。适合用Notion管理知识的人。", url: "https://www.notion.so/product/ai", pricing: "$10/人/月（附加）", tags: ["笔记","写作","知识管理"], rating: 4.5, country: "美国" },
  { id: 81, name: "Gamma", category: "office", useCase: "PPT制作、文档排版、演示汇报", desc: "输入一个主题，自动生成排版精美的PPT/文档/网页。不用在排版上花时间，专注内容就好。适合经常做汇报的职场人。", url: "https://gamma.app", pricing: "免费 / Plus $10/月", tags: ["PPT","演示","自动排版"], rating: 4.6, country: "美国" },
  { id: 82, name: "Microsoft Copilot", category: "office", useCase: "Office办公、Excel分析、会议总结", desc: "微软Office全家桶AI助手。在Word里帮你写文档、Excel里分析数据、Teams里总结会议，和企业现有工作流无缝衔接。", url: "https://copilot.microsoft.com", pricing: "免费版 / 企业版 $30/人/月", tags: ["Office","Excel","会议"], rating: 4.4, country: "美国" },
  { id: 83, name: "钉钉AI", category: "office", useCase: "企业协同、会议纪要、审批流程", desc: "阿里钉钉内置AI，会议自动生成纪要、文档智能总结、审批智能建议。适合已经在用钉钉的企业团队。", url: "https://www.dingtalk.com", pricing: "免费 / 企业版付费", tags: ["企业","会议","审批"], rating: 4.1, country: "中国" },
  { id: 84, name: "飞书智能伙伴", category: "office", useCase: "团队协作、文档处理、会议管理", desc: "字节飞书内置AI，覆盖文档/表格/会议/消息全场景。适合用飞书的团队，一个平台实现AI+协作一体化。", url: "https://www.feishu.cn", pricing: "免费 / 企业版付费", tags: ["协作","文档","会议"], rating: 4.3, country: "中国" },
  { id: 85, name: "PDF.ai", category: "office", useCase: "PDF问答、合同审查、论文精读", desc: "上传PDF直接对话提问。适合律师快速审查合同条款、学生精读论文、分析师从财报里提取关键数据。", url: "https://pdf.ai", pricing: "免费额度 / Pro $15/月", tags: ["PDF","合同","论文"], rating: 4.2, country: "美国" },
  { id: 86, name: "通义听悟", category: "office", useCase: "录音转文字、会议记录、音视频总结", desc: "阿里出品，上传录音/视频自动转文字+AI总结。适合记者整理采访、学生录课转笔记、职场人做会议纪要。", url: "https://tingwu.aliyun.com", pricing: "免费额度 / 按量付费", tags: ["录音转文字","会议","总结"], rating: 4.4, country: "中国" },
  { id: 87, name: "讯飞听见", category: "office", useCase: "语音转文字、实时字幕、会议记录", desc: "科大讯飞出品，语音转文字准确率业界领先。支持实时转写和多语种翻译，适合会议记录、采访整理、上课笔记。", url: "https://www.iflyrec.com", pricing: "免费额度 / 会员制", tags: ["语音转文字","实时","翻译"], rating: 4.5, country: "中国" },
  { id: 88, name: "Tome", category: "office", useCase: "AI演示文稿、故事化汇报、创意提案", desc: "AI驱动的演示工具，输入主题自动生成故事化的PPT。排版精美、逻辑清晰，适合做方案提案和创意汇报。", url: "https://tome.app", pricing: "免费 / Pro $16/月", tags: ["PPT","故事化","提案"], rating: 4.3, country: "美国" },
  { id: 89, name: "酷表ChatExcel", category: "office", useCase: "表格处理、数据整理、对话式Excel", desc: "北大团队出品，用自然语言对话就能处理Excel表格。不需要记公式，说人话就能筛选、排序、计算、生成图表。", url: "https://chatexcel.com", pricing: "免费", tags: ["Excel","对话","表格"], rating: 4.2, country: "中国" },

  /* ==================== 音频音乐 ==================== */
  { id: 95, name: "Suno", category: "audio", useCase: "音乐创作、歌曲生成、背景音乐", desc: "输入歌词和风格描述就能生成一首完整的歌。适合音乐爱好者做demo、视频创作者做BGM、或者给自己写首歌。", url: "https://suno.com", pricing: "免费 / Pro $10/月", tags: ["音乐","作曲","BGM"], rating: 4.7, country: "美国" },
  { id: 96, name: "Udio", category: "audio", useCase: "音乐生成、音质优秀、专业级输出", desc: "Suno最强竞品，音质和音乐性被很多人认为更胜一筹。生成的歌曲人声更自然、编曲更丰富。", url: "https://www.udio.com", pricing: "免费 / Standard $10/月", tags: ["音乐","高音质","作曲"], rating: 4.7, country: "美国" },
  { id: 97, name: "ElevenLabs", category: "audio", useCase: "语音合成、声音克隆、有声书、多语种", desc: "AI语音合成天花板，生成的语音自然到难辨真假。能克隆你自己的声音，支持29种语言。适合有声书、播客、视频配音。", url: "https://elevenlabs.io", pricing: "免费额度 / Starter $5/月", tags: ["语音合成","声音克隆","有声书"], rating: 4.8, country: "美国" },
  { id: 98, name: "剪映AI配音", category: "audio", useCase: "短视频配音、旁白解说、多音色", desc: "剪映内置AI配音，免费多种音色可选，支持语速和情感调节。短视频创作者的标配，不需要额外付费。", url: "https://www.jianying.com", pricing: "免费", tags: ["配音","短视频","免费"], rating: 4.4, country: "中国" },
  { id: 99, name: "魔音工坊", category: "audio", useCase: "专业配音、多角色对话、广告配音", desc: "出门问问出品，音色库丰富，支持多角色对话式配音。适合做有声剧、广告配音、在线课程录音。", url: "https://www.moyin.com", pricing: "免费额度 / 会员制", tags: ["专业配音","多角色","广告"], rating: 4.3, country: "中国" },
  { id: 100, name: "Murf.ai", category: "audio", useCase: "专业配音、企业培训、有声内容", desc: "海外AI配音的主流选择，音色自然、支持多语种。适合做企业培训视频、播客、有声读物，专业度高。", url: "https://murf.ai", pricing: "免费额度 / Basic $19/月", tags: ["配音","企业","多语种"], rating: 4.5, country: "美国" },
  { id: 101, name: "Descript", category: "audio", useCase: "音视频编辑、播客制作、语音克隆", desc: "像编辑Word一样编辑音频和视频。删掉文字就能删掉对应语音，自带AI语音克隆，播客和视频创作者的效率神器。", url: "https://www.descript.com", pricing: "免费 / Pro $24/月", tags: ["播客","编辑","语音克隆"], rating: 4.6, country: "美国" },
  { id: 102, name: "讯飞配音", category: "audio", useCase: "专业配音、广告片、宣传片配音", desc: "科大讯飞出品，专业商务配音工具。音色专业、情感丰富，适合商业广告、企业宣传片、纪录片配音。", url: "https://peiyin.xunfei.cn", pricing: "按次付费 / 会员制", tags: ["商业配音","广告","宣传片"], rating: 4.3, country: "中国" },

  /* ==================== 翻译工具 ==================== */
  { id: 110, name: "DeepL", category: "translate", useCase: "高质量翻译、商务文档、多语种互译", desc: "翻译质量被公认为业界最佳，尤其适合商务文档和专业内容的翻译。支持30+语种，语气自然流畅，不像机器翻的。", url: "https://www.deepl.com", pricing: "免费 / Pro €8.99/月", tags: ["高质量","商务","多语种"], rating: 4.8, country: "德国" },
  { id: 111, name: "沉浸式翻译", category: "translate", useCase: "网页翻译、双语对照、浏览器插件", desc: "最好用的浏览器翻译插件。看外文网页自动显示中英双语对照，支持调用DeepL/OpenAI等多个翻译引擎，阅读体验极佳。", url: "https://immersivetranslate.com", pricing: "免费 / Pro会员制", tags: ["网页翻译","双语","浏览器"], rating: 4.7, country: "中国" },
  { id: 112, name: "火山翻译", category: "translate", useCase: "字节生态、视频翻译、实时翻译", desc: "字节跳动出品，和抖音/TikTok深度集成。视频字幕翻译和实时翻译是强项，也提供API给开发者。", url: "https://translate.volcengine.com", pricing: "免费额度 / API按量付费", tags: ["字节","视频翻译","实时"], rating: 4.3, country: "中国" },
  { id: 113, name: "百度翻译AI", category: "translate", useCase: "中文翻译、多语种、文档翻译", desc: "百度出品，中文翻译的老牌工具。支持200+语种互译，文档翻译和图片翻译方便好用，和百度生态打通。", url: "https://fanyi.baidu.com", pricing: "免费 / 会员制", tags: ["中文","多语种","文档"], rating: 4.2, country: "中国" },
  { id: 114, name: "有道翻译AI", category: "translate", useCase: "学习翻译、论文翻译、文档处理", desc: "网易有道出品，学习场景的翻译利器。支持论文翻译、PDF翻译、同传翻译，学生和研究人员常用。", url: "https://fanyi.youdao.com", pricing: "免费 / 会员制", tags: ["学习","论文","PDF"], rating: 4.3, country: "中国" },
  { id: 115, name: "Reverso", category: "translate", useCase: "语境翻译、语言学习、专业术语", desc: "提供词汇在真实语境中的用法，不只是翻译。适合语言学习者理解词语的准确用法，支持翻译+词典+语法检查。", url: "https://www.reverso.net", pricing: "免费 / Premium €5.49/月", tags: ["语境","学习","词典"], rating: 4.4, country: "法国" }
];

/* 分类定义 */
const categories = [
  { id: "all",       name: "全部",       icon: "🔥", useDesc: "浏览所有收录的AI工具" },
  { id: "chat",      name: "对话写作",   icon: "💬", useDesc: "日常聊天、文案创作、翻译润色、学习答疑" },
  { id: "search",    name: "搜索研究",   icon: "🔍", useDesc: "联网搜索、事实核查、学术调研、深度研究" },
  { id: "image",     name: "图像创作",   icon: "🎨", useDesc: "AI绘画、设计素材、产品图、风格化图像" },
  { id: "video",     name: "视频创作",   icon: "🎬", useDesc: "视频生成、数字人播报、后期特效、营销素材" },
  { id: "code",      name: "编程开发",   icon: "💻", useDesc: "代码补全、全栈开发、项目搭建、Bug修复" },
  { id: "office",    name: "办公效率",   icon: "📊", useDesc: "PPT制作、文档处理、会议纪要、合同审查" },
  { id: "audio",     name: "音频音乐",   icon: "🎵", useDesc: "音乐创作、语音合成、配音克隆、有声内容" },
  { id: "translate", name: "翻译工具",   icon: "🌐", useDesc: "高质量翻译、网页翻译、文档翻译、语言学习" }
];
