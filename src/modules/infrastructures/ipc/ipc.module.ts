//import { messageBrokerDiToken } from '@domain-interfaces';
import { Module } from '@nestjs/common';
import { RmqModule } from './rmb';
//import { MessageBroker } from '@src/infrastructures/message-broker';

// const messageBrokers: Provider[] = [
//   {
//     provide: messageBrokerDiToken,
//     useClass: MessageBroker,
//   },
// ];

@Module({
  imports: [
    RmqModule.register([
      {
        name: 'user-message-broker',
      },
    ]),
  ],
  //providers: [...messageBrokers],
  //exports: [...messageBrokers],
})
export class IpcModule {}
