# Portfolio

## Components

- About
- GitHub Overview
- Skills
- Education
- Work

---

## Edit

To edit the project, replace the values in **_portoflio > src > data_** directory.

### About

- NAME = Your name, which will be displayed on top of the about section (String).
- TITLES = Your titles (Array of Strings).
- EMAIL = Your email address (String)
- CONTACT
  - FACEBOOK = Facebook profile link (String)
  - TWITTER = Twitter profile link (String)
  - LINKEDIN = LinkedIn profile link (String)
  - GITHUB = GitHub profile link (String)

---

### GitHub Overview

- username = Your GitHub username (String)
  > Changing **username** will automatically change below values.
- I1DARK = GitHub stats dark
- I2LIGHT = GitHub stats light
- I2DARK = Most used languages dark
- I2LIGHT = Most used languages light

---

### Skills

- TECHSKILLS = Skills and Skill levels (JSON array) \* JSON Format,
  _[
  {type : "Skill", level : 90},
  {type : "Skill", lebel : 80}
  ]_

> **level** can be any value between 0 - 100

---

### Education

- EDU = List of institutes/schools/universities (JSON array)
  - JSON format,
    _[
    {school : "School Name (String)", from : "From Date (String)", to : "To Date (String)"},
    {school : "School Name (String)", from : "From Date (String)", to : "To Date (String)"}
    ]_

---

### Work

- WORK = List of work places (JSON array)
  - JSON format,
    _[
    {company : "Company Name (String)", title: "Job title (String)", from : "From Date (String)", to : "To Date (String)"},
    {company : "Company Name (String)", title: "Job title (String)", from : "From Date (String)", to : "To Date (String)"},
    ]_

---

## Installation

- Pull the repository into your computer.
- Download node modules using `npm install`

---

## Run

- Run the application using `npm start`
- Deploy the application to GH Pages using `npm run deploy`

---

> ### Note:
>
> The application is configured to run on port 3000.
> To use the application, open http://localhost:3000 from your web browser.
