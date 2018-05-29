
import {Get, Controller, Post, Body, HttpCode} from '@nestjs/common';
import {Usuario, UsuarioService} from "./usuario.service"
import {readFile, readFileSync} from "fs";
const fs = require('fs');


@Controller('inicio')
export class AppInicioControlador {
    constructor(private _usuarioService: UsuarioService) {

    }


    @Get('uniendo')
    @HttpCode(200)
    root() {
        console.log('Entro al metodo');
        let datosArchivo;

        var html = fs.readFileSync(
            __dirname + '/HTML/contenido.html',
            'utf8'
        );
        html = html.replace('{{variable}}', "Todo ha salido biennnnnnnnnnnnnnnnn");
        html = html.replace('{{variable2}}', "con el controlador Inicio");


        let html2 = fs.readFileSync(
            __dirname + '/HTML/header.html',
            'utf8'
        );
        let html3 = fs.readFileSync(
            __dirname + '/HTML/footer.html',
            'utf8'
        );


        html = html2 + html + html3;

        return html



    }






    @Post('anadirUsuario')
    anadirUsuario(
        @Body() bodyParams
    ) {
        const usuario = new Usuario(bodyParams.nombre, bodyParams.apellido, bodyParams.edad);

        return this._usuarioService.agregarUsuario(usuario);
    }
}
