/*
 * @Author: Echi
 * @Date: 2019-03-24
 * app启动文件，用于自定义启动时的初始化工作,只返回一个函数
 */
import { Application } from 'egg';

export default (app: Application) => {
  // 添加启动时自动新增数据表
  app.beforeStart(async () => {
    app.logger.info('app beforeStart');
    if (app.env === 'local') {
      app.logger.info('sync db ...');
      await app.model.sync();
      app.logger.info('sync db completed ...');
    }
  });
 };
