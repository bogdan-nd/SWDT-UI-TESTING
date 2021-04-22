Feature: Job search

  Background:
    Given user has hovered the cursor over "Careers" nav
    And user has clicked "Search jobs" button

  Scenario: user searches the job in Los Angeles
    Given I have selected Los Angeles, CA as Location
    When I clicks "Find" button
    Then I should see only LA, CA,US or remote offers.

  Scenario: user searches remote job
    Given I have checked the "Open to Relocation" button
    When I clicks "Find" button
    Then I should see only remote offers.