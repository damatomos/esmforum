Feature: Filter Notification

Scenario: Adm chooses reports by type
  Given Adm has several reports
  When the Adm chooses a report of "racism" type
  Then the Adm receive only reports of "racism type"