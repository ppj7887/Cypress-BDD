Feature: Validate the login page for practice automation

  # Scenario: Validate the page
  #   Given Open the login2 page
  #   When Update the username1 and password1
  #   |Username       |Password|
  #   |sarika@test.com|@Minskole12|
    
  #   Then Click on login button2
  #   And Validate the Dashboard2

   Scenario Outline: Validate the practice automation login
    Given Open the login page2
    When Enter the "<Username>" and "<Password>"
    
    Then Click on login buttons
    And Validate the Dashboard details

    Examples:
            | Username        | Password    |
            | sarika@test.com | @Minskole12 |
            | gauri@test.com  | 12Minskole@ |
            | pratik@test.com | @Minskole12 |