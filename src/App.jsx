import React from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

const TARGET_URL = 'https://ejiaqijiaoyu.com/'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="section-shell h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 shadow-lg" />
            <div>
              <div className="text-lg font-extrabold">易起教育</div>
              <div className="text-xs text-slate-500">ejiaqijiaoyu.com</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" asChild>
              <a href={TARGET_URL} target="_blank" rel="noreferrer">
                打开原站
              </a>
            </Button>
            <Button asChild>
              <a href={TARGET_URL} target="_blank" rel="noreferrer">
                立即访问
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="section-shell py-10 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold text-orange-600 bg-orange-50">
            完整复刻 · 原站内容直出
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">ejiaqijiaoyu.com 全量页面镜像</h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            按照需求，页面直接加载官方站点的 HTML 与图片资源，不做任何二次改写，确保文案与媒体素材保持原貌。
          </p>
        </div>

        <Card className="overflow-hidden border-slate-200 shadow-sm">
          <CardHeader className="bg-slate-50/80 border-b">
            <CardTitle className="text-lg">实时预览</CardTitle>
            <CardDescription>下方 iframe 直接嵌入原站，保持内容 1:1 展示。</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <iframe
              src={TARGET_URL}
              title="ejiaqijiaoyu"
              className="w-full min-h-[80vh] sm:min-h-[90vh]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-none bg-white/80">
          <CardHeader>
            <CardTitle className="text-lg">访问提醒</CardTitle>
            <CardDescription>
              若 iframe 未能正确加载，可点击右上角「打开原站」在新标签页访问，以获得与官方完全一致的体验。
            </CardDescription>
          </CardHeader>
        </Card>
      </main>
    </div>
  )
}
