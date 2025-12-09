# 易起教育 React 镜像页

本项目通过 React + shadcn 风格组件包装官方站点 `https://ejiaqijiaoyu.com/`，使用 iframe 直接嵌入原始内容，确保文案与图片保持 1:1 无改动。

## 开发与预览

> 当前环境可能无法直接访问 npm 官方源，请根据网络情况配置镜像后再安装依赖。

```bash
npm install
npm run dev    # 本地开发
npm run build  # 生产构建
npm run preview
```

## 目录结构

- `src/App.jsx`：页面入口，提供导航按钮并嵌入原站 iframe。
- `src/components/ui/`：shadcn 风格的基础 UI 组件。
- `src/index.css`：全局样式与布局工具类。
- `tailwind.config.js`：Tailwind 配置。
