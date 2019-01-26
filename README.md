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
