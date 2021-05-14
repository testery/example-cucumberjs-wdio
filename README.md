# example-cucumberjs-wdio
[Cucumber](https://cucumber.io/)
[WebdriverIO](https://webdriver.io/)

## Package(s)
Packages used are defined in [`/e2e/package.json`](/e2e/package.json).

## Design Pattern(s)
[BDD (Behaviour Driven Development)](https://en.wikipedia.org/wiki/Behavior-driven_development) </br>
[Fluent Interface](https://en.wikipedia.org/wiki/Fluent_interface) </br>
[POM (Page Object Model)](https://www.selenium.dev/documentation/en/guidelines_and_recommendations/page_object_models/) </br>

## Quick Start Guide
Watch our Quick Start Guide walkthrough on YouTube. The video is ~ 2 minutes.
[![Screenshot](/quick-start-guide.png)](https://www.youtube.com/watch?v=JStE_tMkJUQ)

## Test Writers - One Time Setup

### Download and Install Packages
1. Download and install the "LTS" version of [NodeJs](https://nodejs.org/en/)
1. Clone this repo
1. Open the [`e2e`](/e2e) folder in [VS Code](https://code.visualstudio.com/)
   * You can create a desktop shortcut using this [StackOverflow answer](https://stackoverflow.com/a/64604955/15481676)
1. Select "Terminal" > "New Terminal"
1. Type or paste in `npm install` and then press [Enter]

### Create a .env File Locally
Note: The `.env` ("dot e-n-v") will contain user secrets so will be `.gitignored` and never checked in.
1. Open the [`e2e`](/e2e) folder in [VS Code](https://code.visualstudio.com/)
1. Right-click in the empty space of the 'Explorer' pane in VS Code and then select 'New File'
1. Type in `.env` and then press [Enter]
1. Double-click the new file and paste in the following:
   ```
   TEST_WEB_URL="https://the-internet.herokuapp.com"
   TEST_USER="tomsmith"
   TEST_PASS="SuperSecretPassword!"
   ```
   * Note that the above template might be out-of-date, please check with your team lead and peers
1. Make the necessary changes and save the file

### Run All Feature Files
1. (If not already open) Select "Terminal" > "New Terminal"
1. Type or paste in `npm test` and then press [Enter]
   * This is wired up in `package.json > "scripts" > "test"`

### Run Feature File(s) by Name
1. (If not already open) Select "Terminal" > "New Terminal"
1. Type or paste in `npm test -- --spec {featureName}` and then press [Enter]
   * For example, `npm test -- --spec login` will run any/all .feature files (specs) with `login` in the file name  

## Writing Tests
Watch our Writing Your First Test walkthrough on YouTube. The video is ~ 14 minutes.
[![Screenshot](/writing-your-first-test.png)](https://www.youtube.com/watch?v=XU2Q813VVy4)

## Account Admin - One Time Setup

### Setup Project in Testery Web App
[Prerequisite] You must have a Testery account.
1. Login to [Testery](https://testery.app/login)
1. Select "Projects" from the navigation menu
1. Select the "Add New Project" button at the top-left
1. Fill out the project information and save
   * Here are the values when using the `example-cucumberjs-wdio` repo:
     1. Name: `Example CucumberJS WDIO`
     1. Key: `example-cucumberjs-wdio`
     1. Description: `An example test framework comprised of CucumberJS and WebDriverIO.`
     1. Does this project contain tests you will run on Testery?: `No`
     1. Directory containing your package.json (relative to repo root): `e2e`
     1. Default Branch: `main`
     1. Known Tags: {leave empty}
     1. Testing Framework: `WebDriverIO`
     1. Is your package.json in the root directory of your repo?: `Yes`
     1. Location of your WebDriver config relative to your project root: `wdio.conf.js`
     1. Default Number of Parallel Tests: `5`
     2. Test Run Timeout (minutes): `180`
     3. Test Timeout (seconds): `300`
     4. Retry Failed Tests: `Yes`
     5. Are screenshot names outputted to test output?: `Yes`

### Setup Environment(s) in Testery Web App
1. Select "Environments" from the navigation menu
1. Fill out the environment information and save
   * Here are the values when using the `example-cucumberjs-wdio` repo:
     1. Name: `Heroku`
     1. Key: `heroku`
     1. Environment URL: `https://the-internet.herokuapp.com`
     1. Pipeline Stage: `Dev`
     1. Add Varaible(s):
        | Name           | Value                                | Encrypted |
        | -------------- | ------------------------------------ | --------- |
        | `TEST_WEB_URL` | `https://the-internet.herokuapp.com` | no        |
        | `TEST_USER`    | `tomsmith`                           | no        |
        | `TEST_PASS`    | `SuperSecretPassword!`               | yes       |

### Run Tests in Testery Web App
1. Select "Test Runs" from the navigation menu
1. Select the "New Test Run" button at the top-right
1.Fill out the test run information
   * Here are the values when using the `example-cucumberjs-wdio` repo:
     1. Project With Tests: `Example CucumberJS WDIO (example-cucumberjs-wdio)`
     1. Environment To Run Tests Against: `Heroku`
     1. Schedule: `Run Now`
     1. Branch: `main`
     1. Commit: `latest`
     1. Leave the "filters" empty
     1. Unselect "Follow Test Run"
1. Select "Run Test"
