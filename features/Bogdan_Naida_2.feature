Feature: Contact Us
  Anyone who has question wants to ask it.

  Rule: User could submit "Contact US" form, only if required fields are completed.

    Background:
      Given User has opened Contact Us page at EPAM's website


    Scenario Outline: user tries to submit form with any uncompleted required field
      Given there are uncompleted <name> field in the form
      When I clicks Submit button
      Then <name> field's border color becomes red colored

      Examples:
        |name|
        |FIRST NAME|
        |LAST NAME|
        |EMAIL|
        |PHONE|

    Scenario: user tries to submit form with unchecked required tick
      Given there are unchecked I consent my personal information tick
      When I clicks Submit button
      Then I consent my personal information tick's border becomes Red colored