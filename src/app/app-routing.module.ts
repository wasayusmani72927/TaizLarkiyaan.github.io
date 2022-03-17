import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarosoulPageComponent } from './carosoul-page/carosoul-page.component';
import { EssentialArtifactsComponent } from './essential-artifacts/essential-artifacts.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PuzzlePageComponent } from './puzzle-page/puzzle-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {
    path: 'homepage',
    component: HomePageComponent,
  },
  {
    path: 'carosol',
    component: CarosoulPageComponent,
  },
  {
    path: 'artifacts',
    component: EssentialArtifactsComponent,
  },
  {
    path: 'puzzle',
    component: PuzzlePageComponent,
  },
  
];

export const routing: ModuleWithProviders<unknown> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
