# Angular PIFSS UI Components

This project contains a modern Angular 17 component library built with Tailwind CSS. All components are **standalone**, **signal-based**, and **lightweight**, offering flexibility and reactive state management for your UI needs.

## 📦 Installation

1. Clone the repo:

```bash
git clone https://github.com/HAlGhanim/Angular-PIFSS-Components.git
cd Angular-PIFSS-Components
```

2. Install dependencies:

```bash
npm install
```

3. Run the app to test all components:

```bash
ng serve
```

---

## ✅ Usage Examples

### 🔤 Input

**app.component.ts**

```ts
name = "";
```

**app.component.html**

```html
<app-input label="Name" type="text" [value]="name" (valueChange)="name = $event" customClass="w-64" />
```

---

### 📝 Textarea

**app.component.ts**

```ts
comment = "";
```

**app.component.html**

```html
<app-textarea label="Comment" placeholder="Write here..." [value]="comment" (valueChange)="comment = $event" customClass="w-96" />
```

---

### 🔽 Dropdown

**app.component.ts**

```ts
dropdownOptions = ["One", "Two", "Three"];
selectedOption = "";
```

**app.component.html**

```html
<app-dropdown label="Select Option" [options]="dropdownOptions" [value]="selectedOption" (valueChange)="selectedOption = $event" customClass="w-64" />
```

---

### 🔘 Radio Group

**app.component.ts**

```ts
radioOptions = ["Male", "Female"];
gender = "";
```

**app.component.html**

```html
<app-radio [options]="radioOptions" [value]="gender" (valueChange)="gender = $event" customClass="w-64" />
```

---

### ☑ Checkbox

**app.component.ts**

```ts
accepted = false;
```

**app.component.html**

```html
<app-checkbox label="Accept Terms" [checked]="accepted" (checkedChange)="accepted = $event" />
```

---

### 🔁 Toggle

**app.component.ts**

```ts
notifications = false;
```

**app.component.html**

```html
<app-toggle [enabled]="notifications" (enabledChange)="notifications = $event" />
```

---

### 🗓 Date Picker

**app.component.ts**

```ts
dob = "";
```

**app.component.html**

```html
<app-date-picker [value]="dob" (valueChange)="dob = $event" />
```

---

### 🕒 Time Picker

**app.component.ts**

```ts
startTime = "";
```

**app.component.html**

```html
<app-time-picker [value]="startTime" (valueChange)="startTime = $event" />
```

---

### 📊 Table

**app.component.ts**

```ts
tableHeaders = ["Name", "Age"];
tableRows = [
  ["Alice", "30"],
  ["Bob", "25"],
];
```

**app.component.html**

```html
<app-table [headers]="tableHeaders" [rows]="tableRows" />
```

---

### 🧱 Grid

**app.component.ts**

```ts
gridItems = ["Card 1", "Card 2", "Card 3"];
```

**app.component.html**

```html
<app-grid [items]="gridItems" />
```

---

### 💳 Card

```html
<app-card title="Dashboard">
  <p>Welcome to the card content slot!</p>
</app-card>
```

---

### 🔘 Button

```html
<app-button label="Submit" type="button" />
```
