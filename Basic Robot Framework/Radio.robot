*** Settings ***
Resource    Base.robot
Test Setup    Start Test
Test Teardown    End Test

*** Test Cases ***
Working with Radio buttons
    Go To    ${url}/radios
    Select Radio Button    movies    cap
    Radio Button Should Be Set To    movies    cap