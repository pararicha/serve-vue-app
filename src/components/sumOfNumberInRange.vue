<template>
<div id="sumOfNumberInRange">
    <p>sum of all Numbers in a Range</p>
    <p>Input array(Range in form of an array)</p>
    <input v-model="inputArr"><br>
    <router-link :to ="{name:'todo', params: { sumOfNumber} }"><button>Sum of Number</button></router-link> 
</div>
</template>
<script>
export default {
    name:'sumOfNumberInRange',
    data(){
        return{
            inputArr:"1,4",
        }
    },
    computed:{
        sumOfNumber : function(){
            var newArr = this.inputArr.split(',').map(Number);
            var sum =0;
            //var newArray = [];
            var start = parseInt(newArr[0]);
            var end = parseInt(newArr[1]);
            if(end < start)
            {
                start=newArr[1];
                end=newArr[0];
            }
            for(let i= start; i <= end; i++)
            { 
                sum = sum+i;
                console.log(sum);
            }
            return sum;
        }
    }
}
</script>