<template>
    <div class="form">
        <h1>Home</h1>
        <router-link :to ="{name:'WordCount'}"><button><b>Word Count</b></button></router-link><br/><br/>
        <router-link :to ="{name:'bubble'}"><button><b>Bubble</b></button></router-link><br/><br/>
        <router-link :to ="{name:'Sum'}"><button><b>Sum</b></button></router-link><br/><br/>
        <router-link :to ="{name:'repeatString'}"><button><b>Repeat String</b></button></router-link><br/><br/>
        <router-link :to ="{name:'confirmEnding'}"><button><b>Confirm Ending</b></button></router-link><br/><br/>
        <router-link :to ="{name:'sumOfNumberInRange'}"><button><b>SumOfNumbersInRange</b></button></router-link><br/><br/>
        <router-link :to ="{name:'longestWord'}"><button><b>Longest Word</b></button></router-link><br/><br/>
    </div>
</template>
<style>
.form{
        text-align: center;
        background-color: whitesmoke;
        font-weight: bold;
        padding-top:250px;
        padding-bottom:250px;
        font-size: 20px;
        
    }
</style>