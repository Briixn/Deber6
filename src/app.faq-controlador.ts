import {Body, Controller, Get, HttpCode, Param, Post} from "@nestjs/common";
import {PreguntasFrecuentes, PreguntasFrecuentesBdd} from "./PreguntasFrecuentes";

const fsl = require('fs');



@Controller('faq')
export class AppFaqControlador {
constructor(public faqs:PreguntasFrecuentesBdd){}

   @Post('anadirFAQ')
    @HttpCode(203)
    anadirFAQ(
        @Body() bodyParams
    ) {
        const faq = new PreguntasFrecuentes(bodyParams.pregunta, bodyParams.respuesta);

        return this.faqs.agregarFAQ(faq);

    }

    @Get('mostrarFAQ')
    mostrarFAQ() {

        let html = fsl.readFileSync(
            __dirname + '/html/faq.html',
            'utf8'
        );

       // for(var _i =0; _i< this.faqs.arregloFAQ.length; _i++) {
            html = html.replace('{{P}}', "pregunta")//this.faqs.arregloFAQ.find(_i).pregunta)
            html = html.replace('{{R}}', 'respondida')
      //  }
        return html;

    }


}

