## Angular + Typescript training

### Prerequisites
#### Node.JS
Install in version 8.x or 10.x
#### Angular CLI
```
npm install -g @angular/cli@7.2.2
```

### Step 0 - Project initialization
```
ng new training
```
### Step 1 - Adding UI library
#### Install
```
ng add @angular/material@7.2.2
```
#### Using component
1. Add component module in imports array of a module
   ``` 
   imports: [..., MatButtonModule, ...] 
   ```
2. Add component in html file
   ``` 
   <button mat-button></button> 
   ```

### Step 2 - Adding library without @types
```
npm install --save lodash@4.17.1
```
#### Usage
```
import * as _ from 'lodash';
```

### Step 3 - Routing
#### Create home and users components
```
ng generate component home
ng generate component users
```
#### Add routes in AppModule
```
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];
...
imports: [..., RouterModule.forRoot(routes), ...]
```
### Step 4 - Users module fetching data
#### Installation
```
npm install -g json-server 

// To run json-server
json-server db.json
```
1. Create 'users' module
   ```
   ng generate module users
   ```
2. Move users component to the module
3. Correct imports for AppModule and UsersModule
4. Create 'users' service
5. Create 'User' model with properties 'name' and 'email'
6. Implement getUsers method of service
7. Use service in UsersComponent
### Step 5 - Create user form
1. Import ReactiveFormsModule in UsersModule
2. Create create-user component inside UsersModule it's gonna be our 'dump component' with user form
   ```
   ng g c create-user
   ```
3. Import form builder in create-component
   ```
   constructor(private fb: FormBuilder) {}
   ```
4. Build form with 'name' and 'email' fields. Use build-in validators
   ```
   ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.email]],
    });
   }
   ```
5. Disable submit button if form is invalid
6. Prepare create user emitter from create-user component
   ```
    @Output('new-user')
    userEmitter: EventEmitter<User> = new EventEmitter();
   ```
7. Implement form submit from the component to the service
   ```
    (ngSubmit)="emitUser()"
   ```
8. Reset form and update users list after successful POST request
