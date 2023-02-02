Feature: Validate the login page for practice automation site

    Scenario Outline: Validate the practice automation site for login
        Given Visit the practice automation site
        When Type the "<username>" and "<password>"
        And I Click on login button
        Then Validate the Dashboard for Login
        Examples:
            | username                   | password   |
            | prasad.jadhav001@gmail.com | Anshu@2708 |
            | teju@gmail.com             | Shine@8324 |