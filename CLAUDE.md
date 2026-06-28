# ポートフォリオサイト (taikisato.com) 管理ガイド

## プロジェクト概要

Astro + Tailwind + TypeScript 製のポートフォリオサイト。
エックスサーバー（sv10363.xserver.jp）にホスティング。
GitHub Actions で main ブランチへの push を検知し、自動でビルド & SFTP デプロイ。

## 実績追加フロー

ユーザーが「実績追加して」「新しい案件を追加したい」などと言った場合、以下の手順をサポートすること。

### 1. 画像フォルダを用意する

```
public/detail/<スラグ名>/
  mv-pc.jpg        # PC用メインビジュアル（横長）
  mv-sp.jpg        # スマホ用メインビジュアル（縦長）
  mv-vertical.jpg  # 一覧サムネイル用（縦長）
  1.jpg            # 詳細ページ：1枚目
  2.jpg            # 詳細ページ：2枚目
  ...              # 枚数は自動検出、拡張子は jpg/png/webp 混在OK
```

スラグ名はURLになる（例：`sauna1f` → `/works/sauna1f/`）。
英数字・ハイフンのみ使用。

### 2. mdファイルを作る

`src/content/works/<スラグ名>.md` を作成。
既存のファイルを参考に frontmatter を書く。
`order` は現在の最大値（9）より大きい数を入れる。

### 3. push してデプロイ

ユーザーが準備完了と言ったら以下を実行すること：

```bash
cd /Users/taiki/Desktop/portfolio-site/3_2024/Coding/st-portfolio
pnpm works:publish
```

これで git add → commit → push → CMS管理画面を開く、が自動で実行される。

## 重要な設計ルール

- **`src/data/works.ts` は廃止済み**。実績データは `src/content/works/*.md` で管理する
- **`imageCount` は不要**。`public/detail/<slug>/` フォルダの連番画像を自動検出する
- **表示順は `order` フィールド**で管理。小さいほど一覧の先頭に表示される
- 画像パスは `/detail/<slug>/mv-pc.jpg` などフォルダ規約で自動解決されるため、mdに画像パスを書く必要はない

## デプロイ関連

- GitHub リポジトリ：INxST/st-portfolio（main ブランチ）
- Xserver SSH：sv10363.xserver.jp ポート 10022
- 国外アクセス制限は **OFF** にしておくこと（ONだとGitHub Actionsからのデプロイが失敗する）
- CMS管理画面：https://taikisato.com/admin/

## CMSについて

Sveltia CMS を使用。GitHub OAuth 認証は Cloudflare Workers プロキシ経由。
- Workerデプロイ先：sveltia-cms-auth.taiki0521.workers.dev
- ローカルのWorkerコード：~/sveltia-cms-auth/
