Feature: Login Page

    Scenario: Login using valid credentials
        Given I am an unauthenticated user viewing the login page
        When I log in using my email and password
        Then I am redirected the Account Dashboard