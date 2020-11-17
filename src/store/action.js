export default {
	addNum({ commit, state }, id) {
		//记录答案id，判断是否是最后一题
		commit('REMBER_ANSWER', id);
		if (state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM', 1);
		}
	},

	//初始化
	initializeData({ commit }) {
		commit('INITIALIZE_DATA');
	}
}