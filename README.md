# helloiamam

Лёгкий статический сайт-заглушка для `helloiam.am` с переключением emoji.

## Live
- Production (GitHub Pages): `https://rybushkin.github.io/helloiamam/`
- Repository: `https://github.com/rybushkin/helloiamam`

## Stack
- `index.html` - разметка
- `styles.css` - стили (включая mobile-адаптацию)
- `script.js` - логика смены/предзагрузки emoji
- `emoji/` - PNG-эмодзи ассеты

## Local Preview
Любой статический сервер подойдёт. Например:

```bash
python3 -m http.server 8080
```

Открой: `http://localhost:8080`

## Deploy
Проект деплоится через GitHub Pages из:
- branch: `main`
- folder: `/` (root)

После `git push origin main` обновление обычно появляется через 1-2 минуты.

## Notes
- Сгенерированные медиа (GIF/MP4) пока не коммитятся по договорённости.
- Текущий рабочий snapshot проекта: `PROJECT_SNAPSHOT.md`.
