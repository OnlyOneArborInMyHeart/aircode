const App = require('aircode-app');

const app = new App();

app.use(ctx => {
  let lang = ctx.params.lang || 'en-US';
  let vid = ctx.params.vid;
  if(!vid) {
    if(lang === 'zh-CN') {
      vid = 'ai1-cmn-CN-Shiyun';
    } else {
      vid = 'ai3-Jenny';
    }
  }
  ctx.set('content-type', 'text/html');
  ctx.body = app.display('./views/index.html', {lang, vid});
});

module.exports = app.run();
