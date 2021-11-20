<template>
  <div>
    <i v-if="isElicon" :class="[icon,'sub-el-icon']"/>
    <svg v-if="!isElicon" class="svg-icon" aria-hidden="true" >
        <use :xlink:href="'#icon-'+icon" />
    </svg>
    <span slot='title'>{{title}} </span>  
    
  </div>
</template>

<script>
export default {
 name:'MenuItem',
 props:{
     icon:{
         type:String,
         default:''
     },
     title:{
         type:String,
         default:''
     }
 },
 computed:{
     isElicon(){
         return this.icon.includes('el-icon')
     }
 }
}
</script>

<style>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}

.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover!important;
  display: inline-block;
}
</style>