*** Settings ***
Resource        Base.robot
Test Setup        Start Test
Test Teardown        End Test

*** Test Cases ***
Selecting from a dropdown menu by text
    Go To    ${url}/dropdown
    Select From List By Label    class:avenger-list    Tony Stark

Selecting by value
    Go To    ${url}/dropdown
    Select From List By Value    id:dropdown    6
