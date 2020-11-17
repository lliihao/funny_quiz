<template>

  	<section>

    	<header class="top_tips">
    		<span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
    		<span class="num_tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
    	</header>

    	<div v-if="fatherComponent == 'home'" >
    		<div class="home_logo item_container_style"></div>
    		<router-link to="item" class="start button_style" ></router-link>
    	</div>

    	<div v-if="fatherComponent == 'item'" >
    		<div class="item_back item_container_style">
    			<div class="item_list_container" v-if="itemDetail.length > 0">
    				<header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
    				<ul>
    					<li v-for="(item, index) in itemDetail[itemNum-1].topic_answer" :key="index" @click="choosed(index, item.topic_answer_id)" class="item_list">

    						<span class="option_style" v-bind:class="{'has_choosed':choosedNum==index}">{{chooseType(index)}}</span>
    						<span class="option_detail">{{item.answer_name}}</span>

    					</li>
    				</ul>
    			</div>
    		</div>
    		<span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
    		<span class="submit_item button_style" v-else @click="submitAnswer"></span>
    	</div>

  	</section>

</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {

	name: 'itemcontainer',

	data() {
		return {
			itemId: null, //题目ID
			choosedNum: null, //选中答案索引
			choosedId:null //选中答案id
		}
	},

	  props:['fatherComponent'],
	  
  	computed: mapState([
	  	'itemNum', //题目序号
  		'level', //第几周
  		'itemDetail', //题目内容
  		'timer', //计时器
	]),

  	methods: {
  		...mapActions([	
  			'addNum', 'initializeData',
  		]),
  		
  		nextItem(){		//点击下一题
  			if (this.choosedNum !== null) {
	  			this.choosedNum = null;
				this.addNum(this.choosedId)
				  
  			}else{
  				alert('您还没有选择答案')
  			}
		  },
		  
  		//索引0-3对应A-D
	  	chooseType: type => {

	  		switch(type){
	  			case 0: return 'A';
	  			case 1: return 'B';
	  			case 2: return 'C';
	  			case 3: return 'D';
	  		}
		},
		  
	  	//选中的答案
	  	choosed(type,id){
	  		this.choosedNum = type;
	  		this.choosedId = id;
		},
		  
	  	//交卷
	  	submitAnswer(){
	  		if (this.choosedNum !== null) {
	  			this.addNum(this.choosedId)
	  			clearInterval(this.timer)
	  			this.$router.push('score')
  			}else{
  				alert('您还没有选择答案')
  			}
	  	},
	},

	created(){
		//初始化
		if(this.fatherComponent == 'home') {
			this.initializeData();
			document.body.style.backgroundImage = 'url(./static/img/1-1.jpg)';
		}
	}
}
</script>

<style lang="less">
	.start{
        background-image: url(../images/1-4.png);
	}

	.top_tips{
		position: absolute;
		height: 7.35rem;
		width: 3.25rem;
		top: -1.3rem;
		right: 1.6rem;
		background: url(../images/WechatIMG2.png) no-repeat;
		background-size: 100% 100%;
		z-index: 10;
		.num_tip{
			position: absolute;
			height: 0.7rem;
			width: 2.5rem;
			left: 0.48rem;
			bottom: 1.1rem;
			text-align: center;
			font-family: '楷体';
			font-size: 0.6rem;
			font-weight: 600;
			color: #a57c50;
		}
	}

	.item_container_style{
		position: absolute;
		height: 11.625rem;
		width: 13.15rem;
		top: 4.1rem;
		left: 1rem;
		background-repeat: repeat;
	}	
	.item_back{
		background-image: url(../images/2-1.png);
		background-size: 100% 100%;
	}

	.home_logo{
		background-position: right center;
		background-image: url(../images/1-2.png);
		background-size: 13.142rem 100%;
	}

	.button_style{
        display: block;
		background-size: 100% 100%;
		height: 2.1rem;
        width: 4.35rem;
        position: absolute;
        top: 16.5rem;
        left: 50%;
        margin-left: -2.4rem;
        background-repeat: no-repeat;
	}
	
    .next_item{
    	background-image: url(../images/2-2.png);
	}
	
    .submit_item{
    	background-image: url(../images/3-1.png);
	}

	

    .item_list_container{
    	position: absolute;
    	height: 7.0rem;
    	width: 8.0rem;
    	top: 2.4rem;
    	left: 3rem;
		-webkit-font-smoothing: antialiased;
	}
	
	.item_title{
		font-size: 0.65rem;
		color: #6e0;
		line-height: 0.7rem;
	}

	.item_list{
		font-size: 0;
		margin-top: 0.4rem;
		width: 10rem;

		span{
			display: inline-block;
			font-size: 0.6rem;
			color: rgb(179, 187, 64);
			vertical-align: middle;
		}
		.option_style{
			height: 0.725rem;
			width: 0.725rem;
			border: 1px solid #fff;
			border-radius: 50%;
			line-height: 0.725rem;
			text-align: center;
			margin-right: 0.3rem;
			font-size: 0.5rem;
			font-family: 'Arial';
		}
		.has_choosed{
			background-color: #ffd400;
			color: #575757;
			border-color: #ffd400;
		}
		.option_detail{
			width: 7.5rem;
			padding-top: 0.11rem;
		}
	}
</style>
