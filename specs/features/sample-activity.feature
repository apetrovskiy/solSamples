Feature: sample e2e

    Scenario: a new account's activity
        Given a new user registers in Ethereum
        When user sends Eth
        Then the recipient has balance increased
        And the sender has balance decreased
