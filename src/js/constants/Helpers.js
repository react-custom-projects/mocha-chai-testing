export const updateObject = (oldObject, UpdatedValues) => {
	return {
		...oldObject,
		...UpdatedValues,
	};
};

export const doIncrement = (num) => num + 1;

export const doDecrement = (num) => num - 1;
