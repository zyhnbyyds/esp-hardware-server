import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { MqttModule } from './mqtt.module'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(MqttModule, {
    transport: Transport.MQTT,
    options: {
      url: 'mqtt://localhost:1883',
    },
  })

  await app.listen()
}
bootstrap()
