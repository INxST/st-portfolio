# ST Portfolio

本リポジトリでは`Taiki Sato`のポートフォリオのベースソースを管理しています。

URL: [taikisato.com](https://taikisato.com/)

![月の満ち欠けアニメーション](/screenshot/moon.gif)

![複数枚画像 パララックススクロールアニメーション](/screenshot/parallax-image.gif)

![テキスト回転アニメーション](/screenshot/rotate-text.gif)

## Setup

### Node.js　バージョン管理ツールをインストールする

下記などのツールをインストールします。

- [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script)
- [nodebrew](https://github.com/hokaccha/nodebrew?tab=readme-ov-file#install)

### Node.jsのバージョンを変更する

バージョン管理ツールインストール後、Node.jsのバージョン
を[.node-version](.node-version)指定の`22.7.0`に変更してください。

### pnpmをinstallする

```bash
npm install -g pnpm
```

## 各種コマンド

### 依存インストール

```bash
pnpm install --frozen-lockfile
```

### 開発サーバー起動

```bash
pnpm dev
```

### 開発サーバー起動　サブディレクトリ指定

```bash
SUB_DIR=dir pnpm dev
```

### コード整形

```bash
pnpm format
```

### ビルド

```bash
pnpm build
```

### ビルド　サブディレクトリ指定

```bash
SUB_DIR=dir pnpm build
```

## 更新方法

| 対象箇所                                                                                                                                                                                                               | 更新方法                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| ヘッダーリンク ![ヘッダーリンク](/screenshot/header.png)                                                                                                                                                               | [/src/data/headerLinks.ts](/src/data/headerLinks.ts)の内容を変更する                   |
| メニューリンク ![メニューリンク](/screenshot/menu.png)                                                                                                                                                                 | [/src/data/menus.ts](/src/data/menus.ts)の内容を変更する                               |
| フッターリンク ![フッターリンク](/screenshot/footer.png)                                                                                                                                                               | [/src/data/footerLinks.ts](/src/data/footerLinks.ts)の内容を変更する                   |
| SNSリンク(メニュー・フッター・私について > PROFILE) ![メニュー > SNSリンク](/screenshot/sns-menu.png)![フッター > SNSリンク](/screenshot/sns-footer.png)![私について > PROFILE > SNSリンク](/screenshot/sns-about.png) | [/src/data/snsLinks.ts](/src/data/snsLinks.ts)の内容を変更する                         |
| TOP 私について 画像 ![TOP 私について 画像](/screenshot/top-about.png)                                                                                                                                                  | [/src/data/parallaxGalleryItems.ts](/src/data/parallaxGalleryItems.ts)の内容を変更する |
| 私について スライド画像 ![私について スライド画像](/screenshot/about-slide.png)                                                                                                                                        | [/src/data/slides.ts](/src/data/slides.ts)の内容を変更する                             |
| 私について CAREER ![私について CAREER](/screenshot/about-career.png)                                                                                                                                                   | [/src/data/timelines.ts](/src/data/timelines.ts)の内容を変更する                       |
| 制作実績 FILTER ![制作実績 FILTER](/screenshot/works-filter.png)                                                                                                                                                       | [/src/data/filters.ts](/src/data/filters.ts)の内容を変更する                           |

### 実績の更新について

#### 実績の追加

[/src/pages/works配下](/src/pages/works/)に拡張子`astro`でファイルを作成すること
でページが追加されます。

#### 一覧での表示設定

[/src/data/works.ts](/src/data/works.ts)の内容を更新することで設定できます。

```ts
  {
    slug: 'textile-manufacturer-site',
    title: '繊維メーカー',
    year: '2021',
    categories: ['PRIVATE WORKS'],
    tags: ['ART DIRECTION', 'WEB DESIGN'],
    image: '/detail/textile-manufacturer-site/sample.jpg', // 制作実績用画像
    mv: '/detail/textile-manufacturer-site/sample.jpg', // 詳細用画像
    mvSp: '/detail/textile-manufacturer-site/sample.jpg', // 詳細用画像(SP)
    isTop: true, // `true`の場合TOPページに表示
    imageTop: '/detail/textile-manufacturer-site/sample.jpg', // TOPページ表示用画像
  },
```
