//import {Component, Component} from "@nestjs/common";
import {Component} from "@nestjs/common/utils/decorators/component.decorator";

@Component()
export class UsuarioService {
    arregloUsuarios: Usuario[] = [];

    agregarUsuario(usuario: Usuario) {
        this.arregloUsuarios.push(usuario);
        return this.arregloUsuarios;
    }




    borrarUsuario(usuario: Usuario) {
        const indice = this.arregloUsuarios
            .findIndex(
                (usuarioObjeto) => usuarioObjeto === usuario);

        this.arregloUsuarios.slice(indice, 1);
        return this.arregloUsuarios;
    }

}

export class Usuario {
    constructor(public nombre: string,
                public apellido: string,
                public edad: number) {

    }
}


