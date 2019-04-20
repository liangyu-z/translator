<template>
  <a-layout>
    <a-row>
      <a-col :span="8" class="side-bar">
          <project-list :listData="listData"/>
          {{listData}}
      </a-col>
      <a-col :span="16">col-8</a-col>
    </a-row>
  </a-layout>
</template>
<script>
import ProjectList from './project-list';
import ProjectRepo from '../../assets/repos/project/ProjectRepo.ts';
import Project from '../../assets/repos/project/Project.ts';

export default {
  name: 'Home',
  components: {
    ProjectList,
  },
  data() {
    return {
      loading: false,
      loadingMore: false,
      showLoadingMore: true,
      listData: [],
    };
  },
  mounted() {
    for (let i = 0; i < 10; i += 1) {
      ProjectRepo.insert(new Project(`测试项目${i}`, `/User/zhangly/Translation/${i}`));
    }
    this.listData = ProjectRepo.query();
  },
  methods: {
    getData() {},
    onLoadMore() {},
  },
};
</script>
<style>
.side-bar {
  height: 480px;
  overflow: scroll;
  background-color: white;
}
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
</style>