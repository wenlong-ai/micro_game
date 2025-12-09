import React from 'react'
import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Separator } from './components/ui/separator'

const features = [
  {
    title: '沉浸式情境课堂',
    description: '结合故事线与互动道具，让孩子在真实语境中输出英语，提升表达力。',
    accent: '互动体验',
  },
  {
    title: '多感官智能训练',
    description: '配合音乐、律动与手工，激发视觉、听觉、触觉多通道学习，牢固记忆。',
    accent: 'STEAM',
  },
  {
    title: '成长型评价',
    description: '专属成长档案与阶段测评，清晰呈现孩子每一步进步，给出家庭辅导建议。',
    accent: '评估',
  },
]

const programs = {
  toddlers: {
    title: '启蒙班 (3-6岁)',
    description: '以儿歌、律动和图卡为主的启蒙课程，培养语感与表达欲。',
    skills: ['自然拼读启蒙', '基础词汇 400+', '律动故事会', '口语自信表达'],
  },
  primary: {
    title: '进阶班 (7-10岁)',
    description: '在项目式任务中运用英语完成挑战，强化阅读与表达逻辑。',
    skills: ['项目制学习', '阅读与演讲', '跨学科主题', '小组协作'],
  },
  advanced: {
    title: '未来班 (11-14岁)',
    description: '用真实议题做研究与辩论，培养批判性思维与全球视野。',
    skills: ['议题研究', '思维导图写作', '辩论表达', '全球文化'],
  },
}

const testimonials = [
  {
    name: '李女士 · 7岁Coco妈妈',
    quote: '孩子以前不敢开口，现在能主动用英语讲故事，老师课堂氛围特别松弛有趣。',
  },
  {
    name: '王先生 · 9岁Lucas爸爸',
    quote: '项目作业让孩子学会查资料、做展示，开阔了眼界，也培养了时间管理能力。',
  },
  {
    name: '周女士 · 6岁橙橙妈妈',
    quote: '每周的成长报告很详细，家庭练习简单有效，陪伴孩子的负担小了很多。',
  },
]

const stats = [
  { label: '专注儿童英语教育', value: '9年' },
  { label: '累计服务家庭', value: '12,000+' },
  { label: '平均续班率', value: '93%' },
]

const steps = [
  '免费水平测试，匹配班型',
  '首堂体验课，熟悉课堂节奏',
  '制定个性化成长路径',
  '定期阶段测评与家长沟通',
]

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-shell text-center space-y-3">
      <Badge variant="outline" className="mx-auto inline-flex bg-white/70">
        {eyebrow}
      </Badge>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{title}</h2>
      <p className="text-base text-slate-600 max-w-3xl mx-auto">{description}</p>
    </div>
  )
}

