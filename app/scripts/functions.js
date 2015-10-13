function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function mapToJSON(array) {
	return _.map(array, function(model){
		return model.toJSON();
	});
}

function mapPrices(array) {
	var arr = _.map(array, function(model){
		model.price = (model.price/100).toFixed(2);
	});
	return arr;
}

export {capitalizeFirstLetter, mapToJSON, mapPrices};
