type ValidationError = {
	path: string;
	msg: string;
}

type JSendErrorResponse = {
	status: "error";
	message: string;
}

type JSendFailResponse = {
	status: "fail";
	data: ValidationError[];
}

/* Generic Type (Alias) */
type JSendSuccessResponse<T> = {
	status: "success";
	data: T;
}

export type JSendResponse<T> = JSendSuccessResponse<T> | JSendErrorResponse | JSendFailResponse;
