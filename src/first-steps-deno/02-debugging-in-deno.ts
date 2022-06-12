/**
 * @console
 * In the console the flag to generate a breakpoint to evaluate the results
 * @flag --inspect-brk
 */
const now = new Date();

console.log(
	`The time now is ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
);

/**
 * @Console
 * You can use the --inspect flag to make a debugging session too, but this needs a debugger
 * @Needs debugger keyword
 * @flag --inspect
 */
const someOperation = () => {
	console.log('Some operation happend 1...');
	// debugger; // Error `debugger` statement is not allowed - Remove the `debugger` statementdeno-lint(no-debugger)
	console.log('Some operation happend 2...');
};

someOperation();
setTimeout(() => {
	console.log('Set Timeout');
}, 150000);

/**
 * @Conclusion
 * The flag --inspect-brk is the nice one, because the --inpect flag don't stops the
 * normal execution, and this don't allow to debugger if the code is fast or tiny
 */
