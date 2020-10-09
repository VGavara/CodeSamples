import {Request, Response} from "express";

/**
 * Performs a delay
 * @param delay Delay, in seconds
 * @returns Promise that resolves to void when the time defined by delay has elapsed
 */
function sleepFor(delay: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, delay * 1000));
}

/**
 * Implements the GC function helloWorld implementing an HTTP signature
 * and, therefore, intended to be triggered by an HTTP event
 * @param {Request} req Express HTTP request
 * @param {Response} res Express HTTP response
 */
export const helloWorld = (req:Request, res:Response) => {
    // Get the function input
    console.log(`Received: ${JSON.stringify(req.body)}`);

    // Perform some stuff
    sleepFor(3).then(() => {
        // Return the function result using the res function argument
        res.status(200).send(req.body)
        console.log("Echo response sent");
    });
}