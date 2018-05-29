import {} from "@nestjs/common";
import {Component} from "@nestjs/common/utils/decorators/component.decorator";

@Component()
export class  PreguntasFrecuentesBdd {
    arregloFAQ: PreguntasFrecuentes[] = [];

    agregarFAQ(preguntaFrecuente: PreguntasFrecuentes) {
        this.arregloFAQ.push(preguntaFrecuente);
        return this.arregloFAQ;
    }

}
    export class PreguntasFrecuentes {
    constructor(public _pregunta: string,
                public _respuesta: string) {

    }


        get pregunta(): string {
            return this._pregunta;
        }

        set pregunta(value: string) {
            this._pregunta = value;
        }

        get respuesta(): string {
            return this._respuesta;
        }

        set respuesta(value: string) {
            this._respuesta = value;
        }
    }
