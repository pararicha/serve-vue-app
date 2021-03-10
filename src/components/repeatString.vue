<template>
    <div>
        <p>Repeat String</p>
        <p>Input String</p>
        <textarea v-model="str"/>
        <p>Number of times you want the string to be repeated</p>
        <input v-model="num">
        <br/><router-link :to ="{name:'todo', params: { repeatString } }"><button>Repeat String</button></router-link>

    </div>
</template>
<script>
    export default {
        name:"RepeatString",
        data(){
            return{
                str:"",
                num:0,
            }
        },
        computed:{
            repeatString:function(){
                var repeatStr ="";
                var num1 =this.num;
                while(num1>0){
                    repeatStr += this.str.concat(", ");
                    num1--;
                }
          return repeatStr.substring(0,repeatStr.length-2);
            
        }
        },
    }
</script>