import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from 'app/app.component';
import {
  PageNotFoundComponent,
  RegisterComponent,
  IslandsComponent,
  WelcomeComponent,
  LoginComponent,
  TestComponent
} from 'app/views';
import { AuthService } from 'app/services/auth.service';
import { UserGuard } from 'app/services/user.guard';
import { TestGuard } from 'app/services/test.guard';
import { IslandsGuard } from 'app/services/islands.guard';
import { ExitButtonComponent } from 'app/components/exit-button/exit-button.component';
import { CountingComponent } from './games/counting/counting.component';
import { LogicalSerieComponent } from 'app/games/logical-serie/logical-serie.component';
import { ShoppingComponent } from './games/shopping/shopping.component';
import { OneComponent } from 'app/views/islands/one/one.component';
import { TwoComponent } from 'app/views/islands/two/two.component';
import { ThreeComponent } from 'app/views/islands/three/three.component';
import { GameShoppingComponent } from './views/game-shopping/game-shopping.component';
import { GameCountingComponent } from './views/game-counting/game-counting.component';
import { GameLogicalComponent } from './views/game-logical/game-logical.component';

const appRoutes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'test',
    component: TestComponent,
    canActivate: [TestGuard]
  },
  {
    path: 'islands',
    component: IslandsComponent,
    canActivate: [IslandsGuard]
  },
  {
    path: 'island/1',
    component: OneComponent,
    canActivate: [IslandsGuard]
  },
  {
    path: 'island/2',
    component: TwoComponent,
    canActivate: [IslandsGuard]
  },
  {
    path: 'island/3',
    component: ThreeComponent,
    canActivate: [IslandsGuard]
  },
  {
    path: 'game/shopping',
    component: GameShoppingComponent,
    canActivate: [IslandsGuard]
  },
  {
    path: 'game/counting',
    component: GameCountingComponent,
    canActivate: [IslandsGuard]
  },
  {
    path: 'game/logical-serie',
    component: GameLogicalComponent,
    canActivate: [IslandsGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    PageNotFoundComponent,
    RegisterComponent,
    WelcomeComponent,
    IslandsComponent,
    LoginComponent,
    TestComponent,
    AppComponent,
    ExitButtonComponent,
    CountingComponent,
    LogicalSerieComponent,
    ShoppingComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    GameShoppingComponent,
    GameCountingComponent,
    GameLogicalComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  providers: [AuthService, UserGuard, TestGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
