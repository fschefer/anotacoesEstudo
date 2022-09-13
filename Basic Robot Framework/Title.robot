*** Settings ***
Resource    Base.robot
Test Setup    Start Test
Test Teardown    End Test

*** Test Cases ***
Validating page title
    Go To    ${url}/
    Title Should Be    Training Wheels Protocol
