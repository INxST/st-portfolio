# ST Portfolio

本リポジトリでは`Taiki Sato`のポートフォリオのベースソースを管理しています。

## Setup

### Node.js　バージョン管理ツールをインストールする

下記などのツールをインストールします。

- https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script
- https://github.com/hokaccha/nodebrew?tab=readme-ov-file#install

### Node.jsのバージョンを変更する

バージョン管理ツールインストール後、Node.jsのバージョン
を[.node-version](.node-version)指定の`20.9.0`に変更してください。

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

### コード整形

```bash
pnpm format
```

### ビルド

```bash
pnpm build
```

## 更新方法

| 対象箇所                                                                                                                                                                                             | 更新方法                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| ヘッダーリンク ![ヘッダーリンク](/docs/header.png)                                                                                                                                                   | [/src/data/headerLinks.ts](/src/data/headerLinks.ts)の内容を変更する                   |
| メニューリンク ![メニューリンク](/docs/menu.png)                                                                                                                                                     | [/src/data/menus.ts](/src/data/menus.ts)の内容を変更する                               |
| フッターリンク ![フッターリンク](/docs/footer.png)                                                                                                                                                   | [/src/data/footerLinks.ts](/src/data/footerLinks.ts)の内容を変更する                   |
| SNSリンク(メニュー・フッター・私について > PROFILE) ![メニュー > SNSリンク](/docs/sns-menu.png)![フッター > SNSリンク](/docs/sns-footer.png)![私について > PROFILE > SNSリンク](/docs/sns-about.png) | [/src/data/snsLinks.ts](/src/data/snsLinks.ts)の内容を変更する                         |
| TOP 私について 画像 ![TOP 私について 画像](/docs/top-about.png)                                                                                                                                      | [/src/data/parallaxGalleryItems.ts](/src/data/parallaxGalleryItems.ts)の内容を変更する |
| 私について スライド画像 ![私について スライド画像](/docs/about-slide.png)                                                                                                                            | [/src/data/slides.ts](/src/data/slides.ts)の内容を変更する                             |
| 私について CAREER ![私について CAREER](/docs/about-career.png)                                                                                                                                       | [/src/data/timelines.ts](/src/data/timelines.ts)の内容を変更する                       |
| 制作実績 FILTER ![制作実績 FILTER](/docs/works-filter.png)                                                                                                                                           | [/src/data/filters.ts](/src/data/filters.ts)の内容を変更する                           |

### 実績の更新について

#### 実績の追加

[/src/pages/works配下](/src/pages/works/)に拡張子`astro`でファイルを作成すること
でページが追加されます。

#### 一覧での表示設定

[/src/data/works.ts](/src/data/works.ts)の内容を更新することで設定できます。

```ts
  {
    title: '医療従事者サイト 1',
    href: '/works/detail/',
    year: '2021',
    categories: ['Web Development'],
    tags: ['Fashion Design'],
    image: 'https://placehold.jp/464x560.png', // 制作実績用画像
    isTop: true, // `true`の場合TOPページに表示
    imageTop: 'https://placehold.jp/1200x480.png', // TOPページ表示用画像
  },
```

##### 制作実績での出力イメージ

![制作実績での出力イメージ](/docs/works.png)

##### TOPページでの出力イメージ

![TOPページでの出力イメージ](/docs/top-works.png)
