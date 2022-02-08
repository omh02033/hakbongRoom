import App from "./app";
import "./config/env";

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

if(!process.env.DATABASE_HOST) {
    console.log('env configuration required.');
} else {
    App.listen(process.env.WEB_PORT, () => { console.log('Connected'); });
}