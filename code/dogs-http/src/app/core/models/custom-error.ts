import { ErrorCode } from "@app/helpers/enumerations/ErrorCode";

/**
 * Custom Error class. 
 * The only difference between this and the classic Typescript error is that CustomError allows you to pass the error name in the constructor.
 */
export class CustomError extends Error {
    constructor(name: ErrorCode, message: string) {
        super(message);
        this.name = name;
    }
}
