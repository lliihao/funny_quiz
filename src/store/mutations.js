const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'    //mutation-types
export default {
	//点击进入下一题
	[ADD_ITEMNUM](state, num) {	//使用一个常量作为函数名
		state.itemNum += num;
	},

	[REMBER_ANSWER](state, id) {
		state.answerid.push(id);
	},

	[REMBER_TIME](state) {
		state.timer = setInterval(() => {
			state.allTime++;
		}, 1000)
	},
	
	[INITIALIZE_DATA](state) {	//初始化
		state.itemNum = 1;
		state.allTime = 0;
		state.answerid = [];
	},
}