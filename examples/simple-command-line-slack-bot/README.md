# Simple command line Slack Bot

Interacting your Slack with slash commands by typing string like below:

![screenshot-slash-command-line.png](https://s2.loli.net/2023/09/14/GkYqd2BFgpACPHs.png)

## Getting Started with Slash Commands

Creating a command App, just need three things:

- Preparing your AirCode App to receive commands
- Creating a Slack App and named your commands
- Responding to commands

## Preparing your AirCode App to receive Commands

- Click [![Deploy with AirCode](https://aircode.io/aircode-deploy-button.svg)](https://aircode.io/dashboard?owner=AirCodeLabs&repo=aircode&branch=main&path=examples%2Fsimple-command-line-slack-bot&appname=simple%20command%20line%20slack%20bot) get a copy as your app, then Deploy this app to online, we need an invoke URL like below:

![deploy.png](https://s2.loli.net/2023/09/14/Zs8QMrCIfShJv5B.png)

## Creating Slack App and command

1.go [api.slack.com](https://api.slack.com/apps?new_app=1) create an new app.

![slash-command-line-1.png](https://s2.loli.net/2023/09/14/jWnJvoAqHT3dpg8.png)

![slash-command-line-3.png](https://s2.loli.net/2023/09/14/K3kO2fV9YSneHLs.png)

2.Slack send a payload to the Request URL, when the command is invoked by a user. Paste and the URL you got from AirCode after you deployed the `hello.ts` function in the first step.

![slash-command-5.png](https://s2.loli.net/2023/09/14/yJtKXpRSICGwOji.png)

3.Install your app into workspace to test your app.

![slash-command-7.png](https://s2.loli.net/2023/09/14/dD3FS8zVptmI1Jj.png)

## Responding to Commands

In this example, when user use command `/hello`, we response `world`: 

```js
// @see https://docs.aircode.io/guide/functions/
import aircode from 'aircode';

export default async function (params: any, context: any) {
  console.log('Received params:', params);
  return 'world';
};
```

![screenshot-slash-command-line.png](https://s2.loli.net/2023/09/14/GkYqd2BFgpACPHs.png)

For more responding complex formatting or Block Kit, you can check Slack doc here [Sending an immediate response](https://api.slack.com/interactivity/slash-commands#responding_immediate_response).
