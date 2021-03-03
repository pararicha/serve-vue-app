<template>
    <div id="LongestWord">
        <p>Calculate longest Word</p>
        <p>Input 1</p>
        <textarea class= "textbox" v-model="str"/>
        <!-- <p>LongestWord: {{findlongestWord}}</p>  -->
        <br/><router-link :to ="{name:'todo', params: { findlongestWord } }"><button>Calculate Longest Word</button></router-link>

    </div>
</template>
<script>
export default {
    name : "LongestWord",
    data(){
        return{
            str:"",
        }
    },
    computed:{
        findlongestWord:function(){
            var strSplit=this.str.split(' ');
            var longestWordLength = 0;
            var longestWord='';
            for(let i=0; i< strSplit.length; i++){
                if(strSplit[i].length > longestWordLength)
                {
                //console.log(longestWord);
                longestWordLength = strSplit[i].length;
                longestWord = strSplit[i];
                }
            }

        return [longestWordLength,longestWord];
        }
    }
}
</script>
<style> 
 .textbox{
  margin-top: 10px;
  /* transition: width 0.4s ease-in-out;  */
}
.textbox:focus {
  width: 50%;
  height:200px;
  transition: width 0.4s ease-in-out; 
}
</style>