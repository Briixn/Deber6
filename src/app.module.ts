import {Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AppFaqControlador} from "./app.faq-controlador";
import {AppInicioControlador} from "./app.inicio-controlador";
import {UsuarioService} from "./usuario.service";
import {MiddlewaresConsumer} from "@nestjs/common/interfaces/middlewares";
import {LogMiddleware} from "./log.middleware";
import {PreguntasFrecuentesBdd} from "./PreguntasFrecuentes";

@Module({
  imports: [],
  controllers: [AppController, AppFaqControlador,AppInicioControlador],
  providers: [UsuarioService,PreguntasFrecuentesBdd],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(LogMiddleware)
            .with('EPN', 2018)
            .forRoutes(
                AppFaqControlador,
                AppController,
                AppInicioControlador
            );
    }
}

