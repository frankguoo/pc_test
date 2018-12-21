var vm = new Vue({
	el: '#form',
	data: {
		rate_bar: false,
		costUsage: 288,
		costSpeed: 0,
		costUnlimited: 0,
		costOutside: 0,
		costLocal: 0,
	},
	computed: {
		totalCost: function(){
			return Number(this.costUsage)+Number(this.costSpeed)+Number(this.costUnlimited)+Number(this.costOutside)+Number(this.costLocal);
		}
	},
});
