import { Routes } from "@angular/router";
import { CategoriasComponent } from "./categorias/categorias.component";
import { HomeComponent } from "./home/home.component";
import { SobreComponent } from "./sobre/sobre.component";


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path:'sobre', component:SobreComponent},
  {path:'categorias', component:CategoriasComponent},


];