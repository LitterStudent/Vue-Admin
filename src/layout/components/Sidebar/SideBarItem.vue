<template>
  <div>
     <template v-if="hasOneShowingChild(item.children,item)">

     </template>
  </div>
</template>

<script>
// import path from 'path'
// import { isExternal } from '@/utils/validate'
export default {
 name: 'SidebarItem',
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
         const showingChildren = children.filter(item=>{
             if(item.hidden){
                return false
             }
             else{
                this.onlyOneChild = item;
                return true
             }
         })

         if(children.length === 1){
             return true
         }
         if(showingChildren.length === 0){
            this.onlyOneChild = { ...parent,path: '', noShowingChildren: true}
            return true 
         }

         return false
     }
 }
}
</script>

<style>

</style>