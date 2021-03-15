
<template>
  <div>
    <p v-if="Add">sum:{{Add}}<br></p>
    <p v-if="quick">Sorted Array:{{quick}}</p>
    <p v-if="Word">Word Count:{{Word}}</p>
    <p v-if="findlongestWord">Longest Word:{{findlongestWord}}</p>
    <p v-if="repeatString">Repeat String:{{repeatString}}</p>
    <p v-if="sumOfNumber">Sum of Numbers In Range:{{sumOfNumber}}</p>
    <p v-if="confirmEnding">Does the input string end with the target string:{{confirmEnding}}</p>
    <br/><router-link tag="button" :to ="{name:'homepage' }">Go to HomePage</router-link>
  </div>
</template>

<script>
module.exports = {
  props: ['Add','quick','Word','findlongestWord','confirmEnding','repeatString','sumOfNumber'],


}
  </script>