function Navigation() {
  const navItems = ['课程体系', '课堂体验', '家长口碑', '联系我们']
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="section-shell flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 shadow-lg" />
          <div>
            <div className="text-lg font-extrabold text-slate-900">易起教育</div>
            <div className="text-xs text-slate-500">EZ Future Academy</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          {navItems.map((item) => (
            <a key={item} className="hover:text-slate-900" href="#">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            预约体验课
          </Button>
          <Button size="sm">咨询顾问</Button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-12">
      <div className="section-shell grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge className="bg-orange-100 text-orange-700">少儿英语 · 口语力专家</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
            让孩子勇敢开口，用英语讲述世界
          </h1>
          <p className="text-lg text-slate-600 max-w-xl">
            以真实情境为驱动的互动课堂，结合项目式学习，让孩子在快乐中拥有逻辑、表达与创造力。
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">立即预约体验</Button>
            <Button variant="outline" size="lg">
              下载课程大纲
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center p-5 shadow-none border-0 bg-white/70">
                <div className="text-2xl font-extrabold text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-orange-400/50 via-amber-300/50 to-blue-400/40 blur-3xl" />
          <div className="relative card-surface p-8 rounded-[32px] overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-500">今日课堂</div>
                <div className="text-2xl font-bold text-slate-900">Mission: Planet Care</div>
              </div>
              <Badge>Project-based</Badge>
            </div>
            <Separator className="my-6" />
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-orange-100 text-orange-600 font-bold flex items-center justify-center">
                  A
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Warm-up · 语音闯关</div>
                  <p className="text-xs text-slate-500">通过节奏游戏练习 /pl/ /cl/ 连读</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-blue-100 text-blue-600 font-bold flex items-center justify-center">
                  B
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Mission · 角色扮演</div>
                  <p className="text-xs text-slate-500">分组完成环保海报并进行英语展示</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-600 font-bold flex items-center justify-center">
                  C
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Reflection · 反馈圈</div>
                  <p className="text-xs text-slate-500">老师即时点评，孩子互相给出正向反馈</p>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-slate-600">
              {steps.map((step, index) => (
                <div key={step} className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-orange-500 font-extrabold mb-1">0{index + 1}</div>
                  <div className="font-semibold text-slate-900 text-sm">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureGrid() {
  return (
    <section className="py-14 space-y-10" id="features">
      <SectionTitle
        eyebrow="课程特色"
        title="科学设计的课堂，让孩子沉浸式输入输出"
        description="遵循儿童认知规律，搭配项目式任务、故事情境和多感官训练，让学习自然、有趣、有效。"
      />
      <div className="section-shell grid gap-6 md:grid-cols-3">
        {features.map((item) => (
          <Card key={item.title} className="relative overflow-hidden">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-orange-200 to-amber-100" />
            <CardHeader className="relative">
              <Badge className="bg-blue-50 text-blue-600">{item.accent}</Badge>
              <CardTitle className="mt-3">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="relative text-slate-600 leading-relaxed">{item.description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function ProgramTabs() {
  return (
    <section className="py-14" id="programs">
      <SectionTitle
        eyebrow="课程体系"
        title="分龄分级，精准匹配孩子成长节奏"
        description="从启蒙到未来能力培养，每个阶段都配有专属教学目标、课堂形式与家庭支持。"
      />
      <div className="section-shell mt-10 card-surface p-8">
        <Tabs defaultValue="toddlers">
          <TabsList>
            <TabsTrigger value="toddlers">启蒙班</TabsTrigger>
            <TabsTrigger value="primary">进阶班</TabsTrigger>
            <TabsTrigger value="advanced">未来班</TabsTrigger>
          </TabsList>
          {Object.entries(programs).map(([key, value]) => (
            <TabsContent key={key} value={key}>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  <h3 className="text-2xl font-extrabold text-slate-900">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {value.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-white/70">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button size="md">预约测评</Button>
                    <Button variant="outline" size="md">
                      试听安排
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-orange-400/10 to-amber-300/20 blur-2xl" />
                  <div className="relative card-surface p-6 grid gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-600">课堂亮点</span>
                      <Badge className="bg-amber-100 text-amber-700">Live</Badge>
                    </div>
                    <div className="grid gap-3 text-sm text-slate-700">
                      <div className="p-4 rounded-2xl bg-white/80 border">
                        <div className="font-semibold text-slate-900 mb-1">学习闭环</div>
                        <p>课前预习小任务 · 课堂输出 · 课后复盘，巩固每一个单元。</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/80 border">
                        <div className="font-semibold text-slate-900 mb-1">AI口语陪练</div>
                        <p>课堂外口语练习小程序，打卡发音，老师在线批改。</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/80 border">
                        <div className="font-semibold text-slate-900 mb-1">家校沟通</div>
                        <p>每周成长报告 + 班主任回访，随时掌握孩子状态。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

function ClassroomShowcase() {
  const items = [
    '口语表演与舞台走位',
    '小组合作完成项目任务',
    '老师实时记录反馈',
    '沉浸式情境布置',
  ]
  return (
    <section className="py-14" id="classroom">
      <div className="section-shell grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <Badge variant="outline" className="bg-white/70">
            课堂体验
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">每一堂课，都是一次惊喜的冒险</h2>
          <p className="text-slate-600 leading-relaxed">
            课堂设计遵循“感知-理解-表达-迁移”闭环，让孩子在角色扮演、项目任务和舞台展示中自然输出。丰富的教具、电子大屏和互动道具，帮助孩子勇敢表达，享受成就感。
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {items.map((text) => (
              <div key={text} className="flex items-start gap-2 p-3 rounded-2xl bg-white/80 border">
                <span className="mt-0.5 text-orange-500">★</span>
                <p className="text-sm text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-orange-300/30 via-blue-400/20 to-emerald-200/30 blur-2xl" />
          <div className="relative card-surface p-6 rounded-[28px]">
            <div className="grid gap-4">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-6 text-white">
                <div className="text-sm opacity-80">Hybrid Classroom</div>
                <div className="mt-4 text-2xl font-bold">Live + AI + Project</div>
                <p className="mt-2 text-sm max-w-md opacity-90">
                  高清录播与大屏互动结合，实时捕捉课堂高光瞬间，课后可回放，家长放心看见成长。
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
                  <div className="rounded-xl bg-white/10 p-3">
                    <div className="font-semibold">课堂回放</div>
                    <p className="opacity-80">随时查看，复盘要点</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <div className="font-semibold">发音纠正</div>
                    <p className="opacity-80">AI+老师双重反馈</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <div className="font-semibold">舞台展示</div>
                    <p className="opacity-80">每月公开秀</p>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-3 text-sm text-slate-700">
                <div className="p-4 rounded-2xl bg-white/80 border">
                  <div className="text-slate-900 font-semibold">1v6 小班</div>
                  <p className="text-xs text-slate-500">关注每位孩子表达</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/80 border">
                  <div className="text-slate-900 font-semibold">双语班主任</div>
                  <p className="text-xs text-slate-500">陪伴督学，持续反馈</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/80 border">
                  <div className="text-slate-900 font-semibold">成长档案</div>
                  <p className="text-xs text-slate-500">记录每个阶段成果</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="py-14" id="testimonials">
      <SectionTitle
        eyebrow="家长好评"
        title="真实反馈，见证孩子的蜕变"
        description="来自数千位家长的信赖与选择，我们专注让孩子在真实场景中自信表达。"
      />
      <div className="section-shell grid md:grid-cols-3 gap-6 mt-10">
        {testimonials.map((item) => (
          <Card key={item.name} className="relative overflow-hidden">
            <div className="absolute right-4 top-4 text-4xl text-orange-200">“</div>
            <CardContent className="space-y-4">
              <p className="text-base text-slate-700 leading-relaxed">{item.quote}</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-orange-100 text-orange-500 font-bold flex items-center justify-center">
                  {item.name.slice(0, 1)}
                </div>
                <div className="text-sm font-semibold text-slate-900">{item.name}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="py-16" id="contact">
      <div className="section-shell grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <Badge className="bg-orange-100 text-orange-700">报名咨询</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">预约试听，获取专属学习方案</h2>
          <p className="text-slate-600 leading-relaxed">
            告诉我们孩子的年龄与学习目标，课程顾问将在 24 小时内联系您，安排免费测评与体验课。
          </p>
          <div className="flex gap-3">
            <div className="p-4 rounded-2xl bg-white/80 border">
              <div className="text-2xl font-extrabold text-orange-500">400-800-2025</div>
              <div className="text-xs text-slate-500">周一至周日 9:00-21:00</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 border">
              <div className="text-sm font-semibold text-slate-900">总部地址</div>
              <div className="text-xs text-slate-500">上海浦东新区 · 创新教育中心</div>
            </div>
          </div>
        </div>
        <div className="card-surface p-8 rounded-[28px] bg-white/80">
          <form className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-slate-800">家长姓名</label>
              <Input placeholder="请输入您的姓名" className="mt-2" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-slate-800">联系方式</label>
                <Input type="tel" placeholder="手机号" className="mt-2" />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-800">孩子年龄</label>
                <Input placeholder="例如：8岁" className="mt-2" />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-800">学习目标</label>
              <Textarea rows={4} placeholder="例如：提升口语自信、备赛演讲、同步校内学习..." className="mt-2" />
            </div>
            <Button type="button" className="w-full h-12 text-base">
              提交预约
            </Button>
            <p className="text-xs text-slate-500 text-center">
              我们尊重您的隐私，仅用于课程咨询回访。
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-8 mt-10">
      <div className="section-shell flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400" />
          <div>
            <div className="font-extrabold text-slate-900">易起教育</div>
            <div className="text-xs text-slate-500">让孩子自信表达，拥抱未来</div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="hover:text-slate-900">
            课程特色
          </a>
          <a href="#programs" className="hover:text-slate-900">
            课程体系
          </a>
          <a href="#contact" className="hover:text-slate-900">
            联系我们
          </a>
        </div>
        <div className="text-xs text-slate-500">© 2025 EZ Future Academy. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeatureGrid />
      <ProgramTabs />
      <ClassroomShowcase />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
