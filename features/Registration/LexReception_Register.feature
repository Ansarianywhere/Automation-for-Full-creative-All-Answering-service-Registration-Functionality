Feature: Registration functionlity for LexReception

  Scenario: Register in LexReception with valid data  
      Given I am on the home page and  I Navigate to the Register page
      When  I set the value for All mandantory fields
      Then  I click the choose plan Button and verify the given details
      