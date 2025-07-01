# 💼 Crypto 钱包资产总览（React + TypeScript + Vite）

## 📁 项目结构说明

src/
├── components/ # UI 组件（WalletOverview、AssetItem）
├── data/ # 本地 JSON 数据（余额、汇率、币种）
├── types/ # TypeScript 类型定义
├── utils/ # 工具函数（如格式化金额）
├── App.tsx # 项目入口
├── App.css # 页面样式
└── main.tsx



## 📊 数据处理逻辑

项目主要读取以下三类本地数据文件：

| 数据类型       | 文件名                     | 说明                     |
|----------------|----------------------------|--------------------------|
| 钱包余额       | `wallet-balance.json`      | 用户持有的各币种数量     |
| USD 汇率       | `live-rates.json`          | 各币种当前兑 USD 的汇率 |
| 币种信息       | `currencies.json`          | 币种名称、图标、精度等信息 |

**计算逻辑：**

```ts
usd估值 = amount × usd汇率
总资产 = 所有币种 usd估值 之和


🚀 快速启动
pnpm install
pnpm dev
