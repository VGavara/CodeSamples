"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sleepFor = (delay) => new Promise((resolve) => setTimeout(resolve, delay * 1000));
exports.helloWorld = (req, res) => {
    console.log(`Received: ${JSON.stringify(req.body)}`);
    sleepFor(3).then(() => {
        res.status(200).send(req.body);
        console.log("Echo response sent");
    });
};
//# sourceMappingURL=index.js.map