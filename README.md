This project is developed based on other excellent projects on Github, including but not limited to:

- [nextjs](https://github.com/vercel/next.js)
- [chatgpt-api](https://github.com/transitive-bullshit/chatgpt-api)
- [awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts)

Thanks to the selfless contributions of these developers.

## Features

- Supports conversation
- Supports switching of assistant role
- Supports PC/Mobile devices
- [ ] TODO: Persistent conversation
- [ ] TODO: Supports login

![](./public/WX20230212-192111.png)
![](./public/WX20230212-192112.png)

## Getting Started

If you want to experience it directly, you can visit [ai-assistant demo](https://ai.gonote.io). (If you find that it is unable to answer, it might be because the key balance is insufficient, you can raise an issue)

### Deploy with pm2

prerequisites

- nodejs
- npm

1. clone `ai-assistant`

```bash
git clone https://github.com/youking-lib/ai-assistant.git
npm i -g pnpm pm2
```

2. add `.env` file

```bash
# SITE_GOOGLE_ANALYTICS=
OPENAI_API_KEY=
```

3. deploy

```
sh deploy.sh
```

### Deploy with docker

```bash
# TODO
```

### Local

Same as `deploy with pm2`：

- Clone this project.
- Add the .env file (or .env.local for development purposes, which will not be committed).
- Run the following script:

```
pnpm i
pnpm run dev
```

The server has started and is now running on localhost at port 3000.
