# 珞喻智学｜VibeCoding 五级成长体系

这是一个用于「珞喻智学｜AI科创成长营」招生宣传的招生宣传官网，重点展示 VibeCoding 五级课程体系与 VC-L1 课堂作品。项目内容围绕课程展示、作品展厅与体验预约进行组织。

## 如何启动

```bash
npm install
npm run dev
```

本地开发服务启动后，在浏览器打开终端提示的地址即可访问。

生产构建检查：

```bash
npm run build
```

## 页面路由

- `/`：首页，包含 Hero、家长信任点、课堂作品展示、课堂流程与 CTA。
- `/works`：VC-L1 课堂作品展厅，展示 AI 梦想体验馆代表作品。
- `/works/:id`：作品详情页，包含可点击互动的作品网站模拟预览。
- `/course`：VibeCoding 五级课程体系页，完整展示 VC-L0 到 VC-L4。
- /booking：预约体验页，表单只做前端提交成功提示。
- /teacher：AI编程课教师管理页面，展示 VibeCoding-入门课（Lv0）的作业合集。

## 如何新增课堂作品

作品数据统一维护在 `src/data/works.ts`。

新增作品时，在 `works` 数组中添加一个对象，至少包含以下字段：

- `id`：作品唯一标识，会用于 `/works/:id` 路由。
- `title`：作品标题。
- `grade`：学生年级展示文案。
- `type`：梦想类型展示文案。
- `category`：筛选分类，可选 `守护型`、`探索型`、`创造型`、`温暖型`、`自然型`、`故事型`。
- `tags`：作品标签数组。
- `summary`：作品一句话介绍。
- `themeColor` / `accentColor`：缩略图与预览区主题色。
- `heroText`：作品预览主视觉文案。
- `identity`：梦想身份。
- `abilities`：闪光能力列表。
- `futureDay`：未来的一天内容。
- `seedPlan`：梦想种子计划。
- `letter`：星光来信。
- `teacherComment`：老师点评。
- `icon`：用于作品缩略视觉的符号。

新增后，首页、作品展厅、课程页入口和详情页会自动使用该数据。

## 如何替换品牌 Logo

当前 Logo 使用 `lucide-react` 的 `Sparkles` 图标和 CSS 渐变绘制，位置在：

- `src/components/Header.tsx`
- `src/components/Footer.tsx`

如果要替换为真实品牌 Logo：

1. 将图片放入 `public/`，例如 `public/logo.svg`。
2. 在 `Header.tsx` 和 `Footer.tsx` 中把图标区域替换为 `<img src="/logo.svg" alt="珞喻智学" />`。
3. 根据图片比例调整宽高、圆角与背景样式。

## 当前版本说明

- 当前为课程展示官网前端版本。
- 所有课堂作品数据来自本地 `src/data/works.ts`。
- 预约表单用于收集体验课意向，并在提交后显示确认提示。
- 网站已包含桌面端与移动端响应式布局。





