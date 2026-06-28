#!/bin/bash
set -e

# 変更がなければ何もしない
if git diff --quiet && git diff --staged --quiet; then
  echo "変更なし。追加した画像・mdファイルがあるか確認してください。"
  exit 0
fi

# コミットメッセージ生成（引数があれば使う）
MSG="${1:-実績を更新}"

echo "📦 変更をコミットしています..."
git add -A
git commit -m "$MSG"

echo "🚀 GitHubにプッシュしています..."
git push

echo "✅ 完了！GitHub Actionsがビルド＆デプロイを開始しました。"
echo "   反映まで2〜3分かかります。"
echo ""
echo "🖥 CMS管理画面を開きます..."
open "https://taikisato.com/admin/"
