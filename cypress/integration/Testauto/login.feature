Feature: Validate the login functionality

  Scenario: Validate the login page
    Given Open the login page
    When Update the username
    And Update the Password
    Then Click on login button
    And Validate the Dashboard