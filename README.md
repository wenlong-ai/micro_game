# 易起教育 React + shadcn UI 着陆页

本项目使用 React、Vite、Tailwind CSS 与 shadcn 风格组件，复刻了 https://ejiaqijiaoyu.com/ 的宣传页。包含英雄区、课程特色、分龄课程体系、课堂体验、家长口碑与报名表单等模块。

## 开发与预览

> 当前环境无法直接访问 npm 官方源，实际安装依赖时请保证可以联网或配置可用的镜像。

```bash
npm install
npm run dev    # 本地开发
npm run build  # 生产构建
npm run preview
```

## 目录结构

- `src/App.jsx`：主页面与各个区块。
- `src/components/ui/`：简单的 shadcn 风格基础组件。
- `src/index.css`：全局样式与配色变量。
- `tailwind.config.js`：Tailwind 配置。
