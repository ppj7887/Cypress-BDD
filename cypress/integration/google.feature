Feature: Google Main Page

  I want to open a search engine
  

  Scenario: Opening a search engine page
    Given I open Google page
    Then I see "Google" in the title

    Scenario: Opening amazon shopping page
    Given I want to open Amazon page
    Then I see "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in" in the title

    