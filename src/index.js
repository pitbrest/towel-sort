
// You should implement your task here.


module.exports = function towelSort(matrix) {

	if (arguments.length == 0) {return []}

	else {
	
		let sup = matrix.slice(0)
		let arr = []
		
		sup.forEach((item, index) => {
			if (index % 2 != 0) {
				sup[index].sort((a, b) => b - a)
			}
		})
	
		sup.forEach(item => {
			for (let i = 0; i < item.length; i++) {
			arr.push(item[i])		
			}
		})
	return arr
	}	
}
