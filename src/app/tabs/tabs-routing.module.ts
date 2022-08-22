import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'tab1/info',
        loadChildren: () => import('../info/info.module').then(m => m.InfoPageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'tab1/page2',
        loadChildren: () => import('../page2/page2.module').then(m => m.Page2PageModule)
      },
      {
        path: 'tab2/chest',
        loadChildren: () => import('../chest/chest.module').then(m => m.ChestPageModule)
      },
      {
        path: 'tab2/back',
        loadChildren: () => import('../back/back.module').then(m => m.BackPageModule)
      },
      {
        path: 'tab2/shoulders',
        loadChildren: () => import('../shoulders/shoulders.module').then(m => m.ShouldersPageModule)
      },
      {
        path: 'tab2/arms',
        loadChildren: () => import('../arms/arms.module').then(m => m.ArmsPageModule)
      },
      {
        path: 'tab2/legs',
        loadChildren: () => import('../legs/legs.module').then(m => m.LegsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
