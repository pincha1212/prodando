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
import { Titulo2Component } from './c-h/titulo2/titulo2.component';
import { SkillsComponent } from './c-h/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CurriculumComponent } from './s-m-c/curriculum/curriculum.component';
import { TarjetasComponent } from './c-p/tarjetas/tarjetas.component';

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
    Titulo1Component,
    Titulo2Component,
    SkillsComponent,
    CurriculumComponent,
    TarjetasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
