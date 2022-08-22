import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    runGuardsAndResolvers: 'always'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-note',
    loadChildren: () => import('./add-note/add-note.module').then( m => m.AddNotePageModule)
  },
  {
    path: 'edit-note',
    redirectTo: 'add-note',
    pathMatch: 'full'
  },
  {
    path: 'tabs/tab1/info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule),
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'tabs/tab2/page2',
    loadChildren: () => import('./page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'tabs/tab2/chest',
    loadChildren: () => import('./chest/chest.module').then( m => m.ChestPageModule)
  },
  {
    path: 'tabs/tab2/back',
    loadChildren: () => import('./back/back.module').then( m => m.BackPageModule)
  },
  {
    path: 'shoulders',
    loadChildren: () => import('./shoulders/shoulders.module').then( m => m.ShouldersPageModule)
  },
  {
    path: 'arms',
    loadChildren: () => import('./arms/arms.module').then( m => m.ArmsPageModule)
  },
  {
    path: 'legs',
    loadChildren: () => import('./legs/legs.module').then( m => m.LegsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'calc',
    loadChildren: () => import('./calc/calc.module').then( m => m.CalcPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
