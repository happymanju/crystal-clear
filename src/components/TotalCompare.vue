<template>
 <div>
    <div class="compare">On average, one MyMizu user saves 325kg of CO2 emission per year! That is as much as 15</div>
    <div class="tree-wrapper">
        <img  class="tree-icon" src="../assets/woods2.png">
        
    </div>  
    <div>trees can clean out of the air in the same time!</div>
</div>
</template>

<script>


export default {
  name: 'TotalCompare',
  

}
</script>

<style>
.tree-icon {
    justify-content: center;
    /* flex-direction: row; */
    background-color: white;
    
    max-width: 100%;
    height: auto;
}

.tree-wrapper {
    grid-gap: 5px;
}
</style>