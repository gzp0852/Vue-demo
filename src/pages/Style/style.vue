<template>
  <div class="layout">
    <Sider
      v-if="menus.length > 0"
      :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}"
    >
      <Menu :active-name="activeName" theme="dark" width="auto" :open-names="openName">
        <Submenu :name="menu.id" v-for="menu of menus" :key="menu.id">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            {{menu.name}}
          </template>
          <div @click="desc(item.desc)"  v-for="item of menu.child"
              :key="item.id">
            <MenuItem
              :name="item.id"
              :to="{path: item.url, params: {name: 'item.desc'}}"
            >{{item.name}}</MenuItem>
          </div>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>{{breadcrumb}}</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <router-view></router-view>
        </Card>
      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>
<script>
import Content from "./content.vue";
export default {
  data() {
    return {
      activeName: "",
      openName: [],
      menus: [],
      breadcrumb: ""
    };
  },
  mounted() {
    this.getMenu();
  },
  methods: {
    getMenu() {
      // const _this = this;
      this.$http.get("http://localhost:8900/menu/getMenu").then(function(res) {
        if (res.data.code === 0) {
          this.menus = res.data.data;
          this.openName = [this.menus[0].id];
          this.activeName = this.menus[0]["child"][0].id;
          this.breadcrumb = this.menus[0]["child"][0].desc;
        } else {
          alert(res.data.msg);
        }
      });
    },
    desc(desc) {
      this.breadcrumb = desc;
    }
  },
  components: [Content]
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>
