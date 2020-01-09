# Promise Cache Controller

开发中 2020-01-09

扩展了Promise返回的前端缓存控制器（支持同步访问操作），目前支持基于LocalStorage，SessionStorage,RAM作为底层存储组件

主要用于配合Axios实现可配置的自动前端缓存，用法见于我fork的axios 分支： git@github.com:MissionLee/axios.git

# 功能/特性
- 注意：独立使用的时候除了RAMCacheController，其他没有太大价值，作者开发这个组件主要为将其作为Axios的一个Interceptor，通过简单配置，可以进行自动数据缓存
- 服务于 JSON数据
- 提供同步的缓存存取功能
- 提供Promise访问存储功能：用于配合如 axios 这样的基于Promise的前端ajax组件
