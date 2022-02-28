import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AgregarComponent } from "./agregar/agregar.component";
import { DbzService } from "./dbz.service";



import { MainPageComponent } from "./main-page/main-page.component";
import { PersonajesComponent } from "./personajes/personajes.component";


@NgModule({
    declarations: [
        MainPageComponent,
        PersonajesComponent,
        AgregarComponent,
    ],
    exports: [
        MainPageComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    providers: [
        DbzService,
    ]
})
export class DbzModule{}