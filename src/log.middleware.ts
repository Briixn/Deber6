//import {ExpressMiddleware, NestMiddleware} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {Middleware} from "@nestjs/common/utils/decorators/component.decorator";
import {ExpressMiddleware} from "@nestjs/common/interfaces/middlewares/express-midleware.interface";
import {Get, NestMiddleware} from "@nestjs/common";
const lg = require('fs')
@Middleware()
export class LogMiddleware implements NestMiddleware {

    constructor(private _usuarioService: UsuarioService) {
    }

    resolve(nombre: string, anio: number): ExpressMiddleware {

        return (request, response, next) => {
            console.log('**** NOMBRE Y ANIO', nombre, anio, this._usuarioService.arregloUsuarios);


            const respuesta = {
                baseUrl: request.baseUrl,
                hostname: request.hostname,
                subdomains: request.subdomains,
                ip: request.ip,
                method: request.method,
                originalUrl: request.originalUrl,
                path: request.path,
                protocol: request.protocol,
                headers: request.headers,
            };

            var cookie = request.cookies.Cookienueva
            if (cookie === undefined)
            {
                
                var idcookie=Math.random().toString()+respuesta.ip+respuesta.baseUrl;
                idcookie=idcookie.substring(2,idcookie.length);
                response.cookie('cookieNueva',idcookie, { maxAge: 900000 });
                console.log('NO EN CACHE....creando cookie...');
                var log = lg.appendFile(
                    __dirname + '/LOG/log.txt',
                    "BaseUrl:"+respuesta.baseUrl+"\n" +
                    "hostname:"+respuesta.hostname+"\n" +
                    "subdomains:"+respuesta.subdomains+"\n" +
                    "ip:"+respuesta.ip+"\n" +
                    "method:"+ respuesta.method+"\n" +
                    "originalUrl:"+ respuesta.originalUrl+"\n" +
                    "path:"+ respuesta.path+"\n" +
                    "protocol:"+ respuesta.protocol+"\n" +
                    "headers:"+ respuesta.headers+"\n"+
                    "Valor Cookie"+idcookie,
                    error => {
                        if (error)  console.log(error);
                        console.log('Guardado txt!');
                        console.log(log)
                    }
                );
            }
            else
            {
                console.log('YA EN CACHE', cookie);
               // console.log(log)
            }
            console.log(respuesta);
            console.log(lg.readFileSync(__dirname + '/LOG/log.txt','utf8'))
            next();

        }

        }


}


