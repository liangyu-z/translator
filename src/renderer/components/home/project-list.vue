<template>
  <a-list
    class="demo-loadmore-list, prject-list"
    :loading="loading"
    size="small"
    itemLayout="horizontal"
    :dataSource="listData"
  >
    <a-list-item slot="renderItem" slot-scope="item">
      <a slot="actions" style>
        <a-icon type="close"/>
      </a>
      <a-list-item-meta class="project-item">
        <a slot="title" href="#">{{truncated(item.name, 13)}}</a>
        <span slot="description" class="project-path">{{truncated(item.path)}}</span>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>
<script>
import StringUtils from '../utils/string.js';

export default {
  name: 'ProjectList',
  data() {
    return {
      loading: false,
      loadingMore: false,
      showLoadingMore: true,
    };
  },
  props: {
    listData: Array,
  },
  methods: {
    truncated(str, size, suffix) {
      return StringUtils.truncated(str, size, suffix);
    },
  },
};
</script>
<style>
.project-item {
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.prject-list {
  margin-left: 10px;
  margin-right: 10px;
  overflow: hidden;
}
.project-path {
    font-size: 12px;
}
</style>