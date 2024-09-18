#!/usr/bin/env sh

VERSION="$1"

if [ -z "$VERSION" ]; then
    echo "Версія не вказана"
    exit 1
fi

if [ -d ".будування/$VERSION" ]; then
  read -p "Версія $VERSION вже існує. Перезаписати? [так/ні] " -r
  if [ "$REPLY" != "так" ]; then
    echo "Операцію скасовано"
    exit 0
  fi
  echo "Будуємо $VERSION"
fi

rm -rf ".будування/$VERSION"

докс перетворити --вхід=документація --вихід=".будування/$VERSION/документація" --вигляд=тема
cp -a ресурси index.html .будування
докс карта --вхід=.будування --вихід=.будування --домен=ціль.укр
find .будування -type f -name "*.html" -exec sed -i "s/{{ВЕРСІЯ_ЦІЛІ}}/$VERSION/g" {} \;

echo "Готово"