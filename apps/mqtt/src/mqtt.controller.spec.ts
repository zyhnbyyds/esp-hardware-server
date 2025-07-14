import { Test, TestingModule } from '@nestjs/testing'
import { MqttController } from './mqtt.controller'
import { MqttService } from './mqtt.service'

describe('mqttController', () => {
  let mqttController: MqttController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MqttController],
      providers: [MqttService],
    }).compile()

    mqttController = app.get<MqttController>(MqttController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mqttController.getHello()).toBe('Hello World!')
    })
  })
})
