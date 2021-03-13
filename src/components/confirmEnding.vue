<template>
    <div id="confirmEnding">
        <p>Confirm the ending word of the string</p>
        <p>Input string</p>
        <textarea v-model="str"/>
        <p>Input target</p>
        <textarea v-model="target"/>
        <br/><router-link :to ="{name:'todo', params: { confirmEnding } }"><button>Confirm Ending</button></router-link>


    </div>
</template>
<script>

export default {
    name:"confirmEnding",
    data(){
        return{
            str:"",
            target:"",
        }
    },
    computed:{
        confirmEnding:function(){
            var str1=this.str.toLowerCase();
            var str2=this.target.toLowerCase();
            if(str1.substr(-str2.length)==str2){
                return "true";
            }
            return "false";
        }
    }
    
};
</script>