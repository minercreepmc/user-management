"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("../config/swagger");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_2 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const fs = require("fs");
const path = require("path");
const rmb_1 = require("./modules/infrastructures/ipc/rmb");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const document = swagger_2.SwaggerModule.createDocument(app, swagger_1.swaggerOption);
        swagger_2.SwaggerModule.setup('docs', app, document);
        const swaggerSpecPath = path.join(process.cwd(), 'config/swagger/swagger.json');
        fs.writeFileSync(swaggerSpecPath, JSON.stringify(document));
        app.useGlobalPipes(new common_1.ValidationPipe({
            forbidUnknownValues: false,
        }));
        const rmqService = app.get(rmb_1.RmqService);
        app.connectMicroservice(rmqService.getOptions());
        app.enableCors();
        yield app.listen(3000);
        yield app.startAllMicroservices();
    });
}
bootstrap();
//# sourceMappingURL=main.js.map