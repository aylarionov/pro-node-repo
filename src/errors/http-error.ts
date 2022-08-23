export class BOTError extends Error {
	statusCode?: number;
	context?: string;

	constructor(message: string, context?: string, statusCode?: number) {
		super(message);
		this.message = message;
		this.statusCode = statusCode;
		this.context = context;
	}
}
