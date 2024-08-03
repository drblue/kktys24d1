export {};

const say = (msg: string) => {
	console.log("You said: " + msg);
	return true;
	// return "You said: " + msg;
}

type SayReturnType = ReturnType<typeof say>;
//     ^?

const sayAsync = async (msg: string) => {
	console.log("You said: " + msg);
	return true;
	// return "You said: " + msg;
}
type SayAsyncReturnType = ReturnType<typeof sayAsync>;    // Promise<boolean>
//               ^?

type SayAsyncResolvedReturnType = Awaited<SayAsyncReturnType>;

type SmallGet = "get";
type LargeGet = Uppercase<SmallGet>;

type ProperGet = Capitalize<SmallGet>;
