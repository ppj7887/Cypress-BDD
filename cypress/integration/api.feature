Feature: Validate all API

    Validate GET, POST, PUT and DELETE API

    Scenario: GET user API
        Given   Send GET request
        Then Userlist should be displayed

      Scenario Outline: Create User
        Given User sent POST request to create multiple user with "<name>" and "<job>"
        Then Users should be created with "<name>" and "<job>"
     Examples:
            | name    | job      |
            | Sarika  | Soft_Eng |
            | Chinmay | TL       |
            | Mahesh  | QA       |
