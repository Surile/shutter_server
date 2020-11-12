# CloudBase App 应用模板
> 使用腾讯云开发HTTP API访问，一云多端

# 为什么选择CloudBase？

经过多方面考查，发现目前市场的serverles，虽然说大多数都能做多无需自行搭建服务器或者维护服务器，但是数据库这块可能需要服务商提供或者是自行搭建，阿里云数据库发现价格有点贵，腾讯云也是，对于想白嫖的我并不合适。CloudBase提供云储存，云数据这些东西，而且每个月都有免费额度，你懂得...

# 应用开发指南
- 使用CloudBase Framework 描述了应用的组成和依赖资源如相关的数据库集合等
- 使用{{env.ENV_ID}}这种动态变量模式引用了应用依赖的动态变量信息等

# 运行
> 目前暂时不知道怎么本地调试，那位大佬知道的话，请告知下，多谢。

### 下载依赖

```javascript
  yarn || npm install
```

### 创建多环境配置文件

```javascript
  .env.development
  .env.production
  .env.staging
```

### 测试环境部署

```javascript
  yarn deploy:dev
```

### 预发布环境部署

```javascript
  yarn deploy:stage
```

### 正式环境部署

```javascript
  yarn deploy:prod
```

# 案例

- 云数据库 
- 云储存
- 用户身份认证

目前以上CloudBase提供的服务，都还未使用到，后期将会慢慢完善。


