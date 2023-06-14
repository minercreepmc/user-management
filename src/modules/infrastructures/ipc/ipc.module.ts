import {
  clientProxyDiToken,
  messageBrokerDiToken,
} from '@domain-interfaces/message-broker.port';
import { Module, Provider } from '@nestjs/common';
import { MessageBroker } from '@src/infrastructures/message-broker';
import { RmqModule } from './rmb';

const messageBrokers: Provider[] = [
  {
    provide: messageBrokerDiToken,
    useClass: MessageBroker,
  },
];

@Module({
  imports: [
    RmqModule.register({
      name: clientProxyDiToken,
    }),
  ],
  providers: [...messageBrokers],
  exports: [...messageBrokers],
})
export class IpcModule {}
