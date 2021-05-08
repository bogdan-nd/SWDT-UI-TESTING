Feature: Job search

  Background:
    Given user have opened Careers page

  Scenario: user searches the job as React Developer
    Given I have typed React keyword
    When I clicks Find button
    Then I should see offers.

  Scenario: user searches job without preferences.
    Given I have cleared keyword input.
    When I clicks Find button
    Then I should see offers.