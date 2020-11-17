<template>
  	<div>
    	<itemcontainer father-component="item"></itemcontainer>
  	</div>
</template>

<script>
import itemcontainer from '../components/itemcontainer'

export default {
	name: 'item',
  	components: {
   		itemcontainer
  	},
  	created(){
      //开始答题时计时
  		this.$store.commit('REMBER_TIME');
  	}
}

</script>

<style>
    

</style>
