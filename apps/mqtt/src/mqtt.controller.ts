import { Controller, Get } from '@nestjs/common'
import { MqttService } from './mqtt.service'

@Controller()
export class MqttController {
  constructor(private readonly mqttService: MqttService) {}

  @Get()
  getHello(): string {
    return this.mqttService.getHello()
  }
}
