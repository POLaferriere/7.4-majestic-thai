function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function mapToJSON(array) {
	return _.map(array, function(model){
		return model.toJSON();
	});
}

export {capitalizeFirstLetter, mapToJSON};
