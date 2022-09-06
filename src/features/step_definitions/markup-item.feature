Feature: Markup Item (Question/Answer ref other Question/Answer)

Scenario: User make a question
  Given the User ask a question about json
  When the User link with another question about "java"
  Then the your question references the question about "java"