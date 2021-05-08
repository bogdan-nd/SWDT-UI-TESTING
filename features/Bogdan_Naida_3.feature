Feature: navbar
  Every website's visitor uses navbar for surfing the website.

  Background:
    Given I have opened the main page

  Scenario: user changes website language
    When I click on language selection button
    And I choose Ukrainian
    Then I see main page on Ukrainian

  Scenario: user visits "Insights" page
    When I clicks Insights page
    Then Insights page opens

