<template>
  <div v-if="!item.hidden">
     <!-- 如果没有子路由或者子路由只有一个而且子路由没有子路由就显示出来menu-item -->
     <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) ">
      <app-link :to='resolvePath(onlyOneChild.path)'>
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
           <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
     </template>

     <el-submenu v-else ref='submenu' :index='resolvePath(item.path)' popper-append-to-body>
        <template slot="title">
         <item v-if="item.meta" :icon='item.meta.icon' :title="item.meta.title"/>
        </template>
        <sidebar-item
         v-for="child in item.children"
         :key="child.path"
         :is-nest="true"
         :item="child"
         :base-path="resolvePath(child.path)"
         class="nest-menu"
        />
     </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import AppLink from './Link.vue'
import Item from './Item.vue'
export default {
 name: 'SidebarItem',
 components:{
    AppLink,
    Item
 },
 props:{
    item: {
       type: Object,
       require: true
    },
    isNest: {
       type: Boolean,
       default: false
    },
    basePath: {
        type: String,
        default: ""
    }

 },
 data(){
    return {}
 },
 methods: {
     hasOneShowingChild(children = [], parent){
      //   console.log(parent);
         const showingChildren = children.filter(item=>{
            //过滤掉子路由中hidden为true的路由
             if(item.hidden){
                return false
             }
             else{
                this.onlyOneChild = item;
                return true
             }
         })
         // console.log(this.onlyOneChild);
         
         if(showingChildren.length === 1){
            // console.log(this.onlyOneChild);
             return true
         }
         if(showingChildren.length === 0){
            this.onlyOneChild = { ...parent,path: '', noShowingChildren: true}
           
           return true 
         }

         return false
     },
     resolvePath(routePath) {

      if (isExternal(routePath)) {
        //如果是外部链接直接返回
        return routePath
      }
      if (isExternal(this.basePath)) {
        //如果basePath是外部链接返回。
        return this.basePath
      }
      //否则返回合成路径
      return path.resolve(this.basePath, routePath)
    }
 }
}
</script>

<style>

</style>