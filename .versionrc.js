/**
 * 存在的问题
 * 1.获取不到{{owner}}和{{repository}}
 * 2.短id无法关联到云效的issues(需要使用云效任务的长id)
 * 3.第一个版本没有tag导致的链接问题
 * @see[@link=https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.1.0/README.md]
 */
module.exports = {
  "header": "# 更新日志",
  "types": [
    {"type": "feat", "section": "新特性"},
    {"type": "fix", "section": "Bug 修复"},
    {"type": "docs", "hidden": true},
    {"type": "style", "hidden": true},
    {"type": "refactor", "hidden": true},
    {"type": "perf", "hidden": true},
    {"type": "test", "hidden": true},
    {"type": "build", "hidden": true},
    {"type": "ci", "hidden": true},
    {"type": "chore", "hidden": true},
    {"type": "revert", "hidden": true}
  ],
  "compareUrlFormat": "{{NULL}}",
  "commitUrlFormat": "{{host}}/5f606fca5fd102f22f6be999/it_dev/front-end/admin-template/commit/{{hash}}",
  "issueUrlFormat": "https://devops.aliyun.com/task/{{id}}"
}