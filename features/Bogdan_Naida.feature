Feature: Our contacts
  Every job candidate wants to know where EPAM offices are located.

  Background:
    Given User has opened About page at EPAM's website

  Scenario: user opens CIS offices
    Given I open CIS offices
    When I swipe the list of the countries
    Then I shouldn't see Ukraine in this list.
  Scenario: user opens European offices
    Given I open offices, that are located in Europe
    When I swipe the list of the countries
    Then I should see Ukraine in this list.
