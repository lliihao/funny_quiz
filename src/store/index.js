import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'


Vue.use(Vuex)

const state = {
	level: '第一周', //活动周数
	itemNum: 1, // 第几题
	allTime: 0,  //总共用时
	timer: '', //定时器

	itemDetail: [{
		"topic_name": "1 + 2 = ? ",
		"topic_answer": [{
			"topic_answer_id": 1,
			"answer_name": "1",
		}, {
			"topic_answer_id": 2,
			"answer_name": "3",
		}, {
			"topic_answer_id": 3,
			"answer_name": "2",
		}, {
			"topic_answer_id": 4,
			"answer_name": "6",
		}]
	}, {
		"topic_name": "2 + 4 = ? ",
		"topic_answer": [{
			"topic_answer_id": 5,
			"answer_name": "2",
		}, {
			"topic_answer_id": 6,
			"answer_name": "4",
		}, {
			"topic_answer_id": 7,
			"answer_name": "6",
		}, {
			"topic_answer_id": 8,
			"answer_name": "8",
		}]
	}, {
		"topic_name": "3 + 3 = ? ",
		"topic_answer": [{
			"topic_answer_id": 9,
			"answer_name": "3",
		}, {
			"topic_answer_id": 10,
			"answer_name": "4",
		}, {
			"topic_answer_id": 11,
			"answer_name": "5",
		}, {
			"topic_answer_id": 12,
			"answer_name": "6",
		}]
	}, {
		"topic_name": "5 + 5 = ? ",
		"topic_answer": [{
			"topic_answer_id": 13,
			"answer_name": "10",
		}, {
			"topic_answer_id": 14,
			"answer_name": "12",
		}, {
			"topic_answer_id": 15,
			"answer_name": "14",
		}, {
			"topic_answer_id": 16,
			"answer_name": "16",
		}]
	}, {
		"topic_name": "20 + 20 = ? ",
		"topic_answer": [{
			"topic_answer_id": 17,
			"answer_name": "30",
		}, {
			"topic_answer_id": 18,
			"answer_name": "40",
		}, {
			"topic_answer_id": 19,
			"answer_name": "70",
		}, {
			"topic_answer_id": 20,
			"answer_name": "80",
		}]
	}],

	answerid: [], 
	
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})