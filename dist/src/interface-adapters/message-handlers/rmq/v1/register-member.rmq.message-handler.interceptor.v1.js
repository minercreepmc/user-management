"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterMemberRmqMessagehandlerInterceptor = void 0;
class RegisterMemberRmqMessagehandlerInterceptor {
    intercept(context, next) {
        return next.handle().pipe(map(result => {
            const ctx = context.switchToRpc().getContext();
            const channel = ctx.getChannelRef();
            const originalMessage = ctx.getMessage();
            channel.ack(originalMessage);
            return result;
        }));
    }
}
exports.RegisterMemberRmqMessagehandlerInterceptor = RegisterMemberRmqMessagehandlerInterceptor;
//# sourceMappingURL=register-member.rmq.message-handler.interceptor.v1.js.map