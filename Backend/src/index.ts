import App from "./app";
import "./config/env";
import { serverSocket } from "./socket";

declare global {
    namespace Express {
        interface Request {
            auth: {
                userId: string,
                roleId: string,
                identity: any
            }
        }
    }
}

if(!process.env.DATABASE_HOST) console.log('env configuration required.');
else {
    const httpServer = App.listen(process.env.WEB_PORT, () => {
        console.log("Connected");
    });
    serverSocket(httpServer);
}