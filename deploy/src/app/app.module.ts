import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WallpaperComponent } from './components/wallpaper/wallpaper.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { TituloComponent } from './s-m-c/titulo/titulo.component';
import { DescripcionComponent } from './s-m-c/descripcion/descripcion.component';
import { RedesSocialesComponent } from './s-m-c/redes-sociales/redes-sociales.component';
import { MusicBarComponent } from './s-m-c/music-bar/music-bar.component';
import { MasDeMiComponent } from './s-m-c/mas-de-mi/mas-de-mi.component';
import { NombreComponent } from './components/nombre/nombre.component';
import { Titulo1Component } from './c-p/titulo1/titulo1.component';

@NgModule({
  declarations: [
    AppComponent,
    WallpaperComponent,
    SobreMiComponent,
    HabilidadesComponent,
    ProyectosComponent,
    TituloComponent,
    DescripcionComponent,
    RedesSocialesComponent,
    MusicBarComponent,
    MasDeMiComponent,
    NombreComponent,
    Titulo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
