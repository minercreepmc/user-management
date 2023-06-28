"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultInterceptor = void 0;
const rxjs_1 = require("rxjs");
class ResultInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.map)((result) => {
            const ctx = context.switchToRpc().getContext();
            const channel = ctx.getChannelRef();
            const originalMessage = ctx.getMessage();
            channel.ack(originalMessage);
            return result;
        }));
    }
}
exports.ResultInterceptor = ResultInterceptor;
//# sourceMappingURL=result-interceptor.js.map