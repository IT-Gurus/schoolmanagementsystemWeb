<template>
  <div id="app">
   <h1>School Management System</h1>
   <ul>
   <li v-for="fee of fees" :key="fee.courseId" >
    {{fee.courseType}}
   </li>
   </ul>
  </div>
</template>

<script>
import FeesService from "@/service/FeesService.js";

export default {
  name: 'App',
 data(){
return {
fees:[

]
};
},
 created(){

  FeesService.getFees().
then(res=>{
console.log(res.data)
})
.catch(error=>{
console.log(error)
});

}


};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul{
margin: 0px;
padding:0px;
}

li{
list-style:none;
}

</style>
