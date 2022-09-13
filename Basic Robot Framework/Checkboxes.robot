*** Settings ***   
Resource    Base.robot
Test Setup    Start Test
Test Teardown     End Test   

*** Test Cases ***
Validating checkboxes
    Go To    ${url}/checkboxes
    Select Checkbox    id:thor    
    Checkbox Should Be Selected    id:thor
    

Using other elements
    Go To    ${url}/checkboxes
    Select Checkbox    css: input[value=cap]
    Checkbox Should Be Selected    css: input[value=cap]