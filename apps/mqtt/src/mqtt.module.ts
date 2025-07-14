import { Module } from '@nestjs/common';
import { MqttController } from './mqtt.controller';
import { MqttService } from './mqtt.service';

@Module({
  imports: [],
  controllers: [MqttController],
  providers: [MqttService],
})
export class MqttModule {}
